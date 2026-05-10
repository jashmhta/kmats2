import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SiteEffects() {
  const location = useLocation();
  const progressRef = useRef(null);

  useEffect(() => {
    let active = true;
    let observer;
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      import('@google/model-viewer').catch(() => {
        if (active) document.documentElement.classList.add('model-viewer-unavailable');
      });
    };
    const ensure = () => {
      const targets = Array.from(document.querySelectorAll('model-viewer'));
      if (!targets.length) return;
      if (!('IntersectionObserver' in window)) {
        load();
        return;
      }
      observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            load();
            obs.disconnect();
          }
        });
      }, { rootMargin: '600px' });
      targets.forEach((node) => observer.observe(node));
    };
    const timer = window.setTimeout(ensure, 200);
    return () => {
      active = false;
      window.clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const mount = () => {
      // Reveal everything immediately for SEO, screenshots, and reduced-motion users.
      // Subtle entrance animation only kicks in for elements scrolled into view *after*
      // initial paint, gated by the `js-reveal-anim` class.
      const revealNodes = Array.from(document.querySelectorAll('[data-reveal]'));
      revealNodes.forEach((node) => node.classList.add('is-visible'));

      const revealObserver = new IntersectionObserver(() => {}, { threshold: 0 });
      const safetyTimer = window.setTimeout(() => {}, 0);

      document.querySelectorAll('.faq-item').forEach((item) => {
        item.addEventListener('click', () => {
          document.querySelectorAll('.faq-item').forEach((other) => {
            if (other !== item) other.classList.remove('open');
          });
          item.classList.toggle('open');
        });
      });

      const modal = document.querySelector('.modal');
      const openModal = document.querySelector('[data-modal-open]');
      const closeModal = document.querySelector('.modal-close');
      const setModal = (open) => {
        modal?.classList.toggle('open', open);
        modal?.setAttribute('aria-hidden', String(!open));
        document.body.style.overflow = open ? 'hidden' : '';
      };
      openModal?.addEventListener('click', () => setModal(true));
      closeModal?.addEventListener('click', () => setModal(false));
      modal?.addEventListener('click', (event) => {
        if (event.target === modal) setModal(false);
      });

      const rotator = document.querySelector('.rotator-text');
      const slideLabel = document.querySelector('.slide-label b');
      let timer;
      if (!reduceMotion && rotator && slideLabel) {
        const rotatorItems = ['Solo-Built. Family-Backed.', 'World-ready AI and software systems', 'Education, automation, web, and startups'];
        let rotatorIndex = 0;
        timer = window.setInterval(() => {
          rotatorIndex = (rotatorIndex + 1) % rotatorItems.length;
          const animation = rotator.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-9px)' }], { duration: 180, easing: 'ease-out', fill: 'forwards' });
          animation.onfinish = () => {
            rotator.textContent = rotatorItems[rotatorIndex];
            slideLabel.textContent = String(rotatorIndex + 1);
            rotator.animate([{ opacity: 0, transform: 'translateY(9px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 260, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' });
          };
        }, 2600);
      }

      // GSAP Horizontal ScrollTrigger for card rails
      const hSections = Array.from(document.querySelectorAll('.gsap-h-section'));
      const hTriggers = [];
      if (!reduceMotion) {
        hSections.forEach((section) => {
          const wrapper = section.querySelector('.gsap-h-wrapper');
          const track = section.querySelector('.gsap-h-track');
          if (!wrapper || !track) return;
          const getScroll = () => Math.max(0, track.scrollWidth - wrapper.offsetWidth);
          const scrollDist = getScroll();
          if (scrollDist <= 0) return;

          const tween = gsap.to(track, {
            x: -scrollDist,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              end: () => `+=${getScroll()}`,
            },
          });
          hTriggers.push(tween.scrollTrigger);
        });
      }

      const horizontalRails = Array.from(document.querySelectorAll('.benefit-grid:not(.gsap-h-track), .content-grid, .article-grid, .template-grid, .membership-grid, .pricing-grid, .why-grid, .stats-grid')).filter((node) => node.children.length >= 4);
      horizontalRails.forEach((node) => {
        node.classList.add('horizontal-card-rail');
        node.setAttribute('data-horizontal-cards', 'true');
      });

      return () => {
        window.clearTimeout(safetyTimer);
        revealObserver.disconnect();
        if (timer) window.clearInterval(timer);
        hTriggers.forEach((st) => st?.kill());
        document.body.style.overflow = '';
      };
    };

    let cleanup;
    const frame = requestAnimationFrame(() => {
      cleanup = mount();
    });
    return () => {
      cancelAnimationFrame(frame);
      cleanup?.();
    };
  }, [location.pathname]);

  useEffect(() => {
    const header = document.querySelector('.site-header');
    const parallaxNodes = Array.from(document.querySelectorAll('[data-parallax]'));
    let lastScroll = window.scrollY;
    let lastDirectionChange = 0;
    const update = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      header?.classList.toggle('is-scrolled', window.scrollY > 80);
      const delta = window.scrollY - lastScroll;
      if (Math.abs(delta) > 6) {
        const goingDown = delta > 0;
        const shouldHide = goingDown && window.scrollY > 180 && !document.body.classList.contains('nav-open');
        if (performance.now() - lastDirectionChange > 80) {
          header?.classList.toggle('is-hidden', shouldHide);
          lastDirectionChange = performance.now();
        }
        lastScroll = window.scrollY;
      }
      document.documentElement.style.setProperty('--scroll-ratio', progress.toFixed(4));
      parallaxNodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = ((center - window.innerHeight / 2) / window.innerHeight) * -32;
        node.style.setProperty('--parallax-y', `${Math.max(-26, Math.min(26, offset)).toFixed(1)}px`);
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const orb = document.querySelector('.cursor-orb');
    if (reduceMotion || !orb || !window.matchMedia('(pointer: fine)').matches) return undefined;
    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let frame = 0;
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      orb.style.left = `${x}px`;
      orb.style.top = `${y}px`;
      frame = requestAnimationFrame(loop);
    };
    const move = (event) => {
      tx = event.clientX;
      ty = event.clientY;
      document.documentElement.style.setProperty('--spot-x', `${Math.round((event.clientX / window.innerWidth) * 100)}%`);
      document.documentElement.style.setProperty('--spot-y', `${Math.round((event.clientY / window.innerHeight) * 100)}%`);
      orb.style.opacity = '1';
    };
    window.addEventListener('mousemove', move, { passive: true });
    loop();
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}

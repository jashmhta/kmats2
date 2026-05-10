import { useEffect, useRef, useState } from 'react';
import kmatsMark from '../assets/images/kmats_mark.png';

const logoModelUrl = '/assets/kmats/brand/kmats-logo-3d.glb';

export function LogoModel() {
  const modelRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    let active = true;
    let observer;
    const load = () =>
      import('@google/model-viewer')
        .then(() => {
          if (active) setReady(true);
        })
        .catch(() => {
          if (active) setFailed(true);
        });
    const target = modelRef.current || document.querySelector('.logo-model');
    if (!target || !('IntersectionObserver' in window)) {
      load();
    } else {
      observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            load();
            obs.disconnect();
          }
        });
      }, { rootMargin: '500px' });
      observer.observe(target);
    }
    return () => {
      active = false;
      if (observer) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!media) return undefined;

    const updatePreference = () => setPrefersReducedMotion(media.matches);
    updatePreference();
    media.addEventListener('change', updatePreference);
    return () => media.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (!ready || !modelRef.current) return undefined;

    const model = modelRef.current;
    const handleLoad = () => setModelLoaded(true);
    const handleError = () => setFailed(true);
    model.addEventListener('load', handleLoad);
    model.addEventListener('error', handleError);
    if (model.loaded) handleLoad();

    return () => {
      model.removeEventListener('load', handleLoad);
      model.removeEventListener('error', handleError);
    };
  }, [ready]);

  if (failed) {
    return <img src={kmatsMark} alt="KMATS 3D mark fallback" className="hero-model-fallback" />;
  }

  return (
    <div className="logo-model" data-logo-model>
      <img
        src={kmatsMark}
        alt="KMATS 3D mark loading"
        className={`logo-model-fallback ${modelLoaded ? 'is-loaded' : ''}`}
      />
      {ready && (
        <model-viewer
          ref={modelRef}
          className="hero-model-viewer"
          src={logoModelUrl}
          poster={kmatsMark}
          alt="Interactive 3D KMATS logo"
          {...(!prefersReducedMotion ? { 'auto-rotate': true } : {})}
          rotation-per-second="20deg"
          camera-orbit="28deg 74deg 3.3m"
          field-of-view="28deg"
          exposure="1.08"
          shadow-intensity="0.18"
          shadow-softness="0.85"
          disable-zoom
          interaction-prompt="none"
          loading="eager"
          reveal="auto"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: modelLoaded ? 0.96 : 0,
            transition: 'opacity 700ms ease',
            '--poster-color': 'transparent',
            background: 'transparent',
          }}
        />
      )}
    </div>
  );
}

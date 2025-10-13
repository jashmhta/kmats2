import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Companies } from '../components/Companies';
import { Contact } from '../components/Contact';

export function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;

    const scroll = () => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Scroll on the next frame to ensure sections are rendered.
    requestAnimationFrame(() => {
      scroll();
      navigate(location.pathname, { replace: true, state: { preserveScroll: true } });
    });
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Companies />
      <Contact />
    </>
  );
}

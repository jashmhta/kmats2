import { useEffect, useState } from 'react';

export function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let finishTimer;
    const finish = () => {
      finishTimer = window.setTimeout(() => setHidden(true), 420);
    };
    if (document.readyState === 'complete') {
      finish();
      return () => window.clearTimeout(finishTimer);
    }
    window.addEventListener('load', finish, { once: true });
    const fallback = window.setTimeout(() => setHidden(true), 2200);
    return () => {
      window.removeEventListener('load', finish);
      window.clearTimeout(finishTimer);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div className={`kmats-loader ${hidden ? 'is-hidden' : ''}`} aria-hidden={hidden}>
      <div className="loader-mark">
        <img src="/assets/kmats/site/kmats_logo-BFCqh0yI.png" alt="KMATS" />
      </div>
      <span>Loading KMATS</span>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const serviceLinks = [
  ['All Services', '/services/'],
  ['AI Engineering', '/services/ui-ux-design/'],
  ['EdTech Platforms', '/services/mobile-app-development/'],
  ['Custom Software', '/services/full-stack-development/'],
  ['Automation', '/services/ai-creative-production/'],
  ['Products / RPM', '/#rpm'],
  ['Industries', '/#industries'],
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => setOpen(false), [location.pathname]);

  const isActive = (href) => {
    if (!href.startsWith('/')) return false;
    const path = href.split('#')[0].replace(/\/+$/, '') || '/';
    const current = location.pathname.replace(/\/+$/, '') || '/';
    return path !== '/' && current.startsWith(path);
  };

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="KMATS home">
        <img className="brand-logo" src="/assets/kmats/site/kmats_logo-BFCqh0yI.png" alt="KMATS" />
      </Link>
      <nav className="main-nav" id="main-nav" aria-label="Primary">
        <div className="nav-item">
          <button type="button">Services</button>
          <div className="mega-menu">
            {serviceLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
        </div>
        <a className={isActive('/case-studies/') ? 'is-active' : ''} href="/case-studies/">Companies</a>
        <a href="/#rpm">Products</a>
        <a href="/#industries">Industries</a>
        <a className={isActive('/pricing/') ? 'is-active' : ''} href="/pricing/">Pricing</a>
        <a className={isActive('/marketplace/') ? 'is-active' : ''} href="/marketplace/">Marketplace</a>
        <a className={isActive('/startup-partnership/') ? 'is-active' : ''} href="/startup-partnership/">For Startups</a>
        <a className={isActive('/about/') ? 'is-active' : ''} href="/about/">About</a>
        <div className="nav-item">
          <button type="button">Resources</button>
          <div className="mega-menu compact">
            <a href="/blogs/">Insights</a>
            <a href="/free-resource/">Free Resource</a>
            <a href="/style-guide/">Brand Board</a>
            <a href="/author-page/">Editorial Team</a>
            <a href="/ai-ethics-data-policy/">AI Ethics</a>
            <a href="/nda/">NDA</a>
            <a href="/contact/">Contact</a>
          </div>
        </div>
      </nav>
      <div className="header-actions">
        <a className="header-cta" href="/contact/">Let's Connect</a>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen((value) => !value)}>
          <span></span><span></span>
        </button>
      </div>
    </header>
  );
}

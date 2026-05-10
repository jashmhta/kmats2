import { useEffect, useState } from 'react';
import { SEO } from '../components/SEO';
import { HtmlContent } from '../components/HtmlContent';
import { loadStaticContentForPath } from '../content/staticContent';
import aboutHtml from '../content/about.html?raw';
import servicesHtml from '../content/services.html?raw';
import pricingHtml from '../content/pricing.html?raw';
import casesHtml from '../content/case-studies.html?raw';
import templatesHtml from '../content/templates.html?raw';
import careerHtml from '../content/career.html?raw';
import freeResourceHtml from '../content/free-resource.html?raw';
import blogsHtml from '../content/blogs.html?raw';
import { useLocation, Link } from 'react-router-dom';

const pages = {
  about: ['About KMATS', 'About KMATS, the story behind the company, values, vision, and global mission.', aboutHtml],
  services: ['Services & Products', 'KMATS services for AI engineering, EdTech platforms, custom software, automation, web platforms, and consultancy.', servicesHtml],
  pricing: ['Startup Partnership Pricing', 'KMATS startup partnership, equity range, at-cost delivery model, and service comparison.', pricingHtml],
  'case-studies': ['Companies & Portfolio', 'Companies and partners KMATS has worked with across education, media, technology, commerce, and health.', casesHtml],
  templates: ['Template Marketplace', 'KMATS ready-to-deploy website templates and custom template development.', templatesHtml],
  career: ['Careers at KMATS', 'Careers for AI product engineers, frontend engineers, and technology consultants at KMATS.', careerHtml],
  'free-resource': ['AI Product Launch Checklist', 'A practical KMATS checklist for launching AI products and software systems.', freeResourceHtml],
  blogs: ['KMATS Insights', 'KMATS resources for AI, technology, software, UX, product strategy, and automation decisions.', blogsHtml],
};

export function StaticHtmlPage({ page }) {
  const location = useLocation();
  const [staticContent, setStaticContent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setStaticContent(null);
    setLoading(true);
    loadStaticContentForPath(location.pathname)
      .then((content) => {
        if (!cancelled) {
          setStaticContent(content);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setStaticContent(null);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [location.pathname]);

  if (staticContent) {
    return (
      <>
        <SEO title={`${staticContent.title || 'KMATS'} - KMATS`} description={staticContent.description || 'KMATS page content.'} path={staticContent.path || location.pathname} />
        <HtmlContent html={staticContent.html} />
      </>
    );
  }

  const trimmed = location.pathname.replace(/^\/+|\/+$/g, '');
  const isDeepRoute = trimmed.includes('/');

  if (loading && isDeepRoute) {
    return (
      <main className="route-loader" aria-busy="true">
        <div className="route-loader-shell">
          <span className="eyebrow">Loading KMATS</span>
          <span className="route-loader-bar" aria-hidden="true"><span /></span>
        </div>
      </main>
    );
  }

  const fallback = pages[page] || pages.services;
  const [title, description, html] = fallback;
  return (
    <>
      <SEO title={`${title} - KMATS`} description={description} path={`/${page}`} />
      <HtmlContent html={html} />
    </>
  );
}

export function FallbackPage() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  return (
    <>
      <SEO title="404 — Page not found · KMATS" description="The page you’re looking for doesn’t exist on KMATS. Use the navigation, view our work, or talk to KMATS directly." path={path} />
      <main className="not-found-page">
        <section className="not-found-shell">
          <span className="eyebrow">404 · Route not found</span>
          <h1 className="not-found-code"><span>4</span><span className="dot">•</span><span>4</span></h1>
          <p className="not-found-lede">
            That URL doesn’t map to a KMATS page. The site has been restructured around AI software, EdTech, custom software, automation, brand, and partnership routes — try one of these instead.
          </p>
          <div className="not-found-grid">
            <Link to="/services/">All services →</Link>
            <Link to="/case-studies/">Case studies →</Link>
            <Link to="/blogs/">Field-notes →</Link>
            <Link to="/marketplace/">Marketplace →</Link>
            <Link to="/pricing/">Pricing &amp; engagement →</Link>
            <Link to="/contact/">Contact KMATS →</Link>
          </div>
          <div className="page-actions">
            <Link className="primary-btn" to="/">Back home →</Link>
            <Link className="secondary-btn" to="/style-guide/">Brand system</Link>
          </div>
        </section>
      </main>
    </>
  );
}

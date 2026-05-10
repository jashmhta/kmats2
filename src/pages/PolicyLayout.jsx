import { Link } from 'react-router-dom';

export function PolicyLayout({ title, description, lastUpdated, children }) {
  return (
    <main className="page-main">
      <section className="page-hero center">
        <div data-reveal>
          <span className="page-kicker"><span className="signal-dot"></span>Policy Document</span>
          <h1 className="page-title">{title}</h1>
          {description && <p className="page-lede">{description}</p>}
          {lastUpdated && <p className="page-lede">Last updated: {lastUpdated}</p>}
          <div className="page-actions"><Link className="secondary-btn" to="/">Back to KMATS Home</Link></div>
        </div>
      </section>
      <section className="page-band white">
        <article className="article-body legal-body">{children}</article>
      </section>
    </main>
  );
}

export function PolicySection({ number, title, eyebrow, children }) {
  return (
    <section className="legal-card">
      {number && <span className="scrape-number">{number}</span>}
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export function PolicyKeyPoints({ items }) {
  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

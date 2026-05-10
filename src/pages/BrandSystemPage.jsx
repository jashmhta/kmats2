import { SEO } from '../components/SEO';
import { LogoModel } from '../components/LogoModel';

const brandBoard = '/assets/kmats/brand/brand-board.png';
const webReference = '/assets/kmats/brand/web-reference.png';
const mobileReference = '/assets/kmats/brand/mobile-reference.png';

const palette = [
  ['#2B1740', 'Primary brand color', 'Deep purple for confident product surfaces, CTA fills, and footer systems.'],
  ['#1A2430', 'Primary neutral dark', 'Ink color for copy, logo wordmark contrast, dashboards, and dense UI panels.'],
  ['#3A7B41', 'Accent color', 'Green for proof points, active states, success signals, and KMATS growth cues.'],
  ['#E5E2D9', 'Primary background', 'Warm paper base used across the site to keep the brand editorial and less generic.'],
  ['#E6E1EE', 'Secondary background', 'Soft lavender support surface for subtle brand depth and calm technology sections.'],
];

const typography = [
  ['Nexa Black', 'Logo / hero titles', 'Brand-board display reference for the KMATS wordmark and high-impact title moments.'],
  ['Archivo Narrow Bold', 'Headings / sub-headings', 'Condensed, technical, confident; used for section labels and strong conversion headers.'],
  ['Inter', 'Body text', 'Readable product copy, policy text, forms, cards, and long-form resources.'],
];

export function BrandSystemPage() {
  return (
    <>
      <SEO
        title="KMATS Brand Board & Visual System - KMATS"
        description="KMATS brand board, GLB logo model, color palette, typography system, web reference, and mobile reference integrated into the React/Vite build."
        path="/style-guide"
      />
      <main className="brand-system-page">
        <section className="brand-hero" data-reveal>
          <div>
            <span className="eyebrow">Brand board parity</span>
            <h1>KMATS visual system, preserved in React.</h1>
            <p>
              The current build now carries the official brand-board colors, typography intent, 3D logo asset, web composition, and mobile reference so the site is not just content-complete but visually aligned.
            </p>
            <div className="page-actions">
              <a className="primary-btn" href="/contact/">Use this system on a build<i aria-hidden="true"></i></a>
              <a className="secondary-btn" href="/">Back home</a>
            </div>
          </div>
          <div className="brand-model-card" aria-label="Interactive KMATS 3D logo">
            <LogoModel />
          </div>
        </section>

        <section className="brand-board-panel" data-reveal>
          <img src={brandBoard} alt="KMATS brand board showing logo lockups, type system, color palette, and sample layouts" />
        </section>

        <section className="brand-section-grid">
          <div className="brand-copy-card" data-reveal>
            <span className="eyebrow">Color palette</span>
            <h2>Warm, technical, and recognizably KMATS.</h2>
            <p>
              The palette avoids generic blue-purple AI gradients by grounding the site in paper, ink, a deep purple brand base, and a green success accent.
            </p>
          </div>
          <div className="palette-grid" data-reveal>
            {palette.map(([hex, label, note]) => (
              <article className="palette-card" key={hex}>
                <span style={{ background: hex }}></span>
                <strong>{hex}</strong>
                <h3>{label}</h3>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="brand-section-grid reverse">
          <div className="type-grid" data-reveal>
            {typography.map(([name, role, note]) => (
              <article key={name}>
                <strong>Aa</strong>
                <h3>{name}</h3>
                <p>{role}</p>
                <span>{note}</span>
              </article>
            ))}
          </div>
          <div className="brand-copy-card" data-reveal>
            <span className="eyebrow">Typography</span>
            <h2>Condensed confidence with readable product copy.</h2>
            <p>
              Nexa Black is the identity reference; Archivo Narrow and Inter carry the working web system so the pages stay sharp, legible, and close to the board.
            </p>
          </div>
        </section>

        <section className="reference-grid" data-reveal>
          <article>
            <span className="eyebrow">Web reference</span>
            <h2>Desktop composition from revamp.</h2>
            <img src={webReference} alt="KMATS desktop web design reference" />
          </article>
          <article>
            <span className="eyebrow">Mobile reference</span>
            <h2>Mobile composition from revamp.</h2>
            <img src={mobileReference} alt="KMATS mobile design reference" />
          </article>
        </section>
      </main>
    </>
  );
}

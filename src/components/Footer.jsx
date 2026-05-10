export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>KMATS</h2>
          <p>AI &amp; Tech Consultancy LLP building AI assistants, EdTech platforms, custom software, dashboards, and brand-aware product surfaces for teams that need real shipping discipline.</p>
          <div className="footer-cta-row">
            <a className="primary-btn" href="/contact/">Start a project →</a>
            <a className="secondary-btn" href="https://calendly.com/krishankshh54/30min?hide_event_type_details=1&amp;hide_gdpr_banner=1" target="_blank" rel="noopener noreferrer">Book a call</a>
          </div>
          <div className="social-row footer-social">
            <a href="https://www.linkedin.com/company/kmats4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/ShahKrisha20763" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://instagram.com/kmats.in/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-columns">
          <nav>
            <strong>Services</strong>
            <a href="/services/ui-ux-design/">AI Engineering</a>
            <a href="/services/mobile-app-development/">EdTech Platforms</a>
            <a href="/services/full-stack-development/">Custom Software</a>
            <a href="/services/ai-creative-production/">Automation</a>
            <a href="/services/saas-design/">SaaS &amp; Platform UX</a>
            <a href="/services/">All services</a>
          </nav>
          <nav>
            <strong>Company</strong>
            <a href="/case-studies/">Case studies</a>
            <a href="/about/">About KMATS</a>
            <a href="/startup-partnership/">For startups</a>
            <a href="/career/">Careers</a>
            <a href="/style-guide/">Brand system</a>
          </nav>
          <nav>
            <strong>Products</strong>
            <a href="/#rpm">RPM by KMATS</a>
            <a href="https://rpm.kmats.in" target="_blank" rel="noopener noreferrer">RPM website ↗</a>
            <a href="/marketplace/">Marketplace</a>
            <a href="/free-resource/">Launch checklist</a>
            <a href="/blogs/">Field-notes</a>
          </nav>
          <nav>
            <strong>Policies</strong>
            <a href="/privacy-policy/">Privacy</a>
            <a href="/terms-of-service/">Terms</a>
            <a href="/refund-policy/">Refunds</a>
            <a href="/ai-ethics-data-policy/">AI ethics &amp; data</a>
            <a href="/intellectual-property-policy/">IP policy</a>
            <a href="/nda/">NDA</a>
          </nav>
          <nav id="contact">
            <strong>Contact</strong>
            <a href="mailto:krishankshah@kmats.in">krishankshah@kmats.in</a>
            <a href="https://wa.me/918850622122" target="_blank" rel="noopener noreferrer">+91 8850622122</a>
            <a href="https://krishank.kmats.in/" target="_blank" rel="noopener noreferrer">Founder portfolio ↗</a>
            <a href="https://calendly.com/krishankshh54/30min?hide_event_type_details=1&amp;hide_gdpr_banner=1" target="_blank" rel="noopener noreferrer">Book a call ↗</a>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} KMATS AI &amp; Tech Consultancy LLP · Founded by Krishank Shah · Made for builders.</span>
        <span>Family-led discipline. Shipping-first. Audit-friendly AI.</span>
      </div>
    </footer>
  );
}

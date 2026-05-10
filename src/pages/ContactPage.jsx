import { SEO } from '../components/SEO';
import { generateBreadcrumbSchema } from '../components/StructuredData';
import { HtmlContent } from '../components/HtmlContent';
import contactHtml from '../content/contact.html?raw';

export function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  return (
    <>
      <SEO
        title="Contact KMATS - AI & Technology Solutions"
        description="Contact KMATS for AI engineering, custom software, EdTech platforms, startup partnerships, templates, and technology consultancy."
        keywords="contact KMATS, AI consultancy contact, software development enquiry, KMATS phone, KMATS Calendly"
        path="/contact"
        structuredData={breadcrumbSchema}
      />
      <HtmlContent html={contactHtml} />
    </>
  );
}

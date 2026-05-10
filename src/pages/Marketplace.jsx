import { SEO } from '../components/SEO';
import { generateBreadcrumbSchema } from '../components/StructuredData';
import { HtmlContent } from '../components/HtmlContent';
import marketplaceHtml from '../content/marketplace.html?raw';

export function Marketplace() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Marketplace', url: '/marketplace' },
  ]);

  return (
    <>
      <SEO
        title="AI Solutions Marketplace - KMATS"
        description="Discover premium KMATS website templates, live demos, customization options, and ready-to-deploy digital solutions."
        keywords="AI marketplace, website templates, Shopify template, real estate template, KMATS templates, custom websites"
        path="/marketplace"
        structuredData={breadcrumbSchema}
      />
      <HtmlContent html={marketplaceHtml} />
    </>
  );
}

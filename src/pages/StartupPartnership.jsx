import { SEO } from '../components/SEO';
import { generateBreadcrumbSchema } from '../components/StructuredData';
import { HtmlContent } from '../components/HtmlContent';
import startupHtml from '../content/startup.html?raw';

export function StartupPartnership() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Startup Partnership Program', url: '/startup-partnership' },
  ]);

  return (
    <>
      <SEO
        title="Startup Partnership Program - KMATS"
        description="Partner with KMATS for equity-based AI, software, website, app, and product development. We invest our skills and grow with promising startups."
        keywords="startup partnership, equity investment, tech partner, startup development, AI development, product development, KMATS"
        path="/startup-partnership"
        structuredData={breadcrumbSchema}
      />
      <HtmlContent html={startupHtml} />
    </>
  );
}

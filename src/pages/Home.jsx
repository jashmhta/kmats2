import { SEO } from '../components/SEO';
import { homepageSchemas } from '../components/StructuredData';
import { HtmlContent } from '../components/HtmlContent';
import homeHtml from '../content/home.html?raw';

export function Home() {
  return (
    <>
      <SEO
        title="KMATS - AI & Technology Solutions | Building Tomorrow's Intelligence"
        description="KMATS builds AI engineering, custom software platforms, EdTech solutions, automation, startup partnerships, and technology consultancy for world-ready digital products."
        keywords="AI consultancy, machine learning, automation, digital transformation, technology solutions, artificial intelligence, tech consulting, KMATS, RPM, startup partnership"
        path="/"
        structuredData={homepageSchemas}
      />
      <HtmlContent html={homeHtml} className="home-main" />
    </>
  );
}

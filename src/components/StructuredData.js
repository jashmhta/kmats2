export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KMATS',
  legalName: 'Knowledge Management & Technology Solutions',
  url: 'https://kmats2.netlify.app',
  logo: 'https://kmats2.netlify.app/logos/kmats_logo.png',
  description: 'Leading AI consultancy delivering cutting-edge solutions in machine learning, automation, custom software, EdTech, startup partnerships, and digital transformation.',
  sameAs: [
    'https://www.linkedin.com/company/kmats4/',
    'https://x.com/ShahKrisha20763',
    'https://instagram.com/kmats.in/',
    'https://krishank.kmats.in/'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'krishankshah@kmats.in',
    telephone: '+91-8850622122',
    availableLanguage: ['English'],
    areaServed: 'Worldwide'
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'KMATS',
  url: 'https://kmats2.netlify.app',
  description: 'AI engineering, custom software, EdTech platforms, automation, marketplace templates, and startup partnership programs.',
  publisher: {
    '@type': 'Organization',
    name: 'KMATS',
    logo: {
      '@type': 'ImageObject',
      url: 'https://kmats2.netlify.app/logos/kmats_logo.png',
    },
  },
};

export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://kmats2.netlify.app${crumb.url}`,
    })),
  };
}

export function generateServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: 'KMATS',
      url: 'https://kmats2.netlify.app',
    },
    description: service.description,
    areaServed: 'Worldwide',
  };
}

export const homepageSchemas = [organizationSchema, websiteSchema];

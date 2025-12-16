/**
 * Structured Data Schemas for SEO
 * Provides JSON-LD schema markup for rich search results
 */

/**
 * Organization Schema
 * Helps Google understand your organization and display rich snippets
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KMATS',
  legalName: 'Knowledge Management & Technology Solutions',
  url: 'https://kmats.in',
  logo: 'https://kmats.in/logos/kmats_logo.png',
  description: 'Leading AI consultancy delivering cutting-edge solutions in machine learning, automation, and digital transformation.',
  sameAs: [
    // Add social media profiles here when available
    // 'https://www.linkedin.com/company/kmats',
    // 'https://twitter.com/kmats',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: ['English'],
  },
};


/**
 * WebSite Schema with Site Search
 * Enables Google to show a search box in search results
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'KMATS',
  url: 'https://kmats.in',
  description: 'Leading AI consultancy delivering cutting-edge solutions in machine learning, automation, and digital transformation.',
  publisher: {
    '@type': 'Organization',
    name: 'KMATS',
    logo: {
      '@type': 'ImageObject',
      url: 'https://kmats.in/logos/kmats_logo.png',
    },
  },
};

/**
 * Generate BreadcrumbList Schema for navigation breadcrumbs
 * @param {Array} breadcrumbs - Array of {name, url} objects
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://kmats.in${crumb.url}`,
    })),
  };
}

/**
 * Service Schema for individual services
 * @param {Object} service - Service details
 */
export function generateServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: 'KMATS',
      url: 'https://kmats.in',
    },
    description: service.description,
    areaServed: 'Worldwide',
  };
}

/**
 * Combined schemas for homepage
 */
export const homepageSchemas = [organizationSchema, websiteSchema];

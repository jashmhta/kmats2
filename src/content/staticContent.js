import manifest from './static/manifest.json';

const modules = import.meta.glob('./static/**/*.html', {
  query: '?raw',
  import: 'default',
});

const normalizedModules = Object.fromEntries(
  Object.entries(modules).map(([path, loader]) => [
    path.replace('./static/', '').replace(/\/index\.html$/, '').replace(/\.html$/, ''),
    loader,
  ])
);

const primaryReactRoutes = new Set([
  '',
  'about',
  'blogs',
  'case-studies',
  'contact',
  'free-resource',
  'marketplace',
  'pricing',
  'privacy-policy',
  'services',
  'startup-partnership',
  'templates',
  'terms-of-service',
  'ai-ethics-data-policy',
  'intellectual-property-policy',
  'nda',
  'style-guide',
]);

export async function loadStaticContentForPath(pathname) {
  const key = pathname.replace(/^\/+|\/+$/g, '');
  if (!key || primaryReactRoutes.has(key)) return null;

  const loader = normalizedModules[key];
  if (!loader) return null;

  const html = await loader();
  return {
    key,
    html,
    ...(manifest[key] || {}),
  };
}

export function getStaticContentPaths() {
  return Object.keys(normalizedModules);
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function HtmlContent({ html, className = 'page-shell' }) {
  const location = useLocation();

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('kmats:content-mounted'));
  }, [location.pathname, html]);

  return <main className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

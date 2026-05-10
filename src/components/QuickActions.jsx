import { useEffect, useState } from 'react';

const quickLinks = [
  ['01', 'Start a project', 'Share your AI, software, or EdTech use case.', '/contact/'],
  ['02', 'Explore services', 'AI engineering, automation, platforms, and consultancy.', '/services/'],
  ['03', 'Startup partnership', 'Equity-aligned product and technology collaboration.', '/startup-partnership/'],
  ['04', 'Template marketplace', 'Ready-to-customize KMATS website templates.', '/marketplace/'],
  ['05', 'Policies and ethics', 'Privacy, AI ethics, IP, terms, and NDA pages.', '/ai-ethics-data-policy/'],
];

export function QuickActions() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      const command = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k';
      if (command) {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <button className="quick-launcher" type="button" aria-label="Open KMATS quick actions" aria-expanded={open} aria-controls="quick-panel" aria-keyshortcuts="Control+K Meta+K" onClick={() => setOpen((value) => !value)}>K</button>
      <div className="quick-panel" id="quick-panel" hidden={!open} role="dialog" aria-label="KMATS quick actions" aria-hidden={!open}>
        <div className="quick-panel-head"><span>KMATS command center</span><button className="quick-panel-close" type="button" aria-label="Close quick actions" onClick={() => setOpen(false)}>×</button></div>
        {quickLinks.map(([num, title, text, href]) => (
          <a key={num} href={href} onClick={() => setOpen(false)}><i>{num}</i><span><b>{title}</b><span>{text}</span></span></a>
        ))}
        <div className="quick-shortcut">Press Ctrl/⌘ + K to open this panel from anywhere.</div>
      </div>
    </>
  );
}

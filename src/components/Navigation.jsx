import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import kmatsLogo from '../assets/images/kmats_logo.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection using Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Companies', href: '#companies' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSectionNavigation = (href) => {
    const scroll = () => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: href } });
      return;
    }

    scroll();
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={kmatsLogo} 
              alt="KMATS - Building Tomorrow's AI Solutions Logo" 
              className={`w-auto hover:scale-105 transition-all duration-300 ${
                scrolled ? 'h-10 md:h-12' : 'h-12 md:h-14 lg:h-16'
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleSectionNavigation(item.href)}
                    className={`text-foreground hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium relative group cursor-pointer ${
                      isActive ? 'nav-active' : ''
                    }`}
                    aria-label={`Navigate to ${item.name} section`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                    <span 
                      className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </button>
                );
              })}
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/marketplace')}
                className="ml-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Browse template marketplace"
              >
                Marketplace
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://krishankshah.netlify.app/', '_blank')}
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label="View portfolio (opens in new tab)"
              >
                Portfolio
                <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-primary/10 transition-colors duration-300"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 slide-in"
            role="menu"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleSectionNavigation(item.href)}
                    className={`text-foreground hover:text-primary hover:bg-primary/10 block px-4 py-3 text-base font-medium w-full text-left transition-all duration-300 rounded-md cursor-pointer min-h-[44px] ${
                      isActive ? 'text-primary bg-primary/5' : ''
                    }`}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </button>
                );
              })}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  navigate('/marketplace');
                  setIsOpen(false);
                }}
                className="w-full mt-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 min-h-[44px]"
                aria-label="Browse template marketplace"
              >
                Marketplace
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.open('https://krishankshah.netlify.app/', '_blank');
                  setIsOpen(false);
                }}
                className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group min-h-[44px]"
                aria-label="View portfolio (opens in new tab)"
              >
                Portfolio
                <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

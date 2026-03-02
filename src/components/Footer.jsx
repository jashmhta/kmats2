import { Mail, ExternalLink, Heart, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import kmatsLogo from '../assets/images/kmats_logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const policyLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'AI Ethics & Data Policy', href: '/ai-ethics-data-policy' },
    { label: 'Intellectual Property Policy', href: '/intellectual-property-policy' },
    { label: 'NDA', href: '/nda' },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  const handleQuickLink = (id) => {
    const target = `#${id.toLowerCase()}`;
    const scroll = () => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: target } });
      return;
    }

    scroll();
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={kmatsLogo}
                alt="KMATS Logo"
                className="h-8 w-auto mr-3"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Building innovative AI and software solutions for a global audience.
              Empowering education and technology through purpose-driven development.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>by Krishank Shah</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleQuickLink(item)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>


          {/* Policy Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Policies</h3>
            <ul className="space-y-2">
              {policyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info & Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="space-y-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('mailto:krishankshah@kmats.in', '_blank')}
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                krishankshah@kmats.in
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://krishank.kmats.in/', '_blank')}
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Portfolio
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://wa.me/918850622122', '_blank')}
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                +91 8850622122
              </Button>
              {/* Social Media Links */}
              <div className="pt-2">
                <p className="text-sm font-medium text-foreground mb-2">Follow Us</p>
                <div className="flex space-x-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open("https://www.linkedin.com/company/kmats4/", "_blank")}
                    className="p-2 h-auto text-muted-foreground hover:text-primary transition-colors duration-300 hover:bg-primary/10"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open("https://x.com/ShahKrisha20763", "_blank")}
                    className="p-2 h-auto text-muted-foreground hover:text-primary transition-colors duration-300 hover:bg-primary/10"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open("https://instagram.com/kmats.in/", "_blank")}
                    className="p-2 h-auto text-muted-foreground hover:text-primary transition-colors duration-300 hover:bg-primary/10"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-y-2 sm:gap-y-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} KMATS AI & Tech Consultancy LLP. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground sm:text-right">
              Solo-Built. Family-Backed. World-Focused.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { SiteEffects } from './components/SiteEffects';
import { QuickActions } from './components/QuickActions';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { AIEthicsDataPolicy } from './pages/AIEthicsDataPolicy';
import { IntellectualPropertyPolicy } from './pages/IntellectualPropertyPolicy';
import { NdaPolicy } from './pages/NdaPolicy';
import { Marketplace } from './pages/Marketplace';
import { StartupPartnership } from './pages/StartupPartnership';
import { ContactPage } from './pages/ContactPage';
import { BrandSystemPage } from './pages/BrandSystemPage';
import { FallbackPage, StaticHtmlPage } from './pages/StaticHtmlPage';
import './App.css';

const GA_ID = 'G-XEFP3LLWEZ';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!GA_ID?.startsWith('G-')) return;
    ReactGA.initialize(GA_ID);
  }, []);

  useEffect(() => {
    if (!GA_ID?.startsWith('G-')) return;
    ReactGA.send({ hitType: 'pageview', page: `${location.pathname}${location.search}` });
  }, [location.pathname, location.search]);

  return (
    <>
      <div className="cursor-orb" aria-hidden="true"></div>
      <Preloader />
      <SiteEffects />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace/*" element={<Marketplace />} />
        <Route path="/startup-partnership/*" element={<StartupPartnership />} />
        <Route path="/contact/*" element={<ContactPage />} />
        <Route path="/about/*" element={<StaticHtmlPage page="about" />} />
        <Route path="/services/*" element={<StaticHtmlPage page="services" />} />
        <Route path="/pricing/*" element={<StaticHtmlPage page="pricing" />} />
        <Route path="/case-studies/*" element={<StaticHtmlPage page="case-studies" />} />
        <Route path="/templates/*" element={<StaticHtmlPage page="templates" />} />
        <Route path="/career/*" element={<StaticHtmlPage page="career" />} />
        <Route path="/free-resource/*" element={<StaticHtmlPage page="free-resource" />} />
        <Route path="/blogs/*" element={<StaticHtmlPage page="blogs" />} />
        <Route path="/author-page/*" element={<StaticHtmlPage page="author-page" />} />
        <Route path="/style-guide/*" element={<BrandSystemPage />} />
        <Route path="/refund-policy/*" element={<StaticHtmlPage page="refund-policy" />} />
        <Route path="/privacy-policy/*" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service/*" element={<TermsOfService />} />
        <Route path="/ai-ethics-data-policy/*" element={<AIEthicsDataPolicy />} />
        <Route path="/intellectual-property-policy/*" element={<IntellectualPropertyPolicy />} />
        <Route path="/nda/*" element={<NdaPolicy />} />
        <Route path="*" element={<FallbackPage />} />
      </Routes>
      <Footer />
      <QuickActions />
    </>
  );
}

export default App;

import { useEffect } from 'react';
import ReactGA from "react-ga4";
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { useTheme } from './hooks/useTheme';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { AIEthicsDataPolicy } from './pages/AIEthicsDataPolicy';
import { IntellectualPropertyPolicy } from './pages/IntellectualPropertyPolicy';
import { NdaPolicy } from './pages/NdaPolicy';
import { Marketplace } from './pages/Marketplace';
import { ScrollToTop } from './components/ScrollToTop';
import './App.css';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    // ✅ Initialize theme
    document.documentElement.classList.add(theme);

    // ✅ Hardcoded Google Analytics ID
    const GA_ID = "G-XEFP3LLWEZ"; // <-- replace with your real GA4 ID

    if (GA_ID && GA_ID.startsWith("G-")) {
      try {
        ReactGA.initialize(GA_ID);
        ReactGA.send("pageview"); // initial pageview
        console.log("✅ GA ID working");
      } catch (error) {
        console.error("⚠️ GA initialization failed:", error);
      }
    } else {
      console.warn("❌ No valid GA ID found. Analytics not initialized.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <AnimatedBackground />
      <Navigation />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/ai-ethics-data-policy" element={<AIEthicsDataPolicy />} />
          <Route path="/intellectual-property-policy" element={<IntellectualPropertyPolicy />} />
          <Route path="/nda" element={<NdaPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

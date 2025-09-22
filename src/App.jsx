import { useEffect } from 'react';
import ReactGA from "react-ga4";
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Companies } from './components/Companies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { useTheme } from './hooks/useTheme';
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
      <AnimatedBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Companies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

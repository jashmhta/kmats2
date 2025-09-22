import { ArrowRight, Sparkles, Zap, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import futuristicBg from '../assets/images/futuristic_ai_background.jpg';
import kmatsLogo from '../assets/images/kmats_logo.png';

export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={futuristicBg} 
          alt="Futuristic AI Background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>
      </div>

      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8"
        >
          {/* Logo with enhanced animation */}
          <motion.div
            variants={logoVariants}
            className="flex justify-center mb-6 md:mb-8 mt-4 md:mt-8"
          >
            <motion.img 
              src={kmatsLogo} 
              alt="KMATS Logo" 
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-auto object-contain filter drop-shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <motion.span 
                className="text-foreground block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Building Tomorrow's
              </motion.span>
              <motion.span 
                className="text-primary block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                AI Solutions
              </motion.span>
            </h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              One Founder. One Family. One Global Mission.
              <br />
              <motion.span 
                className="text-primary font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Solo-Built. Family-Backed. World-Focused.
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Feature Highlights with staggered animation */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto my-8 md:my-12"
          >
            {[
              { icon: Zap, title: 'RPM AI Assistant', desc: 'Advanced AI-powered education solutions' },
              { icon: Globe, title: 'Global Reach', desc: 'Serving students and professionals worldwide' },
              { icon: Sparkles, title: 'Innovation First', desc: 'Cutting-edge technology with purpose' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.4 + index * 0.15 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/80 transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="h-8 w-8 text-primary mb-3 mx-auto" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons with enhanced interactions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 justify-center items-center max-w-md mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#services')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 group w-full px-8 py-3 text-lg font-medium transition-all duration-300 relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center justify-center">
                  Explore Services
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full px-8 py-3 text-lg font-medium transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get In Touch
                  <motion.div
                    animate={{ rotate: [0, 12, -12, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles className="ml-2 h-5 w-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}


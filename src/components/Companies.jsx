import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Building2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

// Import company logos
import keedaLogo from '../assets/images/companies/keeda_logo.png';
import nibodhLogo from '../assets/images/companies/nibodh_logo.png';
import neelaFilmLogo from '../assets/images/companies/neela_film_logo.png';
import suibLogo from '../assets/images/companies/suib_logo.png';
import rajComputersLogo from '../assets/images/companies/raj_computers_logo.png';
import naptexLogo from '../assets/images/companies/naptex_logo.png';

export function Companies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const companies = [
    {
      name: 'Ekeeda',
      logo: keedaLogo,
      description: 'Accelerating Careers Through Innovation',
      category: 'EdTech',
      color: 'from-orange-500/20 to-yellow-500/20',
      accent: 'orange-500'
    },
    {
      name: 'NIBODH',
      logo: nibodhLogo,
      description: 'Educational Excellence & Learning Solutions',
      category: 'Education',
      color: 'from-purple-500/20 to-blue-500/20',
      accent: 'purple-500'
    },
    {
      name: 'Neela Film Productions',
      logo: neelaFilmLogo,
      description: 'Creative Media & Visual Storytelling',
      category: 'Media',
      color: 'from-blue-500/20 to-cyan-500/20',
      accent: 'blue-500'
    },
    {
      name: 'SuiB',
      logo: suibLogo,
      description: 'Professional Services & Business Solutions',
      category: 'Consulting',
      color: 'from-teal-500/20 to-green-500/20',
      accent: 'teal-500'
    },
    {
      name: 'RAJ Computers',
      logo: rajComputersLogo,
      description: 'IT Solutions & Technology Services Since 1996',
      category: 'Education',
      color: 'from-red-500/20 to-pink-500/20',
      accent: 'red-500'
    },
    {
      name: 'NAPTEX',
      logo: naptexLogo,
      description: 'Corporate Excellence & Business Innovation',
      category: 'Business',
      color: 'from-indigo-500/20 to-purple-500/20',
      accent: 'indigo-500'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % companies.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isInView, companies.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(prev => {
      if (newDirection === 1) {
        return (prev + 1) % companies.length;
      } else {
        return prev === 0 ? companies.length - 1 : prev - 1;
      }
    });
  };

  return (
    <section id="companies" className="py-20 bg-muted/5 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Building2 className="h-10 w-10 text-primary mr-4" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Companies I've <span className="gradient-text">Worked With</span>
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-10 w-10 text-accent ml-4" />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Trusted partnerships across diverse industries, delivering innovative solutions and driving digital transformation.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          {/* Main Carousel */}
          <div className="relative h-[500px] flex items-center justify-center perspective-1000">
            
            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(-1)}
              className="absolute left-4 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(1)}
              className="absolute right-4 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </motion.button>

            {/* Carousel Cards */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  rotateY: { duration: 0.5 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full max-w-md mx-auto cursor-grab active:cursor-grabbing"
              >
                {/* Company Card */}
                <div className={`relative bg-gradient-to-br ${companies[currentIndex].color} backdrop-blur-md border border-border/40 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden`}>
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, rgba(0, 255, 255, 0.2) 0%, transparent 60%),
                                       radial-gradient(circle at 70% 70%, rgba(0, 255, 136, 0.2) 0%, transparent 60%)`
                    }}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Logo Container */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mb-8 flex justify-center"
                    >
                      <div className="relative">
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-${companies[currentIndex].accent}/20 rounded-2xl blur-xl scale-125 opacity-50`}></div>
                        
                        {/* Logo Container */}
                        <div className="relative bg-background/30 backdrop-blur-sm rounded-2xl p-6 border border-border/30 min-h-[180px] flex items-center justify-center">
                          <motion.img
                            src={companies[currentIndex].logo}
                            alt={`${companies[currentIndex].name} logo`}
                            className="max-h-[140px] max-w-[240px] w-auto h-auto object-contain filter brightness-110 contrast-110"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Company Info */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {companies[currentIndex].name}
                      </h3>
                      
                      <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                        {companies[currentIndex].description}
                      </p>
                      
                      <div className={`inline-block px-4 py-2 bg-${companies[currentIndex].accent}/20 text-${companies[currentIndex].accent} text-sm font-semibold rounded-full border border-${companies[currentIndex].accent}/30`}>
                        {companies[currentIndex].category}
                      </div>
                    </motion.div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      <motion.div
                        animate={{ 
                          y: [0, -20, 0],
                          opacity: [0.3, 0.7, 0.3],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          delay: 0.5
                        }}
                        className={`absolute top-6 right-6 w-3 h-3 bg-${companies[currentIndex].accent}/50 rounded-full`}
                      />
                      <motion.div
                        animate={{ 
                          y: [0, -15, 0],
                          opacity: [0.2, 0.6, 0.2],
                          scale: [1, 1.3, 1]
                        }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity,
                          delay: 1
                        }}
                        className="absolute bottom-8 left-8 w-2 h-2 bg-accent/50 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Side Preview Cards */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-30 scale-75 pointer-events-none hidden lg:block">
              <div className="w-64 h-80 bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-4 flex items-center justify-center">
                <img
                  src={companies[(currentIndex - 1 + companies.length) % companies.length].logo}
                  alt="Previous company"
                  className="max-h-20 max-w-32 object-contain opacity-50"
                />
              </div>
            </div>

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 opacity-30 scale-75 pointer-events-none hidden lg:block">
              <div className="w-64 h-80 bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-4 flex items-center justify-center">
                <img
                  src={companies[(currentIndex + 1) % companies.length].logo}
                  alt="Next company"
                  className="max-h-20 max-w-32 object-contain opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center mt-12 gap-3"
          >
            {companies.map((_, index) => (
              <motion.button
                key={index}
                className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'w-12 h-3 bg-primary' 
                    : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-primary"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-gradient-to-r from-primary/8 to-accent/8 rounded-3xl p-12 border border-primary/15 hover:border-primary/25 transition-all duration-700 backdrop-blur-sm">
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  transition: { duration: 5, repeat: Infinity }
                }}
              >
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Ready to Join This List?
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Let's collaborate and create something amazing together. Your company could be the next success story in our growing portfolio of partnerships.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


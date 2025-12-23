import { motion, useInView } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { useRef } from 'react';

// Import company logos
import keedaLogo from '../assets/images/companies/keeda_logo.png';
import nibodhLogo from '../assets/images/companies/nibodh_logo.png';
import neelaFilmLogo from '../assets/images/companies/neela_film_logo.png';
import suibLogo from '../assets/images/companies/suib_logo.png';
import rajComputersLogo from '../assets/images/companies/raj_computers_logo.png';
import naptexLogo from '../assets/images/companies/naptex_logo.png';
import disInfectLogo from '../assets/images/companies/dis-infect.png';

export function Companies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const companies = [
    {
      name: 'Ekeeda',
      logo: keedaLogo,
      description: 'Accelerating Careers Through Innovation',
      category: 'EdTech'
    },
    {
      name: 'NIBODH',
      logo: nibodhLogo,
      description: 'Educational Excellence & Learning Solutions',
      category: 'Education'
    },
    {
      name: 'Neela Film Productions',
      logo: neelaFilmLogo,
      description: 'Creative Media & Visual Storytelling',
      category: 'Media'
    },
    {
      name: 'SuiB',
      logo: suibLogo,
      description: 'Professional Services & Business Solutions',
      category: 'Consulting'
    },
    {
      name: 'RAJ Computers',
      logo: rajComputersLogo,
      description: 'IT Solutions & Technology Services Since 1996',
      category: 'Technology'
    },
    {
      name: 'NAPTEX',
      logo: naptexLogo,
      description: 'Corporate Excellence & Business Innovation',
      category: 'Business'
    },
    {
      name: 'Dis-Infect',
      logo: disInfectLogo,
      description: 'Health & Safety Solutions',
      category: 'HealthTech'
    },
    {
      name: 'RBRTH™',
      logo: null, // Uses custom Bungee font styling
      description: 'E-commerce Health & Wellness Brand',
      category: 'Health & Wellness',
      useBungeeFont: true
    }
  ];

  // Duplicate companies array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

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
            <Building2 className="h-10 w-10 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Companies I've <span className="gradient-text">Worked With</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Trusted partnerships across diverse industries, delivering innovative solutions and driving digital transformation.
          </motion.p>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/5 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/5 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="overflow-hidden py-4"
          >
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -100 * companies.length + '%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 100, // Adjust speed here (higher = slower)
                  ease: "linear",
                },
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-pointer overflow-hidden flex-shrink-0 w-[280px]"
                  style={{ willChange: 'transform' }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 rounded-2xl" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    {/* Logo Container */}
                    <div className="flex-1 flex items-center justify-center w-full mb-4 min-h-[120px]">
                      {company.logo ? (
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="max-h-[100px] max-w-full w-auto h-auto object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                          loading="lazy"
                        />
                      ) : (
                        // RBRTH logo in Bungee font
                        <div className="flex items-center justify-center w-full h-[100px]">
                          <div 
                            className="text-3xl transition-opacity duration-300 group-hover:opacity-80"
                            style={{ fontFamily: "'Bungee', cursive", letterSpacing: '0.05em', color: '#22c55e' }}
                          >
                            {company.name}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Company Info */}
                    <div className="w-full">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {company.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {company.description}
                      </p>
                      
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                        {company.category}
                      </div>
                    </div>
                  </div>

                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-all duration-500">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Ready to Join This List?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate and create something amazing together. Your company could be the next success story in our growing portfolio of partnerships.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

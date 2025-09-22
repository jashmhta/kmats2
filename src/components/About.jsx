import { motion, useInView } from 'framer-motion';
import { Heart, Users, Target, Lightbulb, Globe, Code } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation with Purpose',
      description: 'Building what matters, not just what trends'
    },
    {
      icon: Users,
      title: 'Technology for People',
      description: 'User-first design and accessibility'
    },
    {
      icon: Heart,
      title: 'Legacy-Led',
      description: 'Inspired by the people who made this dream possible'
    },
    {
      icon: Code,
      title: 'Simplicity in Scale',
      description: 'Powerful tools, minimal friction'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="gradient-text">KMATS</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A growing SaaS company dedicated to building innovative software and education solutions for a global audience.
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Founded by Krishank Shah, KMATS began as a deeply personal vision — one rooted in family, values, 
                and the belief that great technology should be accessible to everyone.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                The name itself honors the people who shaped this journey :  <strong className="text-primary">K</strong>rishank (Founder), 
                <strong className="text-primary"> M</strong>itrank (Brother), {/* <strong className="text-primary">M</strong>adhulika (partner) ,*/} 
                <strong className="text-primary"> A</strong>rchana (Mother), <strong className="text-primary">T</strong>ushar (Father), 
                and <strong className="text-primary">S</strong>hah (Surname).
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                While the journey started solo, KMATS is built with the future in mind — a future where a team of 
                passionate, purpose-driven individuals work together to create tools that are as impactful as they are intuitive.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Globe className="h-8 w-8 text-primary mb-4" />
                  </motion.div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become a trusted global name in tech and education — delivering powerful digital solutions 
                    that make lives easier, smarter, and more connected.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20 hover:border-primary/30 transition-all duration-300"
            >
              <h4 className="font-semibold text-foreground mb-2">What We Do</h4>
              <p className="text-muted-foreground">
                From scalable web apps to smart learning platforms, we're focused on simplifying the complex, 
                empowering people, and solving real-world problems through software.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-foreground text-center mb-8"
          >
            Our Values
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={cardVariants}
                custom={index}
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group h-full cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <value.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    </motion.div>
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Section */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-all duration-500"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">The Future of KMATS</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            KMATS is growing — and we're just getting started. We're open to new partnerships, 
            collaborators, and talent who believe in meaningful, scalable tech.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center justify-center space-x-2 text-primary"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              <Heart className="h-5 w-5 fill-current" />
            </motion.div>
            <span className="font-medium">One Founder. One Family. One Global Mission.</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                transition: { duration: 2, repeat: Infinity, delay: 1 }
              }}
            >
              <Heart className="h-5 w-5 fill-current" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


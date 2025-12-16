import { motion, useInView } from 'framer-motion';
import { Bot, Users, ArrowRight, Sparkles, Globe, Code, Zap, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useRef } from 'react';
import aiEducatorImg from '../assets/images/ai_educator_assistant.png';
import techConsultancyImg from '../assets/images/tech_consultancy_abstract.jpg';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 'rpm',
      title: 'RPM - AI Educator Assistant',
      subtitle: 'Advanced AI-Powered Education Solutions',
      description: 'RPM is our flagship AI-based assistant focused on revolutionizing education. Designed to empower students, educators, and institutions with intelligent learning support, personalized guidance, and innovative educational tools.',
      image: aiEducatorImg,
      link: 'https://rpm.kmats.in',
      features: [
        'Personalized Learning Paths',
        'Intelligent Tutoring System',
        'Real-time Progress Tracking',
        'Multi-language Support',
        'Interactive Content Generation',
        '24/7 Learning Assistance'
      ],
      icon: Bot,
      color: 'from-primary to-accent',
      buttonText: 'Learn More About RPM',
      isMain: true
    },
    {
      id: 'consultancy',
      title: 'Tech Consultancy Services',
      subtitle: 'Expert Guidance for Global Success',
      description: 'Comprehensive technology consulting services tailored for international students and market professionals. We provide strategic guidance, technical expertise, and innovative solutions to help you navigate the complex world of technology.',
      image: techConsultancyImg,
      features: [
        'Career Strategy & Planning',
        'Technical Skill Development',
        'Market Analysis & Insights',
        'Project Architecture Design',
        'Technology Stack Selection',
        'International Market Entry'
      ],
      icon: Users,
      color: 'from-accent to-primary',
      buttonText: 'Explore Consultancy',
      isMain: false
    }
  ];

  const additionalServices = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with cutting-edge technologies'
    },
    {
      icon: Globe,
      title: 'Website & App Development',
      description: 'Creating responsive and user-friendly digital experiences'
    },
    {
      icon: BookOpen,
      title: 'Educational Platform Development',
      description: 'Building scalable learning management systems and educational tools'
    },
    {
      icon: Zap,
      title: 'AI Integration Services',
      description: 'Seamlessly integrate AI capabilities into existing business processes'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="gradient-text">Services & Products</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Empowering education and business through innovative AI solutions and expert consultancy services.
          </motion.p>
        </motion.div>

        {/* Main Services */}
        <div className="space-y-20 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.3 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.3 }}
                  className="flex items-start space-x-3 mb-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-20 flex-shrink-0`}
                  >
                    <service.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">{service.title}</h3>
                    <p className="text-primary font-medium text-sm md:text-base">{service.subtitle}</p>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.3 }}
                  className="text-muted-foreground text-base md:text-lg leading-relaxed"
                >
                  {service.description}
                </motion.p>

                {/* Features Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      variants={featureVariants}
                      custom={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          transition: { 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: featureIndex * 0.5
                          }
                        }}
                      >
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                      </motion.div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 1.0 + index * 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${service.color} text-background hover:opacity-90 transition-all duration-300 group ${
                      service.isMain ? 'shadow-lg shadow-primary/25' : ''
                    } w-full sm:w-auto relative overflow-hidden`}
                    onClick={() => {
                      if (service.id === 'rpm' && service.link) {
                        window.open(service.link, '_blank', 'noopener,noreferrer');
                        return;
                      }
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 flex items-center">
                      {service.buttonText}
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} order-first lg:order-none`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateY: index % 2 === 0 ? -15 : 15 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.9, rotateY: index % 2 === 0 ? -15 : 15 }}
                  transition={{ duration: 1.0, delay: 0.5 + index * 0.3 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: index % 2 === 0 ? 5 : -5,
                    transition: { duration: 0.4 }
                  }}
                  className="relative group perspective-1000"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative w-full h-64 md:h-80 object-cover rounded-2xl border border-border/50 group-hover:border-primary/50 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-muted/20 rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-500"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-2xl font-bold text-foreground text-center mb-8"
          >
            Additional Services
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                custom={index}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="bg-card/40 backdrop-blur-sm border-border/30 hover:border-primary/40 hover:bg-card/60 transition-all duration-300 group h-full cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <service.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    </motion.div>
                    <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 hover:border-primary/30 transition-all duration-500">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Elevate Your Education or Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need AI-powered education solutions with RPM or expert tech consultancy 
              for your global business, KMATS is here to help. Let's discuss how we can bring 
              innovation to your projects.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 group px-8 py-3 relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <motion.div
                    animate={{ rotate: [0, 12, -12, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles className="ml-2 h-5 w-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

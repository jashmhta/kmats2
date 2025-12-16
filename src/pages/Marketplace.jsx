import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Sparkles, CheckCircle, X, Layout } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import estatePreview from '../assets/images/templates/estate.png';

export function Marketplace() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: 'real-estate',
      name: 'Professional Real Estate Platform',
      category: 'Real Estate',
      tagline: 'Complete property management solution',
      description: 'A modern, feature-rich real estate website template designed for property agencies, realtors, and real estate businesses. Built with cutting-edge technology for optimal performance and user experience.',
      demoUrl: 'https://estate.kmats.in',
      image: estatePreview,
      techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      features: [
        'Modern, responsive design that works on all devices',
        'Property listing showcase with image galleries',
        'Advanced search and filtering capabilities',
        'Interactive property detail pages',
        'Contact forms and lead generation',
        'Google Maps integration (configurable)',
        'Performance optimized for fast loading',
        'SEO-friendly structure',
        'Easy content customization',
        'Professional animations and transitions'
      ],
      usps: [
        '🏠 Interactive 3D Models - Immersive virtual property tours with 3D flat visualization',
        'Battle-tested production-ready codebase',
        'Mobile-first responsive design',
        'Blazing fast performance',
        'Modern UI/UX following latest trends',
        'Easy to customize and rebrand',
        'Clean, maintainable code structure'
      ],
      pricing: {
        basic: 'Template as-is with your branding',
        pro: 'Custom modifications + your content',
        enterprise: 'Full customization + ongoing support'
      }
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
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Layout className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Template <span className="gradient-text">Marketplace</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready-to-deploy website templates built with modern technology. 
            Choose a template and let us customize it perfectly for your business.
          </p>
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {templates.map((template) => (
            <motion.div
              key={template.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden cursor-pointer h-full">
                <CardContent className="p-0">
                  {/* Template Preview */}
                  <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                    {template.image ? (
                      <img 
                        src={template.image} 
                        alt={template.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <Layout className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                          <p className="text-sm text-muted-foreground">Live Demo Available</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button
                        onClick={() => setSelectedTemplate(template)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        View Details
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => window.open(template.demoUrl, '_blank')}
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  {/* Template Info */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 mb-3">
                        {template.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {template.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {template.tagline}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {template.techStack.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-muted/50 text-xs text-foreground rounded border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {template.techStack.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{template.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-muted/20 rounded-2xl p-12 border border-border/50">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              More Templates Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're constantly building new templates for different industries. 
              Check back soon or contact us for custom template development.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      {selectedTemplate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTemplate(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card border border-border/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border/50 p-6 flex items-center justify-between z-10">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 mb-2">
                  {selectedTemplate.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {selectedTemplate.name}
                </h2>
              </div>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                  <Code className="h-5 w-5 text-primary mr-2" />
                  Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedTemplate.description}
                </p>
              </div>

              {/* USPs */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 text-primary mr-2" />
                  Why Choose This Template?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedTemplate.usps.map((usp, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 bg-primary/5 rounded-lg p-3 border border-primary/10"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{usp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Features Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedTemplate.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTemplate.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-muted/50 text-sm font-medium text-foreground rounded-lg border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border/50">
                <Button
                  onClick={() => window.open(selectedTemplate.demoUrl, '_blank')}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View Live Demo
                </Button>
                <Button
                  onClick={() => {
                    const message = `Hi! I'm interested in customizing the *${selectedTemplate.name}* template for my business. Can you help me with this?`;
                    const whatsappUrl = `https://wa.me/918850622122?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  size="lg"
                >
                  Request Customization
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

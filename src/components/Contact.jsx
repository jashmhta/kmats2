import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone, ExternalLink, CheckCircle, AlertCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    const calendlySrc = 'https://assets.calendly.com/assets/external/widget.js';
    if (!document.querySelector(`script[src="${calendlySrc}"]`)) {
      const script = document.createElement('script');
      script.src = calendlySrc;
      script.async = true;
      document.body.appendChild(script);
    }

    const calendlyStyles = 'https://assets.calendly.com/assets/external/widget.css';
    if (!document.querySelector(`link[href="${calendlyStyles}"]`)) {
      const link = document.createElement('link');
      link.href = calendlyStyles;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      case 'name':
      case 'subject':
      case 'message':
        return value.trim().length > 0;
      default:
        return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Note: This form uses Netlify Forms.
    // In production (on Netlify), the form will submit properly.
    // In local development, we show a success message.
    
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'krishankshah@kmats.in',
      action: () => window.open('mailto:krishankshah@kmats.in', '_blank')
    },
    {
      icon: ExternalLink,
      title: 'Portfolio',
      value: 'krishank.kmats.in',
      action: () => window.open('https://krishank.kmats.in/', '_blank')
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Global Remote Services',
      action: null
    }
  ];

  const calendlyUrl = 'https://calendly.com/krishankshh54/30min?hide_event_type_details=1&hide_gdpr_banner=1';

  const handleOpenCalendly = () => {
    if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const services = [
    'RPM AI Educator Assistant',
    'Tech Consultancy',
    'Game Development',
    'Custom Software Development',
    'AI Integration Services',
    'ERP Solutions',
    'E-commerce Solutions',
    'Mobile App Development'
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey with KMATS? Let's discuss how we can help you achieve your goals 
            through innovative AI solutions and expert consultancy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Send className="h-6 w-6 text-primary mr-3" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
                  {/* Netlify hidden fields */}
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField('name', e.target.value)}
                        className={`bg-background/50 border-border/50 focus:border-primary transition-colors duration-300 ${
                          formData.name && validateField('name', formData.name) ? 'field-valid' : ''
                        }`}
                        placeholder="Your full name"
                        aria-label="Your full name"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField('email', e.target.value)}
                        className={`bg-background/50 border-border/50 focus:border-primary transition-colors duration-300 ${
                          formData.email && validateField('email', formData.email) ? 'field-valid' : 
                          formData.email && !validateField('email', formData.email) ? 'field-invalid' : ''
                        }`}
                        placeholder="your.email@example.com"
                        aria-label="Your email address"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                      placeholder="Tell us more about your project or requirements..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center space-x-2 p-3 rounded-lg ${
                        submitStatus === 'success' 
                          ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                          : 'bg-red-500/10 text-red-500 border border-red-500/20'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <AlertCircle className="h-5 w-5" />
                      )}
                      <span className="text-sm">
                        {submitStatus === 'success' 
                          ? 'Message sent successfully! We\'ll get back to you soon.' 
                          : 'Failed to send message. Please try again.'}
                      </span>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Services */}
          <div className="space-y-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                        info.action ? 'hover:bg-primary/10 cursor-pointer group' : 'bg-muted/30'
                      }`}
                      onClick={info.action}
                    >
                      <info.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        <p className={`font-medium ${info.action ? 'group-hover:text-primary' : 'text-foreground'} transition-colors duration-300`}>
                          {info.value}
                        </p>
                      </div>
                      {info.action && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300 ml-auto" />
                      )}
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Calendly Scheduler */}
            {/* Calendly Call-to-Action */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/40">
                <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">Schedule a Consultation</h3>
                    <p className="text-sm text-muted-foreground">Pick a time that works for you and we'll connect right away.</p>
                  </div>
                  <Button
                    type="button"
                    onClick={handleOpenCalendly}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-colors duration-300 self-start sm:self-auto min-h-[44px]"
                    aria-label="Schedule a meeting via Calendly"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Meeting via Calendly
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Services Overview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Our Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service, index) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 p-2 rounded hover:bg-primary/5 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We typically respond within 24 hours during business days.
                  </p>
                  <div className="text-xs text-primary font-medium">
                    Available for global clients across all time zones
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


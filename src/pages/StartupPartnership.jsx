import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Rocket, 
  Handshake, 
  Code, 
  Globe, 
  Brain, 
  Target,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Send,
  Sparkles,
  Building2,
  Lightbulb,
  Shield
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { SEO } from '../components/SEO';
import { generateBreadcrumbSchema } from '../components/StructuredData';

export function StartupPartnership() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const formRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    startupName: '',
    founderName: '',
    email: '',
    website: '',
    stage: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Startup Partnership Program', url: '/startup-partnership' }
  ]);

  const services = [
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'Custom AI tools, chatbots, and intelligent automation systems to supercharge your product.'
    },
    {
      icon: Code,
      title: 'Product Development',
      description: 'Full-stack web and mobile app development from concept to launch.'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites that convert visitors into customers.'
    },
    {
      icon: Target,
      title: 'Tech Strategy',
      description: 'Architecture consulting, tech stack guidance, and scalability planning.'
    }
  ];

  const eligibility = [
    'Pre-seed to Series A stage startups',
    'Founding team with domain expertise',
    'Clear problem-solution fit',
    'Market with growth potential',
    'Commitment to long-term partnership'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Apply',
      description: 'Submit your application with startup details and vision.',
      icon: Send
    },
    {
      step: 2,
      title: 'Evaluate',
      description: 'We review your application and assess mutual fit.',
      icon: Target
    },
    {
      step: 3,
      title: 'Agree',
      description: 'Finalize equity terms and partnership agreement.',
      icon: Handshake
    },
    {
      step: 4,
      title: 'Build',
      description: 'We build and grow together as true partners.',
      icon: Rocket
    }
  ];

  const faqs = [
    {
      question: 'What if my startup fails?',
      answer: 'We understand the risks of startups. If your venture doesn\'t succeed, there are no obligations or debts. We share the risk together — that\'s what partnership means.'
    },
    {
      question: 'What\'s the typical equity stake?',
      answer: 'Equity ranges from 2-20% depending on the scope of work, startup stage, and project complexity. We discuss and agree on fair terms together.'
    },
    {
      question: 'Do you sign an NDA?',
      answer: 'Absolutely. We take confidentiality seriously and sign NDAs before any detailed discussions about your startup.'
    },
    {
      question: 'Is it really zero cost?',
      answer: 'Not exactly zero — we charge at-cost for actual expenses (servers, tools, third-party services). But we don\'t charge for our time or take any profit margin. Our return comes from equity.'
    },
    {
      question: 'What stages do you work with?',
      answer: 'We typically work with pre-seed to Series A startups. If you\'re further along, we\'re happy to discuss traditional engagement models.'
    },
    {
      question: 'How long does the partnership last?',
      answer: 'We\'re in it for the long haul. Our partnership continues as your startup grows. Equity terms include vesting schedules tied to milestones.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '3a8eac12-e488-48c1-8d5b-6bddc3882bb0', // Replace with actual key
          subject: `Startup Partnership Application: ${formData.startupName}`,
          from_name: formData.founderName,
          ...formData
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          startupName: '',
          founderName: '',
          email: '',
          website: '',
          stage: '',
          description: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Startup Partnership Program - KMATS"
        description="Partner with KMATS for equity-based tech development. We invest our skills in promising startups, charging only at-cost — because your success is our success."
        keywords="startup partnership, equity investment, tech partner, startup development, AI development, product development, KMATS"
        path="/startup-partnership"
        structuredData={breadcrumbSchema}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Equity-Based Partnership</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Startup Partnership{' '}
              <span className="gradient-text">Program</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We don't just build for startups — we grow with them.
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Instead of traditional pricing, we invest our skills in your vision. 
              We charge only at-cost for expenses and take an equity stake in your success.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                Apply to Partner
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => processRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn How It Works
              </Button>
            </div>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-2xl mx-auto"
          >
            {[
              { value: '2-20%', label: 'Equity Range' },
              { value: '₹0', label: 'Profit Margin' },
              { value: '∞', label: 'Growth Potential' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Partner With <span className="gradient-text">KMATS?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe in the power of partnership. Instead of being just another vendor, 
                we become invested stakeholders in your success. When you win, we win.
              </p>
              <div className="space-y-4">
                {[
                  { icon: TrendingUp, text: 'No profit margin — only at-cost expenses' },
                  { icon: Users, text: 'True partnership with aligned incentives' },
                  { icon: Lightbulb, text: 'Access to AI, tech & product expertise' },
                  { icon: Shield, text: 'Long-term commitment to your success' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <Card className="relative bg-card/60 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8">
                  <Building2 className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">Skill Investment Model</h3>
                  <p className="text-muted-foreground mb-6">
                    We invest our expertise — development time, AI capabilities, and strategic guidance — 
                    in exchange for equity. You only pay for actual third-party costs.
                  </p>
                  <div className="border-t border-border/50 pt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Equity Range</span>
                      <span className="font-semibold text-primary">2% - 20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Our Profit Margin</span>
                      <span className="font-semibold text-primary">₹0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack technology services to build and scale your product.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We <span className="gradient-text">Look For</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We partner with startups that share our vision for growth and innovation.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {eligibility.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple four-step process to become our partner.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <Card className="h-full bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-xs font-semibold text-primary mb-2">STEP {step.step}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                  {openFaq === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 text-muted-foreground"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={formRef} id="apply" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to <span className="gradient-text">Partner?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your startup and let's explore how we can grow together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-card/60 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Application Submitted!</h3>
                    <p className="text-muted-foreground">
                      Thank you for your interest! We'll review your application and get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="startupName" className="block text-sm font-medium text-foreground mb-2">
                          Startup Name *
                        </label>
                        <input
                          type="text"
                          id="startupName"
                          name="startupName"
                          value={formData.startupName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="Your startup name"
                        />
                      </div>
                      <div>
                        <label htmlFor="founderName" className="block text-sm font-medium text-foreground mb-2">
                          Founder Name *
                        </label>
                        <input
                          type="text"
                          id="founderName"
                          name="founderName"
                          value={formData.founderName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="you@startup.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-foreground mb-2">
                          Website / Pitch Deck URL
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="https://..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="stage" className="block text-sm font-medium text-foreground mb-2">
                        Startup Stage *
                      </label>
                      <select
                        id="stage"
                        name="stage"
                        value={formData.stage}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      >
                        <option value="">Select your stage...</option>
                        <option value="idea">💡 Idea Stage — Just an idea, no product yet</option>
                        <option value="pre-seed">🌱 Pre-seed — Building MVP, validating concept</option>
                        <option value="seed">🚀 Seed — Product launched, early traction</option>
                        <option value="series-a">📈 Series A — Scaling with proven product-market fit</option>
                      </select>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Not sure? Pick the closest match — we'll discuss during our call.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                        Tell us about your startup *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                        placeholder="What problem are you solving? Who is your target audience? What's your vision?"
                      />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting, you agree to our NDA terms. We'll keep your information confidential.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import { motion, useInView } from 'framer-motion';
import { ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useRef } from 'react';

export function ShopifyBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  return (
    <section ref={ref} className="py-12 overflow-hidden relative">
      {/* Shopify green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#95BF47]/10 via-[#5E8E3E]/5 to-[#95BF47]/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 bg-card/60 backdrop-blur-sm border border-[#95BF47]/30 rounded-2xl p-6 md:p-8 hover:border-[#95BF47]/50 transition-all duration-300"
        >
          {/* Left side - Icon and Text */}
          <div className="flex items-center gap-4 md:gap-6">
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: -10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#95BF47] to-[#5E8E3E] rounded-xl flex items-center justify-center shadow-lg"
            >
              <ShoppingBag className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </motion.div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-2 mb-1"
              >
                <Sparkles className="w-4 h-4 text-[#95BF47]" />
                <span className="text-sm font-medium text-[#95BF47]">New Service</span>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl font-bold text-foreground"
              >
                We Build Custom Shopify Themes
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-sm md:text-base text-muted-foreground mt-1"
              >
                Brand-first, conversion-optimized e-commerce experiences
              </motion.p>
            </div>
          </div>

          {/* Right side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex-shrink-0"
          >
            <Button
              onClick={() => navigate('/marketplace')}
              className="bg-gradient-to-r from-[#95BF47] to-[#5E8E3E] hover:from-[#7BA83D] hover:to-[#4A7232] text-white font-medium px-6 py-2.5 rounded-lg group transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Templates
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

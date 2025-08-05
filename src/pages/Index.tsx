import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navigation />
        
        {/* Hero */}
        <section id="home">
          <HeroSection />
        </section>
        
        {/* Story Sections with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <StorySection 
            number="001"
            title="Sometimes building a tech solution can feel like navigating uncharted territory..."
          />
          
          <StorySection 
            number="002" 
            title="You have an idea but struggle to find the right technical approach..."
          />
          
          <StorySection 
            number="003"
            title="What if your vision could become a powerful digital reality?"
            subtitle="SorrshaTech transforms complex ideas into cutting-edge solutions with precision engineering and innovative thinking."
          />
        </motion.div>
        
        {/* Services */}
        <section id="services">
          <ServicesSection />
        </section>
        
        {/* About */}
        <section id="about">
          <AboutSection />
        </section>
        
        {/* Portfolio */}
        <section id="portfolio">
          <PortfolioSection />
        </section>
        
        {/* Team */}
        <section id="team">
          <TeamSection />
        </section>
        
        {/* Contact */}
        <section id="contact">
          <ContactSection />
        </section>
        
        {/* Enhanced Footer */}
        <motion.footer 
          className="relative py-16 px-6 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated gradient background */}
          <motion.div 
            className="absolute inset-0 -z-10"
            style={{
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #3b82f6)',
              backgroundSize: '300% 300%',
              opacity: 0.9
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          </motion.div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div 
              className="flex items-center justify-center gap-2 mb-6"
              whileHover={{ 
                scale: 1.05,
                textShadow: '0 0 15px rgba(255,255,255,0.5)'
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                SorrshaTech
              </span>
            </motion.div>
            
            <motion.p 
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building the future of technology, one solution at a time.
            </motion.p>
            
            <motion.p 
              className="text-sm text-white/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              © {new Date().getFullYear()} SorrshaTech. All rights reserved.
            </motion.p>
          </div>
        </motion.footer>
      </div>
    </SmoothScroll>
  );
};

export default Index;

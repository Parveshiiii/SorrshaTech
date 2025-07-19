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
          className="py-12 px-6 border-t border-border/50 bg-gradient-secondary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              className="flex items-center justify-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-gradient">ST</div>
              <span className="text-lg font-medium">SorrshaTech</span>
            </motion.div>
            <motion.p 
              className="text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building the future of technology, one solution at a time.
            </motion.p>
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              © 2025 SorrshaTech. All rights reserved.
            </motion.p>
          </div>
        </motion.footer>
      </div>
    </SmoothScroll>
  );
};

export default Index;

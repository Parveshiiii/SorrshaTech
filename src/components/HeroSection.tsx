import { useEffect, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Rocket, Briefcase, Cpu, Database, Cloud, Shield, BrainCircuit } from "lucide-react";
import heroTech from "@/assets/hero-tech.jpg";
import AnimatedParticles from "./AnimatedParticles";
import Magnetic from "./Magnetic";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden morphing-bg">
      {/* Animated Particles */}
      <AnimatedParticles count={80} color="rgba(59, 130, 246, 0.6)" size={3} speed={0.5} />
      
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroTech})`,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </motion.div>
      
      {/* Tech Grid Overlay with Animation */}
      <div className="absolute inset-0 tech-grid opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Logo/Brand with Enhanced Animation */}
          <motion.div 
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "backOut" }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-8xl font-bold text-gradient animate-glow glitch"
              data-text="ST"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ST
            </motion.h1>
            <motion.p 
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-gradient mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              SORRSHA<span className="text-primary">TECH</span>
            </motion.p>
          </motion.div>
          
          {/* Main Headline with Staggered Animation */}
          <div className="space-y-4 md:space-y-6 mb-12">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building the
            </motion.h2>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-gradient animate-float">Future</span> of Technology
            </motion.h2>
            <motion.p 
              className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We craft cutting-edge digital solutions that transform ideas into revolutionary experiences
            </motion.p>
          </div>

          {/* Action Buttons - Static */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8 py-6 text-lg font-medium rounded-full"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-6 text-lg rounded-full border-2 border-primary/20"
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Briefcase className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </div>
          
          {/* Tech Icons with Enhanced Animations */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-16 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[
              { icon: Code2, label: "Development" },
              { icon: Cpu, label: "Technology" },
              { icon: Database, label: "Data" },
              { icon: Cloud, label: "Cloud" },
              { icon: Shield, label: "Security" },
              { icon: BrainCircuit, label: "AI/ML" }
            ].map((item, index) => (
              <motion.div 
                key={item.label}
                className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator with Enhanced Animation */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [-20, 0, 10, 30]
          }}
          transition={{ 
            duration: 2,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Parallax from "./Parallax";

interface StorySectionProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const StorySection = ({ number, title, subtitle, className = "" }: StorySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Parallax speed={0.3}>
      <section 
        ref={sectionRef}
        className={`story-section ${className}`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.2
            }}
          >
            {/* Section Number */}
            <motion.div 
              className="text-sm font-mono text-primary mb-8 tracking-widest"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {number}
            </motion.div>
            
            {/* Main Title with Word Animation */}
            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 md:mb-8">
              {title.split(' ').map((word, index) => (
                <motion.span 
                  key={index} 
                  className={index % 3 === 1 ? 'text-primary' : ''}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={isVisible ? { 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0 
                  } : { 
                    opacity: 0, 
                    y: 50, 
                    rotateX: -90 
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    color: "hsl(var(--primary))",
                    transition: { duration: 0.2 }
                  }}
                >
                  {word}{' '}
                </motion.span>
              ))}
            </motion.h2>
            
            {/* Subtitle */}
            {subtitle && (
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
};

export default StorySection;
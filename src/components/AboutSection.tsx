import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Target, Rocket } from "lucide-react";
import techBackground from "@/assets/tech-background.jpg";

const stats = [
  { value: "200+", label: "Startups Helped" },
  { value: "15+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "7", label: "Years Experience" }
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every line of code, every design decision is crafted with meticulous attention to detail."
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We push the boundaries of what's possible with emerging technologies and creative solutions."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Our multidisciplinary approach brings together the best minds in tech and design."
  }
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${techBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-accent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-mono text-primary mb-4 tracking-widest">
            005
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-8">
            About <span className="text-gradient">SorrshaTech</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 text-muted-foreground">
              SorrshaTech is a cutting-edge tech consultancy founded in 2018 with a mission to 
              transform businesses through innovative digital solutions and strategic technology consulting.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-8 text-muted-foreground">
              We are driven by a shared passion for blending technology and creativity. 
              This is reflected in our process; we design with technology in mind and 
              we code with a focus on user experience. We believe in the power of 
              elegant solutions that scale.
            </p>
            
            {/* Buttons removed as requested */}
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Values */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="flex items-start gap-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
                  style={{ animationDelay: `${(index + 3) * 200}ms` }}
                >
                  <value.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";
import { 
  CodeSquare, 
  Briefcase, 
  CloudCog, 
  DatabaseZap, 
  ShieldCheck, 
  BrainCircuit,
  GlobeLock,
  BarChart3,
  Cpu,
  Network,
  ServerCog,
  KeyRound,
  BrainCog
} from "lucide-react";

const services = [
  {
    icon: CodeSquare,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies and modern frameworks."
  },
  {
    icon: Briefcase,
    title: "Tech Consultancy",
    description: "Expert guidance and strategic advice to leverage technology for business growth and digital transformation."
  },
  {
    icon: CloudCog,
    title: "Cloud Architecture",
    description: "Scalable cloud solutions that grow with your business and optimize performance."
  },
  {
    icon: DatabaseZap,
    title: "Data Engineering",
    description: "Robust data pipelines and analytics solutions for data-driven decision making."
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions to protect your digital assets and infrastructure."
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Intelligent automation and ML models that revolutionize business processes."
  },
  {
    icon: Network,
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategies that modernize your operations."
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Connected device ecosystems and smart technology implementations."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-secondary relative overflow-hidden">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-primary/10 rounded-full"
        animate={{
          y: [-20, 20],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <motion.div 
              className="text-sm font-mono text-primary mb-4 tracking-widest"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              004
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-light mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              What We <span className="text-gradient">Build</span>
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              SorrshaTech delivers comprehensive technology solutions across multiple domains, 
              from web development to AI implementation.
            </motion.p>
          </div>
        </ScrollReveal>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal 
              key={service.title}
              direction="up"
              delay={index * 100}
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="h-full"
              >
                <Card className="group hover:shadow-glow transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm h-full hover-lift">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="mb-4 flex justify-center">
                      <service.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors flex-shrink-0">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import workspaceImage from "@/assets/workspace.jpg";
import heroTechImage from "@/assets/hero-tech.jpg";
import techBackgroundImage from "@/assets/tech-background.jpg";

const projects = [
  {
    title: "QuantumFlow AI",
    category: "Machine Learning Platform",
    description: "Advanced AI-powered analytics platform for real-time data processing and predictive modeling.",
    image: workspaceImage,
    imageAlt: "AI and data visualization dashboard",
    tags: ["React", "Python", "TensorFlow", "AWS"],
    featured: true
  },
  {
    title: "MarketPulse Analytics",
    category: "Business Intelligence",
    description: "Comprehensive market analysis tool with real-time data visualization and reporting.",
    image: techBackgroundImage,
    imageAlt: "Data visualization and analytics dashboard",
    tags: ["TypeScript", "D3.js", "Python", "PostgreSQL"]
  },
  {
    title: "HealthTrack 360",
    category: "Healthcare Platform",
    description: "Integrated healthcare management system for patient records and telemedicine.",
    image: workspaceImage,
    imageAlt: "Healthcare application interface",
    tags: ["React Native", "GraphQL", "MongoDB", "AWS"]
  },
  {
    title: "EduConnect",
    category: "E-Learning Platform",
    description: "Interactive online learning platform with video streaming and real-time collaboration.",
    image: heroTechImage,
    imageAlt: "Online learning platform interface",
    tags: ["Next.js", "Node.js", "WebRTC", "MongoDB"]
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-mono text-primary mb-4 tracking-widest">
            006
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-8">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of our most impactful projects that showcase our expertise 
            in delivering cutting-edge technology solutions.
          </p>
        </div>
        
        {/* Featured Project */}
        <div className="mb-16">
          <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src={projects[0].image} 
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
              </div>
              <CardContent className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-sm font-mono text-primary mb-4 tracking-wider">
                  FEATURED PROJECT
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{projects[0].title}</h3>
                <p className="text-accent font-medium mb-4">{projects[0].category}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[0].tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4">
                  {/* Project tags and description remain */}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {projects.slice(1).map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardContent className="p-4 sm:p-6">
                <p className="text-accent font-medium text-sm">{project.category}</p>
                <h3 className="text-xl font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-border/20">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-mono bg-primary/5 text-primary rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Infinity Section */}
        <div className="mt-24 text-center">
          <div className="relative inline-block">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
              Explore the <span className="text-gradient">Infinity</span>
            </h3>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Endless possibilities await. Let's create something extraordinary together.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="relative w-24 h-12">
              <div className="absolute inset-0 border-2 border-primary/30 rounded-full"></div>
              <div className="absolute inset-2 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border-2 border-primary/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

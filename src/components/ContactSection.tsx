import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@sorrshatech.com",
    href: "mailto:contact@sorrshatech.com"
  },
  {
    icon: Phone,
    title: "India Phone",
    value: "+91 80536 65373",
    href: "tel:+918053665373"
  },
  {
    icon: Phone,
    title: "USA Phone",
    value: "+1 214 316 0327",
    href: "tel:+12143160327"
  },
  {
    icon: MapPin,
    title: "India Office",
    value: "Plot number # 286, 2nd Floor Sector 15A Noida 201301 U.P. India",
    href: "#"
  },
  {
    icon: MapPin,
    title: "USA Office",
    value: "300 S GARRET CPY STE 500, PLANO, TX 75074, USA",
    href: "#"
  }
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" }
];

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-mono text-primary mb-4 tracking-widest">
            007
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-8">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team 
            and let's discuss your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center mt-16">
                Ready to start your next project or join our growing team?<br />
                <span className="text-lg font-normal mt-4 block leading-relaxed px-4">
                  Whether you're looking for a custom software solution, need expert consultation,
                  or want to be part of our innovative team, we'd love to hear from you. 
                  Our dedicated professionals are committed to delivering excellence and 
                  helping you achieve your business goals. Let's collaborate to turn your 
                  ideas into reality with cutting-edge technology and creative solutions.
                </span>
              </h3>
              <form className="space-y-6">
                {/* Form fields removed as requested */}
                
                <Button 
                  size="lg" 
                  className="w-full h-14 text-base mt-56"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:contact@sorrshatech.com';
                  }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  contact@sorrshatech.com
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Get in touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're always excited to discuss new projects and opportunities. 
                Whether you have a specific idea in mind or just want to explore 
                possibilities, we'd love to hear from you.
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-border/50 hover:bg-card/50 transition-colors group"
                >
                  <info.icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {info.title}
                    </p>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Follow us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-card/30 border border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all group"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
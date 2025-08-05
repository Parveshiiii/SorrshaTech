import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import founderImage from "@/assets/Founder.png";
import cofounderImage from "@/assets/cofounder.png";

const teamMembers = [
  {
    name: "Mr. Sohan Sharma",
    role: "Founder & Director",
    image: founderImage,
    description: [
      "Mr. Sohan Sharma is the visionary founder and Director of SorrshaTech, a fast-scaling tech company with international headquarters spanning the United States, Singapore, UAE, Noida, and Russia. Known for his strategic foresight and entrepreneurial agility, Mr. Sharma also serves in leadership roles across a diverse portfolio of ventures including Sorrsha Multinational Private Limited, Meifarma, SorrshaBuy, BodyVista, and Agro Farms2Home, demonstrating his versatility across industrial manufacturing, agritech, consumer goods, and digital commerce.",
      "Under his leadership, SorrshaTech was incorporated on 2018, with a core mission to revolutionize machinery and equipment manufacturing through innovation, scalability, and precision-driven technology. His relentless commitment to excellence has transformed SorrshaTech into a rising force in global industrial tech — blending engineering prowess with an entrepreneurial DNA that resonates across markets."
    ]
  },
  {
    name: "Jarret Willey",
    role: "Co-Founder & CFO",
    image: cofounderImage,
    description: [
      "Jarret Willey is the Chief Financial Officer and Co-Founder of SorrshaTech, bringing over 25 years of expertise in tax strategy, financial architecture, and business structuring. A pioneer in tax technology, Jarret began his career developing the first automated tax software at CLR FastTax — now known as GoSystem RS — and later designed its electronic filing system, which remains a cornerstone of modern tax compliance.",
      "Before co-founding SorrshaTech, Jarret led high-level financial operations at firms across Texas, including his own consultancy, JW Tax & Consulting, where he specialized in tax optimization for corporations, investors, and high-net-worth individuals. His deep understanding of IRS code, wealth preservation, and financial systems has saved clients over $100 million through advanced mitigation techniques.",
      "At SorrshaTech, Jarret's financial leadership ensures that the company's industrial tech innovations are backed by resilient, scalable business models. His ability to merge fiscal discipline with entrepreneurial agility makes him a driving force behind the company's global expansion and long-term sustainability."
    ]
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 bg-background">
      <div className="max-w-5xl mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10 md:mb-12">
          <div className="text-xs sm:text-sm font-mono text-primary mb-2 sm:mb-3 md:mb-4 tracking-widest">
            OUR LEADERSHIP
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 md:mb-8">
            Leadership <span className="text-gradient">Vision</span>
          </h2>
        </div>

        {/* Leadership Profiles */}
        <div className="w-full space-y-8 md:space-y-10">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-500 w-full"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Member Image - Left side */}
                <div className="w-full md:w-5/12 lg:w-4/12 bg-gradient-to-b from-primary/5 to-primary/10 p-6 sm:p-8 flex items-center justify-center">
                  <div className="relative w-full max-w-xs">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl -z-10"></div>
                    <Avatar className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 mx-auto border-2 sm:border-3 border-primary/20 shadow-lg">
                      <AvatarImage 
                        src={member.image} 
                        alt={member.name}
                        className="object-cover object-top"
                        style={{ objectPosition: 'center 20%' }}
                      />
                      <AvatarFallback className="text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                {/* Member Info - Right side */}
                <div className="w-full md:w-7/12 lg:w-8/12 p-6 sm:p-8 flex flex-col">
                  <CardHeader className="p-0 mb-4 sm:mb-6">
                    <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-light text-left">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-primary/80 text-left mt-1">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 flex-1">
                    <div className="space-y-3 sm:space-y-4">
                      {member.description.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-sm sm:text-base text-muted-foreground leading-relaxed text-left">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

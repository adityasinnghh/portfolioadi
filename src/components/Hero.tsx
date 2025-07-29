import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/aditya-profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding gradient-soft">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="text-gradient">Aditya Singh</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-muted-foreground">
                Front-End Developer & Web Designer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Motivated front-end developer seeking to leverage modern web technologies 
              to build responsive, user-focused web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-primary hover:shadow-large transition-all duration-300"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary-soft"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Profile Picture Placeholder */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20 flex items-center justify-center shadow-large overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Aditya Singh - Front-End Developer" 
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full gradient-primary animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-primary/10 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
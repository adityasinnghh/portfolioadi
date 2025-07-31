import { ArrowRight, Download, Sparkles, Code, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/aditya-profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-soft">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Enhanced Content */}
          <div className="space-y-10 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for opportunities
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-foreground">Hello, I'm</span>
                  <span className="text-gradient block">Aditya Singh</span>
                </h1>
                <div className="flex items-center gap-3 text-2xl lg:text-3xl font-medium text-muted-foreground">
                  <Code className="h-8 w-8 text-primary" />
                  <span>Front-End Developer</span>
                  <span className="text-primary">•</span>
                  <Palette className="h-8 w-8 text-primary" />
                  <span>Web Designer</span>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Motivated front-end developer seeking to leverage modern web technologies 
                to build <span className="text-primary font-semibold">responsive</span>, 
                <span className="text-primary font-semibold"> user-focused</span> web applications 
                that make a difference.
              </p>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-primary hover:shadow-large transition-all duration-300 group px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary-soft px-8 py-4 text-lg font-semibold transition-all duration-300 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">100%</div>
                <div className="text-sm text-muted-foreground">Passion</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Profile Picture */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative group">
              {/* Main profile container */}
              <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/20 shadow-2xl overflow-hidden backdrop-blur-sm">
                <img 
                  src={profileImage} 
                  alt="Aditya Singh - Front-End Developer" 
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-60 rounded-full"></div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg animate-pulse">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-accent/80 backdrop-blur-sm flex items-center justify-center shadow-lg animate-pulse delay-300">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute top-6 -left-4 w-8 h-8 rounded-full bg-primary/40 animate-pulse delay-500"></div>
                <div className="absolute -top-2 left-1/3 w-6 h-6 rounded-full bg-accent/60 animate-pulse delay-700"></div>
              </div>
              
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/10 scale-110 animate-pulse delay-1000"></div>
              <div className="absolute inset-0 rounded-full border border-primary/5 scale-125 animate-pulse delay-1200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

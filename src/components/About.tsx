import { GraduationCap, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting to know the person behind the code
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6 animate-slide-up">
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm <strong className="text-foreground">Aditya Singh</strong>, 
                  a passionate front-end developer with a keen eye for creating beautiful, 
                  functional web experiences. I believe in the power of clean code and 
                  user-centered design.
                </p>
                <p>
                  Currently pursuing my B.Tech in Computer Science, I'm constantly learning 
                  and exploring new technologies to stay at the forefront of web development. 
                  My goal is to bridge the gap between design and functionality.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to 
                  open-source projects, and sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>
          
          {/* Education Section */}
          <div className="space-y-6 animate-slide-up delay-200">
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Education</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20"></div>
                
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-medium">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>2023 - 2026</span>
                      </div>
                      <h4 className="text-xl font-semibold">B.Tech in Computer Science</h4>
                      <p className="text-muted-foreground">Dronacharya Group of Institutions</p>
                      <p className="text-sm text-muted-foreground">
                        Currently pursuing undergraduate degree with focus on software 
                        development, algorithms, and modern web technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="card-elevated p-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">3+</div>
                  <div className="text-sm text-muted-foreground">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">5+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
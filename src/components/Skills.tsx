import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "HTML", level: 95, icon: "🌐" },
    { name: "CSS", level: 90, icon: "🎨" },
    { name: "JavaScript", level: 85, icon: "⚡" },
    { name: "React.js", level: 80, icon: "⚛️" },
    { name: "Next.js", level: 75, icon: "🚀" },
    { name: "Git & GitHub", level: 88, icon: "📝" },
  ];

  const tools = [
    "Visual Studio Code",
    "Figma",
    "Chrome DevTools",
    "Postman",
    "Netlify",
    "Vercel"
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8 animate-slide-up">
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-semibold mb-8 text-gradient">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-8 animate-slide-up delay-200">
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-semibold mb-8 text-gradient">Tools & Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={tool}
                    className="p-4 bg-secondary/50 rounded-lg text-center hover:bg-primary-soft transition-colors duration-300 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-sm font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Goals */}
            <div className="card-elevated p-8">
              <h3 className="text-xl font-semibold mb-6 text-gradient">Currently Learning</h3>
              <div className="space-y-3">
                {["TypeScript", "Node.js", "GraphQL", "Docker"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full gradient-primary"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
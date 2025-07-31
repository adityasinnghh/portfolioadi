import { ExternalLink, Github, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const featuredProject = {
    title: "E-commerce Website (Amazon Clone)",
    description: "A fully responsive Amazon homepage replica demonstrating layout design, product listing, and interactive UI components. Built with modern web technologies focusing on user experience and responsive design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive product grid layout",
      "Interactive navigation menu",
      "Shopping cart functionality",
      "Search bar with filters",
      "Product detail views",
      "Mobile-optimized design"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    liveUrl: "https://adityasinnghh.github.io/Amazon-web-page1/index.html",
    githubUrl: "https://github.com/adityasinnghh/Amazon-web-page1"
  };

  const additionalProjects = [
    {
      title: "Personal Blog",
      description: "A modern blog website with clean design and smooth animations.",
      tech: ["React", "CSS"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts.",
      tech: ["JavaScript", "API"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b"
    },
    {
      title: "Task Manager",
      description: "Productivity app for managing daily tasks and projects.",
      tech: ["React", "Local Storage"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest work and development projects
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <div className="card-elevated overflow-hidden animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <ShoppingCart className="w-16 h-16 text-primary mx-auto" />
                    <div>
                      <h4 className="text-lg font-semibold">E-commerce Project</h4>
                      <p className="text-muted-foreground">Amazon Clone Interface</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured Project
                  </span>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-8 lg:p-12 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{featuredProject.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>
                
                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary-soft text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {featuredProject.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full gradient-primary"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button asChild className="gradient-primary">
                    <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary-soft">
                    <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Code = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export default Portfolio;
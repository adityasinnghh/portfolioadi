import { Code, Palette, Smartphone, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Front-End Development",
      description: "Building clean, interactive, and responsive user interfaces using React and Next.js with modern development practices.",
      features: ["React.js Applications", "Next.js Projects", "Component Libraries", "API Integration"]
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "Creating visually appealing layouts with a focus on UX and responsiveness that engage users effectively.",
      features: ["UI/UX Design", "Responsive Layouts", "Design Systems", "User Experience"]
    },
    {
      icon: Smartphone,
      title: "Responsive Development",
      description: "Ensuring your website looks and works perfectly across all devices and screen sizes.",
      features: ["Mobile-First Design", "Cross-Browser Support", "Performance Optimization", "Accessibility"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing websites for speed, SEO, and user experience with modern best practices.",
      features: ["Speed Optimization", "SEO Implementation", "Code Splitting", "Bundle Optimization"]
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="card-elevated card-hover p-8 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 shadow-medium">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full gradient-primary"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
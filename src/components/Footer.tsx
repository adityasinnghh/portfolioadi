import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/adityasingh",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/aditya-singh-008315203",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:adi965051@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container-max">
        <div className="py-12 px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo & Description */}
            <div className="text-center md:text-left">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-200 mb-2"
              >
                Aditya Singh
              </button>
              <p className="text-muted-foreground text-sm">
                Front-End Developer & Web Designer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:shadow-medium"
                    aria-label={link.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
                Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> by Aditya Singh
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Available for freelance work</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <div className="flex items-center gap-6">
              <button 
                onClick={scrollToTop}
                className="hover:text-primary transition-colors duration-200"
              >
                Back to top
              </button>
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
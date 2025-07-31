import { useState } from "react";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration
  const SERVICE_ID = "service_p8ri49j";
  const TEMPLATE_ID = "template_k1gdozk";
  const PUBLIC_KEY = "Siulnlaiwj64VkGtH";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Aditya Singh",
        },
        PUBLIC_KEY
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adi965051@gmail.com",
      href: "mailto:adi965051@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9315653702",
      href: "tel:+919315653702"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aditya-singh-008315203",
      href: "https://linkedin.com/in/aditya-singh-008315203"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-semibold mb-8 text-gradient">Let's Connect</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300 group"
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-medium group-hover:shadow-large transition-shadow duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-muted-foreground text-sm">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="card-elevated p-8 gradient-soft">
              <h4 className="text-xl font-semibold mb-4">Ready to Start?</h4>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Let's discuss your ideas and make them reality!
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary-soft">
                  Download Resume
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary-soft">
                  View GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up delay-200">
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-semibold mb-8 text-gradient">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gradient-primary hover:shadow-large transition-all duration-300"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
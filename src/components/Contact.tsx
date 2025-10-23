import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit form to FormSubmit
      const form = e.currentTarget;
      const formDataObj = new FormData(form);
      
      const response = await fetch("https://formsubmit.co/afzaljawadkhan@gmail.com", {
        method: "POST",
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to build something amazing together? Let's discuss your AI/ML project or explore collaboration opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're looking to hire an AI engineer, need consulting on ML systems, 
                  or want to collaborate on cutting-edge projects, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <a href="mailto:afzaljawadkhan@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                      afzaljawadkhan@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <a href="tel:+923379755627" className="text-muted-foreground hover:text-accent transition-colors">
                      +92 337 9755627
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-muted-foreground">Islamabad, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Linkedin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">LinkedIn</p>
                    <a 
                      href="http://www.linkedin.com/in/afzal-khan-939150192" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <a href={`${import.meta.env.BASE_URL}Afzal_Khan_Resume.pdf`} download>
                  <Button className="btn-hero w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Full Resume
                  </Button>
                </a>
                <a 
                  href="http://www.linkedin.com/in/afzal-khan-939150192" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Linkedin className="w-4 h-4 mr-2" />
                    View LinkedIn Profile
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="project-card">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden FormSubmit Configuration Fields */}
                <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@company.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project, role opportunity, or collaboration idea..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
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
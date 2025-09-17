import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-electric rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 animate-scale-in">
          <img
            src="/afzal-photo.jpg"
            alt="Afzal Khan - AI Engineer"
            className="w-40 h-40 rounded-full mx-auto shadow-large border-4 border-accent/20 hover:border-accent/40 transition-all duration-300"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up text-white">
          <span className="block">Afzal Khan</span>
          <span className="block text-accent text-4xl md:text-5xl mt-2">
            AI Engineer & Agent Systems Architect
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Building production AI agents, RAG systems, and edge-optimized ML for real-world products. 
          Currently architecting agent ecosystems <span className="text-accent font-semibold">@ ClaimbAI</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={scrollToProjects}
            className="btn-hero text-lg px-8 py-4"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <a href={`${import.meta.env.BASE_URL}Afzal_Khan_Resume.pdf`} download>
            <Button
              variant="outline"
              className="btn-hero-outline text-lg px-8 py-4"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Résumé
            </Button>
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-white/80 space-y-2 mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p>afzaljawadkhan@gmail.com • +92 337 9755627</p>
          <a 
            href="http://www.linkedin.com/in/afzal-khan-939150192" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToProjects}
            className="text-white/60 hover:text-white transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
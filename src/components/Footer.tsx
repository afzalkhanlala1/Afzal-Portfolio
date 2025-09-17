import { Heart, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left: Copyright */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-sm opacity-80">
              © {currentYear} Afzal Khan. Built with
            </span>
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-sm opacity-80">
              and modern tech.
            </span>
          </div>

          {/* Right: Links */}
          <div className="flex items-center space-x-6">
            <a
              href="mailto:afzaljawadkhan@gmail.com"
              className="flex items-center space-x-2 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href="http://www.linkedin.com/in/afzal-khan-939150192"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-6 pt-6 text-center">
          <p className="text-xs opacity-60">
            AI Engineer • Agent Systems Architect • Building the future of intelligent automation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
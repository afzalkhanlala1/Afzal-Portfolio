import { Bot, Brain, Code, Cpu } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Bot,
      title: "Agent Systems",
      description: "Architecting multi-agent ecosystems with secure connectors and production backends"
    },
    {
      icon: Brain,
      title: "AI/ML Pipeline",
      description: "RAG systems, LLM workflows, and edge-optimized inference for real-world applications"
    },
    {
      icon: Code,
      title: "Production Focus",
      description: "Building scalable ML backends with CI/CD, monitoring, and enterprise-grade security"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "TensorRT optimization, quantization, and deployment on Jetson Orin platforms"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-accent font-semibold">Afzal Khan</span>, an AI engineer from Islamabad who designs and ships 
                agent-first ecosystems, production ML backends, and edge-optimized inference pipelines. 
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I build RAG and SLM workflows, secure connectors for email/calendar systems, and deploy 
                scalable solutions on Cloud Run, Firebase Functions, and Jetson Orin platforms.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I blend <span className="text-electric font-semibold">product focus with hands-on engineering</span> — 
                from data warehouses to real-time computer vision, creating systems that solve real business problems.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <div className="text-3xl font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <div className="text-3xl font-bold text-electric">200M+</div>
                  <div className="text-sm text-muted-foreground">Rows Processed</div>
                </div>
              </div>
            </div>

            {/* Right: Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="project-card text-center group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <item.icon className="w-8 h-8 text-accent mx-auto group-hover:text-electric transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
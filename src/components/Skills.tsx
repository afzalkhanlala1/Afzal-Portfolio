import { Bot, Brain, Cloud, Code, Database, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI & LLMs",
      skills: ["LangChain", "LlamaIndex", "RAG Systems", "Local SLMs (Ollama)", "Hugging Face", "Whisper"]
    },
    {
      icon: Bot,
      title: "Agents & Integrations",
      skills: ["Google ADK", "n8n", "Zapier", "OAuth Connectors", "Multi-Agent Systems", "Workflow Automation"]
    },
    {
      icon: Code,
      title: "ML/DL Frameworks",
      skills: ["PyTorch", "TensorFlow", "YOLO (v9-v11)", "OpenCV", "scikit-learn", "Transfer Learning"]
    },
    {
      icon: Zap,
      title: "Edge & Optimization",
      skills: ["TensorRT", "ONNX", "Model Quantization", "Jetson Orin", "GPU Optimization", "Real-time Inference"]
    },
    {
      icon: Cloud,
      title: "Cloud & MLOps",
      skills: ["Docker", "Kubernetes", "Cloud Run", "Firebase Functions", "CI/CD", "Monitoring"]
    },
    {
      icon: Database,
      title: "Data & Backend",
      skills: ["PostgreSQL", "Vector DBs", "ETL Pipelines", "FastAPI", "Node.js", "AWS Glue"]
    }
  ];

  const languages = ["Python", "C++", "Rust", "Node.js", "SQL", "React", "Qt", "MATLAB"];
  
  const certifications = [
    "MIT MicroMasters (Statistics & Data Science) — In Progress",
    "McKinsey Forward Program",
    "Google Data Analytics Certificate", 
    "Tableau Data Analysis Certification",
    "Advanced SQL (Udacity)",
    "UI/UX Design (CalArts)",
    "CS50 Computer Science"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Full-stack AI engineering with expertise spanning from edge optimization to cloud deployment.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="project-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <category.icon className="w-6 h-6 text-accent mr-3 group-hover:text-electric transition-colors duration-300" />
                  <h3 className="text-lg font-semibold text-card-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-pill text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages & Tools */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Programming Languages */}
            <div className="project-card">
              <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center">
                <Code className="w-5 h-5 text-accent mr-2" />
                Programming Languages & Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <span
                    key={index}
                    className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:shadow-glow transition-all duration-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="project-card">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Education & Certifications
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-accent">BSc Mechatronics</h4>
                  <p className="text-sm text-muted-foreground">National University of Sciences & Technology (NUST)</p>
                </div>
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {cert}
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
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "ClaimbAI Agent Platform",
      summary: "Architected multi-agent system integrating Google ADK, n8n, FastAPI and Cloud Run; built secure Gmail/Calendar/Drive connectors and RAG-style retrieval.",
      tech: ["Google ADK", "n8n", "FastAPI", "PostgreSQL", "Firebase", "Cloud Run"],
      category: "Production System",
      featured: true
    },
    {
      title: "Advanced Sports Performance Analytics Platform",
      summary: "Predictive models for player positioning and performance dashboards for coaching staff.",
      tech: ["OpenCV", "PyTorch", "React", "JavaScript"],
      category: "Computer Vision"
    },
    {
      title: "AI Agent Ecosystem for Business Automation",
      summary: "Multi-agent automation for Sales, HR, Marketing and Engineering with a central AI controller.",
      tech: ["Node.js", "n8n", "RAG Patterns", "LangChain"],
      category: "Agent Systems"
    },
    {
      title: "Face Recognition Software",
      summary: "High-performance face recognition using transfer learning with AlexNet; >90% accuracy.",
      tech: ["MATLAB", "Transfer Learning", "AlexNet"],
      category: "Deep Learning"
    },
    {
      title: "Adaptive Language Learning Web App",
      summary: "Firebase + Gemini API; LLM-curated lessons and conversational practice with progress tracking.",
      tech: ["Firebase", "Gemini API", "React", "LLM Integration"],
      category: "AI Application"
    },
    {
      title: "Local Research AI Agent",
      summary: "Personal assistant with local LLM integration, SERP API, and Claude Desktop MCP client for research automation.",
      tech: ["Ollama", "n8n", "SERP API", "OpenAI APIs", "MCP"],
      category: "Research Tools"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of production AI systems, agent platforms, and ML solutions I've architected and deployed.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-card group ${project.featured ? 'lg:col-span-2' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="skill-pill text-xs">{project.category}</span>
                  {project.featured && (
                    <span className="text-xs text-accent font-semibold bg-accent-light px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Summary */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:border-accent group-hover:text-accent transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group-hover:text-accent transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 py-3">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
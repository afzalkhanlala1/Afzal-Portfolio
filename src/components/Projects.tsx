import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";

const Projects = () => {
  const projects = getFeaturedProjects();

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
                  <a href="https://github.com/afzalkhanlala1" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:border-accent group-hover:text-accent transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </a>
                  <a href="https://github.com/afzalkhanlala1" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:text-accent transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="px-8 py-3"
              onClick={() => window.location.href = '/projects'}
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { ExternalLink, Github, ArrowLeft, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllProjects } from "@/data/projects";

const Projects = () => {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
            <h1 className="text-lg font-semibold">All Projects</h1>
            <div></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Project Portfolio
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive showcase of AI systems, agent platforms, computer vision solutions, 
              and data engineering projects that drive real-world impact.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="project-card group h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Badge className="text-xs bg-accent text-accent-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    
                    {project.timeline && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {project.timeline}
                      </div>
                    )}
                    
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Achievements */}
                    {project.achievements && project.achievements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-card-foreground mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-accent" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Impact */}
                    {project.impact && (
                      <div className="mb-6">
                        <div className="bg-accent-light border border-accent/20 rounded-lg p-4">
                          <h4 className="text-sm font-semibold text-accent mb-2">Impact</h4>
                          <p className="text-sm text-muted-foreground">{project.impact}</p>
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-card-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-16 py-12 bg-gradient-subtle rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Interested in My Work?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to discuss new opportunities and challenging projects. 
                Let's connect and explore how I can help bring your AI vision to life.
              </p>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => window.location.href = '/#contact'}>
                  Get In Touch
                </Button>
                <Button variant="outline" onClick={() => window.open('/Afzal_Khan_Resume.pdf', '_blank')}>
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
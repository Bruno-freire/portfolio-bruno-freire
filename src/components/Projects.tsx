import { useState } from "react";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  images: string[];
  technologies: string[];
  github: string;
  demo: string;
  objectives: string;
  challenges: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Staff-Schedules",
      shortDescription: "WebApp para gerenciamento de escalas de funcionários",
      description:
        "Sistema completo para criação, gerenciamento e visualização de escalas de trabalho, com notificações e integração com calendários. Sendo possivel gerar escalas diárias, semanais e mensais de forma intuitiva com base nos dados dos funcionários.",
      images: [
        "/projects_imgs/staff-schedule.png",
        "/projects_imgs/staff-schedule1.png",
        "/projects_imgs/staff-schedule2.png",
        "/projects_imgs/staff-schedule3.png",
        "/projects_imgs/staff-schedule4.png",
        "/projects_imgs/staff-schedule5.png",
        "/projects_imgs/staff-schedule6.png",
      ],
      technologies: ["Next.Js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/Bruno-freire/Staff-Schedule",
      demo: "https://staff-schedule.vercel.app/",
      objectives:
        "Criar uma plataforma escalável de e-commerce com foco em performance e UX",
      challenges:
        "Implementar sistema de pagamentos seguro e otimizar performance para grande volume de produtos",
    },
    {
      id: 2,
      title: "Task Management App",
      shortDescription: "Aplicativo de gerenciamento de tarefas em tempo real",
      description:
        "Aplicativo colaborativo de gerenciamento de tarefas com recursos de kanban, notificações em tempo real e equipes.",
      images: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSocket"],
      github: "https://github.com",
      demo: "https://demo.com",
      objectives:
        "Desenvolver ferramenta intuitiva para gestão de projetos e colaboração em equipe",
      challenges:
        "Sincronização em tempo real entre múltiplos usuários e otimização de queries no banco de dados",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      shortDescription: "Dashboard analytics para redes sociais",
      description:
        "Dashboard completo para análise de métricas de redes sociais com gráficos interativos e relatórios automatizados.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      ],
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
      objectives:
        "Centralizar métricas de múltiplas redes sociais em uma interface unificada",
      challenges:
        "Integração com APIs de diferentes plataformas e processamento de grandes volumes de dados",
    },
  ];

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meus <span className="text-primary">Projetos</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi recentemente
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Project content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, "_blank");
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary-dark"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo, "_blank");
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div className="space-y-6">
              <DialogTitle className="text-2xl font-bold text-foreground">
                {selectedProject.title}
              </DialogTitle>

              {/* Image carousel */}
              <div className="relative h-64 md:h-96 bg-muted rounded-lg overflow-hidden">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === currentImageIndex
                              ? "bg-primary w-8"
                              : "bg-background/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project details */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Descrição</h3>
                  <p className="text-muted-foreground">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Objetivos</h3>
                  <p className="text-muted-foreground">
                    {selectedProject.objectives}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Desafios</h3>
                  <p className="text-muted-foreground">
                    {selectedProject.challenges}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Tecnologias Utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium bg-accent text-accent-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(selectedProject.github, "_blank")}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Ver no GitHub
                  </Button>
                  <Button
                    className="flex-1 bg-primary hover:bg-primary-dark"
                    onClick={() => window.open(selectedProject.demo, "_blank")}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver Demo Live
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;

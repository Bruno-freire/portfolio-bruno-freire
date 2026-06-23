import BackendCard from "./BackendCard";
import { backendProjects } from "./data";

export default function BackendProjects() {
  return (
    <section id="backend-projects" className="py-24">
      <div className="container mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            <span className="text-primary">Projetos</span> Back-end
          </h2>

          <p className="text-muted-foreground mt-4">
            Arquiteturas e APIs desenvolvidas.
          </p>
        </div>

        {backendProjects.map((project) => (
          <BackendCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

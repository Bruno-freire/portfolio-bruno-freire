import { Code2, Rocket, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description:
        "Desenvolvimento orientado a boas práticas, padrões arquiteturais e manutenção a longo prazo.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Criação de APIs rápidas, seguras e resistentes, pensando em crescimento e alta demanda.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description:
        "Sempre estudando novas tecnologias e buscando aprimorar processos, fluxo de trabalho e produtividade.",
    },
  ];

  return (
    <section id="about" className="section bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre <span className="text-primary">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Profile image */}
            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                {/* Glow AO REDOR */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-xl blur-2xl opacity-30" />

                {/* Container da imagem */}
                <div className="relative w-64 md:w-80 aspect-[9/16] rounded-xl overflow-hidden border-2 border-primary shadow-2xl">
                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* About text */}
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um desenvolvedor Full Stack com experiência prática na
                criação de aplicações modernas utilizando Nest.js, TypeScript,
                React e Next.js. Formado em análise e desenvolvimento de
                sistemas, tenho conhecimento para transformar problemas reais em
                soluções funcionais, escaláveis e bem estruturadas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabalho com foco em arquitetura limpa, boas práticas e código
                de fácil manutenção. Costumo atuar no backend com NestJS,Express, Fastify
                Prisma, PostgreSQL e MongoDB, e no frontend com React,
                Next.js e Tailwind. Gosto de aprender, evoluir e enfrentar
                desafios que realmente exigem raciocínio, organização e clareza
                técnica.
              </p>

              {/* Highlights */}
              <div className="grid gap-4 pt-4">
                {highlights.map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 border-border hover:border-primary transition-colors duration-300 hover:shadow-md"
                  >
                    <div className="flex cursor-default items-start gap-4">
                      <div className="p-3 bg-accent rounded-lg">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

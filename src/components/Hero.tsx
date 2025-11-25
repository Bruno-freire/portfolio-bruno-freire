import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border text-sm font-medium text-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Aberto a oportunidades e novos projetos
          </div>

          {/* Main heading */}
          <h1 className="text-4xl select-none sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Olá, sou{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Desenvolvedor Full Stack
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvo aplicações web escaláveis com foco em qualidade,
            performance e arquitetura limpa. Transformo necessidades reais em
            soluções eficientes e fáceis de manter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-primary to-primary-light hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8"
            >
              Ver Projetos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base sm:text-lg px-6 sm:px-8"
            >
              <a href="/bruno_freire_curriculoFS.pdf" download="BrunoFreire_Curriculo.pdf">
                <Download className="mr-2 w-5 h-5" />
                Baixar Currículo
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base sm:text-lg px-6 sm:px-8"
            >
              <ArrowDown className="mr-2 w-5 h-5" />
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

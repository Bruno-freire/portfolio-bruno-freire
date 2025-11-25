import { Code, Database, Server, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
  {
    icon: Code,
    title: "Front-end",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "JavaScript ES6+",
    ],
  },
  {
    icon: Server,
    title: "Back-end",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "REST API",
      "GraphQL",
      "Microservices",
      "WebSockets",
    ],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Prisma",
      "Supabase",
    ],
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    skills: [
      "Git & GitHub",
      "Docker",
      "AWS",
      "Vercel",
      "CI/CD",
      "Figma",
    ],
  },
];

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Minhas <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex p-4 ${category.bgColor} rounded-xl`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>

                  {/* Skills list */}
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center justify-center gap-2 hover:text-primary transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

"use client";

import {
  Code,
  Database,
  Server,
  Wrench,
  Atom,
  Smartphone,
  FileCode,
  Layers,
  Wind,
  Globe,
  Braces,
  Cpu,
  Network,
  Boxes,
  Plug,
  Workflow,
  DatabaseZap,
  Leaf,
  GitBranch,
  Github,
  Container,
  Cloud,
  Rocket,
  Figma,
  Send,
} from "lucide-react";

import { useEffect, useRef } from "react";
import { CarouselSkills } from "./ui/carousel";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Front-end",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "React", icon: Atom },
        { name: "React Native", icon: Smartphone },
        { name: "TypeScript", icon: FileCode },
        { name: "Next.js", icon: Layers },
        { name: "Tailwind CSS", icon: Wind },
        { name: "HTML5", icon: Globe },
        { name: "CSS3", icon: Braces },
        { name: "JavaScript ES6+", icon: FileCode },
      ],
    },
    {
      icon: Server,
      title: "Back-end",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: [
        { name: "Node.js", icon: Cpu },
        { name: "Express", icon: Network },
        { name: "NestJS", icon: Boxes },
        { name: "REST API", icon: Plug },
        { name: "GraphQL", icon: Workflow },
        { name: "Microservices", icon: Boxes },
        { name: "WebSockets", icon: Network },
      ],
    },
    {
      icon: Database,
      title: "Banco de Dados",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: [
        { name: "PostgreSQL", icon: DatabaseZap },
        { name: "MongoDB", icon: Leaf },
        { name: "MySQL", icon: Database },
        { name: "Redis", icon: DatabaseZap },
        { name: "Prisma", icon: Layers },
        { name: "Supabase", icon: Cloud },
      ],
    },
    {
      icon: Wrench,
      title: "Ferramentas",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: Github },
        { name: "Docker", icon: Container },
        { name: "AWS", icon: Cloud },
        { name: "Vercel", icon: Rocket },
        { name: "CI/CD", icon: Workflow },
        { name: "Figma", icon: Figma },
        { name: "Postman", icon: Send },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-b from-background to-muted/40 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Minhas <span className="text-primary">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tecnologias e ferramentas que utilizo para construir aplicações
              modernas
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-10 flex items-center flex-col">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${category.bgColor} shadow-sm`}
                  >
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <CarouselSkills skills={category.skills} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
    </section>
  );
};

export default Skills;


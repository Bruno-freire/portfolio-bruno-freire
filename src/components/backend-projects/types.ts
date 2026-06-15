import { LucideIcon } from "lucide-react";

export interface ArchitectureNodeType {
  title: string;
  icon: LucideIcon;
  x: number;
  y: number;
}

export interface ArchitectureConnection {
  from: number;
  to: number;
}

export interface BackendProject {
  title: string;
  emoji: string;
  status: string;
  description: string;
  objective: string;

  color: "green" | "blue" | "violet" | "orange";

  stack: string[];

  features: string[];

  architecture: {
    nodes: ArchitectureNodeType[];

    connections: ArchitectureConnection[];
  };
}

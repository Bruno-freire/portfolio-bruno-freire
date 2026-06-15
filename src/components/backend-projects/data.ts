import {
  Layers3,
  Cloud,
  Server,
  Boxes,
  Database,
  DatabaseZap,
  ShieldCheck,
  ShoppingCart,
  Package,
  Users,
  Workflow,
} from "lucide-react";

import { BackendProject } from "./types";

export const backendProjects: BackendProject[] = [
  {
    title: "FlexMenu Ecosystem",

    emoji: "🍽️",

    status: "Em desenvolvimento",

    color: "green",

    description:
      "Plataforma SaaS para gestão completa de restaurantes.",

    objective:
      "Arquitetura baseada em microsserviços utilizando RabbitMQ, Redis, Docker e Kubernetes para alta disponibilidade.",

    stack: [
      "NestJS",
      "Typescript",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
      "Prisma",
    ],

    features: [
      "Multi-restaurante",
      "Gestão de mesas",
      "Gestão de produtos",
      "Promoções",
      "Pedidos",
      "Filas",
      "Dashboard",
      "Relatórios",
    ],


architecture: {
  nodes: [
    {
      title: "Cliente",
      icon: Layers3,
      x: 50,
      y: 4,
    },

    {
      title: "Load Balancer",
      icon: Cloud,
      x: 50,
      y: 14,
    },

    {
      title: "API Gateway",
      icon: Server,
      x: 50,
      y: 26,
    },

    {
      title: "Auth",
      icon: ShieldCheck,
      x: 50,
      y: 38,
    },

    {
      title: "Admin",
      icon: Users,
      x: 25,
      y: 52,
    },

    {
      title: "Customer",
      icon: Users,
      x: 75,
      y: 52,
    },

    {
      title: "Orders",
      icon: ShoppingCart,
      x: 10,
      y: 70,
    },

    {
      title: "Products",
      icon: Package,
      x: 30,
      y: 70,
    },

    {
      title: "Tables",
      icon: Workflow,
      x: 50,
      y: 70,
    },

    {
      title: "Kitchen",
      icon: Layers3,
      x: 70,
      y: 70,
    },

    {
      title: "Promotions",
      icon: Workflow,
      x: 90,
      y: 70,
    },

    {
      title: "RabbitMQ",
      icon: Boxes,
      x: 50,
      y: 86,
    },

    {
      title: "Redis",
      icon: DatabaseZap,
      x: 25,
      y: 97,
    },

    {
      title: "PostgreSQL",
      icon: Database,
      x: 75,
      y: 97,
    },
  ],

  connections: [
    // Entrada
    { from: 0, to: 1 },
    { from: 1, to: 2 },

    // Gateway encaminha tudo para Auth
    { from: 2, to: 3 },

    // Auth decide o tipo de usuário
    { from: 3, to: 4 },
    { from: 3, to: 5 },

    // Admin acessa serviços
    { from: 4, to: 6 },
    { from: 4, to: 7 },
    { from: 4, to: 8 },
    { from: 4, to: 9 },
    { from: 4, to: 10 },

    // Customer acessa serviços necessários
    { from: 5, to: 6 },
    { from: 5, to: 7 },
    { from: 5, to: 8 },

    // Microsserviços publicam eventos
    { from: 6, to: 11 },
    { from: 7, to: 11 },
    { from: 8, to: 11 },
    { from: 9, to: 11 },
    { from: 10, to: 11 },

    // Infraestrutura
    { from: 11, to: 12 },
    { from: 11, to: 13 },
  ],
},
  },

  {
    title: "PedalHub API",

    emoji: "🚴",

    status: "Concluído",

    color: "violet",

    description:
      "API construída utilizando GraphQL e Apollo Server.",

    objective:
      "Demonstrar domínio em GraphQL, Prisma ORM, JWT, AWS e CI/CD.",

    stack: [
      "Node.js",
      "Express",
      "GraphQL",
      "Apollo",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "AWS",
      "GitHub Actions",
    ],

    features: [
      "GraphQL",
      "Apollo Server",
      "JWT",
      "Prisma ORM",
      "Relacionamentos",
      "Deploy AWS",
      "CI/CD",
    ],

    architecture: {
      nodes: [
        {
          title: "Client",
          icon: Users,
          x: 50,
          y: 5,
        },

        {
          title: "GraphQL",
          icon: Workflow,
          x: 50,
          y: 22,
        },

        {
          title: "Apollo Server",
          icon: Boxes,
          x: 50,
          y: 38,
        },

        {
          title: "Users",
          icon: Users,
          x: 15,
          y: 60,
        },

        {
          title: "Resolvers",
          icon: Workflow,
          x: 50,
          y: 60,
        },

        {
          title: "Business",
          icon: ShieldCheck,
          x: 85,
          y: 60,
        },

        {
          title: "Prisma ORM",
          icon: Database,
          x: 50,
          y: 82,
        },

        {
          title: "PostgreSQL",
          icon: Database,
          x: 50,
          y: 96,
        },
      ],

      connections: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },

        { from: 2, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },

        { from: 3, to: 6 },
        { from: 4, to: 6 },
        { from: 5, to: 6 },

        { from: 6, to: 7 },
      ],
    },
  },
];
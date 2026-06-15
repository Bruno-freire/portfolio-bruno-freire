"use client";

import { useEffect, useState } from "react";
import { BackendProject } from "./types";
import { ArchitectureNode } from "./ArchitectureNode";

interface Props {
  project: BackendProject;
}

const theme = {
  green: {
    text: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500",
  },

  violet: {
    text: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500",
  },

  blue: {
    text: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500",
  },

  orange: {
    text: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500",
  },
};

export default function BackendCard({
  project,
}: Props) {
  const colors = theme[project.color];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(
        (prev) =>
          (prev + 1) %
          project.architecture.nodes.length
      );
    }, 900);

    return () => clearInterval(interval);
  }, [project.architecture.nodes.length]);

  return (
    <div className="rounded-3xl border bg-card p-8 shadow-xl">
      <div className="flex items-center gap-4 mb-8">
        <div
          className={`h-16 w-16 rounded-2xl flex items-center justify-center text-3xl ${colors.bg}`}
        >
          {project.emoji}
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            {project.title}
          </h2>

          <p className="text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold mb-6">
            Arquitetura
          </h3>

          <div className="relative h-[620px] rounded-xl bg-muted/20 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {project.architecture.connections.map(
                (connection, index) => {
                  const from =
                    project.architecture.nodes[
                      connection.from
                    ];

                  const to =
                    project.architecture.nodes[
                      connection.to
                    ];

                  return (
                    <line
                      key={index}
                      x1={`${from.x}%`}
                      y1={`${from.y}%`}
                      x2={`${to.x}%`}
                      y2={`${to.y}%`}
                      stroke="currentColor"
                      strokeOpacity="0.25"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                  );
                }
              )}
            </svg>

            {project.architecture.nodes.map(
              (item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${item.x}%`,
                      top: `${item.y}%`,
                    }}
                  >
                    <ArchitectureNode
                      title={item.title}
                      Icon={Icon}
                      active={active === index}
                      colors={colors}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold mb-3">
              Status
            </h3>

            <div
              className={`inline-flex rounded-full px-4 py-2 ${colors.bg} ${colors.text}`}
            >
              ● {project.status}
            </div>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold mb-3">
              Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <div
                  key={item}
                  className="rounded-full border px-3 py-1 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold mb-3">
              Capacidades
            </h3>

            <div className="space-y-2">
              {project.features.map((item) => (
                <div
                  key={item}
                  className="text-sm"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold mb-3">
              Objetivo
            </h3>

            <p className="text-sm text-muted-foreground leading-7">
              {project.objective}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
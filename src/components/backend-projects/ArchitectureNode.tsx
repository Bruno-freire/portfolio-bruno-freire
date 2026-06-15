import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  Icon: LucideIcon;
  active: boolean;
  colors: {
    border: string;
    text: string;
  };
}

export function ArchitectureNode({
  title,
  Icon,
  active,
  colors,
}: Props) {
  return (
    <div
      className={`
        w-52
        rounded-2xl
        border
        bg-card
        px-4
        py-3
        transition-all
        duration-300
        shadow-lg

        ${active ? `${colors.border} scale-105` : ""}
      `}
    >
      <div className="flex items-center gap-3">
        <Icon
          size={20}
          className={
            active
              ? colors.text
              : "text-muted-foreground"
          }
        />

        <span className="text-sm font-medium">
          {title}
        </span>
      </div>
    </div>
  );
}
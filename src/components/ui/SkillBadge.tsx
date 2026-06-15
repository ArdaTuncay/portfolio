import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  name: string;
  icon?: LucideIcon;
  className?: string;
}

export function SkillBadge({ name, icon: Icon, className }: SkillBadgeProps) {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-blue-100 group",
        className
      )}
    >
      {Icon && (
        <div className="p-2 bg-slate-50 text-slate-600 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <span className="font-medium text-slate-700">{name}</span>
    </div>
  );
}

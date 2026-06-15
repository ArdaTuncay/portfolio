import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imagePlaceholder?: boolean;
  className?: string;
  featured?: boolean;
}

export function ProjectCard({ title, description, tags, imagePlaceholder = true, className, featured }: ProjectCardProps) {
  return (
    <div className={cn("group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300", className)}>
      <div className="relative aspect-video bg-slate-100 w-full overflow-hidden">
        {imagePlaceholder ? (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium bg-slate-100 group-hover:scale-105 transition-transform duration-500">
            [Proje Görseli]
          </div>
        ) : null}
        {featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
            Öne Çıkan
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-slate-600 mb-6 flex-1 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm rounded-lg font-medium border border-slate-100">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center text-blue-600 font-semibold text-sm cursor-pointer group-hover:gap-2 transition-all">
          Projeyi İncele <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
}

export function SectionHeading({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="flex flex-col items-start mb-16 relative">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 relative z-10">
        {title}
      </h2>
      <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6 shadow-[0_0_15px_rgba(37,99,235,0.6)]" />
      {subtitle && (
        <p className="text-lg text-slate-400 max-w-2xl font-light">{subtitle}</p>
      )}
    </div>
  );
}

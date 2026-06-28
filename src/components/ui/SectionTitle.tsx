interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({ badge, title, description }: SectionTitleProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
      {badge && (
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark dark:text-white mt-2">
        {title}
      </h2>
      {description && (
        <p className="text-slate-light dark:text-slate-lighter text-base md:text-lg mt-3">
          {description}
        </p>
      )}
    </div>
  );
}
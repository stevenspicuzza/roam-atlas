import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Card({ children, className, id }: CardProps) {
  return (
    <section
      id={id}
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm",
        className,
      )}
    >
      {children}
    </section>
  );
}

type CardHeaderProps = {
  title: string;
  action?: React.ReactNode;
  className?: string;
};

export function CardHeader({ title, action, className }: CardHeaderProps) {
  return (
    <div
      className={cn(
        "mb-4 flex items-center justify-between gap-3",
        className,
      )}
    >
      <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {title}
      </h2>
      {action}
    </div>
  );
}

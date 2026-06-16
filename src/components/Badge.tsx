import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "green" | "blue" | "estimate" | "verified" | "new";
  className?: string;
};

const variants = {
  default: "bg-slate-100 text-slate-600",
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
  estimate: "bg-amber-50 text-amber-700 border border-amber-200",
  verified: "bg-green-50 text-green-700 border border-green-200",
  new: "bg-green-500 text-white",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

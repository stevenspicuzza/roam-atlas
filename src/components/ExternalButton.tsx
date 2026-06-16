import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type ExternalButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  showIcon?: boolean;
};

export function ExternalButton({
  href,
  label,
  variant = "outline",
  className,
  showIcon = false,
}: ExternalButtonProps) {
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 border border-blue-600",
    outline:
      "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 hover:border-blue-300",
    ghost: "text-blue-600 hover:bg-blue-50 border border-transparent",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
        styles[variant],
        className,
      )}
    >
      {label}
      {showIcon && <ExternalLink className="h-3.5 w-3.5" />}
    </Link>
  );
}

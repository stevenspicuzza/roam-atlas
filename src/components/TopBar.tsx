import { Heart, Lock } from "lucide-react";
import { SearchBar } from "./SearchBar";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-slate-50/95 backdrop-blur-sm">
      <div className="flex flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1 lg:max-w-xl lg:mx-auto">
          <SearchBar compact />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 lg:justify-end">
          <span className="inline-flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5" />
            No account required
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Heart className="h-3.5 w-3.5 text-rose-400" />
            Made for travelers, not ads.
          </span>
        </div>
      </div>
    </header>
  );
}

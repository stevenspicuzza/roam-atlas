"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { FormEvent, useState } from "react";
import { isSupportedCity } from "@/data/detroit";

type SearchBarProps = {
  initialQuery?: string;
  compact?: boolean;
};

export function SearchBar({ initialQuery = "", compact = false }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = query.trim();

    if (!trimmed) {
      setMessage(null);
      return;
    }

    if (isSupportedCity(trimmed)) {
      setMessage(null);
      router.push("/detroit");
      return;
    }

    setMessage("RoamAtlas is starting with Detroit. More cities coming soon.");
  }

  return (
    <div className={compact ? "w-full" : "mx-auto w-full max-w-xl"}>
      <form onSubmit={handleSubmit} className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            if (message) setMessage(null);
          }}
          placeholder="Search for a city..."
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-11 pr-16 text-sm text-slate-800 shadow-sm outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-400 sm:inline-block">
          ⌘K
        </kbd>
      </form>
      {message && (
        <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
          {message}
        </p>
      )}
    </div>
  );
}

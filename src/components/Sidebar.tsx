"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  Camera,
  CloudSun,
  Compass,
  DollarSign,
  FileText,
  Home,
  Hotel,
  MapPin,
  Menu,
  Shield,
  Sparkles,
  Train,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useState } from "react";
import { detroitNavItems } from "@/data/detroit";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  overview: Home,
  "current-updates": FileText,
  neighborhoods: MapPin,
  transportation: Train,
  "food-drink": UtensilsCrossed,
  "things-to-do": Compass,
  events: Calendar,
  hotels: Hotel,
  costs: DollarSign,
  safety: Shield,
  weather: CloudSun,
  "local-tips": Sparkles,
  photos: Camera,
  sources: FileText,
};

type SidebarProps = {
  cityName: string;
  state: string;
  country: string;
  lastUpdated: string;
  nextUpdate: string;
};

export function Sidebar({
  cityName,
  state,
  country,
  lastUpdated,
  nextUpdate,
}: SidebarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navContent = (
    <>
      <div className="border-b border-slate-200 px-5 py-5">
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
          RoamAtlas
        </Link>
        <div className="mt-4">
          <p className="text-xl font-bold uppercase tracking-wide text-slate-900">
            {cityName}
          </p>
          <p className="text-sm text-slate-500">
            {state}, {country}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
            <span>{lastUpdated}</span>
          </div>
          <p className="mt-1 text-xs text-slate-400">{nextUpdate}</p>
        </div>
      </div>

      <nav className="sidebar-scroll flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-0.5">
          {detroitNavItems.map((item) => {
            const Icon = iconMap[item.id] ?? FileText;
            const isSourcesPage = item.id === "sources";
            const isActive = isSourcesPage
              ? pathname === "/detroit/sources"
              : pathname === "/detroit" && item.id === "overview";

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <Badge variant="new" className="px-1.5 py-0 text-[10px]">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-slate-200 px-4 py-4">
        <div className="rounded-xl bg-blue-50 p-4">
          <div className="flex items-start gap-2">
            <Sparkles className="mt-0.5 h-4 w-4 text-blue-600" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Plan your trip</p>
              <p className="mt-1 text-xs text-slate-600">
                Get a personalized itinerary in seconds.
              </p>
              <button
                type="button"
                className="mt-3 w-full rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Plan My Trip
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-slate-200 px-5 py-4 text-xs text-slate-500">
        <p className="font-semibold text-slate-700">RoamAtlas</p>
        <p className="mt-1 leading-relaxed">
          Everything you need for a city, in one place.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link href="#" className="hover:text-slate-700">
            About
          </Link>
          <Link href="#" className="hover:text-slate-700">
            Feedback
          </Link>
          <Link href="#" className="hover:text-slate-700">
            Privacy
          </Link>
        </div>
      </footer>
    </>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-lg border border-slate-200 bg-white p-2 shadow-sm lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform lg:static lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="absolute right-3 top-3 rounded-lg p-1 text-slate-500 hover:bg-slate-100 lg:hidden"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
        {navContent}
      </aside>
    </>
  );
}

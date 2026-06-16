import Link from "next/link";
import { Heart, Lock, MapPin } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="border-b border-slate-200/80 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="text-xl font-bold text-slate-900">
            RoamAtlas
          </Link>
          <div className="hidden items-center gap-4 text-xs text-slate-500 sm:flex">
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

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Your city travel dashboard
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need for a city — transportation, food, events,
            costs, and more — with links to official sources.
          </p>

          <div className="mt-8">
            <SearchBar />
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Available now
            </p>
            <Link
              href="/detroit"
              className="mt-3 flex items-center gap-3 rounded-xl border border-slate-100 p-4 transition hover:border-blue-200 hover:bg-blue-50/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-slate-900">Detroit, Michigan</p>
                <p className="text-sm text-slate-500">
                  The Motor City — full travel dashboard
                </p>
              </div>
            </Link>
          </div>

          <p className="mt-8 text-xs text-slate-400">
            Prototype data only. Time-sensitive details should be verified with
            the official source.
          </p>
        </div>
      </main>
    </div>
  );
}

import Link from "next/link";
import { ExternalButton } from "../ExternalButton";

export function SourcesFooter() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-100/80 px-5 py-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          All information is aggregated from public and official sources and
          updated continuously.
        </p>
        <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
          <p className="text-xs text-slate-500">
            Wondering where we get our info?
          </p>
          <Link
            href="/detroit/sources"
            className="inline-flex items-center rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
          >
            See all sources
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PrototypeDisclaimer() {
  return (
    <p className="text-center text-xs text-slate-400">
      Prototype data only. Time-sensitive details should be verified with the
      official source.
    </p>
  );
}

import Link from "next/link";
import { sources, sourceTypeColors } from "@/data/sources";
import { Badge } from "@/components/Badge";
import { ExternalButton } from "@/components/ExternalButton";
import { PrototypeDisclaimer } from "@/components/dashboard/SourcesFooter";

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 pb-8">
      <div>
        <Link
          href="/detroit"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          ← Back to Detroit dashboard
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">Sources</h1>
        <p className="mt-2 text-slate-600">
          Every link on RoamAtlas points to a public or official source. These
          are the references we use for Detroit.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {sources.map((source) => (
          <div
            key={source.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-semibold text-slate-900">{source.name}</h2>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${sourceTypeColors[source.type]}`}
              >
                {source.type}
              </span>
              <Badge variant="verified">Verified source</Badge>
            </div>
            <p className="mt-2 text-sm text-slate-600">{source.description}</p>
            <div className="mt-4">
              <ExternalButton
                href={source.url}
                label="Visit source"
                showIcon
              />
            </div>
          </div>
        ))}
      </div>

      <PrototypeDisclaimer />
    </div>
  );
}

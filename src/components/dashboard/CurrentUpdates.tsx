import Link from "next/link";
import {
  AlertTriangle,
  Calendar,
  CloudSun,
  Train,
} from "lucide-react";
import { CityData } from "@/data/detroit";
import { Card, CardHeader } from "../Card";

const categoryIcons = {
  Traffic: AlertTriangle,
  Transit: Train,
  Event: Calendar,
  Weather: CloudSun,
};

export function CurrentUpdates({ city }: { city: CityData }) {
  return (
    <Card id="current-updates">
      <CardHeader
        title="Current Updates"
        action={
          <Link
            href="#current-updates"
            className="text-xs font-medium text-blue-600 hover:text-blue-700"
          >
            See all updates
          </Link>
        }
      />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {city.updates.map((update) => {
          const Icon = categoryIcons[update.category];
          return (
            <div
              key={update.id}
              className="rounded-xl border border-slate-100 bg-slate-50/50 p-4"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex rounded-lg p-1.5 ${update.iconColor}`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {update.category}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-900">
                {update.title}
              </p>
              <p className="mt-1 text-sm text-slate-600">{update.detail}</p>
              <p className="mt-3 text-xs text-slate-400">{update.updatedAgo}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

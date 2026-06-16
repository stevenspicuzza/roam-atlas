import { CityData } from "@/data/detroit";
import { Card, CardHeader } from "../Card";
import { ExternalButton } from "../ExternalButton";

export function NeighborhoodsSection({ city }: { city: CityData }) {
  return (
    <Card id="neighborhoods">
      <CardHeader title="Neighborhoods" />
      <div className="space-y-3">
        {city.neighborhoods.map((neighborhood) => (
          <div
            key={neighborhood.id}
            className="rounded-xl border border-slate-100 p-3"
          >
            <p className="font-medium text-slate-900">{neighborhood.name}</p>
            <p className="mt-1 text-sm text-slate-600">
              {neighborhood.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <ExternalButton
          href="https://www.visitdetroit.com/plan/neighborhoods/"
          label="Explore all neighborhoods"
          variant="outline"
        />
      </div>
    </Card>
  );
}

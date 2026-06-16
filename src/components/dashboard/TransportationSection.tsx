import { CityData } from "@/data/detroit";
import { Badge } from "../Badge";
import { Card, CardHeader } from "../Card";
import { ExternalButton } from "../ExternalButton";

export function TransportationSection({ city }: { city: CityData }) {
  return (
    <Card id="transportation">
      <CardHeader title="Transportation" />
      <div className="space-y-2">
        {city.transportation.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 rounded-xl border border-slate-100 p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-medium text-slate-900">{item.name}</p>
                {item.badge && (
                  <Badge variant={item.badge === "Official site" ? "blue" : "verified"}>
                    {item.badge}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-slate-500">{item.description}</p>
            </div>
            <ExternalButton href={item.url} label={item.buttonLabel} />
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-600">
        Typical airport ride to downtown:{" "}
        <span className="font-medium text-slate-900">
          {city.airportRideEstimate}
        </span>{" "}
        <Badge variant="estimate" className="ml-1">
          Estimate
        </Badge>
      </p>
    </Card>
  );
}

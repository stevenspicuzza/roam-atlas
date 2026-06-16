import { CityData } from "@/data/detroit";
import { Badge } from "../Badge";
import { Card, CardHeader } from "../Card";
import { ExternalButton } from "../ExternalButton";

const attractions = [
  {
    id: "dia",
    name: "Detroit Institute of Arts",
    description: "World-class art museum in Midtown",
    url: "https://dia.org",
  },
  {
    id: "motown",
    name: "Motown Museum",
    description: "Historic Hitsville U.S.A. studio tours",
    url: "https://www.motownmuseum.org",
  },
  {
    id: "riverwalk",
    name: "Detroit Riverwalk",
    description: "Scenic waterfront path and parks",
    url: "https://www.detroitriverfront.org",
  },
  {
    id: "eastern-market",
    name: "Eastern Market",
    description: "Historic public market and food hall",
    url: "https://www.easternmarket.org",
  },
];

export function ThingsToDoSection({ city }: { city: CityData }) {
  return (
    <Card id="things-to-do">
      <CardHeader title={`Things To Do in ${city.name}`} />
      <div className="space-y-2">
        {attractions.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 rounded-xl border border-slate-100 p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium text-slate-900">{item.name}</p>
                <Badge variant="verified">Verified source</Badge>
              </div>
              <p className="text-sm text-slate-500">{item.description}</p>
            </div>
            <ExternalButton href={item.url} label="Official Site" />
          </div>
        ))}
      </div>
    </Card>
  );
}

export function SafetySection() {
  return (
    <Card id="safety">
      <CardHeader title="Safety" />
      <p className="text-sm text-slate-600">
        Detroit is a large city — use the same awareness you would in any urban
        area. Stay in well-lit areas at night, keep valuables secure, and check
        official sources for current advisories.
      </p>
      <div className="mt-4">
        <ExternalButton
          href="https://www.visitdetroit.com/plan/safety/"
          label="Visit Detroit safety guide"
          variant="outline"
        />
      </div>
    </Card>
  );
}

export function PhotosSection({ city }: { city: CityData }) {
  return (
    <Card id="photos">
      <CardHeader title="Photos" />
      <p className="text-sm text-slate-600">
        Explore photos and street views of {city.name} on Google Maps.
      </p>
      <div className="mt-4">
        <ExternalButton
          href={`https://www.google.com/maps/place/Detroit,+MI`}
          label="View on Google Maps"
          showIcon
        />
      </div>
    </Card>
  );
}

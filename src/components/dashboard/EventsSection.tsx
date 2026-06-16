import { CityData } from "@/data/detroit";
import { Card, CardHeader } from "../Card";
import { ExternalButton } from "../ExternalButton";

export function EventsSection({ city }: { city: CityData }) {
  return (
    <Card id="events">
      <CardHeader title="Events This Week" />
      <div className="space-y-3">
        {city.events.map((event) => (
          <div
            key={event.id}
            className="rounded-xl border border-slate-100 p-3"
          >
            <p className="font-medium text-slate-900">{event.name}</p>
            <p className="mt-1 text-sm text-slate-600">{event.date}</p>
            <p className="text-sm text-slate-500">{event.location}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <ExternalButton
          href={city.eventsCalendarUrl}
          label="See full event calendar"
          variant="outline"
        />
      </div>
    </Card>
  );
}

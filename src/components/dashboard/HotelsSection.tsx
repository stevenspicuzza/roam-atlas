import { CityData } from "@/data/detroit";
import { Badge } from "../Badge";
import { Card, CardHeader } from "../Card";
import { ExternalButton } from "../ExternalButton";

export function HotelsSection({ city }: { city: CityData }) {
  return (
    <Card id="hotels">
      <CardHeader title="Where To Stay" />
      <div className="space-y-3">
        {city.hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="flex flex-col gap-3 rounded-xl border border-slate-100 p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0 flex-1">
              <p className="font-medium text-slate-900">{hotel.name}</p>
              <p className="text-sm text-slate-500">{hotel.description}</p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {hotel.priceFrom}{" "}
                <Badge variant="estimate" className="ml-1">
                  Estimate
                </Badge>
              </p>
            </div>
            <ExternalButton
              href={hotel.bookingUrl}
              label={hotel.bookingLabel}
            />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <ExternalButton
          href="https://www.booking.com/searchresults.html?ss=Detroit"
          label="See more hotels"
          variant="outline"
        />
      </div>
    </Card>
  );
}

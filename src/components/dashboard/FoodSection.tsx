import Link from "next/link";
import { CityData } from "@/data/detroit";
import { Card, CardHeader } from "../Card";
import { ExternalButton } from "../ExternalButton";

export function FoodSection({ city }: { city: CityData }) {
  return (
    <Card id="food-drink">
      <CardHeader
        title="Top Places to Eat"
        action={
          <Link
            href={city.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-blue-600 hover:text-blue-700"
          >
            View on Google Maps
          </Link>
        }
      />
      <div className="space-y-2">
        {city.restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex flex-col gap-3 rounded-xl border border-slate-100 p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="font-medium text-slate-900">{restaurant.name}</p>
                <span className="text-sm text-slate-400">{restaurant.price}</span>
              </div>
              <p className="text-sm text-slate-500">{restaurant.description}</p>
            </div>
            <ExternalButton
              href={restaurant.website}
              label="Website"
              showIcon
            />
          </div>
        ))}
      </div>
    </Card>
  );
}

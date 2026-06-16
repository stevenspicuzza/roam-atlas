import { Cloud, CloudRain, CloudSun, Sun } from "lucide-react";
import { CityData } from "@/data/detroit";
import { Card, CardHeader } from "../Card";
import { ExternalButton } from "../ExternalButton";

const conditionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Sunny: Sun,
  "Partly Sunny": CloudSun,
  Cloudy: Cloud,
  Rain: CloudRain,
};

export function WeatherSection({ city }: { city: CityData }) {
  const { weather } = city;

  return (
    <Card id="weather">
      <CardHeader title="Weather" />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-4xl font-bold text-slate-900">{weather.temp}°F</p>
          <p className="mt-1 text-sm text-slate-600">{weather.condition}</p>
          <p className="mt-2 text-xs text-slate-500">
            Feels like {weather.feelsLike}°F
          </p>
          <p className="text-xs text-slate-500">
            High {weather.high}°F / Low {weather.low}°F
          </p>
        </div>
        <CloudSun className="h-12 w-12 text-amber-400" />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 border-t border-slate-100 pt-4">
        {weather.forecast.map((day) => {
          const Icon = conditionIcons[day.condition] ?? CloudSun;
          return (
            <div key={day.day} className="text-center">
              <p className="text-xs font-medium text-slate-500">{day.day}</p>
              <Icon className="mx-auto my-1 h-5 w-5 text-slate-400" />
              <p className="text-xs font-medium text-slate-900">{day.high}°</p>
              <p className="text-xs text-slate-400">{day.low}°</p>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <ExternalButton
          href={weather.forecastUrl}
          label="View forecast"
          variant="outline"
        />
      </div>
    </Card>
  );
}

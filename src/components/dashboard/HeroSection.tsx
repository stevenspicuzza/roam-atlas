import Image from "next/image";
import { MapPin, History, UtensilsCrossed } from "lucide-react";
import { CityData } from "@/data/detroit";

const chipIcons = [MapPin, History, UtensilsCrossed];

export function HeroSection({ city }: { city: CityData }) {
  return (
    <section
      id="overview"
      className="relative overflow-hidden rounded-2xl shadow-sm"
    >
      <div className="relative h-56 sm:h-72">
        <Image
          src={city.heroImage}
          alt={`${city.name} skyline`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {city.name}
          </h1>
          <p className="mt-1 text-lg text-white/90">{city.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {city.heroChips.map((chip, index) => {
              const Icon = chipIcons[index % chipIcons.length];
              return (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {chip}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

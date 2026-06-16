import { detroit } from "@/data/detroit";
import { HeroSection } from "@/components/dashboard/HeroSection";
import { CurrentUpdates } from "@/components/dashboard/CurrentUpdates";
import { TransportationSection } from "@/components/dashboard/TransportationSection";
import { FoodSection } from "@/components/dashboard/FoodSection";
import { EventsSection } from "@/components/dashboard/EventsSection";
import { HotelsSection } from "@/components/dashboard/HotelsSection";
import { NeighborhoodsSection } from "@/components/dashboard/NeighborhoodsSection";
import {
  CostsSection,
  LocalTipsSection,
} from "@/components/dashboard/CostsAndTipsSection";
import { WeatherSection } from "@/components/dashboard/WeatherSection";
import {
  PhotosSection,
  SafetySection,
  ThingsToDoSection,
} from "@/components/dashboard/MoreSections";
import {
  PrototypeDisclaimer,
  SourcesFooter,
} from "@/components/dashboard/SourcesFooter";

export default function DetroitPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 pb-8">
      <HeroSection city={detroit} />
      <CurrentUpdates city={detroit} />

      <div className="grid gap-6 lg:grid-cols-2">
        <TransportationSection city={detroit} />
        <FoodSection city={detroit} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <EventsSection city={detroit} />
        <HotelsSection city={detroit} />
        <NeighborhoodsSection city={detroit} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <CostsSection city={detroit} />
        <LocalTipsSection city={detroit} />
        <WeatherSection city={detroit} />
      </div>

      <ThingsToDoSection city={detroit} />

      <div className="grid gap-6 lg:grid-cols-2">
        <SafetySection />
        <PhotosSection city={detroit} />
      </div>

      <SourcesFooter />
      <PrototypeDisclaimer />
    </div>
  );
}

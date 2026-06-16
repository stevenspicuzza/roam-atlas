export type SourceType =
  | "Official"
  | "Transportation"
  | "Rideshare"
  | "Hotel"
  | "Map"
  | "Event"
  | "Attraction";

export type Source = {
  id: string;
  name: string;
  description: string;
  url: string;
  type: SourceType;
};

export const sources: Source[] = [
  {
    id: "visit-detroit",
    name: "Visit Detroit",
    description: "Official tourism board for Detroit events, guides, and info.",
    url: "https://www.visitdetroit.com",
    type: "Official",
  },
  {
    id: "qline",
    name: "QLINE",
    description: "Detroit streetcar schedules, routes, and service updates.",
    url: "https://www.qlinedetroit.com",
    type: "Transportation",
  },
  {
    id: "people-mover",
    name: "Detroit People Mover",
    description: "Downtown loop transit hours, fares, and station info.",
    url: "https://www.thepeoplemover.com",
    type: "Transportation",
  },
  {
    id: "ddot",
    name: "DDOT",
    description: "City bus routes, schedules, and real-time tracking.",
    url: "https://www.detroitmi.gov/departments/detroit-department-of-transportation",
    type: "Transportation",
  },
  {
    id: "smart",
    name: "SMART",
    description: "Suburban bus service connecting metro Detroit.",
    url: "https://www.smartbus.org",
    type: "Transportation",
  },
  {
    id: "dtw",
    name: "Detroit Metro Airport",
    description: "Flight info, parking, ground transport, and airport services.",
    url: "https://www.metroairport.com",
    type: "Official",
  },
  {
    id: "uber",
    name: "Uber",
    description: "Rideshare pickup, pricing, and trip planning.",
    url: "https://www.uber.com",
    type: "Rideshare",
  },
  {
    id: "lyft",
    name: "Lyft",
    description: "Rideshare pickup, pricing, and trip planning.",
    url: "https://www.lyft.com",
    type: "Rideshare",
  },
  {
    id: "google-maps",
    name: "Google Maps",
    description: "Maps, directions, and local business listings.",
    url: "https://www.google.com/maps",
    type: "Map",
  },
  {
    id: "dia",
    name: "Detroit Institute of Arts",
    description: "Museum hours, exhibitions, and ticket info.",
    url: "https://dia.org",
    type: "Attraction",
  },
  {
    id: "motown",
    name: "Motown Museum",
    description: "Tours, tickets, and history of Hitsville U.S.A.",
    url: "https://www.motownmuseum.org",
    type: "Attraction",
  },
  {
    id: "tigers",
    name: "Comerica Park / Detroit Tigers",
    description: "Game schedule, tickets, and stadium info.",
    url: "https://www.mlb.com/tigers",
    type: "Event",
  },
  {
    id: "booking",
    name: "Booking.com",
    description: "Hotel search, reviews, and reservations.",
    url: "https://www.booking.com",
    type: "Hotel",
  },
  {
    id: "marriott",
    name: "Marriott",
    description: "Hotel search, reviews, and reservations.",
    url: "https://www.marriott.com",
    type: "Hotel",
  },
];

export const sourceTypeColors: Record<SourceType, string> = {
  Official: "bg-blue-100 text-blue-700",
  Transportation: "bg-emerald-100 text-emerald-700",
  Rideshare: "bg-violet-100 text-violet-700",
  Hotel: "bg-amber-100 text-amber-700",
  Map: "bg-slate-100 text-slate-700",
  Event: "bg-purple-100 text-purple-700",
  Attraction: "bg-rose-100 text-rose-700",
};

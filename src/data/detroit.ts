export type NavItem = {
  id: string;
  label: string;
  href: string;
  badge?: string;
};

export type UpdateCard = {
  id: string;
  category: "Traffic" | "Transit" | "Event" | "Weather";
  title: string;
  detail: string;
  updatedAgo: string;
  iconColor: string;
};

export type LinkRow = {
  id: string;
  name: string;
  description: string;
  buttonLabel: string;
  url: string;
  badge?: "Official site" | "Source linked";
};

export type Restaurant = {
  id: string;
  name: string;
  description: string;
  price: "$" | "$$" | "$$$";
  website: string;
};

export type EventItem = {
  id: string;
  name: string;
  date: string;
  location: string;
  logo?: string;
};

export type Hotel = {
  id: string;
  name: string;
  description: string;
  priceFrom: string;
  bookingLabel: string;
  bookingUrl: string;
};

export type Neighborhood = {
  id: string;
  name: string;
  description: string;
};

export type CostItem = {
  id: string;
  label: string;
  range: string;
};

export type LocalTip = {
  id: string;
  text: string;
};

export type ForecastDay = {
  day: string;
  high: number;
  low: number;
  condition: string;
};

export type CityData = {
  slug: string;
  name: string;
  state: string;
  country: string;
  tagline: string;
  heroImage: string;
  heroChips: string[];
  lastUpdated: string;
  nextUpdate: string;
  updates: UpdateCard[];
  transportation: LinkRow[];
  airportRideEstimate: string;
  restaurants: Restaurant[];
  events: EventItem[];
  hotels: Hotel[];
  neighborhoods: Neighborhood[];
  costs: CostItem[];
  localTips: LocalTip[];
  weather: {
    temp: number;
    condition: string;
    feelsLike: number;
    high: number;
    low: number;
    forecast: ForecastDay[];
    forecastUrl: string;
  };
  eventsCalendarUrl: string;
  googleMapsUrl: string;
};

export const detroitNavItems: NavItem[] = [
  { id: "overview", label: "Overview", href: "/detroit#overview" },
  {
    id: "current-updates",
    label: "Current Updates",
    href: "/detroit#current-updates",
    badge: "NEW",
  },
  { id: "neighborhoods", label: "Neighborhoods", href: "/detroit#neighborhoods" },
  {
    id: "transportation",
    label: "Transportation",
    href: "/detroit#transportation",
  },
  { id: "food-drink", label: "Food & Drink", href: "/detroit#food-drink" },
  { id: "things-to-do", label: "Things To Do", href: "/detroit#things-to-do" },
  { id: "events", label: "Events", href: "/detroit#events" },
  { id: "hotels", label: "Hotels", href: "/detroit#hotels" },
  { id: "costs", label: "Costs", href: "/detroit#costs" },
  { id: "safety", label: "Safety", href: "/detroit#safety" },
  { id: "weather", label: "Weather", href: "/detroit#weather" },
  { id: "local-tips", label: "Local Tips", href: "/detroit#local-tips" },
  { id: "photos", label: "Photos", href: "/detroit#photos" },
  { id: "sources", label: "Sources", href: "/detroit/sources" },
];

export const detroit: CityData = {
  slug: "detroit",
  name: "Detroit",
  state: "Michigan",
  country: "USA",
  tagline: "The Motor City",
  heroImage:
    "https://images.unsplash.com/photo-1551882547-ff40c63fe0fa?auto=format&fit=crop&w=1600&q=80",
  heroChips: [
    "Vibrant neighborhoods",
    "Rich history",
    "World-class food scene",
  ],
  lastUpdated: "Updated 2 hours ago",
  nextUpdate: "Next update in ~1 hour",
  updates: [
    {
      id: "traffic",
      category: "Traffic",
      title: "I-75 construction near Downtown",
      detail: "Construction near Downtown exits through Aug 2025.",
      updatedAgo: "Updated 2h ago",
      iconColor: "bg-orange-100 text-orange-600",
    },
    {
      id: "transit",
      category: "Transit",
      title: "QLINE service operating normally",
      detail: "Streetcar running on regular schedule.",
      updatedAgo: "Updated 1h ago",
      iconColor: "bg-green-100 text-green-600",
    },
    {
      id: "event",
      category: "Event",
      title: "Jazz Festival Detroit starts this Friday",
      detail: "May 30 – June 2 at Hart Plaza.",
      updatedAgo: "Updated 3h ago",
      iconColor: "bg-purple-100 text-purple-600",
    },
    {
      id: "weather",
      category: "Weather",
      title: "72°F and partly sunny today",
      detail: "High 76°F / Low 58°F.",
      updatedAgo: "Updated 1h ago",
      iconColor: "bg-blue-100 text-blue-600",
    },
  ],
  transportation: [
    {
      id: "uber",
      name: "Uber",
      description: "Get a ride",
      buttonLabel: "Open Uber",
      url: "https://www.uber.com",
      badge: "Source linked",
    },
    {
      id: "lyft",
      name: "Lyft",
      description: "Get a ride",
      buttonLabel: "Open Lyft",
      url: "https://www.lyft.com",
      badge: "Source linked",
    },
    {
      id: "qline",
      name: "QLINE",
      description: "Detroit streetcar service",
      buttonLabel: "Official Site",
      url: "https://www.qlinedetroit.com",
      badge: "Official site",
    },
    {
      id: "ddot",
      name: "DDOT Bus",
      description: "Routes & real-time tracker",
      buttonLabel: "Track Bus",
      url: "https://www.detroitmi.gov/departments/detroit-department-of-transportation",
      badge: "Official site",
    },
    {
      id: "people-mover",
      name: "People Mover",
      description: "Downtown Detroit loop",
      buttonLabel: "Official Site",
      url: "https://www.thepeoplemover.com",
      badge: "Official site",
    },
    {
      id: "dtw",
      name: "Detroit Metro Airport (DTW)",
      description: "Flights, parking, info & more",
      buttonLabel: "Official Site",
      url: "https://www.metroairport.com",
      badge: "Official site",
    },
  ],
  airportRideEstimate: "$35–$55",
  restaurants: [
    {
      id: "slows",
      name: "Slows Bar BQ",
      description: "Famous BBQ in Corktown",
      price: "$$",
      website: "https://slowsbarbq.com",
    },
    {
      id: "selden",
      name: "Selden Standard",
      description: "New American / Michelin Bib Gourmand",
      price: "$$$",
      website: "https://seldenstandard.com",
    },
    {
      id: "green-dot",
      name: "Green Dot Stables",
      description: "Burgers / Detroit classic",
      price: "$",
      website: "https://greendotstables.com",
    },
    {
      id: "supino",
      name: "Supino Pizzeria",
      description: "Detroit-style pizza",
      price: "$$",
      website: "https://supinopizza.com",
    },
    {
      id: "shewolf",
      name: "SheWolf Pastificio & Bar",
      description: "Pasta / Handmade daily",
      price: "$$",
      website: "https://shewolfdetroit.com",
    },
  ],
  events: [
    {
      id: "tigers",
      name: "Tigers vs. Yankees",
      date: "Fri, May 30 · 7:10 PM",
      location: "Comerica Park",
    },
    {
      id: "jazz",
      name: "Detroit Jazz Festival",
      date: "May 30 – June 2",
      location: "Hart Plaza",
    },
    {
      id: "movement",
      name: "Movement Festival",
      date: "May 25 – 27",
      location: "Hart Plaza",
    },
  ],
  hotels: [
    {
      id: "shinola",
      name: "The Shinola Hotel",
      description: "Downtown / Luxury",
      priceFrom: "From $349/night",
      bookingLabel: "Booking.com",
      bookingUrl: "https://www.booking.com",
    },
    {
      id: "foundation",
      name: "Detroit Foundation Hotel",
      description: "Downtown / Boutique",
      priceFrom: "From $189/night",
      bookingLabel: "Booking.com",
      bookingUrl: "https://www.booking.com",
    },
    {
      id: "element",
      name: "Element Detroit",
      description: "Midtown / Modern",
      priceFrom: "From $129/night",
      bookingLabel: "Marriott",
      bookingUrl: "https://www.marriott.com",
    },
  ],
  neighborhoods: [
    {
      id: "downtown",
      name: "Downtown",
      description:
        "The heart of the city. Sports, entertainment, riverfront.",
    },
    {
      id: "corktown",
      name: "Corktown",
      description: "Historic charm, great food, close to downtown.",
    },
    {
      id: "midtown",
      name: "Midtown",
      description: "Culture, museums, and beautiful architecture.",
    },
    {
      id: "east",
      name: "East Detroit",
      description: "Diverse communities and authentic local spots.",
    },
  ],
  costs: [
    { id: "hotel", label: "Hotel mid-range", range: "$150–$250/night" },
    { id: "meal", label: "Meal per person", range: "$15–$30" },
    { id: "beer", label: "Beer local bar", range: "$6–$8" },
    { id: "uber", label: "Airport Uber", range: "$35–$55" },
    { id: "parking", label: "Parking downtown", range: "$20–$30/day" },
    {
      id: "people-mover",
      label: "People Mover day pass",
      range: "$3.00",
    },
  ],
  localTips: [
    {
      id: "tip-1",
      text: "Don't rent a car if staying downtown — parking can be expensive.",
    },
    {
      id: "tip-2",
      text: "The People Mover is a quick and cheap way to get around downtown.",
    },
    {
      id: "tip-3",
      text: "Visit the DIA on Friday evenings — less crowded and often has events.",
    },
    {
      id: "tip-4",
      text: "Corktown has some of the best food and coolest historic architecture.",
    },
  ],
  weather: {
    temp: 72,
    condition: "Partly Sunny",
    feelsLike: 72,
    high: 76,
    low: 58,
    forecast: [
      { day: "Wed", high: 74, low: 57, condition: "Sunny" },
      { day: "Thu", high: 71, low: 55, condition: "Cloudy" },
      { day: "Fri", high: 68, low: 52, condition: "Rain" },
      { day: "Sat", high: 70, low: 54, condition: "Partly Sunny" },
    ],
    forecastUrl: "https://weather.com/weather/today/l/Detroit+MI",
  },
  eventsCalendarUrl: "https://www.visitdetroit.com/events/",
  googleMapsUrl:
    "https://www.google.com/maps/search/restaurants+in+Detroit,+MI",
};

export const supportedCities = ["detroit"];

export function isSupportedCity(query: string): boolean {
  return supportedCities.includes(query.trim().toLowerCase());
}

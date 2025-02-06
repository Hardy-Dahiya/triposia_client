export interface FlightResponse {
  _id: string;
  id: number;
  departure_iata: string;
  arrival_iata: string;
  departure_airport: string;
  arrival_airport: string;
  departure_city: string;
  arrival_city: string;
  arrival_country: string;
  departure_country: string;
  cheapest_time: string;
  cheapest_day: string;
  cheapest_month: string;
  cheapest_airline: string;
  weeks: Week[];
  months: Month[];
  airlines: Airline[];
  time: TimeSlot[];
  flights: Flight[];
}

export interface Week {
  name: string;
  price: number;
}

export interface Month {
  name: string;
  price: number | string;
}

export interface Airline {
  name: string;
  price: number;
}

export interface TimeSlot {
  name: string;
  time: string;
  price: string;
}

export interface Flight {
  _id: string;
  airlineroutes: Airlineroute[];
  price: string;
  city_name_en: string;
  iata_from: string;
  iata_to: string;
  departure_time: string;
  arrival_time: string;
  type: string;
  airline_iata: string;
  airline: string;
  duration: string;
  day1: string;
  day2: string;
  day3: string;
  day4: string;
  day5: string;
  day6: string;
  day7: string;
}

export interface AirlineDestination {
  city: string;
  country: string;
  iata_code: string;
  name: string;
}

export interface AirportAirlines {
  name: string;
  iata_code: string;
}

export interface FlightData {
  _id: string;
  first_flight: string; // ISO date string
  passengers_per_day: string;
  common_duration: string;
  iata_from: string;
  iata_to: string;
  id: number;
  city_name_en: string;
  is_new: string;
  day1: string;
  day2: string;
  day3: string;
  day4: string;
  day5: string;
  day6: string;
  day7: string;
  flights_per_day: string;
  flights_per_week: string;
  price: string;
  filtered_out: number;
  airport: Airport;
  airlineroutes: Airlineroute[];
  country_code: string;
}

export interface Airport {
  IATA: string;
  latitude: string;
  longitude: string;
  city_name: string;
  name: string;
  display_name: string;
  country_code: string;
  country: string;
  no_routes: string;
  state_code: string | null;
  _id: string;
}

export interface Airlineroute {
  _id: string;
  carrier: string;
  carrier_name: string;
  first_flight: string | null; // ISO date string or null
  last_flight: string; // ISO date string
  common_duration: string;
  route_id: string;
  is_new: string;
  airline: FlightAirline;
}

export interface FlightAirline {
  id: number;
  callsign: string;
  ICAO: string;
  IATA: string;
  name: string;
  fs_id: string;
  shortname: string;
  fullname: string | null;
  country: string;
  flights_last_24_hours: string;
  airbourne: string;
  location: string;
  phone: string;
  url: string;
  wiki_url: string;
  is_scheduled_passenger: string;
  is_nonscheduled_passenger: string;
  is_cargo: string;
  is_railway: string | null;
  is_lowcost: string;
  active: string;
  is_oneworld: string;
  is_staralliance: string;
  is_skyteam: string;
  is_allianceaffiliate: string;
  rating_iosapp: string | null;
  rating_androidapp: string | null;
  rating_skytrax_reviews: string | null;
  rating_skytrax_stars: string | null;
  rating_tripadvisor: string | null;
  rating_trustpilot: string | null;
  rating_flightradar24: string | null;
  color1: string | null;
  color2: string | null;
  textcolor: string | null;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  _id: string;
}

export interface UniqueAirlineData {
  _id: string;
  name: string;
  slug: string;
  country_code: string;
  iata_code: string;
  iata_prefix: string;
  iata_accounting: string;
  icao_code: string;
  callsign: string;
  is_international: boolean;
  iosa_registered: boolean;
  iosa_expiry: string; // ISO date string
  is_passenger: boolean;
  is_cargo: boolean;
  is_scheduled: boolean;
  total_aircrafts: number;
  average_fleet_age: number;
  accidents_last_5y: number;
  crashes_last_5y: number;
  website: string;
  twitter: string;
  facebook: string | null;
  instagram: string | null;
  linkedin: string | null;
  __v: number;
  age: number;
  baggage: string;
  check_in: string;
  class_count: number;
  classes: string[];
  destinations: UniqueAirlineDestination[];
  domestic: number;
  fleet_size: number;
  found: string;
  hubs: string[];
  instagram_url: string;
  international: number;
  overview: string;
  phone: string;
  rating_skytrax_reviews: number;
  rating_skytrax_stars: number;
  rating_tripadvisor: number;
  routes: string;
  short_name: string;
  total_destinations: number;
  total_flights: number;
  tripadvisor_url: string;
  twitter_url: string;
  wikipedia_url: string;
  youtube_url: string;
  airline: {
    name: string;
    iata: string;
  };
  updated_at: string; // ISO date string
}

export interface PlaceReview {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

export interface UniqueAirlineDestination {
  name: string;
  iata_code: string;
  city: string;
  country: string;
}

export interface FlightTime {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal: string;
  time: string;
}

export interface FlightRoute {
  _id: string;
  departure: {
    airport: string;
    timezone: string;
    iata: string;
    icao: string;
    terminal: string;
    time: string;
    _id: string;
  };
  arrival: {
    airport: string;
    timezone: string;
    iata: string;
    icao: string;
    terminal: string;
    time: string;
    _id: string;
  };
  airline: {
    name: string;
    callsign: string;
    iata: string;
    icao: string;
    _id: string;
  };
  flight: {
    number: string;
    _id: string;
  };
  __v: number;
  updatedAt: string;
}

export interface HotelAirport {
  hotelId: number;
  hotelName: string;
  starRating: number;
  reviewScore: number;
  reviewCount: number;
  currency: string;
  dailyRate: number;
  crossedOutRate: number;
  discountPercentage: number;
  imageURL: string;
  landingURL: string;
  includeBreakfast: boolean;
  freeWifi: boolean;
  latitude: number;
  longitude: number;
}

export interface Hotel {
  hotel_id: number;
  hotel_name: string;
  url: string;
  star_rating: number;
  rates_currency: string;
  photo1: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
  zipcode: number;
}

export interface Place {
  _id: string;
  place_id: string;
  name: string;
  overview: string;
  rating: number;
  vicinity: string;
  location: {
    latitude: number;
    longitude: number;
  };
  photos: string[];
  distance_from_airport_km: string;
  distance_from_city_center_km: string;
  airport: string;
}

export interface Blog {
  id: number;
  name: string;
  blog_slug: string;
  featured_image: string;
  category_name: string;
  category_id: number;
  website_id: number;
  language_id: number;
  category_slug: string;
  created_at: string;
}

export interface BlogDetails {
  id: number;
  name: string;
  slug: string;
  intro: string;
  content: string;
  type: string;
  category_id: number;
  website_id: number;
  language_id: number;
  category_name: string;
  is_featured: number;
  featured_image: string;
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  meta_og_image: string;
  meta_og_url: string | null;
  hits: number;
  created_at: string;
  updated_at: string;
  author_id: number;
  authors_name: string;
  authors_slug: string;
  authors_featured_image: string;
  authors_linkedin: string;
  authors_twitter: string;
  authors_instagram: string;
  authors_description: string;
  authors_meta_title: string;
  authors_meta_keyword: string;
  posts?: {
    created_at: string;
  };
}

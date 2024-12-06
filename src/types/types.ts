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

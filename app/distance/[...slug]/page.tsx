import { getDistance } from '@/services/flights/FlightServices';
import { Suspense } from 'react';
import Error from '@/src/components/Message/Error';
import Footer from '../../../src/components/Footer/Footer';
import Header from '../../../src/components/Header/Header';
import { Metadata } from 'next';
import { Flight } from '@/src/types/types';
import RouteMap from '@/src/components/Map/RouteMap';

// Define the params interface
type AirportRouteParams = {
  params: Promise<{
    slug: string; // Matches the dynamic route segment `[route]`
  }>;
};

export async function generateMetadata({ params }: AirportRouteParams): Promise<Metadata> {
  // Await `params` since it's treated as a Promise in the build environment
  const resolvedParams = await params;
  const finalSlug = [];
  const { slug } = resolvedParams;
  // Split the slug into an array
  if (slug) {
    const slugParts = slug[0].split('-to-');
    finalSlug.push(...slugParts);
  }
  const flightData = await searchFlight(finalSlug[0].toUpperCase(), finalSlug[1].toUpperCase());
  if (flightData) {
    return {
      title: `${flightData.departure_city} to ${flightData.arrival_city}`,
      description: `${flightData.departure_iata} to ${flightData.arrival_iata}`,
      keywords: `#${flightData.departure_iata} #${flightData.arrival_iata}`,
    };
  }
  return {
    title: 'TripOsia | Travel Made Easy',
    description: `Plan your adventures effortlessly with Triposia! Discover top destinations, book accommodations, and explore curated travel experiences. Whether you're planning a weekend getaway or a dream vacation, Triposia helps you every step of the way. Your journey begins here!`,
    keywords: 'TripOsia | Travel Made Easy',
  };
}

export default async function DistanceRoutePage({ params }: AirportRouteParams) {
  // Await `params` since it's treated as a Promise in the build environment
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const finalSlug = [];

  if (!slug) {
    return (
      <Error
        title="Invalid slug format"
        subTitle="No Airline Found"
        msg="Unfortunately, we could not find any airlines for the specified iata_code. Please use format like ai and try again."
      />
    );
  }

  if (slug) {
    const slugParts = slug[0].split('-to-');
    finalSlug.push(...slugParts);
  }

  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <progress
            className="progress is-primary"
            style={{
              height: '4px', // Extremely thin
              animationDuration: '0.6s',
              transitionTimingFunction: 'ease-out',
            }}
            max="100"
          >
            15%
          </progress>
        }
      >
        <Page dep_iata={finalSlug[0].toUpperCase()} arr_iata={finalSlug[1].toUpperCase()} />
      </Suspense>
      <Footer />
    </div>
  );
}

async function Page({ dep_iata, arr_iata }: { dep_iata: string; arr_iata: string }) {
  const flightData = await searchFlight(dep_iata, arr_iata);
  return (
    <section className="single-content-wrap section p-0">
      <div className="container">
        <div className="columns is-multiline single-content-space airline-info-wrap">
          <div className="column is-12">
            <div className="airline-wrap">
              <h1 className="title is-4 has-text-centered airline-info-head">
                {' '}
                Flight distance {flightData.departure_airport} to {flightData.arrival_airport}
              </h1>
            </div>
          </div>
          <div className="column is-12">
            <div className="columns airline-wrap">
              <div className="column is-4 p-0">
                <p className="has-text-right">{flightData.departure_airport}</p>
              </div>
              <div className="column is-4 p-0">
                <p className="has-text-centered flight-status">
                  {flightData.kilometers.toFixed(2)} Km and {flightData.miles.toFixed(2)} Miles
                </p>
              </div>
              <div className="column is-4 p-0">
                <p className="has-text-left">{flightData.arrival_airport}</p>
              </div>
            </div>
          </div>
          <div className="column is-12">
            <div className="columns airline-wrap">
              <div className="column is-4 p-0">
                <p className="has-text-right time">{flightData.departure_iata}</p>
              </div>
              <div className="column is-4 p-0">
                <div className="flight-bar">
                  <div className="bar">
                    <i className="fa-solid fa-plane" />
                  </div>
                </div>
              </div>
              <div className="column is-4 p-0">
                <p className="has-text-left time">{flightData.arrival_iata}</p>
              </div>
            </div>
          </div>
          <div className="column is-12">
            <div className="columns airline-wrap">
              <div className="column is-12 p-0">
                <p className="has-text-centered scheduled-time p-0">
                  {flightData.flights[0].duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div id="seatselection" className="columns is-multiline single-content-space">
          <div className="column is-12 content">
            <h2 className="title is-4 mt-3 mb-3">
              Flights From {flightData.departure_city} to {flightData.arrival_city}
            </h2>
            <h3 className="title is-4">
              Distance Between {flightData.departure_airport} ({flightData.departure_iata}) and{' '}
              {flightData.arrival_airport}({flightData.arrival_iata})
            </h3>
            <p>
              The distance between {flightData.departure_airport} ({flightData.departure_iata}) and{' '}
              {flightData.arrival_airport}({flightData.arrival_iata}) is approximately{' '}
              {flightData.kilometers.toFixed(2)} kilometers, {flightData.miles.toFixed(2)} miles and{' '}
              {flightData.nautical_miles.toFixed(2)}
              Nautical miles. Distance is calculated based on the direct route between the two
              airports, taking into account the curvature of the Earths surface.
            </p>
            <p>
              Covering a distance of {flightData.kilometers.toFixed(2)} kilometers,{' '}
              {flightData.miles.toFixed(2)} miles and {flightData.nautical_miles.toFixed(2)}{' '}
              Nautical miles, the flight from {flightData.departure_airport} (
              {flightData.departure_iata}) to {flightData.arrival_airport}({flightData.arrival_iata}
              ) takes {flightData.flights[0].duration} by air.
            </p>
            <h2>{flightData.departure_airport} Details</h2>
            <ul>
              <li>Departure Airport: {flightData.departure_airport}</li>
              <li>Departure Airport IATA Code: {flightData.departure_iata}</li>
              <li>
                Departure Airport Address: {flightData.departure_airport},
                {flightData.departure_airport}, {flightData.departure_city},
                {flightData.departure_country}
              </li>
              <li>
                Departure Airport Phone: Contact {flightData.departure_airport} at 1244797300 for
                inquiries and assistance.
              </li>
            </ul>
            <h2>{flightData.arrival_airport} Details</h2>
            <ul>
              <li>Arrival Airport: {flightData.arrival_airport}</li>
              <li>Arrival Airport IATA Code: {flightData.arrival_iata}</li>
              <li>
                Arrival Airport Address: {flightData.arrival_airport},{flightData.arrival_airport},{' '}
                {flightData.arrival_city},{flightData.arrival_country}
              </li>
              <li>
                Arrival Airport Phone: Reach{flightData.arrival_airport} at 66 2 132 1888 for any
                airport-related queries or support.
              </li>
            </ul>
            <h2 className="title is-5">
              Indira Gandhi International Airport to Suvarnabhumi Airport Flight Information
            </h2>
            <ul>
              <li>
                Distance: The distance between {flightData.departure_iata} and{' '}
                {flightData.arrival_iata} airports is approximately{' '}
                {flightData.kilometers.toFixed(2)}
                kilometers, {flightData.miles.toFixed(2)} miles and{' '}
                {flightData.nautical_miles.toFixed(2)} Nautical miles
              </li>
              <li>
                Time: The average flight duration from {flightData.departure_iata} to{' '}
                {flightData.arrival_iata} is around {flightData.flights[0].duration}.
              </li>
              <li>
                Total Flights: There are a total of {flightData.flights.length || 0} flights
                operating between {flightData.departure_iata} and {flightData.arrival_iata}
                regularly.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div id="inflightfeatures" className="columns is-multiline single-content-space">
          <div className="column is-12 content">
            <h3 className="title is-5 mt-3 mb-3">
              Visual Map Comparison of Distance from Delhi to Bangkok by Flights and Road.
            </h3>
            <div
              id="map"
              className="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
              tabIndex={0}
              style={{ position: 'relative' }}
            >
              <RouteMap
                lat1={flightData.dep_latlong.lat}
                lat2={flightData.arr_latlong.lat}
                lng1={flightData.dep_latlong.lon}
                lng2={flightData.arr_latlong.lon}
              />
            </div>
            <table id="distanceTable">
              <tbody>
                <tr>
                  <th>Distance Type</th>
                  <th>Distance (in kilometers)</th>
                </tr>
                <tr id="airDistanceRow">
                  <td>Delhi to Bangkok Air Distance</td>
                  <td id="airDistance">2947.74</td>
                </tr>
                <tr>
                  <td>Delhi to Bangkok via road route and road distance</td>
                  <td>4147.28</td>
                </tr>
              </tbody>
            </table>
            <link
              rel="preload"
              href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css"
              as="style"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css"
            />
            <link
              rel="preload"
              href="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css"
              as="style"
            />
            <link
              rel="stylesheet"
              href="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css"
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n        #map {\n            height: 400px;\n            width: 100%;\n        }\n        table {\n            margin-top: 20px;\n            border-collapse: collapse;\n            width: 100%;\n        }\n        th, td {\n            border: 1px solid #ddd;\n            padding: 8px;\n            text-align: left;\n        }\n        th {\n            background-color: #f2f2f2;\n        }\n    ',
              }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        {flightData.flights.slice(0, 4).map((item: Flight, index: number) => {
          return (
            <div
              id="inflightfeatures"
              className="columns is-multiline single-content-space"
              key={index}
            >
              <div className="column is-12 pt-0">
                <div className="departing-flights">
                  <div className="flights-booking-item">
                    <div className="flight-logo">
                      <img
                        src={`https://aerocloud.s3.amazonaws.com/airweb/${item.airline_iata}.webp`}
                        alt={item.airline}
                      />
                    </div>
                    <div className="flight-time">
                      <h4 className="title is-6 mb-0">
                        {item.airline} {item.airline_iata}
                      </h4>
                      <p className="detailtxt">Ticket book single</p>
                    </div>
                    <div className="duration">
                      <h4 className="title is-6 mb-0">{item.departure_time}</h4>
                      <p className="detailtxt">
                        {flightData.departure_city} - {flightData.arrival_city}
                      </p>
                    </div>
                    <div className="nonstop">
                      <h4 className="title is-6 mb-0">{item.type}</h4>
                      <p className="detailtxt">
                        {item.iata_from} - {item.iata_to}
                      </p>
                    </div>
                    <div className="weightkg">
                      <h4 className="title is-6 mb-0">{flightData.kilometers.toFixed(2)} KM</h4>
                    </div>
                    <div className="flight-price">
                      <h4 className="title is-6 mb-0">
                        <a
                          href="https://www.airlinesmap.com/search?marker=192130.Zzbca9317a66f44288942f75c-192130#/flights/DEL1412
BKK15121"
                          target="_blank"
                        >
                          Book
                        </a>
                      </h4>
                      {/*<p class="detailtxt">round trip</p>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container">
        <div id="inflightfeatures" className="columns is-multiline single-content-space">
          <div className="column is-12 content">
            <h4 className="title is-5 mt-3 mb-3">
              Some important facts while you are searching for distance Delhi to Bangkok
            </h4>
            <p />
            <p></p>
            <p />
            <p>
              <br />
            </p>
            <table itemType="https://schema.org/Flight">
              <tbody>
                <tr>
                  <th scope="row" itemProp="departureAirport" itemType="https://schema.org/Airport">
                    Departure Airport
                  </th>
                  <td itemProp="name">{flightData.departure_airport}</td>
                </tr>
                <tr>
                  <th scope="row">Departure Airport IATA Code</th>
                  <td>{flightData.departure_iata}</td>
                </tr>
                <tr>
                  <th scope="row">Departure Airport Address</th>
                  <td>
                    {flightData.departure_airport},{flightData.departure_airport},{' '}
                    {flightData.departure_city},{flightData.departure_country}
                  </td>
                </tr>
                <tr>
                  <th scope="row" itemProp="arrivalAirport" itemType="https://schema.org/Airport">
                    Arrival Airport
                  </th>
                  <td itemProp="name">{flightData.arrival_airport}</td>
                </tr>
                <tr>
                  <th scope="row">Arrival Airport IATA Code</th>
                  <td>{flightData.arrival_iata}</td>
                </tr>
                <tr>
                  <th scope="row">Arrival Airport Address</th>
                  <td>
                    {flightData.arrival_airport},{flightData.arrival_airport},{' '}
                    {flightData.arrival_city},{flightData.arrival_country}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Distance Kilometers</th>
                  <td itemProp="flightDistance">{flightData.kilometers.toFixed(2)} kilometers</td>
                </tr>
                <tr></tr>
                <tr>
                  <th scope="row">Distance Miles</th>
                  <td itemProp="flightDistance">{flightData.miles.toFixed(2)} miles</td>
                </tr>
                <tr></tr>
                <tr>
                  <th scope="row">Distance Nautical miles</th>
                  <td itemProp="flightDistance">
                    {flightData.nautical_miles.toFixed(2)} Nautical miles
                  </td>
                </tr>
                <tr>
                  <th scope="row">Time</th>
                  <td>{flightData.flights[0].duration}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container">
        <div id="faq" className="columns is-multiline single-content-space">
          <div className="column is-12 content">
            <h3 className="title is-5 mt-3 mb-3">FAQs</h3>
          </div>
          <div className="column is-12 accordions">
            <div itemType="https://schema.org/FAQPage">
              <div
                className="accordion"
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <div className="accordion-header">
                  <button className="toggle" aria-label="toggle">
                    <p itemProp="name">
                      How far is it from {flightData.departure_iata} to {flightData.arrival_iata}?
                    </p>
                  </button>
                </div>
                <div
                  className="accordion-body"
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="accordion-content" itemProp="text">
                    The distance between {flightData.departure_iata} to {flightData.arrival_iata} is
                    approximately 2,923.34 kilometers, 1815.75 miles and 1,581.04 Nautical miles
                  </p>
                </div>
              </div>
              <div
                className="accordion"
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <div className="accordion-header">
                  <button className="toggle" aria-label="toggle">
                    <p itemProp="name">
                      How long does it take to fly from {flightData.departure_iata} to{' '}
                      {flightData.arrival_iata}?
                    </p>
                  </button>
                </div>
                <div
                  className="accordion-body"
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="accordion-content" itemProp="text">
                    The average flight time from {flightData.departure_iata} to{' '}
                    {flightData.arrival_iata} is approximately 2h 20min.
                  </p>
                </div>
              </div>
              <div
                className="accordion"
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <div className="accordion-header">
                  <button className="toggle" aria-label="toggle">
                    <p itemProp="name">
                      Are there direct flights from {flightData.departure_iata} to{' '}
                      {flightData.arrival_iata}?
                    </p>
                  </button>
                </div>
                <div
                  className="accordion-body"
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="accordion-content" itemProp="text">
                    Yes, there are direct flights available from {flightData.departure_iata} to{' '}
                    {flightData.arrival_iata}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simulated airport search function
async function searchFlight(dep_iata: string, arr_iata: string) {
  // Simulate an API call or database lookup
  const response = await getDistance(dep_iata, arr_iata);
  if (response?.data.status) {
    return response.data.data;
  }
  return null;
}

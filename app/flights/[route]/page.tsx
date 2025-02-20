import { headers } from 'next/headers';
import Image from 'next/image';
import { getFlightsData } from '@/services/flights/FlightServices';
import Footer from '../../../src/components/Footer/Footer';
import Header from '../../../src/components/Header/Header';
import { Metadata } from 'next';
// app/flights/[route]/page.tsx
import { Suspense } from 'react';
import { Airline, HotelAirport, Place ,Flight } from '@/src/types/types';
import Error from '@/src/components/Message/Error';
import BarChart from '@/src/components/Charts/Bar';
import LineChart from '@/src/components/Charts/Line';
import HotelsList from '@/src/components/Google/HotelsList';
import PlacesList from '@/src/components/Google/PlacesList';
import { getAirportsData } from '@/services/airports/AirportServices';
import { getFlightPage } from '@/services/pages/PageServices';
import Link from 'next/link';
import FlightFromList from '@/src/components/Flight/FlightFromList';
import TruncatedText from '@/src/common/TrucateText';
import Script from 'next/script';

// Define the params interface
type FlightRouteParams = {
  params: Promise<{
    route: string; // Matches the dynamic route segment `[route]`
  }>;
};

export async function generateMetadata({ params }: FlightRouteParams): Promise<Metadata> {
  // Await `params` since it's treated as a Promise in the build environment
  const headersList = await headers();
  const host = headersList.get('host') || 'default';
  const resolvedParams = await params;
  const { route } = resolvedParams;

  // Parse the route parameter
  const [departure, arrival] = route.split('-to-');
  // Simulated async flight search (replace with actual API call)
  const flightData = await searchFlights(departure, arrival);
  if (flightData && flightData._id) {
    const pageData = await getFlightPageDetails(flightData._id, 'en', host);
    if (pageData) {
      return {
        title: pageData.title,
        description: pageData.meta,
        keywords: pageData.keywords,
      };
    }
  }
  return {
    title: 'TripOsia | Travel Made Easy',
    description: `Plan your adventures effortlessly with Triposia! Discover top destinations, book accommodations, and explore curated travel experiences. Whether you're planning a weekend getaway or a dream vacation, Triposia helps you every step of the way. Your journey begins here!`,
    keywords: 'TripOsia | Travel Made Easy',
  };
}

export default async function FlightRoutePage({ params }: FlightRouteParams) {
  // Await `params` since it's treated as a Promise in the build environment
  const resolvedParams = await params;
  const { route } = resolvedParams;

  // Parse the route parameter
  const [departure, arrival] = route.split('-to-');

  if (!departure || !arrival) {
    return (
      <Error
        title="Invalid route format"
        subTitle="No Flights Found"
        msg="Unfortunately, we could not find any flights for the specified route. Please use format like del-to-bom and try again."
      />
    );
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
        <FlightDetails
          departureCity={departure.toUpperCase()}
          arrivalCity={arrival.toUpperCase()}
        />
      </Suspense>
      <Footer />
    </div>
  );
}

// Separate component for flight details
async function FlightDetails({
  departureCity,
  arrivalCity,
}: {
  departureCity: string;
  arrivalCity: string;
}) {
  // Simulated async flight search (replace with actual API call)
  const flightData = await searchFlights(departureCity, arrivalCity);
  // Simulated async flight search (replace with actual API call)
  const airportData = await searchAirport(arrivalCity);
  const headersList = await headers();
  const host = headersList.get('host') || 'default';
  if (!flightData && !flightData._id) {
    return (
      <Error
        title="Invalid route format"
        subTitle="No Flights Found"
        msg="Unfortunately, we could not find any flights for the specified route. Please ensure that
            the departure and arrival cities are correct and try again."
      />
    );
  }

  const pageData = await getFlightPageDetails(flightData._id, 'en', host);
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar', // Correct type for the chart
      height: 500,
      width: '100%',
      toolbar: { show: false },
      zoom: { enabled: true },
      fontFamily: 'Helvetica, Arial, sans-serif',
      foreColor: '#373d3f',
      sparkline: { enabled: false },
    },
    plotOptions: {
      bar: { horizontal: false },
    },
    colors: [
      '#008FFB',
      '#00E396',
      '#feb019',
      '#ff455f',
      '#775dd0',
      '#80effe',
      '#0077B5',
      '#ff6384',
      '#c9cbcf',
      '#0057ff',
      '#00a9f4',
      '#2ccdc9',
      '#5e72e4',
    ],
    dataLabels: { enabled: false },
    title: {
      text: 'Flight Price According To Months',
    },
    subtitle: {
      text: 'From January to December',
      align: 'left',
    },
    xaxis: {
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
    grid: { show: false },
    // markers: { show: false },
  };
  const weeklyOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      height: 500,
      width: '100%',
      toolbar: { show: false },
      zoom: { enabled: true },
      fontFamily: 'Helvetica, Arial, sans-serif',
      foreColor: '#373d3f',
      sparkline: { enabled: false },
    },
    plotOptions: {
      bar: { horizontal: false },
    },
    colors: [
      '#008FFB',
      '#00E396',
      '#feb019',
      '#ff455f',
      '#775dd0',
      '#80effe',
      '#0077B5',
      '#ff6384',
      '#c9cbcf',
      '#0057ff',
      '#00a9f4',
      '#2ccdc9',
      '#5e72e4',
    ],
    series: [{ name: 'Flight Price', data: [124, 144, 126, 134, 126, 135, 146] }],
    dataLabels: { enabled: false },
    title: {
      text: 'Flight Price According To Weekly',
    },
    subtitle: {
      text: 'From Monday to Sunday',
      align: 'left',
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    grid: { show: false },
  };

  const series: ApexAxisChartSeries = [
    {
      name: 'Flight Price',
      data: [0, 0, 0, 0, 126, 134, 124, 154, 0, 0, 0, 0],
    },
  ];
  const weeklySeries: ApexAxisChartSeries = [
    { name: 'Flight Price', data: [124, 144, 126, 134, 126, 135, 146] },
  ];
// Ensure flights exist before mapping
const flightDataScripts = flightData?.flights?.map((flight: Flight) => ({
  "@type": "Flight",
  "@context": "http://schema.org",
  "estimatedFlightDuration": flight.duration, 
  "departureTime": flight.departure_time,
  "departureAirport": {
    "@type": "Airport",
    "iataCode": flight.iata_from
  },
  "arrivalAirport": {
    "@type": "Airport",
    "iataCode": flight.iata_to
  },
  "offers": [{
    "@type": "Offer",
    "price": flight.price, // Assuming you have a price field
    "priceCurrency": "USD" // Change to actual currency if available
  }],
  "provider": {
    "@type": "Airline",
    "name": flight.airline,
    "iataCode": flight.airline_iata
  },
  "flightDays": {
    "Monday": flight.day1 === "yes",
    "Tuesday": flight.day2 === "yes",
    "Wednesday": flight.day3 === "yes",
    "Thursday": flight.day4 === "yes",
    "Friday": flight.day5 === "yes",
    "Saturday": flight.day6 === "yes",
    "Sunday": flight.day7 === "yes"
  }
})) || [];



  return (
    <div>
      <Script
        id="flight-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(flightDataScripts) }}
        />
      <div className="single-content-nav sticky">
        <div className="container">
          <div className="columns">
            <div className="column is-12 p-0">
              <div className="navbarSub is-link">
                <div id="menubar" className="navbar-menu1">
                  <div>
                    <a className="navbar-item is-active" href="#overview" data-target="overview">
                      Flight Details
                    </a>
                    <a className="navbar-item" href="#cheapestflight" data-target="cheapestflight">
                      Cheapest Flight
                    </a>
                    <a className="navbar-item" href="#seatselection" data-target="seatselection">
                      Seat Selection
                    </a>
                    <a className="navbar-item" href="#graph" data-target="graph">
                      Graph
                    </a>
                    <a className="navbar-item" href="#faq" data-target="faq">
                      Faqs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="single-content-wrap section p-0">
        <div className="container">
          <div id="overview" className="columns is-multiline single-content-space">
            <div className="column is-6 order2">
              <div className="columns is-multiline">
                <div className="column is-12">
                  <h2 className="title is-4 mt-3 mb-3">
                    {flightData.departure_city} to {flightData.arrival_city}
                  </h2>
                  <p className="mr-2">
                    One way flight <span className="badge">1 Stop</span>
                  </p>
                </div>
                <hr className="seprator my-2" />
                <div className="column is-4 mob-view has-text-centered">
                  <p className="title-custom">Flight Take off</p>
                  <span className="subtitle-custom">{flightData?.flights[0].departure_time}</span>
                </div>
                <div className="column is-4 mob-view has-text-centered">
                  <p>
                    <i className="fa-regular fa-clock theme-color" />
                  </p>
                  <span className="subtitle-custom">
                    {flightData.flights[0].duration.toUpperCase()}
                  </span>
                </div>
                <div className="column is-4 mob-view has-text-centered">
                  <p className="title-custom">Flight Landing</p>
                  <span className="subtitle-custom">{flightData.flights[0].arrival_time}</span>
                </div>
                <div className="column is-12 mob-view has-text-centered bor-top bor-bottom mt-2 mb-3">
                  <p className="title-custom">
                    Total flight time:
                    <span className="subtitle-custom">
                      {flightData.flights[0].duration.toUpperCase()}
                    </span>
                  </p>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-plane-up" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Airline</p>
                      <span className="subtitle-custom">{flightData.flights[0].airline}</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-user" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Flight Type</p>
                      <span className="subtitle-custom">Economy</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-refresh" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Fare Type</p>
                      <span className="subtitle-custom">Refundable</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-times" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Cancellation</p>
                      <span className="subtitle-custom">$78 / Person</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-exchange" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Flight Change</p>
                      <span className="subtitle-custom">$53 / Person</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-shopping-cart" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Seats &amp; Baggage</p>
                      <span className="subtitle-custom">Extra Charge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6 order1">
              <picture>
                {/* Image for small screen sizes */}
                <source
                  srcSet={`https://aerocloud.s3.amazonaws.com/aeroweb/${flightData.arrival_iata}.webp`}
                  media="(max-width: 768px)"
                />

                {/* Image for larger screen sizes */}
                <source
                  srcSet={`https://aerocloud.s3.amazonaws.com/aeroweb/${flightData.arrival_iata}.webp`}
                  media="(min-width: 769px)"
                />

                {/* Fallback image using next/image */}
                <Image
                  src={`https://aerocloud.s3.amazonaws.com/aeroweb/${flightData.arrival_iata}.webp`}
                  alt="overview"
                  className="overview-img"
                  width={800} // You can specify the width you want, this could be dynamic if needed
                  height={600} // Same for height
                  layout="intrinsic" // or "responsive" for fully responsive images
                  loading="lazy" // Lazy loading is enabled by default with next/image
                  priority={false} // Set to true if this image is important for SEO or above the fold
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="container">
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">About</h3>
              <TruncatedText
                maxLength={600}
                content={pageData.overview}
                fallbackMessage="no conent found for this flight. Please check back later for more information."
              />
              <br />
            </div>
          </div>
          <div id="cheapestflight" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">
                How to find the cheapest flight from {flightData.departure_city} (
                {flightData.departure_iata}) to {flightData.arrival_city} ({flightData.arrival_iata}
                )
              </h3>
            </div>
            <div className="table-container">
              <table className="is-fullwidth table-custom" style={{ tableLayout: 'fixed' }}>
                <colgroup>
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '25%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th className="first">Popular in</th>
                    <th className="first">Cheapest in</th>
                    <th className="first">Round-trip from</th>
                    <th className="first">One-way from</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="second">{flightData.cheapest_day}</td>
                    <td className="second">{flightData.cheapest_month}</td>
                    <td className="second">$197</td>
                    <td className="second">$34</td>
                  </tr>
                  <tr>
                    <td className="third">High demand for flights, 13% potential price rise</td>
                    <td className="third">
                      Best time to find cheap flights, 19% potential price drop
                    </td>
                    <td className="third">
                      From {flightData.departure_city} to {flightData.arrival_city} (
                      {flightData.arrival_iata})
                    </td>
                    <td className="third">
                      One-way flight from {flightData.departure_city} to {flightData.arrival_city} (
                      {flightData.arrival_iata})
                    </td>
                  </tr>
                  <tr>
                    <td className="fourth">
                      <a className="button is-primary">Search Deals</a>
                    </td>
                    <td className="fourth">
                      <a className="button is-primary">Search Deals</a>
                    </td>
                    <td className="fourth">
                      <a className="button is-primary">Search Deals</a>
                    </td>
                    <td className="fourth">
                      <a className="button is-primary">Search Deals</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="column is-12">
            <h3 className="title is-5 mt-3 mb-3">Flights from - {flightData.departure_city}</h3>
            <TruncatedText
              content={pageData.flightsFromDetails}
              fallbackMessage="no conent found for this flight. Please check back later for more information."
              maxLength={600}
            />
          </div>
        </div>

        <div className="container">
          <FlightFromList flightCount={5} type="flight" flightData={flightData} />
        </div>
        <div className="container">
          <div className="column is-12">
            <h3 className="title is-5 mt-3 mb-3">One-Way Flight Details</h3>
            <TruncatedText
              content={pageData.oneWayFlightDetails}
              fallbackMessage="no conent found for this flight. Please check back later for more information."
              maxLength={600}
            />
          </div>
          <div className="container">
            <FlightFromList flightCount={5} type="flight" flightData={flightData} />
          </div>
        </div>
        <div className="container">
          <div className="column is-12">
            <h3 className="title is-5 mt-3 mb-3">Round-Trip Details</h3>
            <TruncatedText
              content={pageData.roundTripDetails}
              fallbackMessage="no conent found for this flight. Please check back later for more information."
              maxLength={600}
            />
          </div>
          <div className="container">
            <FlightFromList flightCount={5} type="flight" flightData={flightData} />
          </div>
        </div>
        <div className="container">
          <div id="graph" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">
                Monthly price statistics {flightData.departure_city} to {flightData.arrival_city}{' '}
                flights
              </h3>
              <TruncatedText
                content={pageData.monthlyGraph}
                fallbackMessage="no conent found for this flight. Please check back later for more information."
                maxLength={600}
              />
            </div>
            <div className="column is-6">
              <BarChart options={options} series={series} width="637" height="500" />
            </div>
            <div className="column is-6">
              <LineChart options={options} series={series} width="637" height="500" />
            </div>
          </div>
        </div>

        <div className="container">
          <div id="graph" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">
                Weekly price statistics {flightData.departure_city} to {flightData.arrival_city}{' '}
                flights
              </h3>
              <TruncatedText
                content={pageData.weeklyGraph}
                fallbackMessage="no conent found for this flight. Please check back later for more information."
                maxLength={600}
              />
            </div>
            <div className="column is-6">
              <BarChart options={weeklyOptions} series={weeklySeries} width="637" height="500" />
            </div>
            <div className="column is-6">
              <LineChart options={weeklyOptions} series={weeklySeries} width="637" height="500" />
            </div>
          </div>
        </div>

        <div className="container">
          <div id="bestairlines" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3 has-text-centered">
                Best airlines flying from {flightData.departure_city} to {flightData.arrival_city}
              </h3>
              <TruncatedText
                content={pageData.bestAirlinesFlyingFromDetails}
                fallbackMessage="no conent found for this flight. Please check back later for more information."
                maxLength={600}
              />
              <div className="b-table">
                <div className="table-wrapper has-mobile-cards">
                  <table className="table is-fullwidth bestairlines-table">
                    <thead>
                      <tr>
                        <th>Airline</th>
                        <th>Rating</th>
                        <th>Free Cancellation</th>
                        <th>Price</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {flightData.airlines.map((item: Airline, index: number) => {
                        return (
                          <tr key={index}>
                            <td data-label="Airline">
                              {/* <img src="../images/F9.png" alt="" className="bestairlines-logo" /> */}
                              {item.name}
                            </td>
                            <td data-label="Rating">1,050 reviews</td>
                            <td data-label="Free Cancellation">
                              <i className="far fa-check-circle" />
                            </td>
                            <td data-label="Price">From ${item.price}</td>
                            <td className="search-flight-btn">
                              <Link href={`/airlines/${item.name}`} className="button is-primary">
                                Search {item.name} flights
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div id="faq" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Attractions Near {airportData.city} Airport</h3>
              <p>
                If you are looking for places to visit near {airportData.city} airport, find out the
                list below.
              </p>
            </div>
            {airportData.places_visit.slice(0, 6).map((place: Place) => (
              <div key={place.place_id} className="column is-4">
                <PlacesList placeId={place.place_id} distance={place.distance_from_airport_km} />
              </div>
            ))}
          </div>

          <div id="hotels" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Hotels Near {airportData.city} Airport</h3>
              <p>
                If you are looking for places to stay near {airportData.city} airport, explore the
                options below.
              </p>
            </div>
            {airportData.hotels.slice(0, 6).map((hotel: HotelAirport) => (
              <div key={hotel.hotelId} className="column is-4">
                <HotelsList hotel={hotel} />
              </div>
            ))}
          </div>
          <div id="faq" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">FAQs</h3>
            </div>
            <div className="column is-12 accordions">
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.faqs ||
                    'no faqs found for this flight. Please check back later for more information.',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Simulated flight search function
async function searchFlights(dep: string, arr: string) {
  // Simulate an API call or database lookup
  const response = await getFlightsData(dep, arr);
  if (response?.data.status) {
    return response.data.data[0];
  }
  return null;
}

// Simulated airport search function
async function searchAirport(iata_code: string) {
  // Simulate an API call or database lookup
  const response = await getAirportsData(iata_code);
  if (response?.data.status) {
    return response.data.data[0];
  }
  return null;
}

// Simulated airline page search function
async function getFlightPageDetails(
  airline_id: string | null,
  language_id: string | null,
  host: string,
) {
  // Simulate an API call or database lookup
  const response = await getFlightPage(airline_id, language_id, host);
  if (response?.data.status) {
    return response.data.data;
  }
  return null;
}

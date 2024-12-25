import { getFlightsData } from '@/services/flights/FlightServices';
import Footer from '../../../src/components/Footer/Footer';
import Header from '../../../src/components/Header/Header';

// app/flights/[route]/page.tsx
import { Suspense } from 'react';
import { Airline, Flight, Hotel, Place } from '@/src/types/types';
import Error from '@/src/components/Message/Error';
import BarChart from '@/src/components/Charts/Bar';
import LineChart from '@/src/components/Charts/Line';
import HotelsList from '@/src/components/Google/HotelsList';
import PlacesList from '@/src/components/Google/PlacesList';
import { getAirportsData } from '@/services/airports/AirportServices';
import { getFlightPage } from '@/services/pages/PageServices';

// Define the params interface
type FlightRouteParams = {
  params: Promise<{
    route: string; // Matches the dynamic route segment `[route]`
  }>;
};

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
  const pageData = await getFlightPageDetails(flightData._id, 'en');
  if (!flightData) {
    return (
      <Error
        title="Invalid route format"
        subTitle="No Flights Found"
        msg="Unfortunately, we could not find any flights for the specified route. Please ensure that
            the departure and arrival cities are correct and try again."
      />
    );
  }
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
  return (
    <div>
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
              <img
                src={`https://aerocloud.s3.amazonaws.com/aeroweb/${arrivalCity}.webp`}
                alt="overview"
                className="overview-img"
              />
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
              <table className="is-fullwidth table-custom">
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
                    <td className="second">December</td>
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
          <div id="seatselection" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Flights from - {flightData.departure_city}</h3>
            </div>
            {flightData.flights.map((item: Flight, index: number) => {
              return (
                <div key={index} className="column is-12 pt-0">
                  <div className="departing-flights">
                    <div className="flights-booking-item">
                      <div className="flight-logo">
                        <img
                          src={`https://aerocloud.s3.amazonaws.com/airweb/${item.airline_iata}.webp`}
                          alt="flight-logo"
                        />
                      </div>
                      <div className="flight-time">
                        <h4 className="title is-6 mb-0">
                          {item.departure_time}-{item.arrival_time}
                        </h4>
                        <p className="detailtxt">Separate tickets booked together</p>
                      </div>
                      <div className="duration">
                        <h4 className="title is-6 mb-0">{item.duration}</h4>
                        <p className="detailtxt">
                          {flightData.departure_iata}-{flightData.arrival_iata}
                        </p>
                      </div>
                      <div className="nonstop">
                        <h4 className="title is-6 mb-0">Nonstop</h4>
                      </div>
                      <div className="weightkg">
                        <h4 className="title is-6 mb-0">
                          109 kg CO2<sub>2</sub>
                        </h4>
                        <p className="detailtxt">+36% emissions</p>
                      </div>
                      <div className="flight-price">
                        <h4 className="title is-6 mb-0">₹9,195</h4>
                        <p className="detailtxt">round trip</p>
                      </div>
                    </div>
                    <button className="toggle_menu" />
                    <div className="toggle_text">
                      <div className="columns is-multiline is-justify-content-space-around">
                        <div className="column is-6">
                          <div className="time-travel-wrap is-clearfix">
                            <div className="time-travel">
                              <div className="time-travel-circle" />
                              <div className="time-travel-dot" />
                              <div className="time-travel-circle" />
                            </div>
                            <p className="time-start-end">
                              11:40 AM <i className="fa-solid fa-circle dot-seprator" /> Indira
                              Gandhi International Airport (DEL)
                            </p>
                            <p className="total-time">Travel time: 2 hr 10 min</p>
                            <p className="time-start-end">
                              1:50 PM <i className="fa-solid fa-circle dot-seprator" /> Chhatrapati
                              Shivaji Maharaj International Airport (BOM)
                            </p>
                          </div>
                          <div className="flightlist-bottom">
                            Vistara <i className="fa-solid fa-circle dot-seprator" /> Economy{' '}
                            <i className="fa-solid fa-circle dot-seprator" /> Airbus{' '}
                            <i className="fa-solid fa-circle dot-seprator" /> A320UK 945
                          </div>
                        </div>
                        <div className="column is-3">
                          <ul className="check-list">
                            <li>Below average legroom (29 in)</li>
                            <li>In-seat USB outlet</li>
                            <li>Stream media to your device</li>
                            <li>Carbon emissions estimate: 97 kg</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="graph" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">
                Monthly price statistics {flightData.departure_city} to {flightData.arrival_city}{' '}
                flights
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.monthlyGraph ||
                    `July is cheapest month ${flightData.departure_city} to ${flightData.arrival_city}
                flights. Fares start start in July from $124 and Monday is cheapest day to book
                flights to Mumbai. Find out monthly fares graph predications
                ${flightData.departure_city} to ${flightData.arrival_city} flights.`,
                }}
              />
            </div>
            <div className="column is-6">
              <BarChart options={options} series={series} width="637" height="500" />
            </div>
            <div className="column is-6">
              <LineChart options={options} series={series} width="637" height="500" />
            </div>
          </div>
          <div id="graph" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">
                Weekly price statistics {flightData.departure_city} to {flightData.arrival_city}{' '}
                flights
              </h3>
              <p></p>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.weeklyGraph ||
                    ` Monday is cheapest day price start at 124 ${flightData.departure_city} to
                ${flightData.arrival_city} flights. Get full real time stats of weekly fares
                ${flightData.departure_city} to ${flightData.arrival_city}.`,
                }}
              />
            </div>
            <div className="column is-6">
              <BarChart options={weeklyOptions} series={weeklySeries} width="637" height="500" />
            </div>
            <div className="column is-6">
              <LineChart options={weeklyOptions} series={weeklySeries} width="637" height="500" />
            </div>
          </div>
          <div id="bestairlines" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3 has-text-centered">
                Best airlines flying from {flightData.departure_city} to {flightData.arrival_city}
              </h3>
              <p
                className="has-text-centered"
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.bestAirlinesFlyingFromDetails ||
                    `Compare and see reviews for airlines that fly from ${flightData.departure_city} to
                ${flightData.arrival_city} with momondo`,
                }}
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
                              <a className="button is-primary">Search {item.name} flights1</a>
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
                <PlacesList placeId={place.place_id} />
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
            {airportData.hotels.slice(0, 6).map((hotel: Hotel) => (
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
              <article className="accordion is-active">
                <div className="accordion-header">
                  <button className="toggle" aria-label="toggle">
                    <p>
                      What is the average flight duration from {flightData.departure_city} to{' '}
                      {flightData.arrival_city}?
                    </p>
                  </button>
                </div>
                <div className="accordion-body">
                  <div className="accordion-content">
                    The average flight duration is approximately {flightData.flights[0].duration}.
                  </div>
                </div>
              </article>
              <article className="accordion">
                <div className="accordion-header">
                  <button className="toggle" aria-label="toggle">
                    <p>
                      How many flights operate daily between {flightData.departure_city} and{' '}
                      {flightData.arrival_city}?
                    </p>
                  </button>
                </div>
                <div className="accordion-body">
                  <div className="accordion-content">
                    There are around 100 flights daily, operated by various airlines.
                  </div>
                </div>
              </article>
              <article className="accordion">
                <div className="accordion-header">
                  <button className="toggle" aria-label="toggle">
                    <p>
                      Which airlines operate direct flights between {flightData.departure_city} and{' '}
                      {flightData.arrival_city}?
                    </p>
                  </button>
                </div>
                <div className="accordion-body">
                  <div className="accordion-content">
                    Major airlines like Indigo, Air India, SpiceJet, and Vistara operate direct
                    flights.
                  </div>
                </div>
              </article>
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
    return response.data.data;
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
async function getFlightPageDetails(airline_id: string | null, language_id: string | null) {
  // Simulate an API call or database lookup
  const response = await getFlightPage(airline_id, language_id);
  if (response?.data.status) {
    return response.data.data;
  }
  return null;
}

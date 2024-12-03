import { getFlightsData } from '@/services/flights/FlightServices';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

// app/flights/[route]/page.tsx
import { Suspense } from 'react';
import { Airline, Flight } from '@/src/types/types';

// Define the params interface
interface FlightRouteParams {
  params: {
    route: string;
  };
}

export default async function FlightRoutePage({ params }: FlightRouteParams) {
  // Safely resolve and parse the route parameter
  const { route } = await params;

  const routeParts = route.split('-to-');
  const departure = routeParts[0];
  const arrival = routeParts[1];

  // Validate route format
  if (!departure || !arrival) {
    return <div>Invalid route format. Use format like del-to-bom</div>;
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
        <FlightDetails departureCity={departure} arrivalCity={arrival} />
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
  if (!flightData) {
    return (
      <article className="message is-danger">
        <div className="message-header">
          <p>Invalid route format</p>
        </div>
        <div className="message-body">
          <strong className="font-bold">No Flights Found: </strong>
          <span className="block sm:inline">
            Unfortunately, we could not find any flights for the specified route. Please ensure that
            the departure and arrival cities are correct and try again.
          </span>
          <span className="block sm:inline mt-2">
            If the problem persists, feel free to contact our support team for assistance.
          </span>
        </div>
      </article>
    );
  }
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
              <img src="../images/flight1.jpg" alt="" className="overview-img" />
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
                          alt=""
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
            <div className="column is-6">
              <div className="graphs-container mt-0" data-title="Horizontal Graph">
                <div className="data-container column is-full columns is-mobile is-size-7 has-text-white is-marginless">
                  <div data-title="One" data-value={10} />
                  <div data-title="Two" data-value={50} />
                  <div data-title="Three" data-value={100} />
                  <div data-title="Four" data-value={55} />
                  <div data-title="Five" data-value={25} />
                  <div data-title="Six" data-value={88} />
                  <div data-title="Seven" data-value={77} />
                  <div data-title="Eight" data-value={66} />
                  <div data-title="Nine" data-value={9} />
                  <div data-title="Ten" data-value={10} />
                  <div data-title="Eleven" data-value={11} />
                  <div data-title="Twelve" data-value={12} />
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="graphs-container mt-0" data-title="Vertical Graph">
                <div className="data-container column is-full is-vertical-graph has-text-white">
                  <div data-title="Mark" data-value={20} />
                  <div data-title="Seline" data-value={60} />
                  <div data-title="Lora" data-value={90} />
                  <div data-title="Werner" data-value={55} />
                </div>
              </div>
            </div>
          </div>
          <div id="bestairlines" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3 has-text-centered">
                Best airlines flying from {flightData.departure_city} to {flightData.arrival_city}
              </h3>
              <p className="has-text-centered">
                Compare and see reviews for airlines that fly from {flightData.departure_city} to{' '}
                {flightData.arrival_city} with momondo
              </p>
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
              <h3 className="title is-5 mt-3 mb-3">FAQs</h3>
            </div>
            <div className="column is-12 accordions">
              <article className="accordion is-active">
                <div className="accordion-header">
                  <button className="toggle" aria-label="toggle">
                    <p>Amendment in higher class charges</p>
                  </button>
                </div>
                <div className="accordion-body">
                  <div className="accordion-content">
                    Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima
                    causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero
                    inermis vel ut. An sit illum euismod facilisis Nullam id dolor id nibh ultricies
                    vehicula ut id elit.
                  </div>
                </div>
              </article>
              <article className="accordion">
                <div className="accordion-header">
                  <button className="toggle" aria-label="toggle">
                    <p>Amendment in higher class charges</p>
                  </button>
                </div>
                <div className="accordion-body">
                  <div className="accordion-content">
                    Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima
                    causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero
                    inermis vel ut. An sit illum euismod facilisis Nullam id dolor id nibh ultricies
                    vehicula ut id elit.
                  </div>
                </div>
              </article>
              <article className="accordion">
                <div className="accordion-header">
                  <button className="toggle" aria-label="toggle">
                    <p>Amendment in higher class charges</p>
                  </button>
                </div>
                <div className="accordion-body">
                  <div className="accordion-content">
                    Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima
                    causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero
                    inermis vel ut. An sit illum euismod facilisis Nullam id dolor id nibh ultricies
                    vehicula ut id elit.
                  </div>
                </div>
              </article>
              <article className="accordion">
                <div className="accordion-header">
                  <button className="toggle" aria-label="toggle">
                    <p>Amendment in higher class charges</p>
                  </button>
                </div>
                <div className="accordion-body">
                  <div className="accordion-content">
                    Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima
                    causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero
                    inermis vel ut. An sit illum euismod facilisis Nullam id dolor id nibh ultricies
                    vehicula ut id elit.
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

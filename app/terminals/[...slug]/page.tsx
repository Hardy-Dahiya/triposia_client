import { getAirlineData } from '@/services/airlines/AirlineServices';
import Footer from '../../../src/components/Footer/Footer';
import Header from '../../../src/components/Header/Header';

// app/airlines/[route]/page.tsx
import { Suspense } from 'react';
import { AirlineDestination, FlightData, FlightRoute, Hotel, Place } from '@/src/types/types';
import Error from '@/src/components/Message/Error';
import { getFlightsRouteData, getFlightsToData } from '@/services/flights/FlightServices';
// @Components
import ToggleFlightDetails from '@/src/components/Flight/ToggleFlightDetails';
import { getAirportsData } from '@/services/airports/AirportServices';
import PlacesList from '@/src/components/Google/PlacesList';
import HotelsList from '@/src/components/Google/HotelsList';
import { calculateFlightDuration } from '@/utils/utils';
import { getAirlinePage } from '@/services/pages/PageServices';
import Head from 'next/head';
// Define the params interface
type AirlineRouteParams = {
  params: Promise<{
    slug: string; // Matches the dynamic route segment `[route]`
  }>;
};

export default async function AirlineRoutePage({ params }: AirlineRouteParams) {
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

  // Split the slug into an array
  if (slug.length > 1) {
    const slugParts = slug[1].split('-to-');
    finalSlug.push(slug[0], ...slugParts);
  } else {
    finalSlug.push(slug[0]);
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
        {finalSlug.length === 1 ? (
          <AirlineDetails iata_code={finalSlug[0].toUpperCase()} />
        ) : finalSlug.length === 2 ? (
          <FlightDetails
            iata_code={finalSlug[1].toUpperCase()}
            airline_iata={finalSlug[0].toUpperCase()}
            isMultiCity={false}
          />
        ) : finalSlug.length === 3 ? (
          <FlightDetails
            iata_code={finalSlug[1].toUpperCase()}
            arr_iata={finalSlug[2].toUpperCase()}
            airline_iata={finalSlug[0].toUpperCase()}
            isMultiCity={true}
          />
        ) : (
          <Error
            title="Invalid Route Format"
            subTitle="Too Many Segments"
            msg="Please use a valid route format like /ai or /ai/del."
          />
        )}
      </Suspense>
      <Footer />
    </div>
  );
}

async function AirlineDetails({ iata_code }: { iata_code: string }) {
  // Simulated async flight search (replace with actual API call)
  const airlineData = await searchAirlines(iata_code);
  const pageData = await getAirlinePageDetails(airlineData._id, 'en');
  console.log(pageData);
  if (!airlineData) {
    return (
      <Error
        title="Invalid iata_code format"
        subTitle="No Airline Found"
        msg="Unfortunately, we could not find any airlines for the specified iata_code. Please ensure that
            the iata_code are correct and try again."
      />
    );
  }
  return (
    <div>
      <Head>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.meta} />
        <meta name="keywords" content={pageData.keywords} />
      </Head>
      <div className="single-content-nav sticky ">
        <div className="container">
          <div className="columns">
            <div className="column is-12 p-0">
              <div className="navbarSub is-link">
                <div id="menubar" className="navbar-menu1">
                  <div>
                    <a className="navbar-item is-active" href="#overview" data-target="overview">
                      Airline Details
                    </a>
                    <a
                      className="navbar-item"
                      href="#inflightfeatures"
                      data-target="inflightfeatures"
                    >
                      Inflight Features
                    </a>
                    <a className="navbar-item" href="#seatselection" data-target="seatselection">
                      Seat Selection
                    </a>
                    <a className="navbar-item" href="#baggage" data-target="baggage">
                      Baggage
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
                    {airlineData.name} ({airlineData.iata_code})
                  </h2>
                  <p className="mr-2">
                    <span className="badge">{airlineData.check_in}</span>
                  </p>
                </div>
                <hr className="seprator my-2" />
                {/* <div className="column is-4 mob-view has-text-centered">
                  <p className="title-custom">Flight Take off</p>
                  <span className="subtitle-custom">12 Jun 2020, 7:50 am</span>
                </div>
                <div className="column is-4 mob-view has-text-centered">
                  <p>
                    <i className="fa-regular fa-clock theme-color" />
                  </p>
                  <span className="subtitle-custom">1H 40M</span>
                </div>
                <div className="column is-4 mob-view has-text-centered">
                  <p className="title-custom">Flight Landing</p>
                  <span className="subtitle-custom">13 Jun 2020, 5:50 am</span>
                </div> */}
                <div className="column is-12 mob-view has-text-centered bor-top bor-bottom mt-2 mb-3">
                  <p className="title-custom">
                    Total flights:
                    <span className="subtitle-custom"> {airlineData.total_flights}</span>
                  </p>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-plane-up" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Aircrafts</p>
                      <span className="subtitle-custom">{airlineData.total_aircrafts}</span>
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
                      <i className="fa fa-globe" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">International</p>
                      <span className="subtitle-custom">{airlineData.international}</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-exchange" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Destinations</p>
                      <span className="subtitle-custom">{airlineData.total_destinations}</span>
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
            <div className="column is-6 order1 is-flex is-justify-content-center is-align-items-center">
              <img src={`https://pics.avs.io/180/60/${iata_code}@2x.webp`} alt="overview" />
            </div>
            <hr className="seprator my-5" />
            <div className="column is-12 order3">
              <h3 className="title is-5 mb-3">About {airlineData.name}</h3>
              <p className="py-2">{pageData.overview}</p>
            </div>
          </div>
          <div id="inflightfeatures" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Inflight Features</h3>
              <p className="py-2">
                {pageData.inFlightContent ||
                  `Experience unparalleled comfort and convenience on every flight. Enjoy a wide range
                of inflight entertainment, including movies, TV shows, and music, to keep you
                entertained throughout your journey.`}
              </p>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-wifi" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">WI-FI</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-music" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Entertainment</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-television" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Television</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-tree" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Air Conditioning</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa-solid fa-martini-glass" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Drink</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-gamepad" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Games</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-coffee" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Coffee</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa-solid fa-martini-glass" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Wines</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-shopping-cart" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Shopping</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-cutlery" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Food</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-bed" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Comfort</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-image" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Magazines</p>
                </div>
              </div>
            </div>
          </div>
          <div id="seatselection" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Destinations</h3>
            </div>
            {airlineData.destinations.map((item: AirlineDestination, index: number) => {
              return (
                <div key={index} className="column is-12 pt-0">
                  <div className="departing-flights">
                    <div className="flights-booking-item">
                      <div className="flight-time">
                        <h4 className="title is-6 mb-0">{item.city}</h4>
                        <p className="detailtxt">{item.name}</p>
                      </div>
                      <div className="duration">
                        <h4 className="title is-6 mb-0">{item.iata_code}</h4>
                        {/* <p className="detailtxt">BOM-DEL</p> */}
                      </div>
                      <div className="nonstop">
                        <h4 className="title is-6 mb-0">{item.country}</h4>
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
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Baggage</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.baggageContent ||
                    `In this section you ll find information on baggage allowances, special equipment and
                sports items as well as restricted items. We ve also included some tips to make your
                trip more enjoyable.`,
                }}
              />
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-shopping-cart" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Carry-on Allowance</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-briefcase" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Baggage Allowance</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-briefcase" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Delayed Baggage</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-briefcase" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Damaged Baggage</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-briefcase" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Baggage Status</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-briefcase" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Baggage Services</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-briefcase" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Baggage Tips</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-user-times" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Restricted Items</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-file" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Liability Limitations</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-gift" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Lost and Found</p>
                </div>
              </div>
            </div>
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Basic Information</h3>
              {/* <p>{pageData.basicInformation}</p> */}
              <p
                dangerouslySetInnerHTML={{
                  __html: pageData.basicInformation || '',
                }}
              />
            </div>
          </div>
          <div id="faq" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Fare Rules for your Flight</h3>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-check" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Rules And Policies</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-check" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Flight Changes</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-check" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Refunds</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-check" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Airline Penalties</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-check" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Flight Cancellation</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-check" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">Airline Terms Of Use</p>
                </div>
              </div>
            </div>
            <div className="column is-12">
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.fareRulesForYourFlight ||
                    `Understanding our fare rules ensures a seamless travel experience. Ticket changes,
                including date or time modifications, may incur fees based on your fare type.
                Refunds depend on the fare category, with non-refundable tickets not eligible.
                Baggage allowances vary by class, and excess fees apply for additional or oversized
                luggage.`,
                }}
              />
            </div>
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">FAQs</h3>
            </div>
            <div className="column is-12 accordions">
              <article className="accordion is-active">
                <div className="accordion-header">
                  <button className="toggle" aria-label="toggle">
                    <p>What is the baggage allowance for {airlineData.name}?</p>
                  </button>
                </div>
                <div className="accordion-body">
                  <div className="accordion-content">
                    The baggage allowance for {airlineData.name} depends on the class of travel and
                    the destination. Typically, economy class passengers are allowed one checked bag
                    weighing up to 23kg and one carry-on bag. For specific details, please check
                    your ticket or visit {airlineData.name} baggage policy page.
                  </div>
                </div>
              </article>
              <article className="accordion">
                <div className="accordion-header">
                  <button className="toggle" aria-label="toggle">
                    <p>How can I check in for my {airlineData.name} flight?</p>
                  </button>
                </div>
                <div className="accordion-body">
                  <div className="accordion-content">
                    You can check in for your {airlineData.name} flight online through the airline
                    website or mobile app, usually starting 24 to 48 hours before departure.
                    Alternatively, you can check in at the airport using self-service kiosks or at
                    the airline check-in counter.
                  </div>
                </div>
              </article>
              <article className="accordion">
                <div className="accordion-header">
                  <button className="toggle" aria-label="toggle">
                    <p>What is {airlineData.name} cancellation and refund policy?</p>
                  </button>
                </div>
                <div className="accordion-body">
                  <div className="accordion-content">
                    {airlineData.name} cancellation and refund policy depends on the fare type you
                    have purchased. Flexible tickets may allow cancellations and full refunds, while
                    non-refundable tickets may only offer travel credits. For detailed terms, refer
                    to the fare rules on your ticket or contact {airlineData.name} customer support.
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

async function FlightDetails({
  iata_code,
  airline_iata,
  isMultiCity,
  arr_iata,
}: {
  iata_code: string;
  arr_iata?: string;
  airline_iata: string;
  isMultiCity: boolean;
}) {
  const airlineData = await searchAirlines(airline_iata);
  const flightData = await getFlightsFromAirline(iata_code, airline_iata);
  // Simulated async airport search (replace with actual API call)
  const airportData = await searchAirport(isMultiCity ? arr_iata : iata_code);
  const routeData = await getFlightsRoutes(iata_code, arr_iata, null);
  if (!airlineData || !flightData.length) {
    return (
      <Error
        title="Invalid Route Format"
        subTitle="Too Many Segments"
        msg="Please use a valid route format like /ai or /ai/del."
      />
    );
  }
  return (
    <div>
      <div className="single-content-nav sticky ">
        <div className="container">
          <div className="columns">
            <div className="column is-12 p-0">
              <div className="navbarSub is-link">
                <div id="menubar" className="navbar-menu1">
                  <div>
                    <a className="navbar-item is-active" href="#overview" data-target="overview">
                      Airline Details
                    </a>
                    <a className="navbar-item" href="#bestairlines" data-target="bestairlines">
                      Terminals
                    </a>
                    <a className="navbar-item" href="#seatselection" data-target="seatselection">
                      Seat Selection
                    </a>
                    <a className="navbar-item" href="#baggage" data-target="baggage">
                      Baggage
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
          {isMultiCity ? (
            <div id="overview" className="columns is-multiline single-content-space">
              <div className="column is-6">
                <div className="columns is-multiline">
                  <div className="column is-12">
                    <h2 className="title is-4 mt-3 mb-3">
                      {airlineData.name} flights {iata_code} to {arr_iata}
                    </h2>
                  </div>
                  <hr className="seprator my-2" />
                  {/* <div className="column is-4 has-text-centered">
                    <p className="title-custom">New Delhi</p>
                  </div>
                  <div className="column is-4 has-text-centered">
                    <p>
                      <i className="fa-regular fa-clock theme-color" />
                    </p>
                    <span className="subtitle-custom">02:15:00</span>
                  </div>
                  <div className="column is-4 has-text-centered">
                    <p className="title-custom">Mumbai</p>
                  </div>
                  <div className="column is-12 has-text-centered bor-top bor-bottom mt-2 mb-3">
                    <p className="title-custom">
                      Distance: <span className="subtitle-custom">705.97</span>
                    </p>
                  </div> */}
                  <div className="column is-8">
                    <div className="single-tour-feature">
                      <div className="single-feature-icon">
                        <i className="fa fa-plane-up" />
                      </div>
                      <div className="single-feature-titles">
                        <p className="title-custom">DEPARTURE</p>
                        <span className="subtitle-custom">{iata_code}</span>
                      </div>
                    </div>
                  </div>
                  <div className="column is-4">
                    <div className="single-tour-feature">
                      <div className="single-feature-icon">
                        <i className="fa fa-user" />
                      </div>
                      <div className="single-feature-titles">
                        <p className="title-custom">ARRIVAL</p>
                        <span className="subtitle-custom">{arr_iata}</span>
                      </div>
                    </div>
                  </div>
                  <div className="column is-8">
                    <div className="single-tour-feature">
                      <div className="single-feature-icon">
                        <i className="fa fa-plane-up" />
                      </div>
                      <div className="single-feature-titles">
                        <p className="title-custom">Total Flights</p>
                        <span className="subtitle-custom">{flightData.length}</span>
                      </div>
                    </div>
                  </div>
                  <div className="column is-4">
                    <div className="single-tour-feature">
                      <div className="single-feature-icon">
                        <i className="fa fa-user" />
                      </div>
                      <div className="single-feature-titles">
                        <p className="title-custom">Cheapest Fare</p>
                        <span className="subtitle-custom">124</span>
                      </div>
                    </div>
                  </div>
                  <div className="column is-8">
                    <div className="single-tour-feature">
                      <div className="single-feature-icon">
                        <i className="fa fa-refresh" />
                      </div>
                      <div className="single-feature-titles">
                        <p className="title-custom">Best Month</p>
                        <span className="subtitle-custom">July</span>
                      </div>
                    </div>
                  </div>
                  <div className="column is-4">
                    <div className="single-tour-feature">
                      <div className="single-feature-icon">
                        <i className="fa fa-circle" />
                      </div>
                      <div className="single-feature-titles">
                        <p className="title-custom">Temprature</p>
                        <span className="subtitle-custom">NA</span>
                      </div>
                    </div>
                  </div>
                  <div className="column is-8">
                    <div className="single-tour-feature">
                      <div className="single-feature-icon">
                        <i className="fa fa-plane" />
                      </div>
                      <div className="single-feature-titles">
                        <p className="title-custom">Popular Airline</p>
                        <span className="subtitle-custom">
                          Jet Airways,Air Great Wall,Air India,Burrard Air,Air Uk,Air Sarnia,Blue
                          Dart Aviation
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="column is-4">
                    <div className="single-tour-feature">
                      <div className="single-feature-icon">
                        <i className="fa fa-plane-up" />
                      </div>
                      <div className="single-feature-titles">
                        <p className="title-custom">Total Airlines</p>
                        <span className="subtitle-custom">1</span>
                      </div>
                    </div>
                  </div>
                  <div className="column is-8">
                    <div className="single-tour-feature">
                      <div className="single-feature-icon">
                        <i className="fa fa-plane-up" />
                      </div>
                      <div className="single-feature-titles">
                        <p className="title-custom">First Flights</p>
                        <span className="subtitle-custom">NA</span>
                      </div>
                    </div>
                  </div>
                  <div className="column is-4">
                    <div className="single-tour-feature">
                      <div className="single-feature-icon">
                        <i className="fa fa-plane-up" />
                      </div>
                      <div className="single-feature-titles">
                        <p className="title-custom">Last Flights</p>
                        <span className="subtitle-custom">NA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <img
                  src={`https://aerocloud.s3.amazonaws.com/aeroweb/${arr_iata}.webp`}
                  alt="city"
                  className="overview-img"
                />
              </div>
            </div>
          ) : (
            ''
          )}

          <div id="seatselection" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">
                {airlineData.name} domestic flights from {iata_code}{' '}
                {isMultiCity ? `to ${arr_iata}` : ''}
              </h3>
              <p>
                Looking for cheap {airlineData.name} domestic flights from {iata_code}{' '}
                {isMultiCity ? `to ${arr_iata}` : ''}.{airlineData.name} have{' '}
                {isMultiCity
                  ? flightData.filter(
                      (el: FlightData) =>
                        el.country_code === el.airport.country_code &&
                        el.iata_from === iata_code &&
                        el.iata_to === arr_iata,
                    ).length
                  : flightData.filter(
                      (el: FlightData) => el.country_code === el.airport.country_code,
                    ).length}{' '}
                domestic flights from {iata_code} {isMultiCity ? `to ${arr_iata}` : ''}
              </p>
            </div>
          </div>
          {flightData.map((item: FlightData, index: number) => {
            if (item.country_code === item.airport.country_code) {
              if (isMultiCity) {
                if (item.iata_from === iata_code && item.iata_to === arr_iata) {
                  return (
                    <ToggleFlightDetails
                      key={index}
                      item={item}
                      airlineData={airlineData}
                      airline_iata={airline_iata}
                      index={index}
                    />
                  );
                }
                // Return `null` if the `isMultiCity` condition is not met
                return null;
              }

              // Handle the single-city case
              return (
                <ToggleFlightDetails
                  key={index}
                  item={item}
                  airlineData={airlineData}
                  airline_iata={airline_iata}
                  index={index}
                />
              );
            }
            // Return `null` if `country_code` does not match
            return null;
          })}
          <div id="seatselection" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">
                {airlineData.name} international flights from {iata_code}
              </h3>
              <p>
                Looking for cheap {airlineData.name} international flights from {iata_code}{' '}
                {isMultiCity ? `to ${arr_iata}` : ''}. {airlineData.name} have{' '}
                {isMultiCity
                  ? flightData.filter(
                      (el: FlightData) =>
                        el.country_code !== el.airport.country_code &&
                        el.iata_from === iata_code &&
                        el.iata_to === arr_iata,
                    ).length
                  : flightData.filter(
                      (el: FlightData) => el.country_code === el.airport.country_code,
                    ).length}{' '}
                international flights from {iata_code} {isMultiCity ? `to ${arr_iata}` : ''}
              </p>
            </div>
          </div>
          {flightData.map((item: FlightData, index: number) => {
            if (item.country_code !== item.airport.country_code) {
              if (isMultiCity) {
                if (item.iata_from === iata_code && item.iata_to === arr_iata) {
                  return (
                    <ToggleFlightDetails
                      key={index}
                      item={item}
                      airlineData={airlineData}
                      airline_iata={airline_iata}
                      index={index}
                    />
                  );
                }
                // Return `null` if the `isMultiCity` condition is not met
                return null;
              }

              // Handle the single-city case
              return (
                <ToggleFlightDetails
                  key={index}
                  item={item}
                  airlineData={airlineData}
                  airline_iata={airline_iata}
                  index={index}
                />
              );
            }
            // Return `null` if `country_code` does not match
            return null;
          })}
          <div id="bestairlines" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <div className="b-table">
                <div className="table-wrapper has-mobile-cards">
                  <table className="table is-fullwidth bestairlines-table is-striped is-hoverable is-fullwidth mt-0 font-14">
                    <thead>
                      <tr className="is-selected">
                        <th>DATE</th>
                        <th>FLIGHT</th>
                        <th>Departure</th>
                        <th>Terminal</th>
                        <th>Arrival</th>
                        <th>Terminal</th>
                        <th>STA</th>
                        <th>AIRCRAFT</th>
                        <th>STATUS</th>
                        <th>DURATION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {routeData.map((item: FlightRoute, index: number) => {
                        return (
                          <tr key={index}>
                            <td data-label="DATE">{item.updatedAt}</td>
                            <td data-label="FLIGHT">
                              {item.airline.iata}
                              {item.flight.number}
                            </td>
                            <td data-label="ORIGIN">{item.departure.airport}</td>
                            <td data-label="ORIGIN">{item.departure.terminal}</td>
                            <td data-label="DESTINATION">{item.arrival.airport}</td>
                            <td data-label="DESTINATION">{item.arrival.terminal}</td>
                            <td data-label="STA">{item.updatedAt}</td>
                            <td data-label="AIRCRAFT">
                              {item.airline.icao}
                              {item.flight.number}
                            </td>
                            <td data-label="STATUS">Active</td>
                            <td data-label="DURATION">{calculateFlightDuration(item)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Related Pages</h3>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <a href="cpt" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">{airlineData.iata_code} / CPT</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <a href="gbe" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">{airlineData.iata_code} / GBE</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <a href="jnb" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">{airlineData.iata_code} / JNB</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <a href="acc" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">{airlineData.iata_code} / ACC</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <a href="ebb" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">{airlineData.iata_code} / EBB</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <a href="mba" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">{airlineData.iata_code} / MBA</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <a href="hre" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">{airlineData.iata_code} / HRE</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <a href="sez" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">{airlineData.iata_code} / SEZ</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="faq" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">{iata_code} airport hotels</h3>
              <p>
                If you are looking for accommodations in {iata_code} here you can get hotels near{' '}
                {iata_code}
                airport. Popular hotels in C Pearls Hotel &amp; Banquet,{' '}
              </p>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-bed" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">
                    <a
                      href="https://clearbeds.com/hotel/Peepal-tree-residency?hid=18451190&tid=3"
                      target="_blank"
                    >
                      Peepal Tree Residency
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-bed" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">
                    <a
                      href="https://clearbeds.com/hotel/Hotel-emporio-dX?hid=33084010&tid=3"
                      target="_blank"
                    >
                      Hotel Emporio DX
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="single-tour-feature">
                <div className="single-feature-icon">
                  <i className="fa fa-bed" />
                </div>
                <div className="single-feature-titles">
                  <p className="title-custom">
                    <a
                      href="https://clearbeds.com/hotel/The-grand-tashree-at-delhi-airport?hid=36930932&tid=3"
                      target="_blank"
                    >
                      The Grand Tashree at Delhi Airport
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="overview" className="columns is-multiline single-content-space">
            <div className="column is-6 order2">
              <div className="columns is-multiline">
                <div className="column is-12">
                  <h3 className="title is-4 mt-3 mb-3">
                    {airlineData.name} ({iata_code})
                  </h3>
                  <p className="mr-2">
                    <i className="fa-regular fa-map theme-color" />
                    {airlineData.website}
                  </p>
                  <p>
                    <i className="fa fa-headphones theme-color" />
                    {airlineData.phone}
                  </p>
                </div>
                <hr className="seprator my-2" />
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-plane-up" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Aircrafts</p>
                      <span className="subtitle-custom">{airlineData.total_aircrafts}</span>
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
                      <i className="fa fa-globe" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">International</p>
                      <span className="subtitle-custom">{airlineData.international}</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-exchange" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Destinations</p>
                      <span className="subtitle-custom">{airlineData.total_destinations}</span>
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
                src={`https://aerocloud.s3.amazonaws.com/aeroweb/${iata_code}.webp`}
                alt=""
                className="overview-img"
              />
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
              <div itemType="https://schema.org/FAQPage">
                <div
                  className="accordion is-active"
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <div className="accordion-header">
                    <button className="toggle" aria-label="toggle">
                      <p itemProp="name">
                        Which terminal {airlineData.name} use at {iata_code} Airport?
                      </p>
                    </button>
                  </div>
                  <div
                    className="accordion-body"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="accordion-content" itemProp="text">
                      {airlineData.name} uses the Terminal for its departure and arrivals.
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
                        How many domestic flights operate {airlineData.name} from {iata_code}{' '}
                        airport?
                      </p>
                    </button>
                  </div>
                  <div
                    className="accordion-body"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="accordion-content" itemProp="text">
                      There are 30 flights operated by AIR INDIA from Delhi airport.
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
                        How many international {airlineData.name} flights from {iata_code}?
                      </p>
                    </button>
                  </div>
                  <div
                    className="accordion-body"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="accordion-content" itemProp="text">
                      AIR INDIA airlines operates&nbsp;37 international flights from Delhi.
                    </p>
                    <p className="accordion-content" itemProp="text">
                      <br />
                    </p>
                    <p className="accordion-content" itemProp="text">
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Simulated airline search function
async function searchAirlines(iata_code: string) {
  // Simulate an API call or database lookup
  const response = await getAirlineData(iata_code);
  if (response?.data.status) {
    return response.data.data[0];
  }
  return null;
}

// Simulated airline search function
async function getFlightsFromAirline(iata_code: string, airline_iata: string) {
  // Simulate an API call or database lookup
  const response = await getFlightsToData(iata_code, airline_iata);
  if (response?.data.status) {
    return response.data.data;
  }
  return null;
}

// Simulated airport search function
async function searchAirport(iata_code: string | undefined) {
  // Simulate an API call or database lookup
  const response = await getAirportsData(iata_code);
  if (response?.data.status) {
    return response.data.data[0];
  }
  return null;
}

// Simulated airline search function
async function getFlightsRoutes(
  dep_iata: string | null,
  arr_iata: string | null | undefined,
  airline_iata: string | null,
) {
  // Simulate an API call or database lookup
  const response = await getFlightsRouteData(dep_iata, arr_iata, airline_iata);
  if (response?.data.status) {
    return response.data.data;
  }
  return null;
}

// Simulated airline page search function
async function getAirlinePageDetails(airline_id: string | null, language_id: string | null) {
  // Simulate an API call or database lookup
  const response = await getAirlinePage(airline_id, language_id);
  if (response?.data.status) {
    return response.data.data;
  }
  return null;
}

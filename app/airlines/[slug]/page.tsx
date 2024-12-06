import { getAirlineData } from '@/services/airlines/AirlineServices';
import Footer from '../../../src/components/Footer/Footer';
import Header from '../../../src/components/Header/Header';

// app/airlines/[route]/page.tsx
import { Suspense } from 'react';
import { AirlineDestination } from '@/src/types/types';
import Error from '@/src/components/Message/Error';

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

  if (!slug) {
    return (
      <Error
        title="Invalid slug format"
        subTitle="No Airline Found"
        msg="Unfortunately, we could not find any airlines for the specified iata_code. Please use format like ai and try again."
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
        <AirlineDetails iata_code={slug} />
      </Suspense>
      <Footer />
    </div>
  );
}

async function AirlineDetails({ iata_code }: { iata_code: string }) {
  // Simulated async flight search (replace with actual API call)
  const airlineData = await searchAirlines(iata_code);
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
            <div className="column is-6 order1">
              <img src="../images/flight1.jpg" alt="overview" className="overview-img" />
            </div>
            <hr className="seprator my-5" />
            <div className="column is-12 order3">
              <h3 className="title is-5 mb-3">About {airlineData.name}</h3>
              <p className="py-2">
                {airlineData.overview} {airlineData.routes}
              </p>
            </div>
          </div>
          <div id="inflightfeatures" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Inflight Features</h3>
              <p className="py-2">
                Experience unparalleled comfort and convenience on every flight. Enjoy a wide range
                of inflight entertainment, including movies, TV shows, and music, to keep you
                entertained throughout your journey.
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
              <p>
                In this section you ll find information on baggage allowances, special equipment and
                sports items as well as restricted items. We ve also included some tips to make your
                trip more enjoyable.
              </p>
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
              <p>{airlineData.baggage}</p>
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
              <p>
                Understanding our fare rules ensures a seamless travel experience. Ticket changes,
                including date or time modifications, may incur fees based on your fare type.
                Refunds depend on the fare category, with non-refundable tickets not eligible.
                Baggage allowances vary by class, and excess fees apply for additional or oversized
                luggage.
              </p>
            </div>
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

// Simulated airline search function
async function searchAirlines(iata_code: string) {
  // Simulate an API call or database lookup
  const response = await getAirlineData(iata_code);
  if (response?.data.status) {
    return response.data.data[0];
  }
  return null;
}

// app/page.tsx or your server component
import { headers } from 'next/headers';
import { getAirportsData } from '@/services/airports/AirportServices';
import Footer from '../../../src/components/Footer/Footer';
import Header from '../../../src/components/Header/Header';
// app/flights/[route]/page.tsx
import { Suspense } from 'react';
import { AirportAirlines, HotelAirport, Place } from '@/src/types/types';
import Error from '@/src/components/Message/Error';
import PlacesList from '@/src/components/Google/PlacesList';
import HotelsList from '@/src/components/Google/HotelsList';
import { getAirportPage } from '@/services/pages/PageServices';
import { Metadata } from 'next';
import Link from 'next/link';
// Define the params interface
type AirportRouteParams = {
  params: Promise<{
    slug: string; // Matches the dynamic route segment `[route]`
  }>;
};

export async function generateMetadata({ params }: AirportRouteParams): Promise<Metadata> {
  // Await `params` since it's treated as a Promise in the build environment
  const headersList = await headers();
  const host = headersList.get('host') || 'default';
  console.log('host', host);
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const airportData = await searchAirport(slug.toUpperCase());
  if (airportData && airportData._id) {
    const pageData = await getAirportPageDetails(airportData._id, 'en', host);
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

export default async function AirportRoutePage({ params }: AirportRouteParams) {
  // Await `params` since it's treated as a Promise in the build environment
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
    return (
      <Error
        title="Invalid slug format"
        subTitle="No Airport Found"
        msg="Unfortunately, we could not find any airports for the specified iata_code. Please use format like del and try again."
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
        <AirportDetails iata_code={slug.toUpperCase()} />
      </Suspense>
      <Footer />
    </div>
  );
}

async function AirportDetails({ iata_code }: { iata_code: string }) {
  // Simulated async flight search (replace with actual API call)
  const airportData = await searchAirport(iata_code);
  if (!airportData) {
    return (
      <Error
        title="Invalid iata_code format"
        subTitle="No Airport Found"
        msg="Unfortunately, we could not find any airports for the specified iata_code. Please ensure that
              the iata_code are correct and try again."
      />
    );
  }
  const headersList = await headers();
  const host = headersList.get('host') || 'default';
  const pageData = await getAirportPageDetails(airportData._id, 'en', host);
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
                      Airport Details
                    </a>
                    <a
                      className="navbar-item"
                      href="#inflightfeatures"
                      data-target="inflightfeatures"
                    >
                      Inflight Features
                    </a>
                    <a className="navbar-item" href="#seatselection" data-target="seatselection">
                      Airline Selection
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
                  <h2 className="title is-4 mt-3 mb-3">{airportData.name}</h2>
                  <p className="mr-2">
                    Timezon <span className="badge">{airportData.timezone}</span>
                  </p>
                </div>
                <hr className="seprator my-2" />
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div
                      className="single-feature-icon"
                      style={{ backgroundColor: 'rgba(40, 125, 250, 0.1)' }}
                    >
                      <a href="">
                        <i className="fa-brands fa-youtube" style={{ color: '#ff0000' }} />
                      </a>
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">
                        <a href="">Youtube</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div
                      className="single-feature-icon"
                      style={{ backgroundColor: 'rgba(40, 125, 250, 0.1)' }}
                    >
                      <a href="">
                        <i className="fa-brands fa-twitter" style={{ color: '#1DA1F2' }} />
                      </a>
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">
                        <a href="">Twitter</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div
                      className="single-feature-icon"
                      style={{ backgroundColor: 'rgba(40, 125, 250, 0.1)' }}
                    >
                      <a href="">
                        <i className="fa-brands fa-facebook-f" style={{ color: '#3b5998' }} />
                      </a>
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">
                        <a href="">Facebook</a>
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="seprator my-2" />

                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-plane-up" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Flights</p>
                      <span className="subtitle-custom">{airportData.total_flights}</span>
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
                      <span className="subtitle-custom">{airportData.international}</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-road" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Runways</p>
                      <span className="subtitle-custom">{airportData.runways}</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-plane" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Airlines</p>
                      <span className="subtitle-custom">{airportData.airlines_names.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6 order1">
              <img
                src={`https://aerocloud.s3.amazonaws.com/aeroweb/${airportData.iata_code}.webp`}
                alt="overview"
                className="overview-img"
              />
            </div>
            <hr className="seprator my-5" />
            <div className="column is-12 order3">
              <p
                className="py-2"
                dangerouslySetInnerHTML={{
                  __html: pageData.overview || `Airport Overview Content`,
                }}
              />
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
              <h3 className="title is-5 mt-3 mb-3">Select Your Airlines</h3>
            </div>
            {airportData.airlines_names.map((item: AirportAirlines, index: number) => {
              return (
                <div className="column is-3 pt-0" key={index}>
                  <div
                    className="departing-flights"
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <div
                      className="flights-booking-item"
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <Link href={`/airlines/${item.iata_code}`}>
                        <div className="flight-logo">
                          <img
                            src={`https://aerocloud.s3.amazonaws.com/airweb/${item.iata_code}.webp`}
                            alt="flight-logo"
                          />
                        </div>
                      </Link>
                      <Link href={`/airlines/${item.iata_code}`}>
                        <h4 className="title is-6 mb-2 mt-2">{item.name}</h4>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div id="container">
  <button class="menu">TITLE</button>
  <div class="text">Wolf: Lamb, tell me a story! Lamb: There was once a pale man with dark hair who was very lonely. Wolf: Why was it lonely? Lamb: All things must meet this man. So, they shunned him. Wolf: Did he chase them all? Lamb: He took an axe and split himself in two, right down the middle. Wolf: So he would always have a friend? Lamb: So he would always have a friend.</div>
  <button class="menu">TITLE 2</button>
  <div class="text">Wolf: Lamb, tell me a story! Lamb: There was once a pale man with dark hair who was very lonely. Wolf: Why was it lonely? Lamb: All things must meet this man. So, they shunned him. Wolf: Did he chase them all? Lamb: He took an axe and split himself in two, right down the middle. Wolf: So he would always have a friend? Lamb: So he would always have a friend.</div>
  <button class="menu">TITLE 3</button>
  <div class="text">Wolf: Lamb, tell me a story! Lamb: There was once a pale man with dark hair who was very lonely. Wolf: Why was it lonely? Lamb: All things must meet this man. So, they shunned him. Wolf: Did he chase them all? Lamb: He took an axe and split himself in two, right down the middle. Wolf: So he would always have a friend? Lamb: So he would always have a friend.</div>
</div> */}
          {/* <div id="seatselection" class="columns is-multiline single-content-space">

  <div class="column is-12">
    <h3 class="title is-5 mt-3 mb-3">Select your Seats</h3>
<p class="py-2">Maecenas vitae turpis condimentum metus tincidunt semper bibendum ut orci. Donec eget accumsan est. Duis laoreet sagittis elit et vehicula.</p>
  </div> 

  <div class="column is-12">
    <div class="cabin-type-item">
      <div class="cabin-type-img"><img src="images/seat1.png" alt=""></div>
      <div class="cabin-type-detail">
        <h4 class="title is-5 mb-3">Standard advance seat selection</h4>
        <p>Donec urna arcu, venenatis quis augue sit amet, mattis gravida nunc. Integer faucibus, tortor a tristique adipiscing, arcu metus luctus libero, nec vulputate risus elit id nibh.</p>
      </div>
      <div class="cabin-price has-text-centered">
        <p class="price-start">Starting at
        <strong>$15</strong></p>
        <a class="button is-primary mt-4">Book Now</a>
      </div>
    </div>
  </div>  

  <div class="column is-12">
    <div class="cabin-type-item">
      <div class="cabin-type-img"><img src="images/seat1.png" alt=""></div>
      <div class="cabin-type-detail">
        <h4 class="title is-5 mb-3">Standard advance seat selection</h4>
        <p>Donec urna arcu, venenatis quis augue sit amet, mattis gravida nunc. Integer faucibus, tortor a tristique adipiscing, arcu metus luctus libero, nec vulputate risus elit id nibh.</p>
      </div>
      <div class="cabin-price has-text-centered">
        <p class="price-start">Starting at
        <strong>$15</strong></p>
        <a class="button is-primary mt-4">Book Now</a>
      </div>
    </div>
  </div>

  <div class="column is-12">
    <div class="cabin-type-item">
      <div class="cabin-type-img"><img src="images/seat1.png" alt=""></div>
      <div class="cabin-type-detail">
        <h4 class="title is-5 mb-3">Standard advance seat selection</h4>
        <p>Donec urna arcu, venenatis quis augue sit amet, mattis gravida nunc. Integer faucibus, tortor a tristique adipiscing, arcu metus luctus libero, nec vulputate risus elit id nibh.</p>
      </div>
      <div class="cabin-price has-text-centered">
        <p class="price-start">Starting at
        <strong>$15</strong></p>
        <a class="button is-primary mt-4">Book Now</a>
      </div>
    </div>
  </div>

  <div class="column is-12">
    <div class="cabin-type-item">
      <div class="cabin-type-img"><img src="images/seat1.png" alt=""></div>
      <div class="cabin-type-detail">
        <h4 class="title is-5 mb-3">Standard advance seat selection</h4>
        <p>Donec urna arcu, venenatis quis augue sit amet, mattis gravida nunc. Integer faucibus, tortor a tristique adipiscing, arcu metus luctus libero, nec vulputate risus elit id nibh.</p>
      </div>
      <div class="cabin-price has-text-centered">
        <p class="price-start">Starting at
        <strong>$15</strong></p>
        <a class="button is-primary mt-4">Book Now</a>
      </div>
    </div>
  </div>

</div> */}
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
            {/* <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Basic Information</h3>
              <p>
                Vestibulum ut iaculis justo, auctor sodales lectus. Donec et tellus tempus,
                dignissim maurornare, consequat lacus. Integer dui neque, scelerisque nec
                sollicitudin sit amet, sodales a erat. Duis vitae condimentum ligula. Integer eu mi
                nisl. Donec massa dui, commodo id arcu quis, venenatis scelerisque velit.
              </p>
            </div> */}
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
            {/* <div className="column is-12">
              <p>
                Vestibulum ut iaculis justo, auctor sodales lectus. Donec et tellus tempus,
                dignissim maurornare, consequat lacus. Integer dui neque, scelerisque nec
                sollicitudin sit amet, sodales a erat. Duis vitae condimentum ligula. Integer eu mi
                nisl. Donec massa dui, commodo id arcu quis, venenatis scelerisque velit.
              </p>
            </div> */}
          </div>
          <div id="faq" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Attractions Near {airportData.city} Airport</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.attractionContent ||
                    `If you are looking for places to visit near ${airportData.city} airport, find out the
                list below.`,
                }}
              />
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
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.hotelsContent ||
                    `If you are looking for places to stay near ${airportData.city} airport, explore the
                options below.`,
                }}
              />
            </div>
            {airportData.hotels.slice(0, 6).map((hotel: HotelAirport) => (
              <div key={hotel.hotelId} className="column is-4">
                <HotelsList hotel={hotel} />
              </div>
            ))}
          </div>
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Airline</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.airlineContent ||
                    `no airline content found for this airport. Please check back later for more information.`,
                }}
              />
              <br />
            </div>
          </div>
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Destination</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.destinationContent ||
                    `no car destination content found for this airport. Please check back later for more information.`,
                }}
              />
              <br />
            </div>
          </div>
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Car Rental</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.carRentalContent ||
                    `no car content found for this airport. Please check back later for more information.`,
                }}
              />
              <br />
            </div>
          </div>
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Parking</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.parkingContent ||
                    `no parking content found for this airport. Please check back later for more information.`,
                }}
              />
              <br />
            </div>
          </div>
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Hotel</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.hotelsContent ||
                    `no hotel content found for this airport. Please check back later for more information.`,
                }}
              />
              <br />
            </div>
          </div>
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Attraction</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.attractionContent ||
                    `no attraction content found for this airport. Please check back later for more information.`,
                }}
              />
              <br />
            </div>
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
                    `no faqs found for this airport. Please check back later for more information.`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
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
async function getAirportPageDetails(
  airport_id: string | null,
  language_id: string | null,
  host: string,
) {
  // Simulate an API call or database lookup
  const response = await getAirportPage(airport_id, language_id, host);
  if (response?.data.status) {
    return response.data.data;
  }
  return null;
}

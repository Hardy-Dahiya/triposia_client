import { headers } from 'next/headers';
import { getAirlineData, getAirlineToCityData } from '@/services/airlines/AirlineServices';
import Footer from '../../../src/components/Footer/Footer';
import Header from '../../../src/components/Header/Header';

// app/airlines/[route]/page.tsx
import { Suspense } from 'react';
import { AirlineDestination, Flight, FlightData, HotelAirport, Place } from '@/src/types/types';
import Error from '@/src/components/Message/Error';
import { getFlightsToData } from '@/services/flights/FlightServices';
// @Components
import { getAirportsData } from '@/services/airports/AirportServices';
import PlacesList from '@/src/components/Google/PlacesList';
import HotelsList from '@/src/components/Google/HotelsList';
import { getAirlinePage, getTerminalPage } from '@/services/pages/PageServices';
import { Metadata } from 'next';
import FlightList from '@/src/components/Flight/FlightList';
import TruncatedText from '@/src/common/TrucateText';
import FlightFromList from '@/src/components/Flight/FlightFromList';
import Link from 'next/link';
import Script from 'next/script';
// Define the params interface
type AirlineRouteParams = {
  params: Promise<{
    slug: string; // Matches the dynamic route segment `[route]`
  }>;
};

export async function generateMetadata({ params }: AirlineRouteParams): Promise<Metadata> {
  // Await `params` since it's treated as a Promise in the build environment
  const headersList = await headers();
  const host = headersList.get('host') || 'default';
  const resolvedParams = await params;
  const finalSlug = [];
  const { slug } = resolvedParams;
  // Split the slug into an array
  if (slug.length > 1) {
    const slugParts = slug[1].split('-to-');
    finalSlug.push(slug[0], ...slugParts);
  } else {
    finalSlug.push(slug[0]);
  }
  if (finalSlug.length === 2) {
    const airlineCityData = await searchAirlinesToCity(finalSlug[0], finalSlug[1]);
    const airlinePageCityData = await getAirlineCityPageDetails(airlineCityData._id, 'en', host);
    if (airlinePageCityData) {
      return {
        title: airlinePageCityData.title,
        description: airlinePageCityData.meta,
        keywords: airlinePageCityData.keywords,
      };
    }
  }

  const airlineData = await searchAirlines(finalSlug[0]);
  if (airlineData && airlineData._id) {
    const pageData = await getAirlinePageDetails(airlineData._id, 'en', host);
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
          <AirlineDetails iata_code={finalSlug[0]} />
        ) : finalSlug.length === 2 ? (
          <FlightDetails
            iata_code={finalSlug[1].toUpperCase()}
            airline_iata={finalSlug[0]}
            isMultiCity={false}
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
  const headersList = await headers();
  const host = headersList.get('host') || 'default';
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
  const pageData = await getAirlinePageDetails(airlineData._id, 'en', host);
  const flightData = await getFlightsFromAirline(null, iata_code.toLocaleUpperCase());
  const data = {
    flights: [],
    departure_iata: '',
    arrival_iata: '',
  };
  data.flights = flightData;
   const flightDataScripts = flightData?.map((flight: Flight) => ({
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
        "name": flight.airlineroutes[0].carrier_name,
        "iataCode": flight.airline_iata
      },
    })) || [];
    const flightProductScripts = flightData?.map((flight:Flight)=>({
       "@context": "http://schema.org", 
       "@type": "product", 
       "name": `Flights from ${flight.airlineroutes[0].carrier_name} to ${flight.city_name_en}`, 
       "offers": { 
        "@type": "AggregateOffer", 
        "lowPrice": flight.price, 
        "priceCurrency": "USD" 
      }
    }))
  return (
    <div>
      <Script
          id="flight-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(flightDataScripts) }}
          />
      <Script
          id="flight-product-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(flightProductScripts) }}
          />
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
                  <h3 className="title is-4 mt-3 mb-3">
                    <i className="fa-solid fa-plane"></i> {airlineData.name} (
                    {airlineData.iata_code})
                  </h3>
                  <p className="mr-2">
                    <span className="badge">{airlineData.check_in}</span>
                  </p>
                  <p className="mr-2">
                    <i className="fa-regular fa-map theme-color" /> {airlineData.address} ,{' '}
                    {airlineData.state}, {airlineData.country}
                  </p>
                  <p className="mr-2">
                    <i className="fa-regular fa-map theme-color" /> {airlineData.website}
                  </p>
                  <p>
                    <i className="fa fa-headphones theme-color" /> {airlineData.phone}
                  </p>
                </div>
                <hr className="seprator my-2" />
                {airlineData.hubs.map((item: string, index: number) => {
                  return (
                    <p className="title-custom" key={index}>
                      Hub Airports : <span className="subtitle-custom">{item}</span>
                    </p>
                  );
                })}
                <hr className="seprator my-2" />
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-calendar-days" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Founded</p>
                      <span className="subtitle-custom">{airlineData.found}</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-id-card-clip" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Key Person</p>
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
                      <p className="title-custom">Satus</p>
                      <span className="subtitle-custom">Active</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-plane-up" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Type</p>
                      <span className="subtitle-custom">Commercial</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-copyright" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">CALL SIGN</p>
                      <span className="subtitle-custom">{airlineData.callsign}</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-angles-right" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">IATA Code</p>
                      <span className="subtitle-custom">{airlineData.iata_code}</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-copyright" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">ICAO</p>
                      <span className="subtitle-custom">{airlineData.icao_code}</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-flag" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Country</p>
                      <span className="subtitle-custom">{airlineData.country}</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-building" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">City</p>
                      <span className="subtitle-custom">{airlineData.city}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6 order1 is-flex is-justify-content-center is-align-items-center">
              <img
                src={`https://pics.avs.io/180/60/${airlineData.iata_code}@2x.webp`}
                alt="overview"
              />
            </div>
            <hr className="seprator my-5" />
            <div className="column is-12 order3">
              <h3 className="title is-5 mb-3">About {airlineData.name}</h3>
              <p
                className="py-2"
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.overview ||
                    `no content found for this airline. Please check back later for more information.`,
                }}
              />
            </div>
          </div>
          <div id="inflightfeatures" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">{airlineData.name} Inflight Features</h3>
              <TruncatedText
                maxLength={600}
                content={pageData.inFlightContent}
                fallbackMessage="no content found for this airline. Please check back later for more information."
              />
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
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">{airlineData.name} Flights</h3>
              <FlightFromList flightCount={5} flightData={data} type="airport" />
              <br />
            </div>
          </div>

          <div id="seatselection" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Destinations</h3>
              <TruncatedText
                maxLength={600}
                content={pageData.destinationContent}
                fallbackMessage="no content found for this airline. Please check back later for more information."
              />
            </div>
            {airlineData.destinations.map((item: AirlineDestination, index: number) => {
              return (
                <div className="column is-2" key={index}>
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-plane" />
                    </div>
                    <div className="single-feature-titles">
                      <Link href={`/airports/${item.iata_code}`}>
                        <p className="title-custom">{item.city}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Baggage</h3>
              <TruncatedText
                maxLength={600}
                content={pageData.baggageContent}
                fallbackMessage="no content found for this airline. Please check back later for more information."
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
              <TruncatedText
                maxLength={600}
                content={pageData.basicInformation}
                fallbackMessage="no content found for this airline. Please check back later for more information."
              />
            </div>
          </div>
          <div id="cancellation" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">{airlineData.name} Cancellation policy</h3>
              <TruncatedText
                maxLength={600}
                content={pageData.cancellation}
                fallbackMessage="no content found for this airline. Please check back later for more information."
              />
            </div>
          </div>
          <div id="cancellation" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">{airlineData.name} Check In</h3>
              <TruncatedText
                maxLength={600}
                content={pageData.checkIn}
                fallbackMessage="no content found for this airline. Please check back later for more information."
              />
            </div>
          </div>
          <div id="faq" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">{airlineData.name} Fare Rules</h3>
              <TruncatedText
                maxLength={600}
                content={pageData.fareRulesForYourFlight}
                fallbackMessage="no content found for this airline. Please check back later for more information."
              />
            </div>
          </div>
          <div id="contact" className="columns is-multiline single-content-space">
            <div className="column is-12 content">
              <h3 className="title is-5 mt-3 mb-3">Air Canada Contact information</h3>
              <table className="table is-bordered">
                <tbody>
                  <tr>
                    <th>Phone Number:</th>
                    <td>{airlineData.phone}</td>
                  </tr>
                  <tr>
                    <th>Address :</th>
                    <td>
                      {airlineData.address}, {airlineData.city}, {airlineData.zipcode},
                      {airlineData.state}, {airlineData.country}
                    </td>
                  </tr>
                  <tr>
                    <th>Facebook :</th>
                    <td>{airlineData.facebook ? `https://${airlineData.facebook}` : ''}</td>
                  </tr>
                  <tr>
                    <th>Twitter :</th>
                    <td>{airlineData.twitter ? `https://${airlineData.twitter}` : ''}</td>
                  </tr>
                  <tr>
                    <th>Youtube :</th>
                    <td>{airlineData.youtube ? `https://${airlineData.youtube}` : ''}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="pages" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Related airlines</h3>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <Link href="/airlines/bearskin-jv-bls-ca" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">Bearskin Airlines</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <Link href="/airlines/belgium-kf-abb-be" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">Air Belgium</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <Link href="/airlines/iran-ir-ira-iranair" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">Iran Air</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <Link href="/airlines/navitaire-1n-us" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">Navitaire</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <Link href="/airlines/nepal-ra-rna-royalnepal-np" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">Nepal Airlines</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <Link href="/airlines/qatar-qr-qtr-qatari-qa" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">Qatar Airways</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <Link href="/airlines/raindo-united-r0-rbf-raindo-id" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">Raindo United Services</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="column is-3">
              <div className="single-tour-feature">
                <Link href="/airlines/rano-r4-ran-ng" target="_blank">
                  <div className="single-feature-icon">
                    <i className="fa fa-map" />
                  </div>
                  <div className="single-feature-titles">
                    <p className="title-custom">Rano Air</p>
                  </div>
                </Link>
              </div>
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
  const headersList = await headers();
  const host = headersList.get('host') || 'default';
  const airlineData = await searchAirlines(airline_iata);
  const airlineCityData = await searchAirlinesToCity(airline_iata, iata_code);
  const flightData = await getFlightsFromAirline(iata_code, airline_iata.toLocaleUpperCase());
  // Simulated async airport search (replace with actual API call)
  const airportData = await searchAirport(isMultiCity ? arr_iata : iata_code);
  // const routeData = await getFlightsRoutes(iata_code, arr_iata, null);
  const pageData = await getAirlineCityPageDetails(airlineCityData._id, 'en', host);

  if (!airlineData || !flightData.length || !airlineCityData) {
    return (
      <Error
        title="Invalid Route Format"
        subTitle="Too Many Segments"
        msg="Please use a valid route format like /ai or /ai/del."
      />
    );
  }
  const flightDataScripts = flightData?.flights?.map((flight: Flight) => ({
    "@type": "Flight",
    "@context": "http://schema.org",
    "estimatedFlightDuration": flight.duration, 
    "departureTime": flight.departure_time,
    "departureAirport": {
      "@type": "Airport",
      "name" : airportData.name,
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
      "name": flight.airlineroutes[0].carrier_name,
      "iataCode": flight.airline_iata
    },
  })) || [];
  const flightProductScripts = flightData?.flights?.map((flight:Flight)=>({
     "@context": "http://schema.org", 
     "@type": "product", 
     "name": `Flights from ${airportData.city} to ${flight.city_name_en}`, 
     "offers": { 
      "@type": "AggregateOffer", 
      "lowPrice": flight.price, 
      "priceCurrency": "USD" 
    }
  }))
  return (
    <div>
      <Script
          id="flight-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(flightDataScripts) }}
          />
      <Script
          id="flight-product-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(flightProductScripts) }}
          />
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
          {isMultiCity ? (
            ''
          ) : (
            <div>
              <div id="baggage" className="columns is-multiline single-content-space">
                <div className="column is-12">
                  <h3 className="title is-5 mt-3 mb-3">
                    Flights From {airlineCityData.airline.carrier_name}
                  </h3>
                  <TruncatedText
                    maxLength={600}
                    content={pageData.flightsFromCity}
                    fallbackMessage="no content found for this airline. Please check back later for more information."
                  />
                  <br />
                </div>
              </div>
              <div id="baggage" className="columns is-multiline single-content-space">
                <div className="column is-12">
                  <h3 className="title is-5 mt-3 mb-3">Best Airlines</h3>
                  <TruncatedText
                    maxLength={600}
                    content={pageData.bestAirlines}
                    fallbackMessage="no content found for this airline. Please check back later for more information."
                  />
                  <br />
                </div>
              </div>
            </div>
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
          <FlightList
            flightData={
              isMultiCity
                ? flightData.filter(
                    (el: FlightData) =>
                      el.country_code === el.airport.country_code &&
                      el.iata_from === iata_code &&
                      el.iata_to === arr_iata,
                  )
                : flightData.filter((el: FlightData) => el.country_code === el.airport.country_code)
            }
            isMultiCity={isMultiCity}
            iata_code={iata_code}
            arr_iata={arr_iata}
            airlineData={airlineData}
            airline_iata={airline_iata}
          />
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
                      (el: FlightData) => el.country_code !== el.airport.country_code,
                    ).length}{' '}
                international flights from {iata_code} {isMultiCity ? `to ${arr_iata}` : ''}
              </p>
            </div>
          </div>
          <FlightList
            flightData={
              isMultiCity
                ? flightData.filter(
                    (el: FlightData) =>
                      el.country_code !== el.airport.country_code &&
                      el.iata_from === iata_code &&
                      el.iata_to === arr_iata,
                  )
                : flightData.filter((el: FlightData) => el.country_code !== el.airport.country_code)
            }
            isMultiCity={isMultiCity}
            iata_code={iata_code}
            arr_iata={arr_iata}
            airlineData={airlineData}
            airline_iata={airline_iata}
          />

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
                      <i className="fa fa-plane-up" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Domestic</p>
                      <span className="subtitle-custom">{airlineData.domestic || 1}</span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-refresh" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Terminals</p>
                      <span className="subtitle-custom">{airlineData.hubs.length || 1}</span>
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
                      <i className="fa fa-plane-up" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Total Flights</p>
                      <span className="subtitle-custom">{airlineData.total_flights || 1}</span>
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
              <TruncatedText
                maxLength={600}
                content={pageData.topFiveAttractions}
                fallbackMessage="no content found for this airline. Please check back later for more information."
              />
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
              <TruncatedText
                maxLength={600}
                content={pageData.topFiveHotels}
                fallbackMessage="no content found for this airline. Please check back later for more information."
              />
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
                    `no faqs found for this airline. Please check back later for more information.`,
                }}
              />
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
async function searchAirlinesToCity(airline_iata: string, iata_code: string) {
  // Simulate an API call or database lookup
  const response = await getAirlineToCityData(airline_iata, iata_code);
  if (response?.data.status) {
    return response.data.data[0];
  }
  return null;
}

// Simulated airline search function
async function getFlightsFromAirline(iata_code: string | null, airline_iata: string) {
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

// Simulated airline page search function
async function getAirlinePageDetails(
  airline_id: string | null,
  language_id: string | null,
  host: string,
) {
  // Simulate an API call or database lookup
  const response = await getAirlinePage(airline_id, language_id, host);
  if (response?.data.status) {
    return response.data.data;
  }
  return null;
}
async function getAirlineCityPageDetails(
  airline_id: string | null,
  language_id: string | null,
  host: string,
) {
  // Simulate an API call or database lookup
  const response = await getTerminalPage(airline_id, language_id, host);
  if (response?.data.status) {
    return response.data.data;
  }
  return null;
}

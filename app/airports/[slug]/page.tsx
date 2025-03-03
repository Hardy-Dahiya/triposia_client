// app/page.tsx or your server component
import { headers } from 'next/headers';
import { getAirportsData } from '@/services/airports/AirportServices';
import Footer from '../../../src/components/Footer/Footer';
import Header from '../../../src/components/Header/Header';
// app/flights/[route]/page.tsx
import { Suspense } from 'react';
import { Flight, FlightData, HotelAirport, Place } from '@/src/types/types';
import Error from '@/src/components/Message/Error';
import PlacesList from '@/src/components/Google/PlacesList';
import HotelsList from '@/src/components/Google/HotelsList';
import { getAirportPage } from '@/services/pages/PageServices';
import { Metadata } from 'next';
import FlightFromList from '@/src/components/Flight/FlightFromList';
import TruncatedText from '@/src/common/TrucateText';
import AirlineParser from '@/src/common/AirlineParser';
import { getFlightsToData } from '@/services/flights/FlightServices';
import CityParser from '@/src/common/CityParser';
import Link from 'next/link';
import Script from 'next/script';
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
  const flightData = await getFlightData(airportData.iata_code);

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
                  <p>
                    <i className="fa fa-headphones theme-color" /> {airportData.phone}
                  </p>
                  <p>
                    <i className="fa fa-globe theme-color" /> {airportData.website}
                  </p>
                </div>
                <hr className="seprator my-2" />

                {airportData.youtube && (
                  <div className="column is-4">
                    {' '}
                    <div className="single-tour-feature">
                      <div
                        className="single-feature-icon"
                        style={{ backgroundColor: 'rgba(40, 125, 250, 0.1)' }}
                      >
                        <a href={`https://${airportData.youtube}`} target="_blank">
                          <i className="fa-brands fa-youtube" style={{ color: '#ff0000' }} />
                        </a>
                      </div>
                      <div className="single-feature-titles">
                        <p className="title-custom">
                          <a href={`https://${airportData.youtube}`} target="_blank">
                            Youtube
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {airportData.twitter && (
                  <div className="column is-4">
                    <div className="single-tour-feature">
                      <div
                        className="single-feature-icon"
                        style={{ backgroundColor: 'rgba(40, 125, 250, 0.1)' }}
                      >
                        <a href={`https://${airportData.twitter}`} target="_blank">
                          <i className="fa-brands fa-twitter" style={{ color: '#1DA1F2' }} />
                        </a>
                      </div>
                      <div className="single-feature-titles">
                        <p className="title-custom">
                          <a href={`https://${airportData.twitter}`} target="_blank">
                            Twitter
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {airportData.facebook && (
                  <div className="column is-4">
                    <div className="single-tour-feature">
                      <div
                        className="single-feature-icon"
                        style={{ backgroundColor: 'rgba(40, 125, 250, 0.1)' }}
                      >
                        <a href={`https://${airportData.facebook}`} target="_blank">
                          <i className="fa-brands fa-facebook-f" style={{ color: '#3b5998' }} />
                        </a>
                      </div>
                      <div className="single-feature-titles">
                        <p className="title-custom">
                          <a href={`https://${airportData.facebook}`} target="_blank">
                            Facebook
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
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
                      <p className="title-custom">Domestic</p>
                      <span className="subtitle-custom">{airportData.domestic || 0}</span>
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
                      <span className="subtitle-custom">{airportData.terminals.length || 0}</span>
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
                      <span className="subtitle-custom">{airportData.international || 0}</span>
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
                      <span className="subtitle-custom">{airportData.runways || 0}</span>
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
                      <span className="subtitle-custom">
                        {airportData.airlines_names.length || 0}
                      </span>
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
              <h3 className="title is-5 mt-3 mb-3">{airportData.name}</h3>
              <p
                className="py-2"
                dangerouslySetInnerHTML={{
                  __html:
                    pageData.overview ||
                    `no content found for this airport. Please check back later for more information.`,
                }}
              />
            </div>
          </div>
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Airlines</h3>
              <TruncatedText
                maxLength={600}
                content={pageData.airlineContent}
                fallbackMessage="no airline content found for this airport. Please check back later for more information."
              />
              <br />
            </div>
            <AirlineParser content={pageData.airlineContent} />
          </div>
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Flights From {airportData.city}</h3>
              <TruncatedText
                maxLength={600}
                content={pageData.flightsFromCity}
                fallbackMessage="no flights from city content found for this airport. Please check back later for more information."
              />
              <br />
            </div>
          </div>
          <FlightFromList flightCount={5} flightData={flightData} type="airport" />
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Destination</h3>
              <TruncatedText
                maxLength={600}
                content={pageData.destinationContent}
                fallbackMessage="no destination content found for this airport. Please check back later for more information."
              />
              <br />
            </div>
            <CityParser content={pageData.destinationContent} />
          </div>
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Airport Near By {airportData.city}</h3>
              <br />
            </div>
            {flightData.flights.slice(0, 12).map((item: FlightData, index) => {
              return (
                <div className="column is-3" key={index}>
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-plane" />
                    </div>
                    <div className="single-feature-titles">
                      <Link href={`/airports/${item.airport.IATA}`}>
                        <p className="title-custom">{item.airport.name}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="faq" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Attractions Near {airportData.city} Airport</h3>
              <TruncatedText
                maxLength={500}
                content={pageData.attractionContent}
                fallbackMessage={`If you are looking for places to visit near ${airportData.city} airport, find out the
                list below.`}
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
                maxLength={500}
                content={pageData.hotelsContent}
                fallbackMessage={`If you are looking for places to stay near ${airportData.city} airport, explore the
                options below.`}
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
              <h3 className="title is-5 mt-3 mb-3">Car Rental</h3>
              <TruncatedText
                maxLength={600}
                content={pageData.carRentalContent}
                fallbackMessage="no car content found for this airport. Please check back later for more information."
              />
              <br />
            </div>
          </div>
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Parking</h3>
              <TruncatedText
                maxLength={600}
                content={pageData.parkingContent}
                fallbackMessage="no parking content found for this airport. Please check back later for more information."
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
// Simulated airline page search function
async function getFlightData(iata_code: string | null) {
  // Simulate an API call or database lookup
  const response = await getFlightsToData(iata_code, null);
  const data = {
    flights: [],
    departure_iata: '',
    arrival_iata: '',
  };
  if (response?.data.status) {
    data.flights = response.data.data;
    return data;
  }
  return data;
}

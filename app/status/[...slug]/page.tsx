import { getFlightsRouteData } from '@/services/flights/FlightServices';
import Footer from '../../../src/components/Footer/Footer';
import Header from '../../../src/components/Header/Header';

// app/airlines/[route]/page.tsx
import { Suspense } from 'react';
import { FlightRoute } from '@/src/types/types';
import Error from '@/src/components/Message/Error';
import { calculateFlightDuration } from '@/utils/utils';
// Define the params interface
type StatusRouteParams = {
  params: Promise<{
    slug: string; // Matches the dynamic route segment `[route]`
  }>;
};

export default async function StatusRoutePage({ params }: StatusRouteParams) {
  // Await `params` since it's treated as a Promise in the build environment
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
    return (
      <Error
        title="Invalid slug format"
        subTitle="No Status Found"
        msg="Unfortunately, we could not find any status for the specified slug. Please use format like ai, depature/del, arrival/del and try again."
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
        {slug.length === 1 ? (
          <Status dep_iata={null} arr_iata={null} airline_iata={slug[0].toUpperCase()} />
        ) : slug.length === 2 && slug[0] === 'departure' ? (
          <Status dep_iata={slug[1].toUpperCase()} arr_iata={null} airline_iata={null} />
        ) : slug.length === 2 && slug[0] === 'arrival' ? (
          <Status dep_iata={null} arr_iata={slug[1].toUpperCase()} airline_iata={null} />
        ) : (
          <Error
            title="Invalid Route Format"
            subTitle="Too Many Segments"
            msg="Please use a valid route format like /ai or /departure/del, /arrival/del."
          />
        )}
      </Suspense>
      <Footer />
    </div>
  );
}
async function Status({
  dep_iata,
  arr_iata,
  airline_iata,
}: {
  dep_iata: string | null;
  arr_iata: string | null;
  airline_iata: string | null;
}) {
  const routeData = await getFlightsRoutes(dep_iata, arr_iata, airline_iata);
  return (
    <div>
      <section className="single-content-wrap section p-0">
        <div className="container">
          <div className="columns is-multiline single-content-space serach-flight-wrap">
            <div className="field-body">
              <div className="column is-3">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                      className="input"
                      type="text"
                      name="flightNo"
                      id="flightNo"
                      defaultValue=""
                      placeholder="Search by Flight No"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa-solid fa-plane" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-3">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                      className="input"
                      type="text"
                      name="origin"
                      id="origin"
                      defaultValue=""
                      placeholder="Search by Origin"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-globe" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-3">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                      className="input"
                      type="text"
                      name="destination"
                      id="destination"
                      defaultValue="del"
                      placeholder="Search by Destination"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa-solid fa-location-dot" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-3 flight-btn">
                <div className="field">
                  <p className="control">
                    <button className="button is-success">Submit</button>
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  {/* <div className="row mt-5">
                    <div className="col">
                      <div className="pagination-wrapper">
                        <nav
                          role="navigation"
                          aria-label="Pagination Navigation"
                          className="flex items-center justify-between"
                        >
                          <div className="flex justify-between flex-1 sm:hidden">
                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 rounded-md">
                              « Previous
                            </span>
                            <a
                              href="https://triposia.com/airportarrivals/del?page=2"
                              className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                            >
                              Next »
                            </a>
                          </div>
                          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                              <p className="text-sm text-gray-700 leading-5">
                                Showing
                                <span className="font-medium">1</span>
                                to
                                <span className="font-medium">20</span>
                                of
                                <span className="font-medium">901</span>
                                results
                              </p>
                            </div>
                            <div>
                              <span className="relative z-0 inline-flex shadow-sm rounded-md">
                                <span aria-disabled="true" aria-label="&laquo; Previous">
                                  <span
                                    className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default rounded-l-md leading-5"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      className="w-5 h-5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </span>
                                <span aria-current="page">
                                  <span className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5">
                                    1
                                  </span>
                                </span>
                                <a
                                  href="https://triposia.com/airportarrivals/del?page=2"
                                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                  aria-label="Go to page 2"
                                >
                                  2
                                </a>
                                <a
                                  href="https://triposia.com/airportarrivals/del?page=3"
                                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                  aria-label="Go to page 3"
                                >
                                  3
                                </a>
                                <a
                                  href="https://triposia.com/airportarrivals/del?page=4"
                                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                  aria-label="Go to page 4"
                                >
                                  4
                                </a>
                                <a
                                  href="https://triposia.com/airportarrivals/del?page=5"
                                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                  aria-label="Go to page 5"
                                >
                                  5
                                </a>
                                <a
                                  href="https://triposia.com/airportarrivals/del?page=6"
                                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                  aria-label="Go to page 6"
                                >
                                  6
                                </a>
                                <a
                                  href="https://triposia.com/airportarrivals/del?page=7"
                                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                  aria-label="Go to page 7"
                                >
                                  7
                                </a>
                                <a
                                  href="https://triposia.com/airportarrivals/del?page=8"
                                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                  aria-label="Go to page 8"
                                >
                                  8
                                </a>
                                <a
                                  href="https://triposia.com/airportarrivals/del?page=9"
                                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                  aria-label="Go to page 9"
                                >
                                  9
                                </a>
                                <a
                                  href="https://triposia.com/airportarrivals/del?page=10"
                                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                  aria-label="Go to page 10"
                                >
                                  10
                                </a>
                                <span aria-disabled="true">
                                  <span className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 cursor-default leading-5">
                                    ...
                                  </span>
                                </span>
                                <a
                                  href="https://triposia.com/airportarrivals/del?page=45"
                                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                  aria-label="Go to page 45"
                                >
                                  45
                                </a>
                                <a
                                  href="https://triposia.com/airportarrivals/del?page=46"
                                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                  aria-label="Go to page 46"
                                >
                                  46
                                </a>
                                <a
                                  href="https://triposia.com/airportarrivals/del?page=2"
                                  rel="next"
                                  className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                                  aria-label="Next &raquo;"
                                >
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                      fillRule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </a>
                              </span>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div id="inflightfeatures" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Inflight Features</h3>
              <p className="py-2">
                Maecenas vitae turpis condimentum metus tincidunt semper bibendum ut orci. Donec
                eget accumsan est. Duis laoreet sagittis elit et vehicula. Cras viverra posuere
                condimentum. Donec urna arcu, venenatis quis augue sit amet, mattis gravida nunc.
                Maecenas vitae turpis condimentum metus tincidunt semper bibendum ut orci. Donec
                eget accumsan est. Duis laoreet sagittis elit et vehicula. Cras viverra posuere
                condimentum. Donec urna arcu, venenatis quis augue sit amet, mattis gravida nunc.
              </p>
              <p>
                Maecenas vitae turpis condimentum metus tincidunt semper bibendum ut orci. Donec
                eget accumsan est. Duis laoreet sagittis elit et vehicula. Cras viverra posuere
                condimentum. Donec urna arcu, venenatis quis augue sit amet, mattis gravida nunc.
              </p>
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

// Simulated airline search function
async function getFlightsRoutes(
  dep_iata: string | null,
  arr_iata: string | null,
  airline_iata: string | null,
) {
  // Simulate an API call or database lookup
  const response = await getFlightsRouteData(dep_iata, arr_iata, airline_iata);
  if (response?.data.status) {
    return response.data.data;
  }
  return null;
}

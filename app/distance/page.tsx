import Footer from '../../src/components/Footer/Footer';
import Header from '../../src/components/Header/Header';

function Page() {
  return (
    <div>
      <Header />
      <section className="single-content-wrap section p-0">
        <div className="container">
          <div className="columns is-multiline single-content-space airline-info-wrap">
            <div className="column is-12">
              <div className="airline-wrap">
                <h1 className="title is-4 has-text-centered airline-info-head">
                  {' '}
                  Flight distance Delhi airport to Bangkok airport
                </h1>
              </div>
            </div>
            <div className="column is-12">
              <div className="columns airline-wrap">
                <div className="column is-4 p-0">
                  <p className="has-text-right">Indira Gandhi International Airport</p>
                </div>
                <div className="column is-4 p-0">
                  <p className="has-text-centered flight-status">2,923.34 Km and 1815.75 Miles</p>
                </div>
                <div className="column is-4 p-0">
                  <p className="has-text-left">Suvarnabhumi Airport</p>
                </div>
              </div>
            </div>
            <div className="column is-12">
              <div className="columns airline-wrap">
                <div className="column is-4 p-0">
                  <p className="has-text-right time">DEL</p>
                </div>
                <div className="column is-4 p-0">
                  <div className="flight-bar">
                    <div className="bar">
                      <i className="fa-solid fa-plane" />
                    </div>
                  </div>
                </div>
                <div className="column is-4 p-0">
                  <p className="has-text-left time">BKK</p>
                </div>
              </div>
            </div>
            <div className="column is-12">
              <div className="columns airline-wrap">
                <div className="column is-12 p-0">
                  <p className="has-text-centered scheduled-time p-0">2h 20min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="seatselection" className="columns is-multiline single-content-space">
            <div className="column is-12 content">
              <h2 className="title is-4 mt-3 mb-3">Flights From Delhi to Bangkok</h2>
              <h3 className="title is-4">
                Distance Between Indira Gandhi International Airport (DEL) and Suvarnabhumi Airport
                (BKK)
              </h3>
              <p>
                The distance between Indira Gandhi International Airport (DEL) and Suvarnabhumi
                Airport (BKK) is approximately 2,923.34 kilometers, 1815.75 miles and 1,581.04
                Nautical miles. Distance is calculated based on the direct route between the two
                airports, taking into account the curvature of the Earths surface.
              </p>
              <p>
                Covering a distance of 2,923.34 kilometers, 1815.75 miles and 1,581.04 Nautical
                miles, the flight from Delhi Indira Gandhi International Airport (DEL) to
                Suvarnabhumi Airport (BKK) takes 2h 20min by air.
              </p>
              <h2>Indira Gandhi International Airport Details</h2>
              <ul>
                <li>Departure Airport: Indira Gandhi International Airport</li>
                <li>Departure Airport IATA Code: DEL</li>
                <li>
                  Departure Airport Address: Indira Gandhi International Airport, New Delhi, Delhi,
                  India
                </li>
                <li>
                  Departure Airport Phone: Contact DEL Airport at 1244797300 for inquiries and
                  assistance.
                </li>
              </ul>
              <h2>Suvarnabhumi Airport Details</h2>
              <ul>
                <li>Arrival Airport: Suvarnabhumi Airport</li>
                <li>Arrival Airport IATA Code: BKK</li>
                <li>Arrival Airport Address: Suvarnabhumi Airport, Bangkok, Bangkok, Thailand</li>
                <li>
                  Arrival Airport Phone: Reach BKK Airport at 66 2 132 1888 for any airport-related
                  queries or support.
                </li>
              </ul>
              <h2 className="title is-5">
                Indira Gandhi International Airport to Suvarnabhumi Airport Flight Information
              </h2>
              <ul>
                <li>
                  Distance: The distance between DEL and BKK airports is approximately 2,923.34
                  kilometers, 1815.75 miles and 1,581.04 Nautical miles
                </li>
                <li>Time: The average flight duration from DEL to BKK is around 2h 20min.</li>
                <li>
                  Total Flights: There are a total of 31 flights operating between DEL and BKK
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
                <div
                  className="leaflet-pane leaflet-map-pane"
                  style={{ transform: 'translate3d(552px, -359px, 0px)' }}
                >
                  <div className="leaflet-pane leaflet-tile-pane">
                    <div className="leaflet-layer " style={{ zIndex: 1, opacity: 1 }}>
                      <div
                        className="leaflet-tile-container leaflet-zoom-animated"
                        style={{
                          zIndex: 3,
                          transform: 'translate3d(-70px, 311px, 0px) scale(0.25)',
                        }}
                      />
                      <div
                        className="leaflet-tile-container leaflet-zoom-animated"
                        style={{
                          zIndex: 5,
                          transform: 'translate3d(0px, 0px, 0px) scale(1)',
                        }}
                      >
                        <img
                          alt=""
                          role="presentation"
                          src="https://a.tile.openstreetmap.org/3/6/3.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(-156px, 388px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://b.tile.openstreetmap.org/3/7/3.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(100px, 388px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://c.tile.openstreetmap.org/3/6/2.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(-156px, 132px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://a.tile.openstreetmap.org/3/7/2.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(100px, 132px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://b.tile.openstreetmap.org/3/6/4.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(-156px, 644px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://c.tile.openstreetmap.org/3/7/4.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(100px, 644px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://c.tile.openstreetmap.org/3/5/3.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(-412px, 388px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://a.tile.openstreetmap.org/3/0/3.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(356px, 388px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://b.tile.openstreetmap.org/3/5/2.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(-412px, 132px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://c.tile.openstreetmap.org/3/0/2.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(356px, 132px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://a.tile.openstreetmap.org/3/5/4.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(-412px, 644px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://b.tile.openstreetmap.org/3/0/4.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(356px, 644px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://b.tile.openstreetmap.org/3/4/3.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(-668px, 388px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://b.tile.openstreetmap.org/3/1/3.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(612px, 388px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://a.tile.openstreetmap.org/3/4/2.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(-668px, 132px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://a.tile.openstreetmap.org/3/1/2.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(612px, 132px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://c.tile.openstreetmap.org/3/4/4.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(-668px, 644px, 0px)',
                            opacity: 1,
                          }}
                        />
                        <img
                          alt=""
                          role="presentation"
                          src="https://c.tile.openstreetmap.org/3/1/4.png"
                          className="leaflet-tile leaflet-tile-loaded"
                          style={{
                            width: 256,
                            height: 256,
                            transform: 'translate3d(612px, 644px, 0px)',
                            opacity: 1,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="leaflet-pane leaflet-shadow-pane">
                    <img
                      src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
                      className="leaflet-marker-shadow leaflet-zoom-animated"
                      alt=""
                      style={{
                        marginLeft: '-12px',
                        marginTop: '-41px',
                        width: 41,
                        height: 41,
                        transform: 'translate3d(-229px, 474px, 0px)',
                      }}
                    />
                    <img
                      src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
                      className="leaflet-marker-shadow leaflet-zoom-animated"
                      alt=""
                      style={{
                        marginLeft: '-12px',
                        marginTop: '-41px',
                        width: 41,
                        height: 41,
                        transform: 'translate3d(-94px, 567px, 0px)',
                      }}
                    />
                  </div>
                  <div className="leaflet-pane leaflet-overlay-pane">
                    <svg
                      pointerEvents="none"
                      className="leaflet-zoom-animated"
                      width={1558}
                      height={480}
                      viewBox="-682 319 1558 480"
                      style={{ transform: 'translate3d(-682px, 319px, 0px)' }}
                    >
                      <g>
                        <path
                          className="leaflet-interactive"
                          stroke="green"
                          strokeOpacity={1}
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          d="M-229 474L-95 565"
                        />
                        <path
                          className="leaflet-interactive"
                          stroke="black"
                          strokeOpacity="0.15"
                          strokeWidth={7}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          d="M-229 474L-229 474"
                        />
                        <path
                          className="leaflet-interactive"
                          stroke="white"
                          strokeOpacity="0.6"
                          strokeWidth={4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          d="M-229 474L-229 474"
                        />
                        <path
                          className="leaflet-interactive"
                          stroke="gray"
                          strokeOpacity="0.8"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="7,12"
                          fill="none"
                          d="M-229 474L-229 474"
                        />
                        <path
                          className="leaflet-interactive"
                          stroke="black"
                          strokeOpacity="0.15"
                          strokeWidth={7}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          d="M-94 567L-94 567"
                        />
                        <path
                          className="leaflet-interactive"
                          stroke="white"
                          strokeOpacity="0.6"
                          strokeWidth={4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          d="M-94 567L-94 567"
                        />
                        <path
                          className="leaflet-interactive"
                          stroke="gray"
                          strokeOpacity="0.8"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="7,12"
                          fill="none"
                          d="M-94 567L-94 567"
                        />
                        <path
                          className="leaflet-interactive"
                          stroke="black"
                          strokeOpacity="0.15"
                          strokeWidth={9}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          d="M-229 474L-227 478L-212 485L-189 486L-183 490L-174 489L-171 486L-165 486L-159 488L-154 487L-147 490L-140 489L-138 491L-133 492L-132 493L-134 499L-131 502L-133 508L-129 514L-122 517L-123 526L-120 533L-119 542L-116 543L-110 549L-104 547L-98 554L-94 567"
                        />
                        <path
                          className="leaflet-interactive"
                          stroke="white"
                          strokeOpacity="0.8"
                          strokeWidth={6}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          d="M-229 474L-227 478L-212 485L-189 486L-183 490L-174 489L-171 486L-165 486L-159 488L-154 487L-147 490L-140 489L-138 491L-133 492L-132 493L-134 499L-131 502L-133 508L-129 514L-122 517L-123 526L-120 533L-119 542L-116 543L-110 549L-104 547L-98 554L-94 567"
                        />
                        <path
                          className="leaflet-interactive"
                          stroke="red"
                          strokeOpacity={1}
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          d="M-229 474L-227 478L-212 485L-189 486L-183 490L-174 489L-171 486L-165 486L-159 488L-154 487L-147 490L-140 489L-138 491L-133 492L-132 493L-134 499L-131 502L-133 508L-129 514L-122 517L-123 526L-120 533L-119 542L-116 543L-110 549L-104 547L-98 554L-94 567"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="leaflet-pane leaflet-marker-pane">
                    <img
                      src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png"
                      className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive leaflet-marker-draggable"
                      alt=""
                      tabIndex={0}
                      style={{
                        marginLeft: '-12px',
                        marginTop: '-41px',
                        width: 25,
                        height: 41,
                        transform: 'translate3d(-229px, 474px, 0px)',
                        zIndex: 474,
                      }}
                    />
                    <img
                      src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png"
                      className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive leaflet-marker-draggable"
                      alt=""
                      tabIndex={0}
                      style={{
                        marginLeft: '-12px',
                        marginTop: '-41px',
                        width: 25,
                        height: 41,
                        transform: 'translate3d(-94px, 567px, 0px)',
                        zIndex: 567,
                      }}
                    />
                  </div>
                  <div className="leaflet-pane leaflet-tooltip-pane" />
                  <div className="leaflet-pane leaflet-popup-pane" />
                  <div
                    className="leaflet-proxy leaflet-zoom-animated"
                    style={{ transform: 'translate3d(1789px, 939px, 0px) scale(4)' }}
                  />
                </div>
                <div className="leaflet-control-container">
                  <div className="leaflet-top leaflet-left">
                    <div className="leaflet-control-zoom leaflet-bar leaflet-control">
                      <a
                        className="leaflet-control-zoom-in"
                        href="#"
                        title="Zoom in"
                        role="button"
                        aria-label="Zoom in"
                      >
                        +
                      </a>
                      <a
                        className="leaflet-control-zoom-out"
                        href="#"
                        title="Zoom out"
                        role="button"
                        aria-label="Zoom out"
                      >
                        −
                      </a>
                    </div>
                  </div>
                  <div className="leaflet-top leaflet-right">
                    <div className="leaflet-routing-container leaflet-bar leaflet-control">
                      <div className="leaflet-routing-alternatives-container">
                        <div className="leaflet-routing-alt ">
                          <h2>NH27, Yangoon-Mandalay Expressway</h2>
                          <h3>4180.7 km, 51 h</h3>
                          <table className=" ">
                            <colgroup className="">
                              <col className="leaflet-routing-instruction-icon" />
                              <col className="leaflet-routing-instruction-text" />
                              <col className="leaflet-routing-instruction-distance" />
                            </colgroup>
                            <tbody className="">
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-depart" />
                                </td>
                                <td className="">Head east</td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right</td>
                                <td className="">100 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">50 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right at the fork</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto IGI Airport T3 Road</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right</td>
                                <td className="">250 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right</td>
                                <td className="">600 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto Abdul Gaffar Khan Marg</td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto Anuvrat Marg (NH148A)</td>
                                <td className="">200 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">
                                  Make a slight right to stay on Anuvrat Marg (NH148A)
                                </td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto Mehrauli Badarpur Road</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">
                                  Take the ramp onto Mehrauli Badarpur Road Underpass
                                </td>
                                <td className="">700 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Merge left onto Mathura Road (NH44)</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Flyover (NH44)</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left at the fork</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right</td>
                                <td className="">500 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">15 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right</td>
                                <td className="">450 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto NH334D</td>
                                <td className="">3.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH334D</td>
                                <td className="">50 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto NH334D
                                </td>
                                <td className="">20 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle onto NH334D</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH34</td>
                                <td className="">4.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto NH34</td>
                                <td className="">70 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Continue straight to stay on Etah Bypass (NH34)
                                </td>
                                <td className="">150 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Continue straight to stay on Kannauj Bypass (NH34)
                                </td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Take the ramp on the left</td>
                                <td className="">700 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Merge right towards Lucknow</td>
                                <td className="">80 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">
                                  Take the ramp on the left onto Agra - Lucknow Expressway
                                </td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto SH40</td>
                                <td className="">3.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 1st exit</td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto Mohan Road (SH40)</td>
                                <td className="">2.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right to stay on Mohan Road (SH40)</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">550 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 2nd exit</td>
                                <td className="">60 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">250 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto Shah Mina Road
                                </td>
                                <td className="">8 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle onto Shah Mina Road</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto Mahatma Gandhi Road</td>
                                <td className="">250 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-u-turn" />
                                </td>
                                <td className="">
                                  Make a U-turn and continue on Mahatma Gandhi Road
                                </td>
                                <td className="">500 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 1st exit</td>
                                <td className="">15 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">90 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue straight to stay on Faizabad Road</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto Faizabad Road
                                </td>
                                <td className="">25 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle onto Faizabad Road</td>
                                <td className="">5.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter Polytechnic Chauraha and take the 1st exit onto Faizabad
                                  Road
                                </td>
                                <td className="">100 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle onto Faizabad Road</td>
                                <td className="">350 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Ring Road (NH30)</td>
                                <td className="">900 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Faizabad Road (NH30)</td>
                                <td className="">5.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto फ़ैज़ाबाद रोड (NH27)</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Faizabad Road (NH27)</td>
                                <td className="">50 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH27</td>
                                <td className="">70 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto NH27</td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto NH27</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto Gorakhpur
                                  Bypass (NH27)
                                </td>
                                <td className="">90 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto Gorakhpur Bypass (NH27)
                                </td>
                                <td className="">400 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto Gorakhpur
                                  Bypass (NH27)
                                </td>
                                <td className="">40 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto Gorakhpur Bypass (NH27)
                                </td>
                                <td className="">200 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left</td>
                                <td className="">550 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH139W</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto NH139W</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto MDR</td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto MDR</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH27</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Take the ramp on the left</td>
                                <td className="">60 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Merge right onto East-West Corridor (NH27)</td>
                                <td className="">30 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Continue straight to stay on East-West Corridor (NH27)
                                </td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Darbhanga Bypass (NH27)</td>
                                <td className="">45 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto East-West Corridor (NH27)</td>
                                <td className="">70 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto NH131</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto MDR</td>
                                <td className="">250 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right</td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Merge left onto महेन्द्र राज्मार्ग् (NH01)</td>
                                <td className="">40 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto महेन्द्र
                                  राज्मार्ग् (NH01)
                                </td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto महेन्द्र राज्मार्ग् (NH01)
                                </td>
                                <td className="">35 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto महेन्द्र
                                  राज्मार्ग् (NH01)
                                </td>
                                <td className="">20 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto महेन्द्र राज्मार्ग् (NH01)
                                </td>
                                <td className="">6 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">
                                  Turn right to stay on महेन्द्र राज्मार्ग् (NH01)
                                </td>
                                <td className="">15 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto Mahendra Rajmarg (NH01)</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Continue straight to stay on Mahendra Rajmarg (NH01)
                                </td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto महेन्द्र राज्मार्ग् (NH01)</td>
                                <td className="">45 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto महेन्द्र राज्मार्ग् (NH01)</td>
                                <td className="">10 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">
                                  Turn right to stay on महेन्द्र राज्मार्ग् (NH01)
                                </td>
                                <td className="">900 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto महेन्द्र राज्मार्ग् (NH01)</td>
                                <td className="">600 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto NH327B</td>
                                <td className="">600 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right at the fork</td>
                                <td className="">250 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Merge left onto NH327B</td>
                                <td className="">350 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto NH327</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto NH27</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Take the ramp on the left onto NH27</td>
                                <td className="">500 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH27</td>
                                <td className="">2.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 1st exit</td>
                                <td className="">7 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">55 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right at the fork</td>
                                <td className="">900 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right</td>
                                <td className="">3.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto SH12A
                                </td>
                                <td className="">100 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Exit the traffic circle onto SH12A</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto NH27</td>
                                <td className="">550 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto NH27</td>
                                <td className="">70 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH27</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH17</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto NH27</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH27</td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH27</td>
                                <td className="">40 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH 27</td>
                                <td className="">2.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto NH27</td>
                                <td className="">45 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto NH 31 (C)</td>
                                <td className="">200 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto NH27</td>
                                <td className="">80 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH427</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto NH427</td>
                                <td className="">700 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto NH427</td>
                                <td className="">40 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH427</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH427</td>
                                <td className="">3.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto NH427</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH27</td>
                                <td className="">50 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH27</td>
                                <td className="">80 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 3rd exit onto NH27
                                </td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle onto NH27</td>
                                <td className="">35 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">3.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right</td>
                                <td className="">2.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto SH19</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto SH19</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH29</td>
                                <td className="">55 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto NH29</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto NH29</td>
                                <td className="">2.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto NH29
                                </td>
                                <td className="">20 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle onto NH29</td>
                                <td className="">30 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right onto NH29</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH29</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH2</td>
                                <td className="">2.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH2</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH2</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto NH2</td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH2</td>
                                <td className="">600 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto NH2</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH2</td>
                                <td className="">3 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto NH2</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right onto NH2</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto NH2
                                </td>
                                <td className="">35 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle onto NH2</td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH2</td>
                                <td className="">500 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto NH2</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto NH2
                                </td>
                                <td className="">25 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle onto NH2</td>
                                <td className="">550 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto NH102
                                </td>
                                <td className="">15 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle onto NH102</td>
                                <td className="">250 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH102</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto NH102</td>
                                <td className="">30 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH102</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH102</td>
                                <td className="">5.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto NH102</td>
                                <td className="">40 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto NH102</td>
                                <td className="">10 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto NH102</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">150 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Continue slightly left onto မုံရွာ - ကလေး လမ်း</td>
                                <td className="">90 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Continue onto မြင်းမူလမ်း - ဗိုလ်ချုပ်အောင်ဆန်းလမ်း
                                </td>
                                <td className="">8 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto မြင်းမူလမ်း -
                                  ဗိုလ်ချုပ်အောင်ဆန်းလမ်း
                                </td>
                                <td className="">20 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto မြင်းမူလမ်း - ဗိုလ်ချုပ်အောင်ဆန်းလမ်း
                                </td>
                                <td className="">700 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto ဗိုလ်ချုပ်အောင်ဆန်းလမ်း</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto မုံရွာလမ်း
                                </td>
                                <td className="">4.5 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle onto မုံရွာလမ်း</td>
                                <td className="">40 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Continue onto Mandalay - Monywar - Kalay - Tamu Road
                                </td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">
                                  Turn left to stay on Mandalay - Monywar - Kalay - Tamu Road
                                </td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Nyaung Pin Wun Bridge</td>
                                <td className="">40 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 2nd exit</td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">4.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 1st exit</td>
                                <td className="">1 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 2nd exit</td>
                                <td className="">60 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">250 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Take the ramp</td>
                                <td className="">3.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 1st exit</td>
                                <td className="">25 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">3 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 2nd exit</td>
                                <td className="">35 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 2nd exit</td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Yangoon-Mandalay Expressway</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Ygn - Mdy Freeway</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Yangoon-Mandalay Expressway</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ရန်ကုန်-မန္တလေး အမြန်လမ်း</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ရန္ကုန္-မႏၱေလး အျမန္လမ္း</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Yangoon-Mandalay Expressway</td>
                                <td className="">80 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue straight</td>
                                <td className="">8 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Yangoon-Mandalay Expressway</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Ah Myann Lan</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Ah Myan Lan</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Ah Myann Lan</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Ah Myan Lan</td>
                                <td className="">8 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Take the ramp</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">200 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ရန်ကုန် - မန္တလေး အမြန်လမ်း</td>
                                <td className="">9 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto NH 8</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH 8</td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH 8</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH 8</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right onto NH 8</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto မြို့ရှောင်လမ်း (NH 8)</td>
                                <td className="">70 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto NH 8
                                </td>
                                <td className="">10 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle onto NH 8</td>
                                <td className="">350 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto 85</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto 85</td>
                                <td className="">30 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto
                                  မြို့ရှောင်လမ်း (85)
                                </td>
                                <td className="">70 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto မြို့ရှောင်လမ်း (85)
                                </td>
                                <td className="">6 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto 85</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto 85</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto 85</td>
                                <td className="">55 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right to stay on Asia Highway (85)</td>
                                <td className="">40 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right to stay on ဘုရင့်နောင်လမ်း (85)</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto ဘုရင့်နောင်လမ်း (85)</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Bayint Naung Road (85)</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto สะพานมิตรภาพไทย-พม่า (12)</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto 12
                                </td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Exit the traffic circle onto 12</td>
                                <td className="">80 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto ถนนพหลโยธิน (1)</td>
                                <td className="">150 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Take the ramp</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Merge right onto ถนนเลี่ยงเมืองนครสวรรค์ (122)</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Merge right onto ถนนพหลโยธิน (1)</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ถนนสายเอเชีย (32)</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto ถนนสายเอเชีย (32)</td>
                                <td className="">35 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Take the ramp on the left</td>
                                <td className="">200 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">
                                  Make a slight left onto ถนนพหลโยธิน (สายเก่า) (3543)
                                </td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto ถนนพหลโยธิน (1)</td>
                                <td className="">550 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue straight to stay on ถนนพหลโยธิน (1)</td>
                                <td className="">400 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Take the ramp on the left</td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ถนนกาญจนาภิเษก</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto ถนนกาญจนาภิเษก (9)</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto ถนนกาญจนาภิเษก (9)</td>
                                <td className="">400 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto ถนนกาญจนาภิเษก (9)</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Take exit 9A on the left towards 34: บางนา</td>
                                <td className="">450 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left towards 34: ชลบุรี</td>
                                <td className="">70 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Go straight onto ทางบริการด้านนอกของถนนกาญจนาภิเษก (3901)
                                </td>
                                <td className="">350 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto ถนนเทพรัตน (34)</td>
                                <td className="">200 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Take the ramp on the right</td>
                                <td className="">80 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Merge right onto ถนนเทพรัตน (34)</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Take the ramp on the left</td>
                                <td className="">70 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto ถนนเทพรัตน (34)</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left</td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right</td>
                                <td className="">70 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right</td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto ถนนเทพรัตน (34)</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto ถนนรัตนราช (3413)</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ถนนปานวิถี (3117)</td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto ถนนสุขุมวิท (3)</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto ซอยโรจนกุล 1</td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto ซอยพระปฐมกลาง</td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto ถนนหลวงพ่อปานสาย 1 ฝั่งใต้</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-arrive" />
                                </td>
                                <td className="">You have arrived at your destination</td>
                                <td className="">0 m</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="leaflet-routing-alt  leaflet-routing-alt-minimized ">
                          <h2>NH19, NH37</h2>
                          <h3>4264.6 km, 52 h</h3>
                          <table className=" ">
                            <colgroup className="">
                              <col className="leaflet-routing-instruction-icon" />
                              <col className="leaflet-routing-instruction-text" />
                              <col className="leaflet-routing-instruction-distance" />
                            </colgroup>
                            <tbody className="">
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-depart" />
                                </td>
                                <td className="">Head east</td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right</td>
                                <td className="">100 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">50 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right at the fork</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto IGI Airport T3 Road</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right</td>
                                <td className="">250 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right</td>
                                <td className="">600 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto Abdul Gaffar Khan Marg</td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto Anuvrat Marg (NH148A)</td>
                                <td className="">200 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">
                                  Make a slight right to stay on Anuvrat Marg (NH148A)
                                </td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto Mehrauli Badarpur Road</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">
                                  Take the ramp onto Mehrauli Badarpur Road Underpass
                                </td>
                                <td className="">700 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Merge left onto Mathura Road (NH44)</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Flyover (NH44)</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto Palwal Bypass (NH44)</td>
                                <td className="">3 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto NH 19</td>
                                <td className="">3 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto NH44</td>
                                <td className="">60 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH44</td>
                                <td className="">45 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto NH44</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Merge left onto NH44</td>
                                <td className="">5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto NH19</td>
                                <td className="">80 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto NH19</td>
                                <td className="">300 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH19</td>
                                <td className="">70 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto NH19</td>
                                <td className="">35 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto Grand Trunk
                                  Road
                                </td>
                                <td className="">25 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle onto Grand Trunk Road</td>
                                <td className="">3 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn slight left</td>
                                <td className="">900 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 2nd exit</td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">200 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto NH30
                                </td>
                                <td className="">15 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Exit the traffic circle onto NH30</td>
                                <td className="">70 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto NH30</td>
                                <td className="">450 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto NH19</td>
                                <td className="">6 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto NH19
                                </td>
                                <td className="">20 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle onto NH19</td>
                                <td className="">900 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 3rd exit onto NH19
                                </td>
                                <td className="">35 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle onto NH19</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 3rd exit onto NH19
                                </td>
                                <td className="">45 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle onto NH19</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right onto NH19</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right onto NH19</td>
                                <td className="">150 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto NH19</td>
                                <td className="">200 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto NH19</td>
                                <td className="">8 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto NH19</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto NH19</td>
                                <td className="">200 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">
                                  Make a slight left onto Grand Trunk Road (SH13)
                                </td>
                                <td className="">8 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto Grand Trunk Road (SH13)</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Continue straight to stay on Grand Trunk Road (SH13)
                                </td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Take the ramp on the left</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Grand Trunk Road</td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto SH6</td>
                                <td className="">70 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-sharp-right" />
                                </td>
                                <td className="">Make a sharp right onto SH6</td>
                                <td className="">50 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight</td>
                                <td className="">40 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Merge right onto Grand Trunk Road (SH6)</td>
                                <td className="">900 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">55 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left</td>
                                <td className="">70 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto Kalyani-Barrackpur expressway</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Ishwar Gupta Setu</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto Buddha Park Flyover (SH1)</td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left to stay on SH1</td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto SH1</td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto SH1</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto SH1</td>
                                <td className="">600 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto SH1</td>
                                <td className="">900 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto SH1</td>
                                <td className="">60 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">550 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">90 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">450 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto Kalyani Road</td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right to stay on Kalyani Road</td>
                                <td className="">60 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto Kalyani Road</td>
                                <td className="">8 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Merge right onto NH12</td>
                                <td className="">2.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH12</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto SH1</td>
                                <td className="">30 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">100 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue straight</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue straight</td>
                                <td className="">600 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">
                                  Turn left onto Barasat - Petrapole Highway (NH112)
                                </td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">
                                  Make a slight right to stay on Barasat - Petrapole Highway (NH112)
                                </td>
                                <td className="">3.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto যশোর-বেনাপোল মহাসড়ক (N706)</td>
                                <td className="">5.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Jessore- Benapole Hwy (N706)</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto যশোর-বেনাপোল মহাসড়ক (N706)</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Jessore- Benapole Hwy (N706)</td>
                                <td className="">600 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto N7
                                </td>
                                <td className="">25 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Exit the traffic circle onto N7</td>
                                <td className="">100 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto Jessore- Benapole Hwy (N706)</td>
                                <td className="">2.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-sharp-right" />
                                </td>
                                <td className="">Make a sharp right onto Mujib Raod (N706)</td>
                                <td className="">250 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto Nil Roton Dhor Road</td>
                                <td className="">500 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto 24 Rail Road jessore Bangladesh</td>
                                <td className="">550 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Merge left onto RN Road (N707)</td>
                                <td className="">35 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right to stay on RN Road (N707)</td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto Jessore - Narail Highway (N806)</td>
                                <td className="">700 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Jessore - Narail Hwy (N806)</td>
                                <td className="">8 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Continue straight to stay on Jessore - Narail Hwy (N806)
                                </td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto যশোর-নড়াইল মহাসড়ক (N806)</td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">
                                  Continue slightly right onto Jessore - Narail Hwy (N806)
                                </td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">
                                  Turn right to stay on Jessore - Narail Hwy (N806)
                                </td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto শেখ রাসেল সেতু (N806)</td>
                                <td className="">200 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Narail - Lohagara Road (N806)</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto কালনা সেতু সংযোগ সড়ক (N806)</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter Bhatiapara Gol Chattar and take the 2nd exit onto Dhaka -
                                  Khulna Hwy (N805)
                                </td>
                                <td className="">50 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto Dhaka - Khulna Hwy (N805)
                                </td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">
                                  Make a slight left onto ঢাকা-খুলনা মহাসড়ক (N805)
                                </td>
                                <td className="">35 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Dhaka - Khulna Hwy (N805)</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto এন৮</td>
                                <td className="">40 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto ঢাকা-মাওয়া
                                  এক্সপ্রেসওয়ে (N8)
                                </td>
                                <td className="">50 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto ঢাকা-মাওয়া এক্সপ্রেসওয়ে (N8)
                                </td>
                                <td className="">35 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">
                                  Make a slight left to stay on ঢাকা-মাওয়া এক্সপ্রেসওয়ে (N8)
                                </td>
                                <td className="">30 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Continue onto প্রথম বাংলাদেশ-চীন মৈত্রী সেতু (N8)
                                </td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ঢাকা-মাওয়া এক্সপ্রেসওয়ে (N8)</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">
                                  Make a slight left to stay on ঢাকা-মাওয়া এক্সপ্রেসওয়ে (N8)
                                </td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto Shahid Faruk Road</td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">
                                  Make a slight right onto Dhaka - Demra Highway (R 110)
                                </td>
                                <td className="">50 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ঢাকা - ডেমরা মহাসড়ক (R110)</td>
                                <td className="">6 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Continue slightly left onto R201</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto N2
                                </td>
                                <td className="">7 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle onto N2</td>
                                <td className="">8 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto ভুলতা ফ্লাইওভার (N2)</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Merge left onto ঢাকা-সিলেট মহাসড়ক (N2)</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Dhaka-Sylhet Highway (N2)</td>
                                <td className="">3.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto Dhaka-Sylhet Highway (N2)</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 3rd exit onto ঢাকা-সিলেট
                                  মহাসড়ক (N2)
                                </td>
                                <td className="">55 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto ঢাকা-সিলেট মহাসড়ক (N2)
                                </td>
                                <td className="">3.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto Dhaka-Sylhet
                                  Highway (N2)
                                </td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto Dhaka-Sylhet Highway (N2)
                                </td>
                                <td className="">3 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ঢাকা-সিলেট মহাসড়ক (N2)</td>
                                <td className="">6 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 3rd exit onto Dhaka-Sylhet
                                  Highway (N2)
                                </td>
                                <td className="">45 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto Dhaka-Sylhet Highway (N2)
                                </td>
                                <td className="">25 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Merge right onto ঢাকা-সিলেট মহাসড়ক (N2)</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ঢাকা - সিলেট মহাসড়ক (N2)</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto ঢাকা - সিলেট
                                  মহাসড়ক (N2)
                                </td>
                                <td className="">25 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto ঢাকা - সিলেট মহাসড়ক (N2)
                                </td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto সৈয়দ নজরুল ইসলাম সেতু (N2)</td>
                                <td className="">900 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ঢাকা-সিলেট মহাসড়ক (N2)</td>
                                <td className="">600 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto ঢাকা-সিলেট
                                  মহাসড়ক (N2)
                                </td>
                                <td className="">40 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto ঢাকা-সিলেট মহাসড়ক (N2)
                                </td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left to stay on N2</td>
                                <td className="">55 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter New Bridge Point and take the 2nd exit onto ঢাকা-সিলেট
                                  মহাসড়ক (N2)
                                </td>
                                <td className="">45 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto ঢাকা-সিলেট মহাসড়ক (N2)
                                </td>
                                <td className="">8 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Dhaka-Sylhet Highway (N2)</td>
                                <td className="">40 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle onto N2</td>
                                <td className="">35 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left</td>
                                <td className="">200 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Merge right onto ঢাকা-সিলেট মহাসড়ক (N2)</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto N205</td>
                                <td className="">2.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-sharp-right" />
                                </td>
                                <td className="">
                                  Make a sharp right onto Fenchuganj - Moulvibazar Bypass (N208)
                                </td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto N210
                                </td>
                                <td className="">7 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle onto N210</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 3rd exit onto
                                  সিলেট-বিয়ানীবাজার মহাসড়ক (R250)
                                </td>
                                <td className="">20 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto সিলেট-বিয়ানীবাজার মহাসড়ক (R250)
                                </td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto Zakiganj Sylhet Rd (R250)</td>
                                <td className="">6 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto সিলেট-জকিগন্জ রোড (R250)</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Continue onto সিলেট-বিয়ানীবাজার মহাসড়ক (R250)
                                </td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">
                                  Make a slight right to stay on সিলেট-বিয়ানীবাজার মহাসড়ক
                                </td>
                                <td className="">2.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Shoda Kal Bridge</td>
                                <td className="">400 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Sylhet - Beanibazar Highway</td>
                                <td className="">700 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Continue straight to stay on Sylhet - Beanibazar Highway
                                </td>
                                <td className="">3 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">
                                  Make a slight right onto Beanibazar - Sylhet Highway
                                </td>
                                <td className="">600 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto Beanibazar - Sylhet Highway</td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">4.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto NH37</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH37</td>
                                <td className="">250 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left to stay on NH37</td>
                                <td className="">500 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH37</td>
                                <td className="">700 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto NH37</td>
                                <td className="">15 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle onto NH37</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left to stay on NH6</td>
                                <td className="">5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH37</td>
                                <td className="">3.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right onto NH37</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto NH53 (NH37)
                                </td>
                                <td className="">5 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Exit the traffic circle onto NH53 (NH37)</td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto NH53 (NH37)
                                </td>
                                <td className="">25 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Exit the traffic circle onto NH53 (NH37)</td>
                                <td className="">100 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Sadarghat Bridge (NH37)</td>
                                <td className="">9 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH37</td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto NH37</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH37</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">
                                  Continue slightly left onto Manipur Road (NH37)
                                </td>
                                <td className="">8 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">
                                  Make a slight left to stay on Manipur Road (NH37)
                                </td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH37</td>
                                <td className="">90 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto NH37</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto New Cachar Road (NH37)</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto NH137A</td>
                                <td className="">500 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">450 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH102</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto NH102</td>
                                <td className="">30 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH102</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto NH102</td>
                                <td className="">5.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto NH102</td>
                                <td className="">40 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto NH102</td>
                                <td className="">10 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto NH102</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">150 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Continue slightly left onto မုံရွာ - ကလေး လမ်း</td>
                                <td className="">90 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Continue onto မြင်းမူလမ်း - ဗိုလ်ချုပ်အောင်ဆန်းလမ်း
                                </td>
                                <td className="">8 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto မြင်းမူလမ်း -
                                  ဗိုလ်ချုပ်အောင်ဆန်းလမ်း
                                </td>
                                <td className="">20 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto မြင်းမူလမ်း - ဗိုလ်ချုပ်အောင်ဆန်းလမ်း
                                </td>
                                <td className="">700 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto ဗိုလ်ချုပ်အောင်ဆန်းလမ်း</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto မုံရွာလမ်း
                                </td>
                                <td className="">4.5 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle onto မုံရွာလမ်း</td>
                                <td className="">40 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Continue onto Mandalay - Monywar - Kalay - Tamu Road
                                </td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">
                                  Turn left to stay on Mandalay - Monywar - Kalay - Tamu Road
                                </td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Nyaung Pin Wun Bridge</td>
                                <td className="">40 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 2nd exit</td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">4.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 1st exit</td>
                                <td className="">1 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 2nd exit</td>
                                <td className="">60 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">250 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Take the ramp</td>
                                <td className="">3.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 1st exit</td>
                                <td className="">25 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">3 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 2nd exit</td>
                                <td className="">35 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">Enter the traffic circle and take the 2nd exit</td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Exit the traffic circle</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Yangoon-Mandalay Expressway</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Ygn - Mdy Freeway</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Yangoon-Mandalay Expressway</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ရန်ကုန်-မန္တလေး အမြန်လမ်း</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ရန္ကုန္-မႏၱေလး အျမန္လမ္း</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Yangoon-Mandalay Expressway</td>
                                <td className="">80 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue straight</td>
                                <td className="">8 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Yangoon-Mandalay Expressway</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Ah Myann Lan</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Ah Myan Lan</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Ah Myann Lan</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Ah Myan Lan</td>
                                <td className="">8 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Take the ramp</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left</td>
                                <td className="">200 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ရန်ကုန် - မန္တလေး အမြန်လမ်း</td>
                                <td className="">9 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto NH 8</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH 8</td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH 8</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto NH 8</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-right" />
                                </td>
                                <td className="">Make a slight right onto NH 8</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto မြို့ရှောင်လမ်း (NH 8)</td>
                                <td className="">70 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto NH 8
                                </td>
                                <td className="">10 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Exit the traffic circle onto NH 8</td>
                                <td className="">350 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto 85</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto 85</td>
                                <td className="">30 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 2nd exit onto
                                  မြို့ရှောင်လမ်း (85)
                                </td>
                                <td className="">70 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">
                                  Exit the traffic circle onto မြို့ရှောင်လမ်း (85)
                                </td>
                                <td className="">6 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto 85</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left onto 85</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto 85</td>
                                <td className="">55 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right to stay on Asia Highway (85)</td>
                                <td className="">40 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right to stay on ဘုရင့်နောင်လမ်း (85)</td>
                                <td className="">4 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto ဘုရင့်နောင်လမ်း (85)</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto Bayint Naung Road (85)</td>
                                <td className="">300 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto สะพานมิตรภาพไทย-พม่า (12)</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-enter-roundabout" />
                                </td>
                                <td className="">
                                  Enter the traffic circle and take the 1st exit onto 12
                                </td>
                                <td className="">30 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Exit the traffic circle onto 12</td>
                                <td className="">80 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto ถนนพหลโยธิน (1)</td>
                                <td className="">150 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Take the ramp</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Merge right onto ถนนเลี่ยงเมืองนครสวรรค์ (122)</td>
                                <td className="">15 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Merge right onto ถนนพหลโยธิน (1)</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ถนนสายเอเชีย (32)</td>
                                <td className="">100 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto ถนนสายเอเชีย (32)</td>
                                <td className="">35 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Take the ramp on the left</td>
                                <td className="">200 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">
                                  Make a slight left onto ถนนพหลโยธิน (สายเก่า) (3543)
                                </td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto ถนนพหลโยธิน (1)</td>
                                <td className="">550 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue straight to stay on ถนนพหลโยธิน (1)</td>
                                <td className="">400 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Take the ramp on the left</td>
                                <td className="">1 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ถนนกาญจนาภิเษก</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto ถนนกาญจนาภิเษก (9)</td>
                                <td className="">25 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Keep right onto ถนนกาญจนาภิเษก (9)</td>
                                <td className="">400 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left onto ถนนกาญจนาภิเษก (9)</td>
                                <td className="">10 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Take exit 9A on the left towards 34: บางนา</td>
                                <td className="">450 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Keep left towards 34: ชลบุรี</td>
                                <td className="">70 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">
                                  Go straight onto ทางบริการด้านนอกของถนนกาญจนาภิเษก (3901)
                                </td>
                                <td className="">350 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto ถนนเทพรัตน (34)</td>
                                <td className="">200 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Take the ramp on the right</td>
                                <td className="">80 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Merge right onto ถนนเทพรัตน (34)</td>
                                <td className="">20 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Take the ramp on the left</td>
                                <td className="">70 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto ถนนเทพรัตน (34)</td>
                                <td className="">800 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-bear-left" />
                                </td>
                                <td className="">Make a slight left</td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right</td>
                                <td className="">70 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right</td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Go straight onto ถนนเทพรัตน (34)</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto ถนนรัตนราช (3413)</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-continue" />
                                </td>
                                <td className="">Continue onto ถนนปานวิถี (3117)</td>
                                <td className="">7 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto ถนนสุขุมวิท (3)</td>
                                <td className="">1.5 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto ซอยโรจนกุล 1</td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-right" />
                                </td>
                                <td className="">Turn right onto ซอยพระปฐมกลาง</td>
                                <td className="">150 m</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-turn-left" />
                                </td>
                                <td className="">Turn left onto ถนนหลวงพ่อปานสาย 1 ฝั่งใต้</td>
                                <td className="">2 km</td>
                              </tr>
                              <tr className="">
                                <td className="">
                                  <span className="leaflet-routing-icon leaflet-routing-icon-arrive" />
                                </td>
                                <td className="">You have arrived at your destination</td>
                                <td className="">0 m</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="leaflet-bottom leaflet-left" />
                  <div className="leaflet-bottom leaflet-right">
                    <div className="leaflet-control-attribution leaflet-control">
                      <a href="https://leafletjs.com" title="A JS library for interactive maps">
                        Leaflet
                      </a>{' '}
                      | Map data ©{' '}
                      <a href="https://www.openstreetmap.org/copyright">
                        OpenStreetMap contributors
                      </a>
                    </div>
                  </div>
                </div>
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
          <div id="inflightfeatures" className="columns is-multiline">
            <div className="column is-12 pt-0">
              <div className="departing-flights">
                <div className="flights-booking-item">
                  <div className="flight-logo">
                    <img src="https://aerocloud.s3.amazonaws.com/airweb/TG.webp" alt="" />
                  </div>
                  <div className="flight-time">
                    <h4 className="title is-6 mb-0">TG 332</h4>
                    <p className="detailtxt">Ticket book single</p>
                  </div>
                  <div className="duration">
                    <h4 className="title is-6 mb-0">05:55:00 </h4>
                    <p className="detailtxt">New Delhi - Bangkok</p>
                  </div>
                  <div className="nonstop">
                    <h4 className="title is-6 mb-0">Nonstop</h4>
                    <p className="detailtxt">DEL - BKK</p>
                  </div>
                  <div className="weightkg">
                    <h4 className="title is-6 mb-0">1,815.75 KM</h4>
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
                    <th
                      scope="row"
                      itemProp="departureAirport"
                      itemType="https://schema.org/Airport"
                    >
                      Departure Airport
                    </th>
                    <td itemProp="name">Indira Gandhi International Airport</td>
                  </tr>
                  <tr>
                    <th scope="row">Departure Airport IATA Code</th>
                    <td>DEL</td>
                  </tr>
                  <tr>
                    <th scope="row">Departure Airport Address</th>
                    <td>Indira Gandhi International Airport, New Delhi, Delhi, India</td>
                  </tr>
                  <tr>
                    <th scope="row" itemProp="arrivalAirport" itemType="https://schema.org/Airport">
                      Arrival Airport
                    </th>
                    <td itemProp="name">Suvarnabhumi Airport</td>
                  </tr>
                  <tr>
                    <th scope="row">Arrival Airport IATA Code</th>
                    <td>BKK</td>
                  </tr>
                  <tr>
                    <th scope="row">Arrival Airport Address</th>
                    <td>Suvarnabhumi Airport, Bangkok, Bangkok, Thailand</td>
                  </tr>
                  <tr>
                    <th scope="row">Distance Kilometers</th>
                    <td itemProp="flightDistance">2,923.34 kilometers</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th scope="row">Distance Miles</th>
                    <td itemProp="flightDistance">2,923.34 miles</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th scope="row">Distance Nautical miles</th>
                    <td itemProp="flightDistance">1,581.04 Nautical miles</td>
                  </tr>
                  <tr>
                    <th scope="row">Time</th>
                    <td>2h 20min</td>
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
                  className="accordion is-active"
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <div className="accordion-header">
                    <button className="toggle" aria-label="toggle">
                      <p itemProp="name">What is the phone number for DEL Airport?</p>
                    </button>
                  </div>
                  <div
                    className="accordion-body"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="accordion-content" itemProp="text">
                      You can reach DEL Airport at 1244797300.
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
                      <p itemProp="name">What is the contact number for Bangkok BKK Airport?</p>
                    </button>
                  </div>
                  <div
                    className="accordion-body"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="accordion-content" itemProp="text">
                      You can contact BKK Airport at 66 2 132 1888.
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
                      <p itemProp="name">How far is it from DEL to BKK?</p>
                    </button>
                  </div>
                  <div
                    className="accordion-body"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="accordion-content" itemProp="text">
                      The distance between DEL and BKK is approximately 2,923.34 kilometers, 1815.75
                      miles and 1,581.04 Nautical miles
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
                      <p itemProp="name">How long does it take to fly from DEL to BKK?</p>
                    </button>
                  </div>
                  <div
                    className="accordion-body"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="accordion-content" itemProp="text">
                      The average flight time from DEL to BKK is approximately 2h 20min.
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
                      <p itemProp="name">How many flights operate between DEL and BKK?</p>
                    </button>
                  </div>
                  <div
                    className="accordion-body"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="accordion-content" itemProp="text">
                      There are a total of 31 flights operating between DEL and BKK.
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
                      <p itemProp="name">Can I get assistance at DEL Airport?</p>
                    </button>
                  </div>
                  <div
                    className="accordion-body"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="accordion-content" itemProp="text">
                      Yes, you can seek assistance at DEL Airport by contacting 1244797300.
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
                      <p itemProp="name">Is there a customer service number for BKK Airport?</p>
                    </button>
                  </div>
                  <div
                    className="accordion-body"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="accordion-content" itemProp="text">
                      Yes, you can reach BKK Airport customer service at 66 2 132 1888.
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
                      <p itemProp="name">What is the aerial distance between DEL and BKK?</p>
                    </button>
                  </div>
                  <div
                    className="accordion-body"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="accordion-content" itemProp="text">
                      Flight distance between DEL and BKK is 2,923.34 kilometers, 1815.75 miles and
                      1,581.04 Nautical miles.
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
                        How much time does it take to travel from DEL to BKK by air?
                      </p>
                    </button>
                  </div>
                  <div
                    className="accordion-body"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="accordion-content" itemProp="text">
                      It takes around 2h 20min to travel from DEL to BKK by air.
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
                      <p itemProp="name">Are there direct flights from DEL to BKK?</p>
                    </button>
                  </div>
                  <div
                    className="accordion-body"
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="accordion-content" itemProp="text">
                      Yes, there are direct flights available from DEL to BKK.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Page;

import Footer from '../components/Footer';
import Header from '../components/Header';

function Page() {
  return (
    <div>
      <Header />
      <section className="single-content-wrap section p-0">
        <div className="container">
          <div id="overview" className="columns is-multiline single-content-space">
            <div className="column is-6 order2">
              <div className="columns is-multiline">
                <div className="column is-12">
                  <h2 className="title is-4 mt-3 mb-3">New York to Paris</h2>
                  <p className="mr-2">
                    One way flight <span className="badge">1 Stop</span>
                  </p>
                </div>
                <hr className="seprator my-2" />
                <div className="column is-4 mob-view has-text-centered">
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
                </div>
                <div className="column is-12 mob-view has-text-centered bor-top bor-bottom mt-2 mb-3">
                  <p className="title-custom">
                    Total flight time: <span className="subtitle-custom">13 Hours 40 min</span>
                  </p>
                </div>
                <div className="column is-4">
                  <div className="single-tour-feature">
                    <div className="single-feature-icon">
                      <i className="fa fa-plane-up" />
                    </div>
                    <div className="single-feature-titles">
                      <p className="title-custom">Airline</p>
                      <span className="subtitle-custom">Delta</span>
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
              <img src="images/flight1.jpg" alt="" className="overview-img" />
            </div>
          </div>
          <div className="columns is-multiline single-content-space airline-info-wrap">
            <div className="column is-12">
              <div className="airline-wrap">
                <p className="has-text-centered airline-info-head">
                  <img src="images/DL.png" alt="" /> Delta Air Lines DL349
                </p>
              </div>
            </div>
            <div className="column is-12">
              <div className="columns airline-wrap">
                <div className="column is-4 p-0">
                  <p className="has-text-right">Scheduled: Nov 16</p>
                </div>
                <div className="column is-4 p-0">
                  <p className="has-text-centered flight-status">Scheduled</p>
                </div>
                <div className="column is-4 p-0">
                  <p className="has-text-left">Scheduled: Nov 17</p>
                </div>
              </div>
            </div>
            <div className="column is-12">
              <div className="columns airline-wrap">
                <div className="column is-4 p-0">
                  <p className="has-text-right time">21:45</p>
                </div>
                <div className="column is-4 p-0">
                  <div className="flight-bar">
                    <div className="bar">
                      <i className="fa-solid fa-plane" />
                    </div>
                  </div>
                </div>
                <div className="column is-4 p-0">
                  <p className="has-text-left time">
                    06:10
                    <span className="p-0">+1</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-12">
              <div className="columns airline-wrap">
                <div className="column is-4 p-0">
                  <p className="has-text-right scheduled-time">Scheduled: 21:45</p>
                </div>
                <div className="column is-4 p-0">
                  <p className="has-text-centered scheduled-time p-0">2h 38min</p>
                </div>
                <div className="column is-4 p-0">
                  <p className="has-text-left scheduled-time">Scheduled: 06:10</p>
                </div>
              </div>
            </div>
            <div className="column is-12">
              <div className="columns airline-wrap">
                <div className="column is-4 p-0">
                  <p className="has-text-right">Los Angeles Los Angeles International Airport T3</p>
                </div>
                <div className="column is-4 p-0">
                  <p className="has-text-centered" />
                </div>
                <div className="column is-4 p-0">
                  <p className="has-text-left">New York John F. Kennedy International Airport T4</p>
                </div>
              </div>
            </div>
          </div>
          <div id="seatselection" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Flights from - Delhi</h3>
            </div>
            <div className="column is-12 pt-0">
              <div className="departing-flights">
                <div className="flights-booking-item">
                  <div className="flight-logo">
                    <img src="images/AI.png" alt="" />
                  </div>
                  <div className="flight-time">
                    <h4 className="title is-6 mb-0">8:00 AM-10:20 AM</h4>
                    <p className="detailtxt">Separate tickets booked together</p>
                  </div>
                  <div className="duration">
                    <h4 className="title is-6 mb-0">2 hr 20 min</h4>
                    <p className="detailtxt">BOM-DEL</p>
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
                          11:40 AM <i className="fa-solid fa-circle dot-seprator" /> Indira Gandhi
                          International Airport (DEL)
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
            <div className="column is-12 pt-0">
              <div className="departing-flights">
                <div className="flights-booking-item">
                  <div className="flight-logo">
                    <img src="images/AI.png" alt="" />
                  </div>
                  <div className="flight-time">
                    <h4 className="title is-6 mb-0">8:00 AM-10:20 AM</h4>
                    <p className="detailtxt">Separate tickets booked together</p>
                  </div>
                  <div className="duration">
                    <h4 className="title is-6 mb-0">2 hr 20 min</h4>
                    <p className="detailtxt">BOM-DEL</p>
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
                          11:40 AM <i className="fa-solid fa-circle dot-seprator" /> Indira Gandhi
                          International Airport (DEL)
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
            <div className="column is-12 pt-0">
              <div className="departing-flights">
                <div className="flights-booking-item">
                  <div className="flight-logo">
                    <img src="images/AI.png" alt="" />
                  </div>
                  <div className="flight-time">
                    <h4 className="title is-6 mb-0">8:00 AM-10:20 AM</h4>
                    <p className="detailtxt">Separate tickets booked together</p>
                  </div>
                  <div className="duration">
                    <h4 className="title is-6 mb-0">2 hr 20 min</h4>
                    <p className="detailtxt">BOM-DEL</p>
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
                          11:40 AM <i className="fa-solid fa-circle dot-seprator" /> Indira Gandhi
                          International Airport (DEL)
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
                        <th>ORIGIN</th>
                        <th>STD</th>
                        <th>DESTINATION</th>
                        <th>STA</th>
                        <th>AIRCRAFT</th>
                        <th>STATUS</th>
                        <th>DURATION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="DATE">2023 14 Nov </td>
                        <td data-label="FLIGHT">
                          <img src="images/DL.png" alt="" className="bestairlines-logo" />
                          AI563
                        </td>
                        <td data-label="ORIGIN">
                          <a href="#">Chennai (MAA/VOMM)</a>
                        </td>
                        <td data-label="STD">11:40 IST</td>
                        <td data-label="DESTINATION">Singapore (SIN/WSSS)</td>
                        <td data-label="STA">18:40 SGT</td>
                        <td data-label="AIRCRAFT">A20N</td>
                        <td data-label="STATUS">Scheduled</td>
                        <td data-label="DURATION">04h30m</td>
                      </tr>
                      <tr>
                        <td data-label="DATE">2023 14 Nov </td>
                        <td data-label="FLIGHT">
                          <img src="images/DL.png" alt="" className="bestairlines-logo" />
                          AI563
                        </td>
                        <td data-label="ORIGIN">
                          <a href="#">Chennai (MAA/VOMM)</a>
                        </td>
                        <td data-label="STD">11:40 IST</td>
                        <td data-label="DESTINATION">Singapore (SIN/WSSS)</td>
                        <td data-label="STA">18:40 SGT</td>
                        <td data-label="AIRCRAFT">A20N</td>
                        <td data-label="STATUS">Scheduled</td>
                        <td data-label="DURATION">04h30m</td>
                      </tr>
                      <tr>
                        <td data-label="DATE">2023 14 Nov </td>
                        <td data-label="FLIGHT">
                          <img src="images/DL.png" alt="" className="bestairlines-logo" />
                          AI563
                        </td>
                        <td data-label="ORIGIN">
                          <a href="#">Chennai (MAA/VOMM)</a>
                        </td>
                        <td data-label="STD">11:40 IST</td>
                        <td data-label="DESTINATION">Singapore (SIN/WSSS)</td>
                        <td data-label="STA">18:40 SGT</td>
                        <td data-label="AIRCRAFT">A20N</td>
                        <td data-label="STATUS">Scheduled</td>
                        <td data-label="DURATION">04h30m</td>
                      </tr>
                      <tr>
                        <td data-label="DATE">2023 14 Nov </td>
                        <td data-label="FLIGHT">
                          <img src="images/DL.png" alt="" className="bestairlines-logo" />
                          AI563
                        </td>
                        <td data-label="ORIGIN">
                          <a href="#">Chennai (MAA/VOMM)</a>
                        </td>
                        <td data-label="STD">11:40 IST</td>
                        <td data-label="DESTINATION">Singapore (SIN/WSSS)</td>
                        <td data-label="STA">18:40 SGT</td>
                        <td data-label="AIRCRAFT">A20N</td>
                        <td data-label="STATUS">Scheduled</td>
                        <td data-label="DURATION">04h30m</td>
                      </tr>
                      <tr>
                        <td data-label="DATE">2023 14 Nov </td>
                        <td data-label="FLIGHT">
                          <img src="images/DL.png" alt="" className="bestairlines-logo" />
                          AI563
                        </td>
                        <td data-label="ORIGIN">
                          <a href="#">Chennai (MAA/VOMM)</a>
                        </td>
                        <td data-label="STD">11:40 IST</td>
                        <td data-label="DESTINATION">Singapore (SIN/WSSS)</td>
                        <td data-label="STA">18:40 SGT</td>
                        <td data-label="AIRCRAFT">A20N</td>
                        <td data-label="STATUS">Scheduled</td>
                        <td data-label="DURATION">04h30m</td>
                      </tr>
                      <tr>
                        <td data-label="DATE">2023 14 Nov </td>
                        <td data-label="FLIGHT">
                          <img src="images/DL.png" alt="" className="bestairlines-logo" />
                          AI563
                        </td>
                        <td data-label="ORIGIN">
                          <a href="#">Chennai (MAA/VOMM)</a>
                        </td>
                        <td data-label="STD">11:40 IST</td>
                        <td data-label="DESTINATION">Singapore (SIN/WSSS)</td>
                        <td data-label="STA">18:40 SGT</td>
                        <td data-label="AIRCRAFT">A20N</td>
                        <td data-label="STATUS">Scheduled</td>
                        <td data-label="DURATION">04h30m</td>
                      </tr>
                      <tr>
                        <td data-label="DATE">2023 14 Nov </td>
                        <td data-label="FLIGHT">
                          <img src="images/DL.png" alt="" className="bestairlines-logo" />
                          AI563
                        </td>
                        <td data-label="ORIGIN">
                          <a href="#">Chennai (MAA/VOMM)</a>
                        </td>
                        <td data-label="STD">11:40 IST</td>
                        <td data-label="DESTINATION">Singapore (SIN/WSSS)</td>
                        <td data-label="STA">18:40 SGT</td>
                        <td data-label="AIRCRAFT">A20N</td>
                        <td data-label="STATUS">Scheduled</td>
                        <td data-label="DURATION">04h30m</td>
                      </tr>
                      <tr>
                        <td data-label="DATE">2023 14 Nov </td>
                        <td data-label="FLIGHT">
                          <img src="images/DL.png" alt="" className="bestairlines-logo" />
                          AI563
                        </td>
                        <td data-label="ORIGIN">
                          <a href="#">Chennai (MAA/VOMM)</a>
                        </td>
                        <td data-label="STD">11:40 IST</td>
                        <td data-label="DESTINATION">Singapore (SIN/WSSS)</td>
                        <td data-label="STA">18:40 SGT</td>
                        <td data-label="AIRCRAFT">A20N</td>
                        <td data-label="STATUS">Scheduled</td>
                        <td data-label="DURATION">04h30m</td>
                      </tr>
                    </tbody>
                  </table>
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
      <Footer />
    </div>
  );
}

export default Page;

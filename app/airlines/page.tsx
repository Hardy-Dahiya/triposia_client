import Footer from '../../src/components/Footer/Footer';
import Header from '../../src/components/Header/Header';

function Page() {
  return (
    <div>
      <Header />
      <div className="single-content-nav sticky ">
        <div className="container">
          <div className="columns">
            <div className="column is-12 p-0">
              <div className="navbarSub is-link">
                <div id="menubar" className="navbar-menu1">
                  <div>
                    <a className="navbar-item is-active" href="#overview" data-target="overview">
                      Flight Details
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
            <hr className="seprator my-5" />
            <div className="column is-12 order3">
              <h3 className="title is-5 mb-3">About Delta Airlines</h3>
              <p className="py-2">
                Per consequat adolescens ex, cu nibh commune temporibus vim, ad sumo viris
                eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere
                democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis
                aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate
                pertinacia eum at.
              </p>
              <p className="py-2">
                Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint
                blandit efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum
                viris id. Per ne quando dolore evertitur, pro ad cibo commune.
              </p>
              <p className="py-2">
                Sed scelerisque lectus sit amet faucibus sodales. Proin ut risus tortor. Etiam
                fermentum tellus auctor, fringilla sapien et, congue quam. In a luctus tortor.
                Suspendisse eget tempor libero, ut sollicitudin ligula. Nulla vulputate tincidunt
                est non congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Phasellus at est imperdiet, dapibus ipsum vel, lacinia
                nulla.
              </p>
            </div>
          </div>
          <div id="inflightfeatures" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Inflight Features</h3>
              <p className="py-2">
                Maecenas vitae turpis condimentum metus tincidunt semper bibendum ut orci. Donec
                eget accumsan est. Duis laoreet sagittis elit et vehicula. Cras viverra posuere
                condimentum. Donec urna arcu, venenatis quis augue sit amet, mattis gravida nunc.
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
              <h3 className="title is-5 mt-3 mb-3">Select your Flights</h3>
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
              <p>
                Vestibulum ut iaculis justo, auctor sodales lectus. Donec et tellus tempus,
                dignissim maurornare, consequat lacus. Integer dui neque, scelerisque nec
                sollicitudin sit amet, sodales a erat. Duis vitae condimentum ligula. Integer eu mi
                nisl. Donec massa dui, commodo id arcu quis, venenatis scelerisque velit.
              </p>
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
                Vestibulum ut iaculis justo, auctor sodales lectus. Donec et tellus tempus,
                dignissim maurornare, consequat lacus. Integer dui neque, scelerisque nec
                sollicitudin sit amet, sodales a erat. Duis vitae condimentum ligula. Integer eu mi
                nisl. Donec massa dui, commodo id arcu quis, venenatis scelerisque velit.
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
      <Footer />
    </div>
  );
}

export default Page;

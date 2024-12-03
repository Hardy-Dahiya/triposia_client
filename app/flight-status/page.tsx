import Footer from '../../src/components/Footer/Footer';
import Header from '../../src/components/Header/Header';

function Page() {
  return (
    <div>
      <Header />
      <section className="single-content-wrap section p-0">
        <div className="container">
          <div className="columns is-multiline single-content-space serach-flight-wrap">
            <div className="field-body">
              <div className="column is-3">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input className="input" type="text" placeholder="Search by Flight" />
                    <span className="icon is-small is-left">
                      <i className="fa-solid fa-plane" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-3">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input className="input" type="text" placeholder="Search by Origin" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-globe" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-3">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input className="input" type="text" placeholder="Search by Destination" />
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

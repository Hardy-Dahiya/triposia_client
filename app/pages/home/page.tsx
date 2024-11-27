import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <section className="offer-wrap section pb-0">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12">
              <h2 className="title is-4">Special Offer</h2>
            </div>
            <div className="column is-4">
              <a href="">
                <img src="images/offer1.png" alt="" className="image imgw100" />
              </a>
            </div>
            <div className="column is-4">
              <a href="">
                <img src="images/offer2.png" alt="" className="image imgw100" />
              </a>
            </div>
            <div className="column is-4">
              <a href="">
                <img src="images/offer3.png" alt="" className="image imgw100" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="destinations-wrap section pb-0">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12">
              <h2 className="title is-4">Popular Destinations</h2>
            </div>
            <div className="column is-3">
              <a href="">
                <img
                  src="images/hotel1.jpg"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </a>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <a href="">Disneyland</a>
                </h3>
                <p>We have over 28K reviews to assure you top notch service.</p>
              </div>
            </div>
            <div className="column is-3">
              <a href="">
                <img
                  src="images/hotel2.jpg"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </a>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <a href="">Eiffel</a>
                </h3>
                <p>We have over 28K reviews to assure you top notch service.</p>
              </div>
            </div>
            <div className="column is-3">
              <a href="">
                <img
                  src="images/hotel3.jpg"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </a>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <a href="">Trimorph</a>
                </h3>
                <p>We have over 28K reviews to assure you top notch service.</p>
              </div>
            </div>
            <div className="column is-3">
              <a href="">
                <img
                  src="images/hotel4.jpg"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </a>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <a href="">Malena</a>
                </h3>
                <p>We have over 28K reviews to assure you top notch service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hotels-wrap section pb-0">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12">
              <h2 className="title is-4">Top Hotels</h2>
            </div>
            <div className="column is-3">
              <a href="">
                <img
                  src="images/hotel1.jpg"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </a>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <a href="">Disneyland</a>
                </h3>
                <p>We have over 28K reviews to assure you top notch service.</p>
              </div>
            </div>
            <div className="column is-3">
              <a href="">
                <img
                  src="images/hotel2.jpg"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </a>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <a href="">Eiffel</a>
                </h3>
                <p>We have over 28K reviews to assure you top notch service.</p>
              </div>
            </div>
            <div className="column is-3">
              <a href="">
                <img
                  src="images/hotel3.jpg"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </a>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <a href="">Trimorph</a>
                </h3>
                <p>We have over 28K reviews to assure you top notch service.</p>
              </div>
            </div>
            <div className="column is-3">
              <a href="">
                <img
                  src="images/hotel4.jpg"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </a>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <a href="">Malena</a>
                </h3>
                <p>We have over 28K reviews to assure you top notch service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrap section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12">
              <h2 className="title is-4">Latest Blog</h2>
            </div>
            <div className="column is-4">
              <a href="">
                <img src="images/blog1.jpg" alt="" className="image imgw100 img-radius-top-right" />
              </a>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <a href=""> Great Deals to Send Your Loved Ones Somewhere Nice </a>
                </h3>
              </div>
            </div>
            <div className="column is-4">
              <a href="">
                <img src="images/blog2.jpg" alt="" className="image imgw100 img-radius-top-right" />
              </a>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <a href=""> Read Real Guest Reviews. 24/7 Customer Service and others. </a>
                </h3>
              </div>
            </div>
            <div className="column is-4">
              <a href="">
                <img src="images/blog3.jpg" alt="" className="image imgw100 img-radius-top-right" />
              </a>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <a href=""> Compare hotel prices and find an amazing price for the Resort </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <ul className="brand-footer">
                <li>
                  <img src="images/logo1.png" alt="" />
                </li>
                <li>
                  <img src="images/logo2.png" alt="" />
                </li>
                <li>
                  <img src="images/logo3.png" alt="" />
                </li>
                <li>
                  <img src="images/logo4.png" alt="" />
                </li>
                <li>
                  <img src="images/logo5.png" alt="" />
                </li>
                <li>
                  <img src="images/logo6.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;

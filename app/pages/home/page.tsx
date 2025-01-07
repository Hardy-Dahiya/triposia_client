import Image from 'next/image';
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import Link from 'next/link';
import Blogs from '@/src/components/Blogs/Blogs';

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
              <Link
                href="https://tp.media/click?shmarker=192130&promo_id=2058&source_type=banner&type=click&campaign_id=84&trs=29510"
                target="_blank"
              >
                <Image
                  className="offer-img"
                  src="/images/offer1.webp"
                  width={300}
                  height={252}
                  alt="300*252"
                  priority // This ensures the first image is loaded first
                />
              </Link>
            </div>
            <div className="column is-4">
              <Link
                href="https://tp.media/click?shmarker=192130&promo_id=3393&source_type=banner&type=click&campaign_id=1&trs=100916"
                target="_blank"
              >
                <Image
                  className="offer-img"
                  src="/images/offer2.webp"
                  width={300}
                  height={250}
                  alt="300х250_англ."
                />
              </Link>
            </div>
            <div className="column is-4">
              <Link
                href="https://tp.media/click?shmarker=192130&promo_id=3866&source_type=banner&type=click&campaign_id=130&trs=100916"
                target="_blank"
              >
                <Image
                  className="offer-img"
                  src="/images/offer3.webp"
                  width={300}
                  height={250}
                  alt="ES - 300x250"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="destinations-wrap section pb-0">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12">
              <h2 className="title is-4">Popular Airports</h2>
            </div>
            <div className="column is-3">
              <Link href="/airports/DXB">
                <img
                  src="https://aerocloud.s3.amazonaws.com/aeroweb/DXB.webp"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </Link>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <Link href="/airports/DXB">Dubai International Airport</Link>
                </h3>
                <p>Dubai International Airport,Dubai</p>
              </div>
            </div>
            <div className="column is-3">
              <Link href="/airports/PDL">
                <img
                  src="https://aerocloud.s3.amazonaws.com/aeroweb/PDL.webp"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </Link>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <Link href="/airports/PDL">Joao Paulo II Airport</Link>
                </h3>
                <p>Joao Paulo II Airport, Portugal</p>
              </div>
            </div>
            <div className="column is-3">
              <Link href="/airports/ISG">
                <img
                  src="https://aerocloud.s3.amazonaws.com/aeroweb/ISG.webp"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </Link>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <Link href="/airports/ISG">Painushima Ishigaki Airport</Link>
                </h3>
                <p>Sabiha Gökçen Havaalanı</p>
              </div>
            </div>
            <div className="column is-3">
              <Link href="/airports/DEL">
                <img
                  src="https://aerocloud.s3.amazonaws.com/aeroweb/DEL.webp"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </Link>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <Link href="/airports/DEL">Delhi Airport</Link>
                </h3>
                <p>Indira Gandhi International Airport</p>
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
              <Link href="">
                <img
                  src="images/hotel1.jpg"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </Link>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <Link href="">Disneyland</Link>
                </h3>
                <p>We have over 28K reviews to assure you top notch service.</p>
              </div>
            </div>
            <div className="column is-3">
              <Link href="">
                <img
                  src="images/hotel2.jpg"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </Link>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <Link href="">Eiffel</Link>
                </h3>
                <p>We have over 28K reviews to assure you top notch service.</p>
              </div>
            </div>
            <div className="column is-3">
              <Link href="">
                <img
                  src="images/hotel3.jpg"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </Link>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <Link href="">Trimorph</Link>
                </h3>
                <p>We have over 28K reviews to assure you top notch service.</p>
              </div>
            </div>
            <div className="column is-3">
              <Link href="">
                <img
                  src="images/hotel4.jpg"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </Link>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <Link href="">Malena</Link>
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
              <h2 className="title is-5">Top Airlines</h2>
            </div>
            <div className="column is-3">
              <div className="card-box">
                <div className="card-image">
                  <figure className="image is-3by1">
                    <Link href="/airline/jetstar-asia-airways">
                      <img
                        src="https://pics.avs.io/180/60/3K@2x.webp"
                        alt="Jetstar Asia"
                        className="image imgw100 img-radius-top-right"
                      />
                    </Link>
                  </figure>
                </div>
                <h3 className="title is-5 mb-4">
                  <Link href="/airline/jetstar-asia-airways">Jetstar Asia</Link>
                </h3>
                <p>Singapore Changi Airport T1, PO Box 323, Singapore 918144.</p>
              </div>
            </div>
            <div className="column is-3">
              <div className="card-box">
                <div className="card-image">
                  <figure className="image is-3by1">
                    <Link href="/airline/aurora-airlines">
                      <img
                        src="https://pics.avs.io/180/60/HZ@2x.webp"
                        alt="Aurora"
                        className="image imgw100 img-radius-top-right"
                      />
                    </Link>
                  </figure>
                </div>
                <h3 className="title is-5 mb-4">
                  <Link href="/airline/aurora-airlines">Aurora</Link>
                </h3>
                <p>50A, Gorkiy St.</p>
              </div>
            </div>
            <div className="column is-3">
              <div className="card-box">
                <div className="card-image">
                  <figure className="image is-3by1">
                    <Link href="/airline/klm">
                      <img
                        src="https://pics.avs.io/180/60/KL@2x.webp"
                        alt="KLM airlines"
                        className="image imgw100 img-radius-top-right"
                      />
                    </Link>
                  </figure>
                </div>
                <h3 className="title is-5 mb-4">
                  <Link href="/airline/klm">KLM airlines</Link>
                </h3>
                <p>KLM Royal Dutch airlines2 1117 ZL</p>
              </div>
            </div>
            <div className="column is-3">
              <div className="card-box">
                <div className="card-image">
                  <figure className="image is-3by1">
                    <Link href="/airline/tam---transportes-aereos-del-mercosur-sociedad-anonima">
                      <img
                        src="https://pics.avs.io/180/60/PZ@2x.webp"
                        alt="LATAM Paraguay"
                        className="image imgw100 img-radius-top-right"
                      />
                    </Link>
                  </figure>
                </div>
                <h3 className="title is-5 mb-4">
                  <Link href="/airline/tam---transportes-aereos-del-mercosur-sociedad-anonima">
                    LATAM Paraguay
                  </Link>
                </h3>
                <p>{`Hangar TAM Aeropuerto Internacional "Silvio Pettirossi"`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blogs />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <ul className="brand-footer">
                <li>
                  <img src="images/logo1.png" alt="logo1" />
                </li>
                <li>
                  <img src="images/logo2.png" alt="logo2" />
                </li>
                <li>
                  <img src="images/logo3.png" alt="logo3" />
                </li>
                <li>
                  <img src="images/logo4.png" alt="logo4" />
                </li>
                <li>
                  <img src="images/logo5.png" alt="logo5" />
                </li>
                <li>
                  <img src="images/logo6.png" alt="logo6" />
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

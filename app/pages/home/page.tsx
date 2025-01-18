import Image from 'next/image';
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import Link from 'next/link';
import Blogs from '@/src/components/Blogs/Blogs';
import { Hotel } from '@/src/types/types';

const topHotels = [
  {
    hotelId: 59877314,
    hotelName: 'Dubai Hostel and Bedspace',
    starRating: 5,
    reviewScore: 5.6,
    reviewCount: 2,
    currency: 'USD',
    dailyRate: 8.15,
    crossedOutRate: 35.94,
    discountPercentage: 30,
    imageURL:
      'http://pix8.agoda.net/hotelImages/59877314/-1/be1288084ca4c5d50f3321d3a4ea6b13.jpg?ce=0&s=800x600',
    landingURL:
      'https://www.agoda.com/partners/partnersearch.aspx?cid=1918595&hid=59877314&currency=USD&checkin=2024-09-02&checkout=2024-09-03&NumberofAdults=2&NumberofChildren=1&childages=17&Rooms=1&pcs=6',
    includeBreakfast: false,
    freeWifi: true,
    latitude: 25.283611,
    longitude: 55.399246,
  },
  {
    hotelId: 68218,
    hotelName: 'Abjad Crown Hotel',
    starRating: 3,
    reviewScore: 6.5,
    reviewCount: 3249,
    currency: 'USD',
    dailyRate: 9.58,
    crossedOutRate: 38.3,
    discountPercentage: 0,
    imageURL:
      'http://pix8.agoda.net/hotelImages/68218/-1/0cd4a745c9f26f2492b6e3713f49518a.jpg?ce=0&s=800x600',
    landingURL:
      'https://www.agoda.com/partners/partnersearch.aspx?cid=1918595&hid=68218&currency=USD&checkin=2024-09-02&checkout=2024-09-03&NumberofAdults=2&NumberofChildren=1&childages=17&Rooms=1&pcs=6',
    includeBreakfast: false,
    freeWifi: true,
    latitude: 25.2731186,
    longitude: 55.3197938,
  },
  {
    hotelId: 38369209,
    hotelName: 'Royal Casa- Marina Diamond',
    starRating: 0,
    reviewScore: 5.3,
    reviewCount: 13,
    currency: 'USD',
    dailyRate: 10.19,
    crossedOutRate: 0,
    discountPercentage: 0,
    imageURL:
      'http://q-xx.bstatic.com/xdata/images/hotel/840x460/442304127.jpg?k=c394b75affc3f99756a216ff3cfde3a925d6490dcee95900c8c9623376483d1c&o=',
    landingURL:
      'https://www.agoda.com/partners/partnersearch.aspx?cid=1918595&hid=38369209&currency=USD&checkin=2024-09-02&checkout=2024-09-03&NumberofAdults=2&NumberofChildren=1&childages=17&Rooms=1&pcs=6',
    includeBreakfast: false,
    freeWifi: true,
    latitude: 25.069480895996094,
    longitude: 55.1348991394043,
  },
  {
    hotelId: 180212,
    hotelName: 'Dorus Hotel',
    starRating: 4,
    reviewScore: 6,
    reviewCount: 2741,
    currency: 'USD',
    dailyRate: 13.31,
    crossedOutRate: 53.23,
    discountPercentage: 0,
    imageURL:
      'http://pix8.agoda.net/hotelImages/180/180212/180212_15030314410025742626.jpg?ca=3&ce=1&s=800x600',
    landingURL:
      'https://www.agoda.com/partners/partnersearch.aspx?cid=1918595&hid=180212&currency=USD&checkin=2024-09-02&checkout=2024-09-03&NumberofAdults=2&NumberofChildren=1&childages=17&Rooms=1&pcs=6',
    includeBreakfast: false,
    freeWifi: true,
    latitude: 25.2720937,
    longitude: 55.31586589999999,
  },
];

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
              <Link href="/airports/dubai-omdb-dxb-ae">
                <img
                  src="https://aerocloud.s3.amazonaws.com/aeroweb/DXB.webp"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </Link>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <Link href="/airports/dubai-omdb-dxb-ae">Dubai International Airport</Link>
                </h3>
                <p>Dubai International Airport,Dubai</p>
              </div>
            </div>
            <div className="column is-3">
              <Link href="/airports/ponta-delgada-joao-paulo-lppd-pdl-pt">
                <img
                  src="https://aerocloud.s3.amazonaws.com/aeroweb/PDL.webp"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </Link>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <Link href="/airports/ponta-delgada-joao-paulo-lppd-pdl-pt">
                    Joao Paulo II Airport
                  </Link>
                </h3>
                <p>Joao Paulo II Airport, Portugal</p>
              </div>
            </div>
            <div className="column is-3">
              <Link href="/airports/new-ishigaki-roig-isg-jp">
                <img
                  src="https://aerocloud.s3.amazonaws.com/aeroweb/ISG.webp"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </Link>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <Link href="/airports/new-ishigaki-roig-isg-jp">Painushima Ishigaki Airport</Link>
                </h3>
                <p>Sabiha Gökçen Havaalanı</p>
              </div>
            </div>
            <div className="column is-3">
              <Link href="/airports/indira-gandhi-vidp-del-in">
                <img
                  src="https://aerocloud.s3.amazonaws.com/aeroweb/DEL.webp"
                  alt=""
                  className="image imgw100 img-radius-top-right"
                />
              </Link>
              <div className="card-box">
                <h3 className="title is-5 mb-4">
                  <Link href="/airports/indira-gandhi-vidp-del-in">Delhi Airport</Link>
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
            {topHotels.map((item: Hotel, index: number) => {
              return (
                <div key={index} className="column is-3">
                  <Link href={item.landingURL}>
                    <img
                      src={item.imageURL}
                      alt={item.hotelName}
                      className="image imgw100 img-radius-top-right"
                      style={{ width: '318px', height: '212px' }}
                    />
                  </Link>
                  <div className="card-box">
                    <h3 className="title is-5 mb-4">
                      <Link href={`/hotel/${item.hotelId}`}>{item.hotelName}</Link>
                    </h3>
                    <p>We have over 28K reviews to assure you top notch service.</p>
                  </div>
                </div>
              );
            })}
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
                    <Link href="/airlines/jetstar-asia-3k-jsa-jetstarasia-sg">
                      <img
                        src="https://pics.avs.io/180/60/3K@2x.webp"
                        alt="Jetstar Asia"
                        className="image imgw100 img-radius-top-right"
                      />
                    </Link>
                  </figure>
                </div>
                <h3 className="title is-5 mb-4">
                  <Link href="/airlines/jetstar-asia-3k-jsa-jetstarasia-sg">Jetstar Asia</Link>
                </h3>
                <p>Singapore Changi Airport T1, PO Box 323, Singapore 918144.</p>
              </div>
            </div>
            <div className="column is-3">
              <div className="card-box">
                <div className="card-image">
                  <figure className="image is-3by1">
                    <Link href="/airlines/aurora-hz-shu-ru">
                      <img
                        src="https://pics.avs.io/180/60/HZ@2x.webp"
                        alt="Aurora"
                        className="image imgw100 img-radius-top-right"
                      />
                    </Link>
                  </figure>
                </div>
                <h3 className="title is-5 mb-4">
                  <Link href="/airlines/aurora-hz-shu-ru">Aurora</Link>
                </h3>
                <p>50A, Gorkiy St.</p>
              </div>
            </div>
            <div className="column is-3">
              <div className="card-box">
                <div className="card-image">
                  <figure className="image is-3by1">
                    <Link href="/airlines/klm-royal-kl-klm-nl">
                      <img
                        src="https://pics.avs.io/180/60/KL@2x.webp"
                        alt="KLM airlines"
                        className="image imgw100 img-radius-top-right"
                      />
                    </Link>
                  </figure>
                </div>
                <h3 className="title is-5 mb-4">
                  <Link href="/airlines/klm-royal-kl-klm-nl">KLM airlines</Link>
                </h3>
                <p>KLM Royal Dutch airlines2 1117 ZL</p>
              </div>
            </div>
            <div className="column is-3">
              <div className="card-box">
                <div className="card-image">
                  <figure className="image is-3by1">
                    <Link href="/airlines/latam-paraguay-pz-lap-paraguaya-py">
                      <img
                        src="https://pics.avs.io/180/60/PZ@2x.webp"
                        alt="LATAM Paraguay"
                        className="image imgw100 img-radius-top-right"
                      />
                    </Link>
                  </figure>
                </div>
                <h3 className="title is-5 mb-4">
                  <Link href="/airlines/latam-paraguay-pz-lap-paraguaya-py">LATAM Paraguay</Link>
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

import { getHotelDetails } from '@/services/google/GoogleServices';
import ImageCarousel from '@/src/common/ImageCarousel';
import Footer from '@/src/components/Footer/Footer';
import Header from '@/src/components/Header/Header';
import Error from '@/src/components/Message/Error';
import { Hotel } from '@/src/types/types';
import { Metadata } from 'next';
import Link from 'next/link';
// Define the params interface
type HotelRouteParams = {
  params: Promise<{
    slug: string; // Matches the dynamic route segment `[route]`
  }>;
};

export async function generateMetadata({ params }: HotelRouteParams): Promise<Metadata> {
  // Await `params` since it's treated as a Promise in the build environment
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const hotelData = await searchHotels(slug[0]);
  if (hotelData && hotelData.matchedHotel) {
    return {
      title: hotelData.matchedHotel.hotel_name,
      description: hotelData.matchedHotel.addressline1,
      keywords: hotelData.matchedHotel.accommodation_type,
    };
  }
  return {
    title: 'TripOsia | Travel Made Easy',
    description: `Plan your adventures effortlessly with Triposia! Discover top destinations, book accommodations, and explore curated travel experiences. Whether you're planning a weekend getaway or a dream vacation, Triposia helps you every step of the way. Your journey begins here!`,
    keywords: 'TripOsia | Travel Made Easy',
  };
}

export default async function HotelRoutePage({ params }: HotelRouteParams) {
  // Await `params` since it's treated as a Promise in the build environment
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const hotelData = await searchHotels(slug[0]);
  if (!slug) {
    return (
      <Error
        title="Invalid hotelId or name"
        subTitle="No hotel Found"
        msg="Unfortunately, we could not find any hotel for the specified hotelId or name. Please try again."
      />
    );
  }
  return (
    <div>
      <Header />
      <ImageCarousel
        images={[
          {
            src: hotelData.matchedHotel.photo1,
            alt: `photo1`,
          },
          {
            src: hotelData.matchedHotel.photo2,
            alt: `photo2`,
          },
          {
            src: hotelData.matchedHotel.photo3,
            alt: `photo3`,
          },
          {
            src: hotelData.matchedHotel.photo4,
            alt: `photo4`,
          },
        ]}
      />
      {/* partial */}
      <section className="single-content-wrap section pb-0">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12 pb-0">
              <div className="hotel-list mb-0">
                <div className="hotel-list-content">
                  <div className="list-content-top">
                    <h3>
                      {' '}
                      <a href="#">{hotelData.matchedHotel.hotel_name}</a>{' '}
                      <span className="hotel-view-contents-review">
                        {' '}
                        <i className="fa-solid fa-star" /> {hotelData.matchedHotel.star_rating}{' '}
                      </span>
                    </h3>
                    <p>
                      <i className="fa-solid fa-location-dot" />
                      {hotelData.matchedHotel.addressline1} {hotelData.matchedHotel.city},{' '}
                      {hotelData.matchedHotel.state}
                      {hotelData.matchedHotel.country} {hotelData.matchedHotel.zipcode}
                    </p>
                    {/* <div className="is-flex">
                      <p className="mr-3">
                        <i className="fa-solid fa-phone" /> <a href="tel:9811XXXXXX">9811XXXXXX</a>
                      </p>
                      <p>
                        <i className="fa-solid fa-globe" />{' '}
                        <a href="#" target="_blank">
                          www.xyz.com
                        </a>
                      </p>
                    </div> */}
                  </div>
                  <div className="list-content-mid">
                    <ul>
                      <li>
                        <img src="../images/hairdryer.png" alt="" /> Parking
                      </li>
                      <li>
                        <img src="../images/air-conditioning.png" alt="" /> Wifi
                      </li>
                      <li>
                        <img src="../images/bar.png" alt="" /> Breakfast
                      </li>
                      <li>
                        <img src="../images/deposit.png" alt="" /> Room Service
                      </li>
                      <li>
                        <img src="../images/air-conditioning.png" alt="" /> Pool
                      </li>
                      <li>
                        <img src="../images/hairdryer.png" alt="" /> Reception
                      </li>
                      <li>
                        <img src="../images/bar.png" alt="" /> Reception
                      </li>
                      <li>
                        <img src="../images/gym-fitness-centre.png" alt="" /> Gym
                      </li>
                      <li>
                        <img src="../images/hairdryer.png" alt="" /> Reception
                      </li>
                      <li>
                        <img src="../images/air-conditioning.png" alt="" /> Pool
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Standard room</h3>
            </div>
            <div className="column is-12 pt-0">
              <div className="hotel-booking-item">
                <div className="hotel-clm-lt">
                  <div>
                    <h4 className="hottel-title">
                      Premier Villa, 1 Bedroom Villa, 1 King, Garden view
                    </h4>
                    <ul className="hotel-listnew">
                      <li>Breakfast included</li>
                      <li>Free WiFi</li>
                      <li>Free cancellation</li>
                      <li>Pay at the hotel</li>
                    </ul>
                  </div>
                  <div className="hotel-logo">
                    <img src="../images/agoda.png" alt="" />
                  </div>
                </div>
                <div className="hotel-clm-rt">
                  <div className="h-price">
                    <i className="fa-solid fa-indian-rupee-sign" /> 18000
                  </div>
                  <div className="btn-wrapper">
                    <a href="#" className="hbook">
                      <span className="booknow">Book Now</span>
                      <span className="freecancel">Free cancellation</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hotel-booking-item">
                <div className="hotel-clm-lt">
                  <div>
                    <h4 className="hottel-title">
                      Premier Villa, 1 Bedroom Villa, 1 King, Garden view
                    </h4>
                    <ul className="hotel-listnew">
                      <li>Breakfast included</li>
                      <li>Free WiFi</li>
                      <li>Free cancellation</li>
                      <li>Pay at the hotel</li>
                    </ul>
                  </div>
                  <div className="hotel-logo">
                    <img src="../images/agoda.png" alt="" />
                  </div>
                </div>
                <div className="hotel-clm-rt">
                  <div className="h-price">
                    <i className="fa-solid fa-indian-rupee-sign" /> 18000
                  </div>
                  <div className="btn-wrapper">
                    <a href="#" className="hbook">
                      <span className="booknow">Book Now</span>
                      <span className="freecancel">Free cancellation</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">OVerview</h3>
              <p>{hotelData.matchedHotel.overview || ''}</p>
            </div>
          </div>
          {/* <div className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h2 className="title is-4">Guest Reviews</h2>
            </div>
            <div className="column is-12">
              <div className="reviews-item-wrap">
                <div className="reviews-item">
                  <div className="reviews-number">10</div>
                  <div className="reviews-name-month">
                    <span className="sub-title">Arunima</span> 2 months ago
                  </div>
                  <div className="brand-img">
                    <a href="">
                      <img src="../images/logo1.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="no-comment">No comment left by this reviewer.</div>
              </div>
              <div className="reviews-item-wrap">
                <div className="reviews-item">
                  <div className="reviews-number">6</div>
                  <div className="reviews-name-month">
                    <span className="sub-title">Arunima</span> 2 months ago
                  </div>
                  <div className="brand-img">
                    <a href="">
                      <img src="../images/logo1.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="no-comment">No comment left by this reviewer.</div>
              </div>
              <div className="reviews-item-wrap">
                <div className="reviews-item">
                  <div className="reviews-number">5</div>
                  <div className="reviews-name-month">
                    <span className="sub-title">Arunima</span> 2 months ago
                  </div>
                  <div className="brand-img">
                    <a href="">
                      <img src="../images/logo1.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="is-flex mt-3">
                  <div className="icon-list">
                    <i className="fa-solid fa-xmark" />
                  </div>
                  <div> Spa</div>
                </div>
                <div className="is-flex mt-3">
                  <div className="icon-list">
                    <i className="fa-solid fa-check" />
                  </div>
                  <div>
                    {' '}
                    MOSQUITOES INFINITE can not get over them..Incomplete amenities in the room.
                    MOSQUITOES INFINITE can not get over them..Incomplete amenities in the room.
                    MOSQUITOES INFINITE can not get over them..Incomplete amenities in the room.
                    MOSQUITOES INFINITE can not get over them..Incomplete amenities in the room.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
      <section className="hotels-wrap section pt-0">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12">
              <h2 className="title is-4">Similar Hotels</h2>
            </div>
            {hotelData.similarHotels.map((item: Hotel, index: number) => {
              return (
                <div key={index} className="column is-3">
                  <Link href={`/hotel/${item.hotel_id}`}>
                    <img
                      src={item.photo1}
                      alt={item.hotel_name}
                      className="image imgw100 img-radius-top-right"
                      style={{ width: '318px', height: '212px' }}
                    />
                  </Link>
                  <div className="card-box">
                    <h3 className="title is-5 mb-4">
                      <Link href={`/hotel/${item.hotel_id}`}>{item.hotel_name}</Link>
                    </h3>
                    <p>We have over 28K reviews to assure you top notch service.</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// Simulated hotel search function
async function searchHotels(hotelId: string) {
  // Simulate an API call or database lookup
  const response = await getHotelDetails(hotelId);
  if (response?.data.status) {
    return response.data.data;
  }
  return null;
}

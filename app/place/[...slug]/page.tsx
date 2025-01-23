import { getPlaceDetails } from '@/services/google/GoogleServices';
import ImageCarousel from '@/src/common/ImageCarousel';
import Footer from '@/src/components/Footer/Footer';
import Header from '@/src/components/Header/Header';
import Error from '@/src/components/Message/Error';
import { PlaceReview } from '@/src/types/types';
import { Metadata } from 'next';
// Define the params interface
type PlaceRouteParams = {
  params: Promise<{
    slug: string; // Matches the dynamic route segment `[route]`
  }>;
};

interface GooglePhoto {
  photo_reference: string;
  height: number;
  width: number;
  html_attributions: string[];
}

export async function generateMetadata({ params }: PlaceRouteParams): Promise<Metadata> {
  // Await `params` since it's treated as a Promise in the build environment
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const placeData = await searchPlaces(slug[0]);
  if (placeData) {
    return {
      title: placeData.name,
      description: placeData.editorial_summary?.overview || '',
      keywords: placeData.types.map((item: string) => `#${item}`),
    };
  }
  return {
    title: 'TripOsia | Travel Made Easy',
    description: `Plan your adventures effortlessly with Triposia! Discover top destinations, book accommodations, and explore curated travel experiences. Whether you're planning a weekend getaway or a dream vacation, Triposia helps you every step of the way. Your journey begins here!`,
    keywords: 'TripOsia | Travel Made Easy',
  };
}

export default async function PlaceRoutePage({ params }: PlaceRouteParams) {
  // Await `params` since it's treated as a Promise in the build environment
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const placeData = await searchPlaces(slug[0]);

  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const getPhotoUrls = (photos: GooglePhoto[]) => {
    if (!photos) return [];

    return photos.map((photo, index) => ({
      src: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=${photo.photo_reference}&key=${GOOGLE_API_KEY}`,
      alt: `Place photo ${index + 1}`,
    }));
  };

  if (!slug) {
    return (
      <Error
        title="Invalid PlaceId or name"
        subTitle="No place Found"
        msg="Unfortunately, we could not find any place for the specified PlaceId or name. Please try again."
      />
    );
  }
  return (
    <div>
      <Header />
      <ImageCarousel images={getPhotoUrls(placeData.photos)} />
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
                      <a href="#">{placeData.name}</a>{' '}
                      <span className="hotel-view-contents-review">
                        {' '}
                        <i className="fa-solid fa-star" /> 5{' '}
                      </span>
                    </h3>
                    <p>
                      <i className="fa-solid fa-location-dot" /> {placeData.formatted_address}
                    </p>
                    <div className="is-flex">
                      <p className="mr-3">
                        <i className="fa-solid fa-phone" />{' '}
                        <a href={`tel:${placeData.international_phone_number}`}>
                          {placeData.international_phone_number}
                        </a>
                      </p>
                      <p>
                        <i className="fa-solid fa-globe" />{' '}
                        <a href={placeData.website} target="_blank">
                          {placeData.website}
                        </a>
                      </p>
                    </div>
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
          <div id="baggage" className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h3 className="title is-5 mt-3 mb-3">Overview</h3>
              <p>{placeData.editorial_summary?.overview}</p>
            </div>
          </div>
          <div className="columns is-multiline single-content-space">
            <div className="column is-12">
              <h2 className="title is-4">Guest Reviews</h2>
            </div>
            <div className="column is-12">
              {placeData.reviews.map((item: PlaceReview, index: number) => {
                return (
                  <div className="reviews-item-wrap" key={index}>
                    <div className="reviews-item">
                      <div className="reviews-number">{item.rating}</div>
                      <div className="reviews-name-month">
                        <span className="sub-title">{item.author_name}</span>{' '}
                        {item.relative_time_description}
                      </div>
                      <div className="brand-img">
                        <a href="">
                          <img src="../images/logo.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="no-comment">{item.text}</div>
                  </div>
                );
              })}
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

// Simulated hotel search function
async function searchPlaces(placeId: string) {
  // Simulate an API call or database lookup
  const response = await getPlaceDetails(placeId);
  if (response?.data.status) {
    return response.data.data;
  }
  return null;
}

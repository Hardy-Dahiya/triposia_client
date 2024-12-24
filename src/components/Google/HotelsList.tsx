import { Hotel } from '@/src/types/types';

interface HotelsListProps {
  hotel: Hotel;
}

const HotelsList = ({ hotel }: HotelsListProps) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={hotel.imageURL} alt={hotel.hotelName} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-6">{hotel.hotelName}</p>
            <p className="subtitle is-7">
              {hotel.starRating} ★ |{' '}
              {hotel.reviewScore > 0
                ? `${hotel.reviewScore}/10 (${hotel.reviewCount} reviews)`
                : 'No reviews yet'}
            </p>
          </div>
        </div>
        <div className="content">
          <p>
            <strong>
              {hotel.currency} {hotel.dailyRate.toFixed(2)}
            </strong>
            {hotel.crossedOutRate > 0 && (
              <span className="has-text-grey-lighter is-size-7 ml-2">
                <s>
                  {hotel.currency} {hotel.crossedOutRate.toFixed(2)}
                </s>
              </span>
            )}
            {hotel.discountPercentage > 0 && (
              <span className="tag is-success is-light ml-2">-{hotel.discountPercentage}%</span>
            )}
          </p>
          <p>
            {hotel.includeBreakfast && (
              <span className="tag is-info is-light mr-1">Breakfast Included</span>
            )}
            {hotel.freeWifi && <span className="tag is-primary is-light">Free Wi-Fi</span>}
          </p>
          <a
            href={hotel.landingURL}
            target="_blank"
            rel="noopener noreferrer"
            className="button is-link is-small mt-3"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default HotelsList;

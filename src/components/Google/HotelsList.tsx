import React, { useMemo } from 'react';
import { Hotel } from '@/src/types/types';

interface HotelsListProps {
  hotel: Hotel;
}

const HotelsList = ({ hotel }: HotelsListProps) => {
  const {
    imageURL,
    hotelName,
    starRating,
    reviewScore,
    reviewCount,
    currency,
    dailyRate,
    crossedOutRate,
    discountPercentage,
    includeBreakfast,
    freeWifi,
    landingURL,
  } = hotel;

  // Memoized conditional data for performance optimization
  const discountedRate = useMemo(() => {
    if (crossedOutRate > 0 && discountPercentage > 0) {
      return (
        <span className="has-text-grey-lighter is-size-7 ml-2">
          <s>
            {currency} {crossedOutRate.toFixed(2)}
          </s>
        </span>
      );
    }
    return null;
  }, [crossedOutRate, discountPercentage, currency]);

  const discountTag = useMemo(() => {
    if (discountPercentage > 0) {
      return <span className="tag is-success is-light ml-2">-{discountPercentage}%</span>;
    }
    return null;
  }, [discountPercentage]);

  const reviewInfo = useMemo(() => {
    if (reviewScore > 0) {
      return `${reviewScore}/10 (${reviewCount} reviews)`;
    }
    return 'No reviews yet';
  }, [reviewScore, reviewCount]);

  return (
    <div className="card">
      {imageURL && (
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={imageURL} alt={hotelName} loading="lazy" />
          </figure>
        </div>
      )}
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-6">{hotelName}</p>
            <p className="subtitle is-7">
              {starRating} ★ | {reviewInfo}
            </p>
          </div>
        </div>
        <div className="content">
          <p>
            <strong>
              {currency} {dailyRate.toFixed(2)}
            </strong>
            {discountedRate}
            {discountTag}
          </p>
          <p>
            {includeBreakfast && (
              <span className="tag is-info is-light mr-1">Breakfast Included</span>
            )}
            {freeWifi && <span className="tag is-primary is-light">Free Wi-Fi</span>}
          </p>
          <a
            href={landingURL}
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

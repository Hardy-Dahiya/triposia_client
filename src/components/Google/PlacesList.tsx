'use client';
import React, { useEffect, useState, useMemo } from 'react';

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface Photo {
  height: number;
  width: number;
  photo_reference: string;
  html_attributions: string[];
}

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
}

interface ApiResponse {
  status: boolean;
  data: {
    address_components: AddressComponent[];
    adr_address: string;
    business_status: string;
    editorial_summary: { language: string; overview: string };
    formatted_address: string;
    geometry: {
      location: { lat: number; lng: number };
    };
    icon: string;
    icon_background_color: string;
    icon_mask_base_uri: string;
    name: string;
    photos: Photo[];
    place_id: string;
    plus_code: { compound_code: string; global_code: string };
    rating: number;
    reviews: Review[];
  };
}

const PlacesList = ({ placeId }: { placeId: string }) => {
  const [placeData, setPlaceData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaceData = async () => {
      try {
        const response = await fetch(`https://api.triposia.com/v1/google/place/${placeId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data: ApiResponse = await response.json();
        if (data.status) {
          setPlaceData(data);
        } else {
          setError('Failed to fetch place details.');
        }
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchPlaceData();
  }, [placeId]);

  const mainPhoto = useMemo(() => placeData?.data.photos?.[0], [placeData]);

  if (error) {
    return <div className="notification is-danger">Error: {error}</div>;
  }

  if (!placeData) {
    return (
      <progress
        className="progress is-primary"
        style={{
          height: '4px', // Extremely thin
          animationDuration: '0.6s',
          transitionTimingFunction: 'ease-out',
        }}
        max="100"
      >
        15%
      </progress>
    );
  }

  const { name, formatted_address, rating, reviews } = placeData.data;

  return (
    <div className="card">
      {mainPhoto && (
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${mainPhoto.photo_reference}&key=AIzaSyDgy8yP6mPr4iO4jRP_MSBdq-HfT3lKH4E`}
              alt={name}
              loading="lazy"
            />
          </figure>
        </div>
      )}
      <div className="card-content">
        <p className="title is-6">{name}</p>
        <p className="subtitle is-7">{formatted_address}</p>
        <p>
          <strong>Rating: {rating}</strong> | {reviews?.length || 0} Reviews
        </p>
        <a
          href={`/place/${placeId}?place=${name}&placeId=${placeId}&rating=${rating}&reviews=${reviews?.length}`}
          target="_blank"
          rel="noopener noreferrer"
          className="button is-link is-small mt-3"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default PlacesList;

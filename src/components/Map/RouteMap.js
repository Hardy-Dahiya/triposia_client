'use client';
import React from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';

const RouteMap = ({ lat1, lng1, lat2, lng2 }) => {
  const departure = { lat: lat1, lng: lng1 }; // Delhi
  const arrival = { lat: lat2, lng: lng2 }; // Mumbai

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: (departure.lat + arrival.lat) / 2,
    lng: (departure.lng + arrival.lng) / 2,
  };

  const routePath = [departure, arrival];

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={5} center={center}>
        <Marker position={departure} />
        <Marker position={arrival} />
        <Polyline
          path={routePath}
          options={{
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 3,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default RouteMap;

'use client';

import React, { useState, useMemo } from 'react';
import ToggleFlightDetails from './ToggleFlightDetails';
import { FlightData, UniqueAirlineData } from '@/src/types/types';

interface FlightListProps {
  flightData: FlightData[];
  isMultiCity?: boolean;
  iata_code?: string;
  arr_iata?: string | undefined;
  airlineData: UniqueAirlineData;
  airline_iata: string;
}

const FlightList: React.FC<FlightListProps> = ({ flightData, airlineData, airline_iata }) => {
  const [visibleCount, setVisibleCount] = useState(10);

  // Memoized visible flights
  const visibleFlights = useMemo(
    () => flightData.slice(0, visibleCount),
    [flightData, visibleCount],
  );

  const handleLoadMore = () => {
    setVisibleCount(flightData.length); // Show all flights
  };

  const handleShowLess = () => {
    setVisibleCount(10); // Reset to initial count
  };

  return (
    <div>
      {visibleFlights.map((item: FlightData, index: number) => (
        <ToggleFlightDetails
          key={index + item._id}
          item={item}
          airlineData={airlineData}
          airline_iata={airline_iata}
          index={index}
        />
      ))}

      <div className="is-flex is-justify-content-center">
        {visibleCount < flightData.length && (
          <button
            onClick={handleLoadMore}
            className="button px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Load More
          </button>
        )}
        {visibleCount > 10 && (
          <button
            onClick={handleShowLess}
            className="button px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default FlightList;

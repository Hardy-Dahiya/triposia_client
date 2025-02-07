'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Flight } from '@/src/types/types'; // Assuming the Flight type exists in your types directory

interface FlightFromListProps {
  type: string;
  flightCount: number;
  flightData: {
    flights: Flight[] | null | undefined;
    departure_iata: string;
    arrival_iata: string;
  };
}

const FlightFromList: React.FC<FlightFromListProps> = ({ flightData, type, flightCount }) => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(5); // Number of flights to show initially

  const shuffledFlights = useMemo(() => {
    if (!flightData.flights) return [];
    return [...flightData.flights].sort(() => Math.random() - 0.5);
  }, [flightData.flights]);

  const toggleDetails = (index: number) => {
    setVisibleIndex(flightCount === index ? null : index);
  };

  const loadMoreFlights = () => {
    setVisibleCount(visibleCount + 5); // Load 3 more flights
  };

  const showLessFlights = () => {
    setVisibleCount(flightCount); // Reset to show only 3 flights
    setVisibleIndex(null); // Hide any expanded details
  };
  if (type === 'flight' && flightData.flights) {
    return (
      <div>
        {shuffledFlights.slice(0, visibleCount).map((item: Flight, index: number) => (
          <div key={index} id="seatselection" className="columns is-multiline single-content-space">
            <div className="column is-12 pt-0">
              <div className="departing-flights">
                <div className="flights-booking-item">
                  <div className="flight-logo">
                    <Image
                      src={`https://aerocloud.s3.amazonaws.com/airweb/${item.airline_iata}.webp`}
                      alt="flight-logo"
                      width={100}
                      height={100}
                      layout="intrinsic"
                    />
                  </div>
                  <div className="flight-time">
                    <h4 className="title is-6 mb-0">
                      {item.departure_time} - {item.arrival_time}
                    </h4>
                    <p className="detailtxt">Separate tickets booked together</p>
                  </div>
                  <div className="duration">
                    <h4 className="title is-6 mb-0">{item.duration}</h4>
                    <p className="detailtxt">
                      {flightData.departure_iata} - {flightData.arrival_iata}
                    </p>
                  </div>
                  <div className="nonstop">
                    <h4 className="title is-6 mb-0">Nonstop</h4>
                  </div>
                  <div className="weightkg">
                    <h4 className="title is-6 mb-0">
                      109 kg CO<sub>2</sub>
                    </h4>
                    <p className="detailtxt">+36% emissions</p>
                  </div>
                  <div className="flight-price">
                    <h4 className="title is-6 mb-0">₹9,195</h4>
                    <p className="detailtxt">round trip</p>
                  </div>
                </div>
                <button className="toggle_menu" onClick={() => toggleDetails(index)} />
                {visibleIndex === index && (
                  <div className="toggle_text">
                    <div className="columns is-multiline is-justify-content-space-around">
                      <div className="column is-6">
                        <div className="time-travel-wrap is-clearfix">
                          <div className="time-travel">
                            <div className="time-travel-circle" />
                            <div className="time-travel-dot" />
                            <div className="time-travel-circle" />
                          </div>
                          <p className="time-start-end">
                            {item.departure_time} <i className="fa-solid fa-circle dot-seprator" />{' '}
                            Indira Gandhi International Airport (DEL)
                          </p>
                          <p className="total-time">Travel time: {item.duration}</p>
                          <p className="time-start-end">
                            {item.arrival_time} <i className="fa-solid fa-circle dot-seprator" />{' '}
                            Chhatrapati Shivaji Maharaj International Airport (BOM)
                          </p>
                        </div>
                        <div className="flightlist-bottom">
                          <i className="fa-solid fa-circle dot-seprator" /> Economy{' '}
                          <i className="fa-solid fa-circle dot-seprator" /> Airbus{' '}
                          <i className="fa-solid fa-circle dot-seprator" /> A320UK 945
                        </div>
                      </div>
                      <div className="column is-3">
                        <ul className="check-list">
                          <li>Below average legroom (29 in)</li>
                          <li>In-seat USB outlet</li>
                          <li>Stream media to your device</li>
                          <li>Carbon emissions estimate: 97 kg</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="buttons is-flex is-justify-content-center">
          {visibleCount < flightData.flights.length ? (
            <button className="button is-primary" onClick={loadMoreFlights}>
              Load More
            </button>
          ) : (
            <button className="button is-light" onClick={showLessFlights}>
              Show Less
            </button>
          )}
        </div>
      </div>
    );
  } else if (type === 'airport' && flightData.flights) {
    return (
      <div>
        {flightData.flights.slice(0, visibleCount).map((item: Flight, index: number) => (
          <div key={index} id="seatselection" className="columns is-multiline single-content-space">
            <div className="column is-12 pt-0">
              <div className="departing-flights">
                <div className="flights-booking-item">
                  <div className="flight-logo">
                    <Image
                      src={`https://aerocloud.s3.amazonaws.com/airweb/${item.airlineroutes[0].carrier}.webp`}
                      alt="flight-logo"
                      width={100}
                      height={100}
                      layout="intrinsic"
                    />
                  </div>
                  <div className="flight-time">
                    <h4 className="title is-6 mb-0">{item.city_name_en}</h4>
                    <p className="detailtxt">Separate tickets booked together</p>
                  </div>
                  <div className="duration">
                    <h4 className="title is-6 mb-0">{item.duration}</h4>
                    <p className="detailtxt">
                      {item.iata_from} - {item.iata_to}
                    </p>
                  </div>
                  <div className="nonstop">
                    <h4 className="title is-6 mb-0">Nonstop</h4>
                  </div>
                  <div className="weightkg">
                    <h4 className="title is-6 mb-0">
                      109 kg CO<sub>2</sub>
                    </h4>
                    <p className="detailtxt">+36% emissions</p>
                  </div>
                  <div className="flight-price">
                    <h4 className="title is-6 mb-0">${item.price}</h4>
                    <p className="detailtxt">round trip</p>
                  </div>
                </div>
                <button className="toggle_menu" onClick={() => toggleDetails(index)} />
                {visibleIndex === index && (
                  <div className="toggle_text">
                    <div className="columns is-multiline is-justify-content-space-around">
                      <div className="column is-6">
                        <div className="time-travel-wrap is-clearfix">
                          <div className="time-travel">
                            <div className="time-travel-circle" />
                            <div className="time-travel-dot" />
                            <div className="time-travel-circle" />
                          </div>
                          <p className="time-start-end">
                            {item.departure_time} <i className="fa-solid fa-circle dot-seprator" />{' '}
                            Indira Gandhi International Airport (DEL)
                          </p>
                          <p className="total-time">Travel time: {item.duration}</p>
                          <p className="time-start-end">
                            {item.arrival_time} <i className="fa-solid fa-circle dot-seprator" />{' '}
                            Chhatrapati Shivaji Maharaj International Airport (BOM)
                          </p>
                        </div>
                        <div className="flightlist-bottom">
                          <i className="fa-solid fa-circle dot-seprator" /> Economy{' '}
                          <i className="fa-solid fa-circle dot-seprator" /> Airbus{' '}
                          <i className="fa-solid fa-circle dot-seprator" /> A320UK 945
                        </div>
                      </div>
                      <div className="column is-3">
                        <ul className="check-list">
                          <li>Below average legroom (29 in)</li>
                          <li>In-seat USB outlet</li>
                          <li>Stream media to your device</li>
                          <li>Carbon emissions estimate: 97 kg</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="buttons is-flex is-justify-content-center">
          {visibleCount < flightData.flights.length ? (
            <button className="button is-primary" onClick={loadMoreFlights}>
              Load More
            </button>
          ) : (
            <button className="button is-light" onClick={showLessFlights}>
              Show Less
            </button>
          )}
        </div>
      </div>
    );
  }
};

export default FlightFromList;

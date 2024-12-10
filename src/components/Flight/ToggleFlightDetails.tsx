'use client';

import { FlightData, UniqueAirlineData } from '@/src/types/types';
import { useState } from 'react';

interface ToggleFlightDetailsProps {
  item: FlightData;
  airlineData: UniqueAirlineData;
  airline_iata: string;
  index: number;
}

export default function ToggleFlightDetails({
  item,
  airlineData,
  airline_iata,
  index,
}: ToggleFlightDetailsProps) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div id="seatselection" className="columns is-multiline" key={index}>
      <div className="column is-12 pt-0">
        <div className="departing-flights">
          <div className="flights-booking-item">
            <div className="flight-logo">
              <img
                src={`https://aerocloud.s3.amazonaws.com/airweb/${airline_iata}.webp`}
                alt="airline"
                loading="lazy"
              />
            </div>
            <div className="flight-time">
              <p className="title is-6 mb-0">Flights per day - {item.flights_per_day}</p>
              <p className="detailtxt">Flights per week - {item.flights_per_week}</p>
            </div>
            <div className="duration">
              <p className="title is-6 mb-0">Duration - {item.common_duration}</p>
              <p className="detailtxt">
                {item.iata_from} - {item.iata_to}
              </p>
            </div>
            <div className="nonstop">
              <p className="title is-6 mb-0">
                {airlineData.name} ({airlineData.iata_code})
              </p>
            </div>
            <div className="weightkg">
              <p className="title is-6 mb-0">Business Class</p>
            </div>
            <div className="flight-price">
              <p className="title is-6 mb-0">{item.price}$</p>
              <p className="detailtxt">Domestic</p>
            </div>
          </div>
          <button className={`toggle_menu ${isActive ? 'active' : ''}`} onClick={handleToggle} />
          <div className={`toggle_text ${isActive ? 'show' : ''}`}>
            <div className="columns is-multiline is-justify-content-space-around">
              <div className="column is-6">
                <div className="time-travel-wrap is-clearfix">
                  <div className="time-travel">
                    <div className="time-travel-circle" />
                    <div className="time-travel-dot" />
                    <div className="time-travel-circle" />
                  </div>
                  <p className="time-start-end">{item.iata_from}</p>
                  <p className="total-time">Travel time: {item.common_duration}</p>
                  <p className="time-start-end">{item.iata_to}</p>
                </div>
                <div className="flightlist-bottom">Airline - {airlineData.name}</div>
              </div>
              <div className="column is-3">
                <ul className="check-list">
                  <li>Sunday - {item.day1}</li>
                  <li>Monday - {item.day2}</li>
                  <li>Tuesday - {item.day3}</li>
                  <li>Wednesday - {item.day4}</li>
                  <li>Thursday - {item.day5}</li>
                  <li>Friday - {item.day6}</li>
                  <li>Saturday - {item.day7}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

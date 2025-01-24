import axios from 'axios';
import url from '../../src/api/api';

const domainMap: Record<string, number> = {
  'triposia.com': 1,
  'tripsearchs.com': 2,
  localhost: 2, // For development
  'triposia-client.vercel.app': 2, // For development
  'flightsdetail.com': 3,
  'airport-terminals.com': 4,
  'airlinesmap.com': 5,
  'clearbeds.com': 6,
};

// getFlightPage
const getFlightPage = async (
  flight_id: string | number | null,
  language_id: string | number | null,
) => {
  try {
    const host = await axios.get('http://localhost:3000/api');
    const domainId = domainMap[host.data.hostname];
    const URL = `${url}/page/flight?flight_id=${flight_id}&language_id=${language_id}&domain_id=${domainId}`;
    return await axios.get(URL, {});
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized: Invalid token or session expired');
        // Handle 401 errorlogout
      } else {
        console.error('An error occurred:', error.response?.data);
      }
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
};

// getFlightPage
const getAirportPage = async (
  airport_id: string | number | null,
  language_id: string | number | null,
) => {
  try {
    const host = await axios.get('http://localhost:3002/api');
    const domainId = domainMap[host.data.hostname];
    const URL = `${url}/page/airport?airport_id=${airport_id}&language_id=${language_id}&domain_id=${domainId}`;
    return await axios.get(URL, {});
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized: Invalid token or session expired');
        // Handle 401 errorlogout
      } else {
        console.error('An error occurred:', error.response?.data);
      }
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
};

// getAirlinePage
const getAirlinePage = async (
  airline_id: string | number | null,
  language_id: string | number | null,
) => {
  try {
    const host = await axios.get('http://localhost:3000/api');
    const domainId = domainMap[host.data.hostname];
    const URL = `${url}/page/airline?airline_id=${airline_id}&language_id=${language_id}&domain_id=${domainId}`;
    return await axios.get(URL, {});
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized: Invalid token or session expired');
        // Handle 401 errorlogout
      } else {
        console.error('An error occurred:', error.response?.data);
      }
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
};

export { getFlightPage, getAirlinePage, getAirportPage };

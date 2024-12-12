import axios from 'axios';
import url from '../../src/api/api';
import { buildURL } from '@/utils/utils';

// getFlightsData
const getFlightsData = async (
  dep_iata: string | number | null,
  arr_iata: string | number | null,
) => {
  try {
    const URL = `${url}/flight/from_to?iata_code_dep=${dep_iata}&iata_code_arr=${arr_iata}`;
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

// getFlightsToData
const getFlightsToData = async (
  dep_iata: string | number | null,
  airline_iata: string | number | null,
) => {
  try {
    const URL = `${url}/flight/to?page=1&limit=100&iata=${dep_iata}&airline_iata=${airline_iata}`;
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
// getFlightsRouteData
const getFlightsRouteData = async (
  dep_iata: string | null | undefined,
  arr_iata: string | null | undefined,
  airline_iata: string | null | undefined,
) => {
  try {
    // const URL = `${url}/flight/routes?dep_iata=${dep_iata}&arr_iata=${arr_iata}&airline_iata=${airline_iata}`;
    const URL = buildURL(`${url}/flight/routes`, {
      dep_iata,
      arr_iata,
      airline_iata,
    });
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

export { getFlightsData, getFlightsToData, getFlightsRouteData };

import axios from 'axios';
import url from '../../src/api/api';
// getAirlineData
const getAirlineData = async (iata_code: string | number | null) => {
  try {
    const URL = `${url}/airline?iata_code=${iata_code}`;
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
// getAirlineData
const getAirlineToCityData = async (
  airline_iata: string | number | null,
  iata_code: string | number | null,
) => {
  try {
    const URL = `${url}/airline/to-cities?airline_name=${airline_iata}&iata_code=${iata_code}`;
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
// getAirlineData
const getAirlineCityToCityData = async (
  airline_iata: string | number | null,
  iata_code: string | number | null,
  arr_code: string | number | null | undefined,
) => {
  try {
    const URL = `${url}/airline/city-to-city?airline_name=${airline_iata}&iata_code=${iata_code}&arr_code=${arr_code}`;
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

export { getAirlineData, getAirlineToCityData, getAirlineCityToCityData };

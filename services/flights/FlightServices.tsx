import axios from 'axios';
import url from '../../src/api/api';
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

export { getFlightsData };

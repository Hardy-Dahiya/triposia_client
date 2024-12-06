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

export { getAirlineData };

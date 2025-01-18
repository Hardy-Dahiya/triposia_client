import axios from 'axios';
import url from '../../src/api/api';
// getPlaceDetails
const getPlaceDetails = async (place_id: string | number | null) => {
  try {
    const URL = `${url}/google/place/${place_id}`;
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
// getHotelDetails
const getHotelDetails = async (hotelId: string | number | null) => {
  try {
    const URL = `${url}/google/hotel/${hotelId}`;
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

export { getPlaceDetails, getHotelDetails };

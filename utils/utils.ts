import { FlightRoute } from '@/src/types/types';

const buildURL = (
  baseUrl: string,
  params: { [key: string]: string | null | undefined },
): string => {
  const queryParams = Object.entries(params)
    .filter(([_, value]) => value && value.trim() !== '') // Include only params with non-empty values
    .map(([key, value]) => `${key}=${encodeURIComponent(value!)}`) // Encode the value
    .join('&'); // Join all key=value pairs with &

  return `${baseUrl}${queryParams ? `?${queryParams}` : ''}`; // Append query params if any
};
const calculateFlightDuration = (flight: FlightRoute) => {
  const { departure, arrival } = flight;

  // Check if required data is present
  if (!departure.time || !departure.timezone || !arrival.time || !arrival.timezone) {
    return ''; // Return empty value if data is missing
  }

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  try {
    // Create Date objects for departure and arrival times
    const departureDate = new Date(`${today}T${departure.time}`);
    const arrivalDate = new Date(`${today}T${arrival.time}`);

    // Convert times to UTC based on time zones
    const departureInUTC = new Date(
      departureDate.toLocaleString('en-US', { timeZone: departure.timezone }),
    );
    const arrivalInUTC = new Date(
      arrivalDate.toLocaleString('en-US', { timeZone: arrival.timezone }),
    );

    // Calculate the difference in milliseconds
    const durationMs = arrivalInUTC.getTime() - departureInUTC.getTime();

    // Ensure no negative values
    const absoluteDurationMs = Math.abs(durationMs);

    // Convert the duration to hours and minutes
    const hours = Math.floor(absoluteDurationMs / (1000 * 60 * 60));
    const minutes = Math.floor((absoluteDurationMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}H, ${minutes}m`;
  } catch (error) {
    console.error('Error calculating flight duration:', error);
    return ''; // Return empty value on error
  }
};

export { buildURL, calculateFlightDuration };

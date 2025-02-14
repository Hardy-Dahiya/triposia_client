import { headers } from 'next/headers';
import Home from './pages/home/page';
import { getPhone } from '@/services/phone/PhoneServices';
import { Metadata } from 'next';

async function fetchPhone(host: string) {
  try {
    const response = await getPhone(host);
    if (response?.data.status) {
      return response.data.data;
    }
    return { phone: '' }; // Default value if data is missing
  } catch (error) {
    console.log(error);
    return { phone: '' }; // Default value if data is missing
  }
}

export async function generateMetadata(): Promise<Metadata> {
  // Await `params` since it's treated as a Promise in the build environment
  const headersList = await headers();
  const host = headersList.get('host') || 'default';
  const phoneData = await fetchPhone(host);
  if (phoneData) {
    return {
      title: phoneData.title,
      description: phoneData.meta,
      keywords: phoneData.keywords,
    };
  }
  return {
    title: 'TripOsia | Travel Made Easy',
    description: `Plan your adventures effortlessly with Triposia! Discover top destinations, book accommodations, and explore curated travel experiences. Whether you're planning a weekend getaway or a dream vacation, Triposia helps you every step of the way. Your journey begins here!`,
    keywords: 'TripOsia | Travel Made Easy',
  };
}

export default async function Page() {
  return <Home />;
}

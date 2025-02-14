import axios from 'axios';
// get Blogs
const domainMap: Record<string, number> = {
  'triposia.com': 1,
  'tripsearchs.com': 2,
  'localhost:3000': 2, // For development
  'localhost:3002': 2, // For development
  'triposia-client.vercel.app': 1, // For development
  'flightsdetail.com': 3,
  'airport-terminals.com': 4,
  'airlinesmap.com': 5,
  'clearbeds.com': 6,
  'faresinfo.com': 7,
};
const getBlogs = async () => {
  try {
    const URL = `https://blog.triposia.com/blog/1/1`;
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
// get Blogs details
const getBlogsDetail = async (slug: string | null, host: string) => {
  try {
    const domainID = domainMap[host];
    const URL = `https://blog.triposia.com/blogdetails/${domainID}/1/${slug}`;
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

export { getBlogs, getBlogsDetail };

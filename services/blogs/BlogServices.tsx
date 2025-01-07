import axios from 'axios';
// get Blogs
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
const getBlogsDetail = async (slug: string | null) => {
  try {
    const URL = `https://blog.triposia.com/blogdetails/${slug}`;
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

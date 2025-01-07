import { getBlogs } from '@/services/blogs/BlogServices';
import { Blog } from '@/src/types/types';
import Link from 'next/link';
export default async function Blogs() {
  const blogs = await getBlogsList();

  return (
    <section className="blog-wrap section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-12">
            <h2 className="title is-4">Latest Blog</h2>
          </div>
          {blogs.map((blog: Blog, key: number) => {
            return (
              <div className="column is-4" key={key}>
                <Link href={`/blog-details/${blog.blog_slug}`} target="_blank">
                  <img
                    src={`https://blog.triposia.com${blog.featured_image}`}
                    alt={blog.featured_image}
                    className="image imgw100 img-radius-top-right"
                  />
                </Link>
                <div className="card-box">
                  <h3 className="title is-5 mb-4">
                    <Link href={`/blog-details/${blog.blog_slug}`} target="_blank">
                      {blog.name}
                    </Link>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

async function getBlogsList() {
  const resposne = await getBlogs();
  if (resposne?.data) {
    return resposne.data;
  }
}

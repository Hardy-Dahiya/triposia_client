import { getBlogs } from '@/services/blogs/BlogServices';
import Footer from '../../src/components/Footer/Footer';
import Header from '../../src/components/Header/Header';
import { Blog } from '@/src/types/types';
import Link from 'next/link';

async function Page() {
  const blogs = await getBlogsList();
  return (
    <div>
      <Header />
      <section className="single-content-wrap section blog-section">
        <div className="container">
          <div className="columns is-multiline ">
            <div className="column is-8">
              <section className="blog-wrap">
                <div className="container">
                  <div className="columns is-multiline">
                    <div className="column is-12">
                      <h2 className="title is-4">Latest Blog</h2>
                    </div>
                    {blogs.map((blog: Blog, key: number) => {
                      return (
                        <div className="column is-6" key={key}>
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
                                {' '}
                                {blog.name}{' '}
                              </Link>
                            </h3>
                            <div className="single-blog-details-content-tags mt-3">
                              <span className="single-blog-details-content-tags-item">
                                <a href="javascript:void(0)"> Category </a>
                              </span>
                              <span className="single-blog-details-content-tags-item">
                                {blog.created_at}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
            <div className="column is-4">
              <div className="blog-details-side">
                <div className="blog-details-side-item radius-10">
                  <div className="blog-details-side-title">
                    <h5 className="title"> Recent Post </h5>
                    <div className="blog-details-side-inner">
                      <ul className="recent-list list-style-none">
                        <li className="recent-list-item">
                          <div className="recent-list-thumb">
                            <a href="#0">
                              {' '}
                              <img
                                className="lazyloads radius-5"
                                src="../../images/recent-post1.jpg"
                                alt=""
                              />{' '}
                            </a>
                          </div>
                          <div className="recent-list-contents">
                            <h6 className="recent-list-title fs-16">
                              {' '}
                              <a href="#0"> Choose From a Wide Range of Properties </a>{' '}
                            </h6>
                            <span className="recent-list-dates light-color fs-14 mt-2">
                              {' '}
                              21 Jun 2022{' '}
                            </span>
                          </div>
                        </li>
                        <li className="recent-list-item">
                          <div className="recent-list-thumb">
                            <a href="#0">
                              {' '}
                              <img
                                className="lazyloads radius-5"
                                src="images/recent-post2.jpg"
                                alt=""
                              />{' '}
                            </a>
                          </div>
                          <div className="recent-list-contents">
                            <h6 className="recent-list-title fs-16">
                              {' '}
                              <a href="#0"> Choose From a Wide Range of Properties </a>{' '}
                            </h6>
                            <span className="recent-list-dates light-color fs-14 mt-2">
                              {' '}
                              22 Jun 2022{' '}
                            </span>
                          </div>
                        </li>
                        <li className="recent-list-item">
                          <div className="recent-list-thumb">
                            <a href="#0">
                              {' '}
                              <img
                                className="lazyloads radius-5"
                                src="images/recent-post3.jpg"
                                alt=""
                              />{' '}
                            </a>
                          </div>
                          <div className="recent-list-contents">
                            <h6 className="recent-list-title fs-16">
                              {' '}
                              <a href="#0"> Choose From a Wide Range of Properties </a>{' '}
                            </h6>
                            <span className="recent-list-dates light-color fs-14 mt-2">
                              {' '}
                              24 Jun 2022{' '}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="blog-details-side-item radius-10">
                  <div className="blog-details-side-title open">
                    <h5 className="title"> Tags </h5>
                    <div className="blog-details-side-inner">
                      <ul className="tag-list list-style-none active-list">
                        <li className="tag-list-item">
                          <a className="tag-list-link" href="#0">
                            {' '}
                            Low Price{' '}
                          </a>
                        </li>
                        <li className="tag-list-item active">
                          <a className="tag-list-link" href="#0">
                            {' '}
                            High Price{' '}
                          </a>
                        </li>
                        <li className="tag-list-item">
                          <a className="tag-list-link" href="#0">
                            {' '}
                            Big Room{' '}
                          </a>
                        </li>
                        <li className="tag-list-item">
                          <a className="tag-list-link" href="#0">
                            {' '}
                            Small Room{' '}
                          </a>
                        </li>
                        <li className="tag-list-item">
                          <a className="tag-list-link" href="#0">
                            {' '}
                            New{' '}
                          </a>
                        </li>
                        <li className="tag-list-item">
                          <a className="tag-list-link" href="#0">
                            {' '}
                            Discount{' '}
                          </a>
                        </li>
                        <li className="tag-list-item">
                          <a className="tag-list-link" href="#0">
                            {' '}
                            Luxurious{' '}
                          </a>
                        </li>
                        <li className="tag-list-item">
                          <a className="tag-list-link" href="#0">
                            {' '}
                            Normal{' '}
                          </a>
                        </li>
                        <li className="tag-list-item">
                          <a className="tag-list-link" href="#0">
                            {' '}
                            Sale{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

async function getBlogsList() {
  const resposne = await getBlogs();
  if (resposne?.data) {
    return resposne.data;
  }
}

export default Page;

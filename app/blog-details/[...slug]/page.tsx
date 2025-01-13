import Footer from '../../../src/components/Footer/Footer';
import Header from '../../../src/components/Header/Header';
import { Suspense } from 'react';
import Error from '@/src/components/Message/Error';
import { getBlogsDetail } from '@/services/blogs/BlogServices';
import { Metadata } from 'next';
// Define the params interface
type BlogRouteParams = {
  params: Promise<{
    slug: string; // Matches the dynamic route segment `[route]`
  }>;
};

export async function generateMetadata({ params }: BlogRouteParams): Promise<Metadata> {
  // Await `params` since it's treated as a Promise in the build environment
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const pageData = await getBlog(slug);
  if (pageData) {
    return {
      title: pageData.meta_title,
      description: pageData.meta_description,
      keywords: pageData.meta_keywords,
    };
  }
  return {
    title: 'TripOsia | Travel Made Easy',
    description: `Plan your adventures effortlessly with Triposia! Discover top destinations, book accommodations, and explore curated travel experiences. Whether you're planning a weekend getaway or a dream vacation, Triposia helps you every step of the way. Your journey begins here!`,
    keywords: 'TripOsia | Travel Made Easy',
  };
}

export default async function BlogDetailPage({ params }: BlogRouteParams) {
  // Await `params` since it's treated as a Promise in the build environment
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
    return (
      <Error
        title="Invalid slug format"
        subTitle="No Blog Found"
        msg="Unfortunately, we could not find any blog for the specified slug. Please try again."
      />
    );
  }

  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <progress
            className="progress is-primary"
            style={{
              height: '4px', // Extremely thin
              animationDuration: '0.6s',
              transitionTimingFunction: 'ease-out',
            }}
            max="100"
          >
            15%
          </progress>
        }
      >
        <Page slug={slug} />
      </Suspense>
      <Footer />
    </div>
  );
}

async function Page({ slug }: { slug: string }) {
  const getBlogData = await getBlog(slug);
  if (!getBlogData?.name) {
    return (
      <Error
        title="Invalid slug format"
        subTitle="No Blog Found"
        msg="Unfortunately, we could not find any blog for the specified slug. Please try again."
      />
    );
  }
  return (
    <section className="single-content-wrap section blog-section">
      <div className="container">
        <div className="columns is-multiline ">
          <div className="column is-8">
            <div className="blog-details-wrapper">
              <div className="single-blog-details">
                <div className="single-blog-details-content pt-0">
                  <h2 className="single-blog-details-content-title fw-500">{getBlogData.name}</h2>
                  <div className="single-blog-details-content-tags mt-3">
                    <span className="single-blog-details-content-tags-item">
                      {' '}
                      <a href="javascript:void(0)"> {getBlogData.category_name} </a>{' '}
                    </span>
                    <span className="single-blog-details-content-tags-item">
                      {' '}
                      {getBlogData.created_at}{' '}
                    </span>
                  </div>
                  <div className="single-blog-details-content-tags mt-3">
                    <span className="single-blog-details-content-tags-item">
                      {' '}
                      <a href="javascript:void(0)">Author: {getBlogData.authors_name}</a>{' '}
                    </span>
                  </div>
                  <div className="single-blog-details-thumb mt-4">
                    <img
                      className="radius-5"
                      src={`https://blog.triposia.com${getBlogData.featured_image}`}
                      alt={getBlogData.featured_image}
                    />
                  </div>
                  <p className="single-blog-details-content-para mt-4">{getBlogData.intro}</p>
                  <p className="single-blog-details-content-para mt-4">
                    {' '}
                    One for all and all for one, Muskehounds are always ready. One for all and all
                    for one, helping everybody. One for all and all for one, it’s a pretty story.
                    Sharing everything with fun, that’s the way to be. One for all and all for one,
                    Muskehounds are always ready. One for all and all for one, helping everybody.
                    One for all and all for one, can sound pretty corny. If you’ve got a problem
                    chum, think how it could be.{' '}
                  </p>
                  <p className="single-blog-details-content-para mt-4"></p>
                  <p dangerouslySetInnerHTML={{ __html: getBlogData.content }} />
                </div>
              </div>
              <div className="details-tag-area color-two pat-25 pab-50">
                <div className="columns is-multiline">
                  <div className="column is-6 mt-4">
                    <div className="blog-details-share-content">
                      <h4 className="blog-details-share-content-title"> Share: </h4>
                      <ul className="blog-details-share-social list-style-none">
                        <li className="blog-details-share-social-list">
                          <a
                            className="blog-details-share-social-list-icon"
                            href="javascript:void(0)"
                          >
                            {' '}
                            <i className="fa-brands fa-facebook-f" />{' '}
                          </a>
                        </li>
                        <li className="blog-details-share-social-list">
                          <a
                            className="blog-details-share-social-list-icon"
                            href="javascript:void(0)"
                          >
                            {' '}
                            <i className="fa-brands fa-twitter" />{' '}
                          </a>
                        </li>
                        <li className="blog-details-share-social-list">
                          <a
                            className="blog-details-share-social-list-icon"
                            href="javascript:void(0)"
                          >
                            {' '}
                            <i className="fa-brands fa-instagram" />{' '}
                          </a>
                        </li>
                        <li className="blog-details-share-social-list">
                          <a
                            className="blog-details-share-social-list-icon"
                            href="javascript:void(0)"
                          >
                            {' '}
                            <i className="fa-brands fa-youtube" />{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="column is-6 mt-4">
                    <div className="blog-details-share-content right-align">
                      <h4 className="blog-details-share-content-title"> Tags: </h4>
                      <ul className="blog-details-tag list-style-none">
                        <li className="blog-details-tag-list">
                          <a className="blog-details-tag-list-item" href="javascript:void(0)">
                            {' '}
                            New{' '}
                          </a>
                        </li>
                        <li className="blog-details-tag-list">
                          <a className="blog-details-tag-list-item" href="javascript:void(0)">
                            {' '}
                            Luxurious{' '}
                          </a>
                        </li>
                        <li className="blog-details-tag-list">
                          <a className="blog-details-tag-list-item" href="javascript:void(0)">
                            {' '}
                            Simple{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-area">
                <h3 className="details-section-title"> Comments(03) </h3>
                <div className="row">
                  <div className="col-lg-12 mt-2">
                    <div className="comment-show-contents">
                      <ul
                        className="comment-list list-style-none wow fadeInLeft"
                        data-wow-delay=".1s"
                        style={{
                          visibility: 'visible',
                          animationDelay: '0.1s',
                          animationName: 'fadeInLeft',
                        }}
                      >
                        <li>
                          <div className="blog-details-flex-content">
                            <div className="blog-details-thumb radius-10">
                              <img src="../../images/details-comment1.jpg" alt="" />
                            </div>
                            <div className="blog-details-content">
                              <div className="blog-details-content-flex">
                                <div className="blog-details-content-item">
                                  <h5 className="blog-details-content-title">
                                    {' '}
                                    <a href="javascript:void(0)"> Riyad Hossain </a>{' '}
                                  </h5>
                                  <span className="blog-details-content-date"> Jun 22, 2022 </span>
                                </div>
                                <a href="javascript:void(0)" className="btn-replay">
                                  {' '}
                                  <i className="fa-solid fa-reply" /> Reply{' '}
                                </a>
                              </div>
                              <p className="blog-details-content-para">
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                                egestas leo. Aliquam ut ante lobortis tellus cursus pellentesque.
                                Praesent feugiat tellus quis aliquet{' '}
                              </p>
                            </div>
                          </div>
                          <ul
                            className="comment-list list-style-none wow fadeInLeft"
                            data-wow-delay=".2s"
                            style={{
                              visibility: 'visible',
                              animationDelay: '0.2s',
                              animationName: 'fadeInLeft',
                            }}
                          >
                            <li>
                              <div className="blog-details-flex-content">
                                <div className="blog-details-thumb radius-10">
                                  <img src="../../images/details-comment2.jpg" alt="" />
                                </div>
                                <div className="blog-details-content">
                                  <div className="blog-details-content-flex">
                                    <div className="blog-details-content-item">
                                      <h5 className="blog-details-content-title">
                                        {' '}
                                        <a href="javascript:void(0)"> Rajia Akter </a>{' '}
                                      </h5>
                                      <span className="blog-details-content-date">
                                        {' '}
                                        Jun 23, 2022{' '}
                                      </span>
                                    </div>
                                    <a href="javascript:void(0)" className="btn-replay">
                                      {' '}
                                      <i className="fa-solid fa-reply" /> Reply{' '}
                                    </a>
                                  </div>
                                  <p className="blog-details-content-para">
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                                    egestas leo. Aliquam ut ante lobortis tellus cursus
                                    pellentesque. Praesent feugiat tellus quis aliquet{' '}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul
                        className="comment-list list-style-none wow fadeInLeft"
                        data-wow-delay=".3s"
                        style={{
                          visibility: 'visible',
                          animationDelay: '0.3s',
                          animationName: 'fadeInLeft',
                        }}
                      >
                        <li>
                          <div className="blog-details-flex-content">
                            <div className="blog-details-thumb radius-10">
                              <img src="../../images/details-comment1.jpg" alt="" />
                            </div>
                            <div className="blog-details-content">
                              <div className="blog-details-content-flex">
                                <div className="blog-details-content-item">
                                  <h5 className="blog-details-content-title">
                                    {' '}
                                    <a href="javascript:void(0)"> Bryn Colon </a>{' '}
                                  </h5>
                                  <span className="blog-details-content-date"> Jun 24, 2022 </span>
                                </div>
                                <a href="javascript:void(0)" className="btn-replay">
                                  {' '}
                                  <i className="fa-solid fa-reply" /> Reply{' '}
                                </a>
                              </div>
                              <p className="blog-details-content-para">
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                                egestas leo. Aliquam ut ante lobortis tellus cursus pellentesque.
                                Praesent feugiat tellus quis aliquet{' '}
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-area">
                <h3 className="details-section-title"> Post Your Comment </h3>
                <div className="row">
                  <div className="col-lg-12 pat-20">
                    <div className="details-comment-content">
                      <div className="comments-flex-item">
                        <div className="single-commetns">
                          <label className="comment-label"> Your Name </label>
                          <input
                            type="text"
                            className="form--control radius-5"
                            name="name"
                            placeholder="Type Name"
                          />
                        </div>
                        <div className="single-commetns">
                          <label className="comment-label"> Email Address </label>
                          <input
                            type="text"
                            className="form--control radius-5"
                            name="email"
                            placeholder="Type Email"
                          />
                        </div>
                      </div>
                      <div className="single-commetns">
                        <label className="comment-label"> Comment </label>
                        <textarea
                          name="message"
                          className="form--control radius-5 form--message"
                          placeholder="Post Comments"
                          defaultValue={''}
                        />
                      </div>
                      <button type="submit" className="submit-btn radius-5 mt-4">
                        {' '}
                        Post Comment{' '}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                              src="../../images/recent-post2.jpg"
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
                              src="../../images/recent-post3.jpg"
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
  );
}

async function getBlog(slug: string) {
  const resposne = await getBlogsDetail(slug);
  if (resposne?.data) {
    return resposne.data;
  }
}

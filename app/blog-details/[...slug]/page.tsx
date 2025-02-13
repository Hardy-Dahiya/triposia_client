import { headers } from 'next/headers';
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
  const headersList = await headers();
  const host = headersList.get('host') || 'default';
  const pageData = await getBlog(slug, host);
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
  const headersList = await headers();
  const host = headersList.get('host') || 'default';
  const getBlogData = await getBlog(slug, host);
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
                  <hr className="seprator my-5" />
                  <div className="single-blog-details-content-tags mt-3">
                    <div className="columns is-multiline">
                      <div className="au is-2 author">
                        <img
                          className="radius-5"
                          src="https://blog.triposia.com/storage/photos/1/66431f78b21f2.jpg"
                          alt="Stella Shon"
                        />
                      </div>
                      <div className="aus is-10">
                        <p>
                          By{' '}
                          <strong>
                            <a href="/travel/author/stella_shon">Stella Shon</a>
                          </strong>
                        </p>
                        <ul className="socials">
                          {getBlogData.authors_linkedin ? (
                            <li>
                              <a href={getBlogData.authors_linkedin}>
                                <i className="fa-brands fa-linkedin" />
                              </a>
                            </li>
                          ) : (
                            ''
                          )}
                          {getBlogData.authors_instagram ? (
                            <li>
                              <a href={getBlogData.authors_instagram}>
                                <i className="fa-brands fa-instagram" />
                              </a>
                            </li>
                          ) : (
                            ''
                          )}
                        </ul>
                        <ul className="socials">
                          <li>Updated by - 2025-01-22T08:20:52.000000Z</li>
                        </ul>
                      </div>
                    </div>
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
            </div>
          </div>
          <div className="column is-4">
            <div className="blog-details-side">
              <div className="blog-details-side-item radius-10">
                <div className="blog-details-side-title">
                  <h5 className="title"> Recent Post </h5>
                  <div className="blog-details-side-inner">
                    <ul className="recent-list list-style-none"></ul>
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

async function getBlog(slug: string, domainID: string) {
  const resposne = await getBlogsDetail(slug, domainID);
  if (resposne?.data) {
    return resposne.data;
  }
}

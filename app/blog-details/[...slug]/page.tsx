import { headers } from 'next/headers';
import Footer from '../../../src/components/Footer/Footer';
import Header from '../../../src/components/Header/Header';
import { Suspense } from 'react';
import Error from '@/src/components/Message/Error';
import { getAuthors, getBlogsDetail, getBlogs } from '@/services/blogs/BlogServices';
import { Metadata } from 'next';
import { Auther, SimilarBlogs } from '@/src/types/types';
import Link from 'next/link';
import Script from 'next/script';

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
  const headersList = await headers();
  const host = headersList.get('host') || 'default';
  const getBlogData = await getBlog(slug, host);
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
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Article',
            '@id': `https://${host}/blog-details/${slug}#article`,
            headline: getBlogData.name,
            description: getBlogData.meta_description,
            image: [
              {
                '@type': 'ImageObject',
                url: `https://blog.triposia.com/${getBlogData.meta_og_image}`,
                width: 350,
                height: 350,
              },
              {
                '@type': 'ImageObject',
                url: `https://blog.triposia.com/${getBlogData.meta_og_image}`,
                width: 1920,
                height: 1080,
              },
              {
                '@type': 'ImageObject',
                url: `https://blog.triposia.com/${getBlogData.meta_og_image}`,
                width: 1440,
                height: 864,
              },
            ],
            dateModified: getBlogData.updated_at,
            datePublished: getBlogData.created_at,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://${host}/blog-details/${slug}#article`,
            },
            publisher: { '@id': `${host}/#organization` },
            isAccessibleForFree: true,
            about: [
              { '@type': 'Thing', name: getBlogData.category_name },
              { '@type': 'Thing', name: 'Travel' },
              { '@type': 'Thing', name: getBlogData.name },
            ],
            author: {
              '@type': 'Person',
              name: getBlogData.authors_name,
              image: getBlogData.authors_featured_image,
              url: `https://${host}/author/${getBlogData.authors_slug}`,
              description: getBlogData.authors_description,
              sameAs: [
                getBlogData.authors_linkedin,
                getBlogData.authors_twitter,
                getBlogData.authors_instagram,
                `https://${host}/author/${getBlogData.authors_slug}`,
              ].filter(Boolean), // Remove any undefined social links
            },
          }),
        }}
      />
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
  const autherList = await getAutherList();
  const similarPost = await getBlogList();
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
                          src={`https://blog.triposia.com/${getBlogData.authors_featured_image}`}
                          alt={getBlogData.authors_name}
                        />
                      </div>
                      <div className="aus is-10">
                        <p>
                          By{' '}
                          <strong>
                            <a href="/travel/author/stella_shon">{getBlogData.authors_name}</a>
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
                  <h5 className="title"> Recent Blogs </h5>
                  <div className="blog-details-side-inner">
                    <ul className="tag-list list-style-none active-list">
                      {similarPost.map((item: SimilarBlogs, index: number) => {
                        return (
                          <li className="tag-list-item" key={index}>
                            <Link
                              className="tag-list-link"
                              href={`/blog-details/${item.blog_slug}`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="blog-details-side-item radius-10">
                <div className="blog-details-side-title open">
                  <h5 className="title"> Auther </h5>
                  <div className="blog-details-side-inner">
                    <ul className="tag-list list-style-none active-list">
                      {autherList.map((item: Auther, index: number) => {
                        return (
                          <li className="tag-list-item" key={index}>
                            <a className="tag-list-link" href="#0">
                              {item.name}
                            </a>
                          </li>
                        );
                      })}
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

async function getAutherList() {
  const response = await getAuthors();
  if (response?.data) {
    return response.data;
  }
  return [];
}

async function getBlogList() {
  const response = await getBlogs();
  if (response?.data) {
    return response.data;
  }
  return [];
}

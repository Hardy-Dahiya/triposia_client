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
        subTitle="No Page Found"
        msg="Unfortunately, we could not find any page for the specified slug. Please try again."
      />
    );
  }
  return (
    <section className="single-content-wrap section blog-section">
      <p dangerouslySetInnerHTML={{ __html: getBlogData.content }} />
    </section>
  );
}

async function getBlog(slug: string) {
  const resposne = await getBlogsDetail(slug);
  if (resposne?.data) {
    return resposne.data;
  }
}

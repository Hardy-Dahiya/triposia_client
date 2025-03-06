import { headers } from 'next/headers';
import Link from 'next/link';
import { getPhone } from '@/services/phone/PhoneServices';

interface FooterMenu {
  name: string;
  slug: string;
}

async function fetchPhone(domainID: string) {
  try {
    const response = await getPhone(domainID);
    if (response?.data.status) {
      return response.data.data;
    }
    return { phone: '' }; // Default value if data is missing
  } catch (error) {
    console.log(error);
    return { phone: '' }; // Default value if data is missing
  }
}
async function Footer() {
  const headersList = await headers();
  const host = headersList.get('host') || 'default';
  const phoneData = await fetchPhone(host);
  const getSocialIcon = (url: string) => {
    if (url.includes('twitter')) return 'fa-twitter';
    if (url.includes('facebook')) return 'fa-facebook';
    if (url.includes('instagram')) return 'fa-instagram';
    if (url.includes('linkedin')) return 'fa-linkedin';
    if (url.includes('youtube')) return 'fa-youtube';
    if (url.includes('tiktok')) return 'fa-tiktok';
    return 'fa-globe'; // Default icon if no match
  };
  return (
    <footer>
      <section className="section has-text-centered">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-offset-3">
              {phoneData.logo && (
                <Link href="/" aria-label="Home">
                  <img
                    src={phoneData.logo}
                    alt="Triposia Brand Logo"
                    loading="lazy"
                    width="150"
                    height="50"
                  />
                </Link>
              )}
              <p className="my-5" dangerouslySetInnerHTML={{ __html: phoneData.footer }} />
              <ul className="social-list" aria-label="Social Media Links">
                {phoneData.socialHandle.map((social: string, index: number) => (
                  <li key={index}>
                    <a href={social} aria-label={social} target="_blank" rel="noopener noreferrer">
                      <i className={`fa-brands ${getSocialIcon(social)}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="column is-12">
              <nav aria-label="Footer Navigation">
                <ul className="fot-link mt-4">
                  {phoneData.footerMenu.map((menu: FooterMenu, index: number) => {
                    return (
                      <li key={index}>
                        <Link href={`/page/${menu.slug}`} aria-label={menu.name}>
                          {' '}
                          {menu.name}{' '}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} Triposia. All Rights Reserved.
        </div>
      </section>
    </footer>
  );
}

export default Footer;

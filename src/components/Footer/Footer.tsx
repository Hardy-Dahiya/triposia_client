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
  return (
    <footer>
      <section className="section has-text-centered">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-offset-3">
              <Link href="/" aria-label="Home">
                <img
                  src="../../images/logo.png"
                  alt="Triposia Brand Logo"
                  loading="lazy"
                  width="150"
                  height="50"
                />
              </Link>
              <p className="my-5" dangerouslySetInnerHTML={{ __html: phoneData.footer }} />
              <ul className="social-list" aria-label="Social Media Links">
                <li>
                  <a href="#" aria-label="Facebook" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="YouTube" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </li>
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

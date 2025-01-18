import Link from 'next/link';

function Footer() {
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
              <p className="my-5">
                Please note that all data, content, and images are collected from various sources,
                and tripsearchs.com does not guarantee their originality. All media are sourced from
                third-party providers. If you have any complaints or concerns, please contact us at
                <a href="mailto:support@tripsearchs.com"> support@tripsearchs.com</a>.
              </p>
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
                  <li>
                    <Link href="/about" aria-label="Home">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/jobs" aria-label="Jobs">
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" aria-label="Blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/press" aria-label="Press">
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" aria-label="Careers">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" aria-label="Home">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" aria-label="Home">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" aria-label="Home">
                      Contact
                    </Link>
                  </li>
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

import { headers } from 'next/headers';
import Link from 'next/link';
import Phone from '../Phone/Phone';
import { getPhone } from '@/services/phone/PhoneServices';

interface FooterMenu {
  name: string;
  slug: string;
}

async function fetchPhone(host: string) {
  try {
    const response = await getPhone(host);
    if (response?.data.status) {
      return response.data.data;
    }
    return { phone: '' }; // Default value if data is missing
  } catch (error) {
    console.log(error);
    return { phone: '' }; // Default value if data is missing
  }
}

async function Header() {
  const headersList = await headers();
  const host = headersList.get('host') || 'default';
  const phoneData = await fetchPhone(host);
  console.log(host);
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" href="/">
              <img src="../../images/logo.png" alt="brand-logo" />
            </Link>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="true"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <div>
                {phoneData.upperMenu.map((menu: FooterMenu, index: number) => {
                  return (
                    <Link
                      key={index}
                      href={`/page/${menu.slug}`}
                      aria-label={menu.name}
                      className="navbar-item active"
                    >
                      {' '}
                      {menu.name}{' '}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="navbar-end">
              <ul className="right-nav">
                <li>
                  <a
                    href="JavaScript:void(0);"
                    className="js-modal-trigger"
                    data-target="modal-js-example"
                  >
                    <i className="fa-solid fa-indian-rupee-sign" />
                  </a>
                </li>
                <li>
                  <a
                    href="JavaScript:void(0);"
                    className="js-modal-trigger"
                    data-target="modal-js-example2"
                  >
                    <img src="../../images/indian-flag.png" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="JavaScript:void(0);"
                    className="js-modal-trigger"
                    data-target="modal-js-example3"
                  >
                    <i className="fa-regular fa-user" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-headset" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section className="search-wrap section">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <span className="title is-3">Find your next stay</span>
              <p className="subtitle is-6 min-mt-10 mb-2">
                <strong>Search deals on hotels, homes, and much more...</strong>
              </p>
            </div>
          </div>
          <div className="columns is-multiline searchfromwrap">
            <div className="column is-5">
              <div className="field">
                <div className="dropdown">
                  <div className="dropdown-trigger">
                    <p className="control has-icons-left">
                      <input
                        id="prova"
                        className="input"
                        type="text"
                        placeholder="Delhi"
                        aria-haspopup="true"
                        aria-controls="prova-menu"
                      />
                      <span className="icon is-small is-left">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                    </p>
                  </div>
                  <div className="dropdown-menu" id="prova-menu" role="menu"></div>
                </div>
              </div>
            </div>
            <div className="column is-3">
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    id="datepicker"
                    className="input"
                    type="text"
                    placeholder="Check-in Date - Check-out Date"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-calendar" />
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check" />
                  </span>
                </p>
              </div>
            </div>
            <div className="column is-3">
              <div className="booking-form__input guests-input">
                <i className="fa-regular fa-user" />
                <button name="guests-btn" id="guests-input-btn">
                  1 guest
                </button>
                <div className="guests-input__options" id="guests-input-options">
                  <div>
                    <span className="guests-input__ctrl minus" id="adults-subs-btn">
                      -
                    </span>
                    <span className="guests-input__value">
                      <span id="guests-count-adults">1</span>Adults
                    </span>
                    <span className="guests-input__ctrl plus" id="adults-add-btn">
                      +
                    </span>
                  </div>
                  <div>
                    <span className="guests-input__ctrl minus" id="children-subs-btn">
                      -
                    </span>
                    <span className="guests-input__value">
                      <span id="guests-count-children">0</span>Children
                    </span>
                    <span className="guests-input__ctrl plus" id="children-add-btn">
                      +
                    </span>
                  </div>
                  <div>
                    <span className="guests-input__ctrl minus" id="rooms-subs-btn">
                      -
                    </span>
                    <span className="guests-input__value">
                      <span id="guests-count-rooms">0</span>Rooms
                    </span>
                    <span className="guests-input__ctrl plus" id="rooms-add-btn">
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-1">
              <button className="button is-link">Search</button>
            </div>
          </div>
          <div style={{ clear: 'both' }} />
        </div>
      </section>
      <Phone />
    </header>
  );
}

export default Header;

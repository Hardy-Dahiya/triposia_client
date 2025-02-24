"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Phone from "../Phone/Phone";
import { getPhone } from "@/services/phone/PhoneServices";
import Script from "next/script";

interface PhoneAPIResponse {
  phone?: string;
  _id?: string;
  name?: string;
  desc?: string;
  logo?: string;
  domainId?: number;
  languageID?: string;
  meta?: string;
  status?: string;
  title?: string;
  keywords?: string;
  footer?: string;
  socialHandle?: string[];
  upperMenu?: FooterMenu[];
  footerMenu?: FooterMenu[];
}

interface FooterMenu {
  name: string;
  slug: string;
}

const Header = () => {
  const pathname = usePathname();
  const [phoneData, setPhoneData] = useState<PhoneAPIResponse>({
    desc: "",
    _id: "",
    phone: "",
    domainId: 2,
    meta: "",
    footer: "",
    languageID: "",
    status: "",
    title: "",
    keywords: "",
    footerMenu: [],
    upperMenu: [],
    logo: "",
    name: "",
    socialHandle: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const host = typeof window !== "undefined" ? window.location.hostname : "";
  const currentUrl = typeof window !== "undefined" ? `https://${host}${pathname}` : "";

  useEffect(() => {
    const fetchPhone = async () => {
      if (!host) return; // Don't fetch if host is empty
      
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await getPhone(host);
        if (response?.data?.status) {
          setPhoneData(response.data.data);
        } else {
          setError("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching phone data:", error);
        setError("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhone();
  }, [host]);

  const socialScripts = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": phoneData?.name || "TripOsia",
    "url": currentUrl,
    "logo": phoneData?.logo || "https://tripsearchs.com/images/logo.png",
    "sameAs": phoneData.socialHandle || []
  };

  if (isLoading) {
    return <div>Loading...</div>; // Add proper loading state UI
  }

  if (error) {
    return <div>Error: {error}</div>; // Add proper error state UI
  }

  return (
    <header>
      {/* JSON-LD Script for SEO */}
      <Script
        id="social-profiles"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialScripts) }}
      />

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
                {phoneData.upperMenu?.map((menu, index) => (
                  <Link key={index} href={`/page/${menu.slug}`} aria-label={menu.name} className="navbar-item active">
                    {menu.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="navbar-end">
              <ul className="right-nav">
                <li>
                  <a href="JavaScript:void(0);" className="js-modal-trigger" data-target="modal-js-example">
                    <i className="fa-solid fa-indian-rupee-sign" />
                  </a>
                </li>
                <li>
                  <a href="JavaScript:void(0);" className="js-modal-trigger" data-target="modal-js-example2">
                    <img src="../../images/indian-flag.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="JavaScript:void(0);" className="js-modal-trigger" data-target="modal-js-example3">
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
                      <input id="prova" className="input" type="text" placeholder="Delhi" aria-haspopup="true" aria-controls="prova-menu" />
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
                  <input id="datepicker" className="input" type="text" placeholder="Check-in Date - Check-out Date" />
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
                <button name="guests-btn" id="guests-input-btn">1 guest</button>
              </div>
            </div>

            <div className="column is-1">
              <button className="button is-link">Search</button>
            </div>
          </div>
          <div style={{ clear: "both" }} />
        </div>
      </section>

      <Phone />
    </header>
  );
};

export default Header;

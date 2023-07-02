// import ../../assets/styles/components/weather-card.scss;
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoYoutube, IoMdCamera } from "react-icons/io";

// helpers
import { HEADER_NAVIGATION_LINKS } from "./constans";

// assets
import "../../assets/styles/containers/header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="logo">
          <span className="logo-icon">
            <IoMdCamera />
          </span>
          <p className="logo-name">Just a moment</p>
        </Link>
        <nav className="header__navigation">
          {HEADER_NAVIGATION_LINKS.map((link, index) => (
            <Link
              key={`${index}-${link.label}`}
              to={link.value}
              className="header__link"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header__socials">
          <span className="header__socials-item">
            <FaFacebookF />
          </span>
          <span className="header__socials-item">
            <SlSocialInstagram />
          </span>
          <span className="header__socials-item">
            <IoLogoYoutube />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;

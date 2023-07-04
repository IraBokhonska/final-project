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
import Form from "../../components/Form";

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
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
          </span>
          <span className="header__socials-item">
            <a href="https://www.instagram.com/">
              <SlSocialInstagram />
            </a>
          </span>
          <span className="header__socials-item">
            <a href="https://www.youtube.com/">
              <IoLogoYoutube />
            </a>
          </span>
        </div>
      </div>
      <Form />
    </header>
  );
}

export default Header;

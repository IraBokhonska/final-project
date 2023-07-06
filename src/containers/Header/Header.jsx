import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoYoutube, IoMdCamera } from "react-icons/io";
import { HEADER_NAVIGATION_LINKS } from "./constans";

// assets
import "../../assets/styles/containers/header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="header__container">
        <div className="header__logo-menu">
          <Link to="/" className="logo">
            <span className="logo-icon">
              <IoMdCamera />
            </span>
            <p className="logo-name">Just a moment</p>
          </Link>
          <div className="menu-icon" onClick={toggleMenu}>
            <span className="menu-icon__line"></span>
            <span className="menu-icon__line"></span>
            <span className="menu-icon__line"></span>
          </div>
        </div>
        <nav className={`header__navigation ${isMenuOpen ? "open" : ""}`}>
          {HEADER_NAVIGATION_LINKS.map((link, index) => (
            <Link
              key={`${index}-${link.label}`}
              to={link.value}
              className="header__link"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header__socials">
          <span className="header__socials-item">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
          </span>
          <span className="header__socials-item">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SlSocialInstagram />
            </a>
          </span>
          <span className="header__socials-item">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoYoutube />
            </a>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;

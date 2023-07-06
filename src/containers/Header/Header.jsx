import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoYoutube, IoMdCamera } from "react-icons/io";
import { HEADER_NAVIGATION_LINKS } from "./constans";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// assets
import "../../assets/styles/containers/header.scss";

function Header() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-menu">
          <Link to="/" className="logo">
            <span className="logo-icon">
              <IoMdCamera />
            </span>
            <p className="logo-name">Just a moment</p>
          </Link>
        </div>
        <nav className={`header__navigation ${nav ? "active-menu" : ""}`}>
          {HEADER_NAVIGATION_LINKS.map((link, index) => (
            <Link
              key={`${index}-${link.label}`}
              to={link.value}
              className="header__link"
              onClick={toggleNav}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header__socials general-socials">
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
        <div
          onClick={toggleNav}
          className={`mobile_btn ${nav ? "active" : ""}`}
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HEADER_NAVIGATION_LINKS } from "./constans";

import Socials from "../../components/Socials";
import Logo from "../../components/Logo";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "../../assets/styles/containers/header.scss";

function Header() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="header" id="header">
      <div className="header__container">
        <Logo />
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
        <Socials />
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

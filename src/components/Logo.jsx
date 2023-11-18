import React from "react";
import { Link } from "react-router-dom";

import { IoMdCamera } from "react-icons/io";

function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo-icon">
        <IoMdCamera />
      </span>
      <p className="logo-name">Just a moment</p>
    </Link>
  );
}

export default Logo;

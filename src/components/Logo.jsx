import React from "react";
import { Link } from "react-router-dom";

import { IoMdCamera } from "react-icons/io";

function Logo() {
  return (
    <Link className="logo" onClick={() => (window.location.href = "#header")}>
      <span className="logo-icon">
        <IoMdCamera />
      </span>
      <p className="logo-name">Just Moment</p>
    </Link>
  );
}

export default Logo;

import React from "react";
import { Link } from "react-router-dom";
import { IoMdCamera } from "react-icons/io";

function Logo({ onClickFooter }) {
  const handleClick = () => {
    onClickFooter ? onClickFooter() : (window.location.href = "#header");
  };

  return (
    <Link className="logo" onClick={handleClick}>
      <span className="logo-icon">
        <IoMdCamera />
      </span>
      <p className="logo-name">Just Moment</p>
    </Link>
  );
}

export default Logo;

import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoYoutube } from "react-icons/io";

import "../../assets/styles/components/socials.scss";

const socials = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/",
  },
  {
    icon: <SlSocialInstagram />,
    href: "https://www.instagram.com/",
  },
  {
    icon: <IoLogoYoutube />,
    href: "https://www.youtube.com/",
  },
];

function Socials() {
  return (
    <div className="socials">
      {socials.map((item, index) => (
        <span key={index} className="socials__item">
          <a href={item.href} target="_blank" rel="noreferrer noopener">
            {item.icon}
          </a>
        </span>
      ))}
    </div>
  );
}
export default Socials;

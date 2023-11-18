import React from "react";

import Contacts from "./components/Contacts";
import Form from "./components/Form";
import Logo from "../../components/Logo";
import Socials from "../../components/Socials";

import "../../assets/styles/containers/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main" id="form">
        <Contacts />
        <Form />
      </div>
      <div className="footer__copyright copyright">
        <Logo />
        <Socials />
        <div className="divider"></div>
        <div className="copyright__item">© Created by</div>
        <div className="copyright__item">All rights Reserved</div>
      </div>
    </footer>
  );
}

export default Footer;

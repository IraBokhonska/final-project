import React from "react";

import Contacts from "../../components/Contacts";
import Form from "../../components/Form";

import "../../assets/styles/containers/footer.scss";

function Footer() {
  return (
    <footer className="footer" id="form">
      <div className="footer__main">
        <Contacts />
        <Form />
      </div>
    </footer>
  );
}

export default Footer;

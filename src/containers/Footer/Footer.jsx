import React from "react";
// assets
import "../../assets/styles/containers/footer.scss";

//components
import Contacts from "../../components/Contacts";
import Form from "../../components/Form";

function Footer() {
  return (
    <footer className="footer" id="form">
      <div className="footer__main container">
        <Contacts />
        <Form />
      </div>
    </footer>
  );
}

export default Footer;

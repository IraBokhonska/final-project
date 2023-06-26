import React from "react";

// containers
import Header from "../containers/Header";
import Footer from "../containers/Footer";

// assets
import "../assets/styles/layouts/general-layouts.scss";

function GeneralLayout({ children }) {
  return (
    <div className="general-layout">
      <Header />
      <main className="general-layout__page-content">{children}</main>
      <Footer />
    </div>
  );
}

export default GeneralLayout;

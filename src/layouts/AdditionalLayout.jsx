import React from "react";

// containers
import Header from "../containers/Header";

// assets
import "../assets/styles/layouts/general-layouts.scss";

function AdditionalLayout({ children }) {
  return (
    <div className="additional-layout">
      <Header />
      <main className="additional-layout__page-content">{children}</main>
    </div>
  );
}

export default AdditionalLayout;

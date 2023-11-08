import React from "react";

import Header from "../containers/Header";

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

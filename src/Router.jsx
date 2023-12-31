import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import GeneralLayout from "./layouts/GeneralLayout";
import AdditionalLayout from "./layouts/AdditionalLayout";

const renderWithLayout = (Component, Layout = GeneralLayout) => (
  <Layout>
    <Component />
  </Layout>
);

const Router = () => (
  <Routes>
    <Route path="/" element={renderWithLayout(HomePage)} />
    <Route path="/services" element={renderWithLayout(ServicesPage)} />
    <Route
      path="/gallery"
      element={renderWithLayout(GalleryPage, AdditionalLayout)}
    />
  </Routes>
);
export default Router;

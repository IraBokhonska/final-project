import React from "react";
import { Routes, Route } from "react-router-dom";

//pages

import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import GalleryPage from "./GalleryPage";

//layouts

import GeneralLayout from "../layouts/GeneralLayout";

const renderWithLayout = (Component, Layout = GeneralLayout) => (
  <Layout>
    <Component />
  </Layout>
);

const Router = () => (
  <Routes>
    <Route path="/" element={renderWithLayout(HomePage)} />
    <Route path="/services" element={renderWithLayout(ServicesPage)} />
    <Route path="/gallery" element={renderWithLayout(GalleryPage)} />
  </Routes>
);
export default Router;

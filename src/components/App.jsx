import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
// import MyNavigationBar from './MyNavigation';
import "../App.scss";
import Body from "./Body/Body";
import Experience from "./Experience/Experience";
import Spinner from "./Spinner/spinner";

import "../App_custom.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Body />} />
            <Route path="experience" element={<Experience />} />
            <Route path="test" element={<Spinner />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <MyNavigationBar /> 
  <Body /> */}
      {/* <Experience /> */}
    </>
  );
}

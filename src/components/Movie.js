import React from "react";
import { Route } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Footer } from "./footer/Footer";

import "./Movie.css";

export const Movie = () => {
  return (
  <>
    <Route>
      <NavBar />
      <ApplicationViews />
      <Footer />
    </Route>
  </>
);
}
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import "./Movie.css";

export const Movie = () => {
  return (
  <>
    <Route>
      <NavBar />
      <ApplicationViews />
    </Route>
  </>
);
}

// export const Movie = () => (
//   <>
//     {/* <Route
//       render={() => {
//         if (localStorage.getItem("kennel_customer")) {
//           return (
//             <> */}
//               <NavBar />
//               <ApplicationViews />
//             {/* </>
//           );
//         } else {
//           return <Redirect to="/login" />;
//         }
//       }}
//     /> */}

//     {/* <Route path="/login">
//       <Login />
//     </Route>
//     <Route path="/register">
//       <Register />
//     </Route> */}
//   </>
// );

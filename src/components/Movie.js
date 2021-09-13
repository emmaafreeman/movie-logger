import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import "./Movie.css";
import { getAuth } from "firebase/auth"
import firebase from "firebase/compat/app"; // use firebase dependency
import "firebase/compat/auth";
import { api } from "../api/dataAccess";

// export const Movie = () => {
//   return (
//   <>
//     <Route>
//       <NavBar />
//       <ApplicationViews />
//     </Route>
//   </>
// );
// }



export const Movie = () => {
  const [user, setUser] = useState(null);

  const checkIfUserExists = (userAuth) => {
    const user = {
      fullName: userAuth.displayName,
      email: userAuth.email,
      uid: userAuth.uid,
      dateVisited: new Date(),
    };
    api.getSingleRequest("users", "uid", user.uid).then((data) => {
      if (data === "Nope" || data === null) {
        api.postRequest("users", user).then((user) => {
          setUser(user);
        });
      } else {
        setUser(user);
      }
    });
  };
  
  firebase.auth().onAuthStateChanged((authed) => {
    if (authed) {
      checkIfUserExists(authed);
    }
    // setUser(null);
  });
  
  return (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("kennel_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      {/* <Login /> */}
    </Route>
  </>
);
    }
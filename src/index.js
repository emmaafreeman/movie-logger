import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import { Movie } from './components/Movie.js';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import { firebaseConfig } from "./apiKeys";
import { googleAuth } from "./auth/googleAuth.js"
// import { CheckAuth } from "./auth/checkAuth.js"

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    {/* <CheckAuth /> */}
    <Router>
      <Movie />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

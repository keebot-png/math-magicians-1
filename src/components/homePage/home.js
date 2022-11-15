/* eslint-disable max-len */
import React from 'react';
import './home.css';

const HomePage = () => (
  <div className="home-container">
    <h1 className="title">
      Welcome to our page!
    </h1>
    <br />
    <p className="home-text">
      Here is a calculator app that has successfully been built using the React framework. It has all the necessary and basic components that are suited for essential math functions.
    </p>
    <br />
    <p className="home-text">
      The home page provides an explaination of the webapp features, which includes: a functional calculator and a random quote generator that changes every time the navbar link is clicked.
    </p>
  </div>
);

export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container">
      <h1 className="welcome">Countries APP</h1>
      <h3 className="info">all information about countries!</h3>
      <div>
        <div>
          <img className="country" src="https://cdn.picpng.com/flags/countries-country-flags-globe-58974.png" alt="" style={{height:"400px"}}/>
        </div>
        <Link to="/home">
          <button className="button-landing">Let´s Go!</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

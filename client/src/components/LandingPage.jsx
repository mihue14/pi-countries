import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
      <div className="container-landing">
        <h1>Countries APP</h1>
        <h3>all about countries!</h3>
        <Link to="/home">
          <button>Let´s Go!</button>
        </Link>
      </div>
  );
};

export default LandingPage;

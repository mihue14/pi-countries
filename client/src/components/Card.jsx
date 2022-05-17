import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ flag, name, continent, id }) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <img
          className="flag"
          src={flag}
          alt="flag"
          style={{
            minHeight: "200px",
            maxHeight: "200px",
            minWidth: "300px",
            maxWidth: "300px",
          }}
        />
      </Link>
      <h3 className="name">{name}</h3>
      <h5 className="continent">{continent}</h5>
    </div>
  );
};

export default Card;

import React from "react";
import { Link } from "react-router-dom";

const Card = ({ flag, name, continent, id }) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <img
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
      <h3>{name}</h3>
      <h5>{continent}</h5>
    </div>
  );
};

export default Card;

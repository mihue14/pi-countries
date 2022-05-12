import React from "react";

const Paged = ({ countriesPerPage, setCountriesPerPage, allCountries, currentPage, prev, next }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  

  return (
    <div>
      <nav>
        <ul>
          <button onClick={prev}>{"<"}</button>
          {
            pageNumbers && <button>{currentPage}</button>
          }
          <button onClick={next}>{">"}</button>
        </ul>
      </nav>
    </div>
  );
};

export default Paged;

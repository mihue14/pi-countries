import React from "react";
import "./Paged.css";

const Paged = ({ countriesPerPage, setCountriesPerPage, allCountries, paged, currentPage, prev, next, waitePaged }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  let lastPage = pageNumbers.length

  return (
    <div>
      <nav className="root-paged">
        <ul>
          <button onClick={currentPage > 1 ? () => {paged(1); waitePaged()} : null} className="page">{"<<"}</button>
          <button onClick={currentPage > 1 ? () => {prev(); waitePaged()} : null} className="page">{"<"}</button>
          {
            pageNumbers?.map((e) => {
              return (
                <button onClick={() => {paged(e); waitePaged()}} className={currentPage === e ? "current-page" : "page"}>{e}</button>
              )
            })
          }
          <button onClick={currentPage < lastPage ? () => {next(); waitePaged()} : null} className="page">{">"}</button>
          <button onClick={currentPage < lastPage ? () => {paged(lastPage); waitePaged()} : null} className="page">{">>"}</button>
        </ul>
      </nav>
    </div>
  );
};

export default Paged;

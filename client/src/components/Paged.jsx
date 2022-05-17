import React from "react";

const Paged = ({ countriesPerPage, setCountriesPerPage, allCountries, paged, currentPage, prev, next }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  let lastPage = pageNumbers.length

  return (
    <div>
      <nav>
        <ul>
          <button onClick={() => paged(1)}>{"<<"}</button>
          <button onClick={prev}>{"<"}</button>
          {
            pageNumbers?.map((e) => {
              return (
                <button onClick={() => paged(e)}>{e}</button>
              )
            })
          }
          <button onClick={currentPage < lastPage ? next : null}>{">"}</button>
          <button onClick={() => paged(lastPage)}>{">>"}</button>
        </ul>
      </nav>
    </div>
  );
};

export default Paged;

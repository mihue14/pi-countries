import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import {
  getCountries,
  filterByContinent,
  filterByActivity,
  getActivities,
  orderByAlphabetically,
  orderByPopulation,
} from "../redux/actions";
import Card from "./Card";
import Paged from "./Paged";
import SearchBar from "./SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const paged = (n) => {
    setCurrentPage(n);
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage < 25) {
      setCurrentPage(currentPage + 1);
    }
  };

  const refresh = (e) => {
    e.preventDefault();
    dispatch(getCountries());
    paged(1);
  };

  const handleFilterByContinent = (e) => {
    e.preventDefault();
    dispatch(filterByContinent(e.target.value));
    paged(1);
  };

  const handleFilterByActivity = (e) => {
    e.preventDefault();
    dispatch(filterByActivity(e.target.value));
    paged(1);
  };

  const [order, setOrder] = useState("");

  const handleOrderByAlphabetically = (e) => {
    e.preventDefault();
    dispatch(orderByAlphabetically(e.target.value));
    paged(1);
    setOrder(`Order ${e.target.value}`);
  };

  const handleOrderByPopulation = (e) => {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    paged(1);
    setOrder(`Order ${e.target.value}`);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);
  return (
    <div>
      <div>
        <SearchBar paged={paged} />
        <button onClick={refresh}>Refresh 🔄</button>
        <button onClick={() => history.push("/create")}>Create activity</button>
      </div>

      <div>
        <select onChange={(e) => handleFilterByContinent(e)}>
          <option disabled selected>
            Filter by continent
          </option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
        </select>

        <select onChange={(e) => handleFilterByActivity(e)}>
          <option disabled selected>
            Filter by activity
          </option>
          {allActivities.length ? (
            allActivities.map((e) => {
              return <option value={e.name}>{e.name}</option>;
            })
          ) : (
            <option disabled="true">No activities created</option>
          )}
        </select>
      </div>

      <div>
        <select onChange={(e) => handleOrderByAlphabetically(e)}>
          <option disabled selected>
            Alphabetically
          </option>
          <option value="AtoZ">A-Z</option>
          <option value="ZtoA">Z-A</option>
        </select>

        <select onChange={(e) => handleOrderByPopulation(e)}>
          <option disabled selected>
            Population
          </option>
          <option value="StoB">Smallest countries to biggest</option>
          <option value="BtoS">Biggest countries to smallest</option>
        </select>
      </div>

      <Paged
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        paged={paged}
        currentPage={currentPage}
        setCountriesPerPage={setCountriesPerPage}
        prev={prev}
        next={next}
      />
      {currentCountries.length ? (
        currentCountries.map((c) => {
          return (
            <div>
                <Card flag={c.flag} name={c.name} continent={c.continent} id={c.id}/>
            </div>
          );
        })
      ) : (
        <div>error</div>
      )}
    </div>
  );
};

export default Home;

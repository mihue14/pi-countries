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
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
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
    setCurrentPage(currentPage - 1);
  };

  const next = () => {
    setCurrentPage(currentPage + 1);
  };

  const refresh = (e) => {
    e.preventDefault();
    dispatch(getCountries());
    paged(1);
    waiteRefresh();
  };

  const handleFilterByContinent = (e) => {
    e.preventDefault();
    dispatch(filterByContinent(e.target.value));
    paged(1);
    waite();
  };

  const handleFilterByActivity = (e) => {
    e.preventDefault();
    dispatch(filterByActivity(e.target.value));
    paged(1);
    waite();
  };

  const [order, setOrder] = useState("");

  const handleOrderByAlphabetically = (e) => {
    e.preventDefault();
    dispatch(orderByAlphabetically(e.target.value));
    paged(1);
    setOrder(`Order ${e.target.value}`);
    waite();
  };

  const handleOrderByPopulation = (e) => {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    paged(1);
    setOrder(`Order ${e.target.value}`);
    waite();
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [dispatch]);

  const waite = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const waiteRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  const waitePaged = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <div>
      <div className="navbar">
        <button
          onClick={() => history.push("/create")}
          className="buttonCreate"
        >
          Create activity
        </button>
        <SearchBar paged={paged} waite={waite} />
      </div>

      <div className="root-filters">
        <button onClick={refresh} className="refreshDog">
          Refresh 🔄
        </button>
        <div>
          <select
            onChange={(e) => handleFilterByContinent(e)}
            className="filterContinent"
          >
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

          <select
            onChange={(e) => handleFilterByActivity(e)}
            className="filterActivity"
          >
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
          <select
            onChange={(e) => handleOrderByAlphabetically(e)}
            className="orderName"
          >
            <option disabled selected>
              Alphabetically
            </option>
            <option value="AtoZ">A-Z</option>
            <option value="ZtoA">Z-A</option>
          </select>

          <select
            onChange={(e) => handleOrderByPopulation(e)}
            className="orderPopulation"
          >
            <option disabled selected>
              Population
            </option>
            <option value="StoB">Smallest countries to biggest</option>
            <option value="BtoS">Biggest countries to smallest</option>
          </select>
        </div>
      </div>

      <Paged
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        paged={paged}
        currentPage={currentPage}
        setCountriesPerPage={setCountriesPerPage}
        prev={prev}
        next={next}
        waitePaged={waitePaged}
      />
      {loading ? (
        <div style={{ marginLeft: "900px", marginTop: "200px" }}>
          Loading...
        </div>
      ) : currentCountries.length ? (
        currentCountries.map((c) => {
          return (
            <div className="card">
              <Card
                flag={c.flag}
                name={c.name}
                continent={c.continent}
                id={c.id}
              />
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

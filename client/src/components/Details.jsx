import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteActivity, getCountryByID } from "../redux/actions";

const Details = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = props.match.params;

  const confirmMessage = <div>
    This activity maybe in other countries. 
    <span>Delete activity?</span>
  </div>

  useEffect(() => {
    dispatch(getCountryByID(id));
  }, [dispatch, id]);

  const country = useSelector((state) => state.detail);

  return (
    <div>
      <img src={country.flag} alt="flag" />
      <h1>Country: {country.name}</h1>
      <h2>ID: {country.id}</h2>
      <h2>Continent: {country.continent}</h2>
      <h3>Capital: {country.capital}</h3>
      <h3>Subregion: {country.subregion}</h3>
      <h3>Area: {country.area}</h3>
      <h3>Population: {country.population}</h3>
      <div>
        {
        country.activities && country.activities[0] ? (
          country.activities.map((e) => {
            const id = e.id
            return (
              <div>
                <h3>Name: {e.name}</h3>
                <h3>Duration: {e.duration} min</h3>
                <h3>Difficulty: {e.difficulty}</h3>
                <h3>Season: {e.season}</h3>
                <button onClick={() => {
                  console.log(confirmMessage)
                  if (window.confirm("This activity maybe in other countries.\nDelete activity?")) {
                    dispatch(deleteActivity(id));
                    alert("Activity deleted!")
                    window.location.reload()
                  } 
                }}>delete activity</button>
              </div>
            );
          })
        ) : (
          <div>
            <h3>This country has not activities created</h3>
            <button onClick={() => history.push("/create")}>Create</button>
          </div>
        )}
      </div>
      <div>
          <button onClick={() => history.push("/home")}>Back</button>
      </div>
    </div>
  );
};

export default Details;

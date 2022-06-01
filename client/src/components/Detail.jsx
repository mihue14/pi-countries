import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteActivity,
  deleteCountryDetail,
  getCountryByID,
  modifyActivity,
} from "../redux/actions";
import "./Detail.css";

const Details = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = props.match.params;
  const country = useSelector((state) => state.detail);
  const [input, setInput] = useState({
    name: "",
    duration: "",
    difficulty: "",
    season: "",
  });

  const confirmMessage = (
    <div>
      This activity maybe in other countries.
      <span>Delete activity?</span>
    </div>
  );

  useEffect(() => {
    dispatch(getCountryByID(id));
    return () => {
      dispatch(deleteCountryDetail())
    }
  }, [dispatch, id]);

  return (
    <div className="detail-container">
      {console.log(country)}
      {
        country.name ? 
        <>
        <img src={country.flag} alt="flag" className="detail-flag" />
        <h1 className="detail-name">Country: {country.name}</h1>
        <h2 className="detail-id">ID: {country.id}</h2>
        <h2 className="detail-continent">Continent: {country.continent}</h2>
        <h3 className="detail-capital">Capital: {country.capital}</h3>
        <h3 className="detail-subregion">Subregion: {country.subregion}</h3>
        <h3 className="detail-area">
          Area: {country.area} km<sup>2</sup>
        </h3>
        <h3 className="detail-population">
          Population: {country.population} inhabitants
        </h3>
        <div>
          <button
            onClick={() => history.push("/home")}
            className="detail-backButton"
          >
            Back
          </button>
        </div>
        <div className="detail-activity">
          <h1 style={{ color: "yellow" }}>Activities</h1>
          {country.activities && country.activities[0] ? (
            country.activities.map((e) => {
              const id = e.id;
              return (
                <div>
                  <h3 className="inputName-change">
                    <span style={{width:"180px"}}>Name: {e.name}</span>
                    {
                      <div style={{marginRight:"300px"}}>
                        <input
                          type="text"
                          placeholder="Enter a new name..."
                          style={{borderRadius:"5px"}}
                          onChange={(e) => setInput({ name: e.target.value })}
                        />
                        <button
                          onClick={() => {
                            const nameVal = new RegExp(
                              /^([a-zA-Z]|[^0-9]\\S)([^0-9]*){1,}$/
                            );
  
                            if (!input.name)
                              return alert("Enter a new name please.");
                            if (!nameVal.test(input.name))
                              return alert("The name can only contain letters");
                            else {
                              let aux = input.name.toLowerCase();
                              input.name = aux[0].toUpperCase() + aux.slice(1);
                              dispatch(modifyActivity(id, input));
                              alert("Name changed");
                              window.location.reload();
                            }
                          }}
                          style={{backgroundColor:"yellow", borderRadius:"10px", cursor:"pointer"}}
                          >
                          Change
                        </button>
                        </div>
                    }
                  </h3>
                  <h3 className="inputDuration-change">
                  <span style={{width:"180px"}}>Duration: {e.duration} min</span>
                    {
                      <div style={{marginRight:"300px"}}>
                        <input
                          type="text"
                          style={{borderRadius:"5px"}}
                          placeholder="Enter a new duartion..."
                          onChange={(e) => setInput({ duration: e.target.value })}
                        />
                        <button
                          onClick={() => {
                            const durationVal = new RegExp(/^[0-9]*(\.?)[0-9]+$/);
  
                            if (!input.duration)
                              return alert("Enter a new duration please.");
                            if (!durationVal.test(input.duration))
                              return alert(
                                "The duration can only contain numbers"
                              );
                            if (input.duration < 1)
                              return alert(
                                "Enter a duration greater than 1 please."
                              );
                            else {
                              dispatch(modifyActivity(id, input));
                              alert("Duration changed");
                              window.location.reload();
                            }
                          }}
                          style={{backgroundColor:"yellow", borderRadius:"10px", cursor:"pointer"}}
                          >
                          Change
                        </button>
                      </div>
                    }
                  </h3>
                  <h3 className="inputDifficulty-change">
                  <span style={{width:"180px"}}>Difficulty: {e.difficulty}</span>
                    {
                      <div style={{marginRight:"300px"}}>
                        <input
                          style={{borderRadius:"5px"}}
                          type="text"
                          placeholder="Enter a new difficulty..."
                          onChange={(e) =>
                            setInput({ difficulty: e.target.value })
                          }
                        />
                        <button
                          onClick={() => {
                            const difficultyVal = new RegExp(
                              /^[0-9]*(\.?)[0-9]+$/
                            );
  
                            if (!input.difficulty)
                              return alert("Enter a new difficulty please.");
                            if (!difficultyVal.test(input.difficulty))
                              return alert(
                                "The difficulty can only contain numbers"
                              );
                            if (input.difficulty < 1 || input.difficulty > 5)
                              return alert(
                                "Enter a difficulty from 1 to 5 please."
                              );
                            else {
                              dispatch(modifyActivity(id, input));
                              alert("Difficulty changed");
                              window.location.reload();
                            }
                          }}
                          style={{backgroundColor:"yellow", borderRadius:"10px", cursor:"pointer"}}
                        >
                          Change
                        </button>
                      </div>
                    }
                  </h3>
                  <h3 className="inputSeason-change">
                  <span style={{width:"180px"}}>Season: {e.season}</span>
                    {
                      <div style={{marginRight:"300px"}}>
                      <select
                        onChange={(e) => {
                          setInput({
                            season: e.target.value,
                          });
                        }}
                        style={{width:"182px",borderRadius:"5px"}}
                      >
                        <option value="" disabled selected>
                          Enter a new season
                        </option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                      </select>
                      <button onClick={() => {
                        if (!input.season) return alert("Enter a new season please.");
                        dispatch(modifyActivity(id, input));
                        alert("Season changed")
                        window.location.reload();
                      }}
                      style={{backgroundColor:"yellow", borderRadius:"10px", cursor:"pointer"}}
                      >Change</button>
                      </div>
                    }
                  </h3>
                  <button
                    onClick={() => {
                      console.log(confirmMessage);
                      if (
                        window.confirm(
                          "This activity maybe in other countries.\nDelete activity?"
                        )
                      ) {
                        dispatch(deleteActivity(id));
                        alert("Activity deleted!");
                        window.location.reload();
                      }
                    }}
                    className="detail-deleteButton"
                    style={{marginLeft:"5px", margin:"10px",borderRadius:"5px"}}
                  >
                    delete activity
                  </button>
                </div>
              );
            })
          ) : (
            <div>
              <h3 className="detail-activityError">
                This country has not activities created
              </h3>
              <button
                onClick={() => history.push("/create")}
                className="detail-createActivity"
              >
                Create
              </button>
            </div>
          )}
        </div>
        </> : <div style={{color:"white"}}>Loading...</div>
      }
    </div>
  );
};

export default Details;

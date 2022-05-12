import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCountries, postActivity } from "../redux/actions";

const validate = (input) => {
  let error = {};
  const nameVal = new RegExp(/^([a-zA-Z]|[^0-9]\S)([^0-9]*){1,}$/);
  if (!input.name) {
    error.name = "name required";
  } else if (!nameVal.test(input.name)) {
    error.nameValidate = "the name can only contain letters";
  } else if (!input.difficulty) {
    error.difficulty = "difficulty required";
  } else if (!input.duration) {
    error.duration = "duration required";
  } else if (!input.season) {
    error.season = "season required";
  } else if (!input.country) {
    error.country = "country required";
  }

  return error;
};

const ActivityCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const countries = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.value]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    if (input.country.includes(e.target.value))
      return alert("Select another country please...");
    setInput({
      ...input,
      country: [...input.country, e.target.value],
    });
  };

  const handleDelete = (el) => {
    setInput({
      ...input,
      country: input.country.filter((c) => c !== el),
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!input.country.length) return alert("Select a country please...");
    else {
      let aux = input.name.toLowerCase();
      dispatch(
        postActivity({
          name: aux[0].toUpperCase() + aux.slice(1),
          difficulty: input.difficulty,
          duration: input.duration,
          season: input.season,
          country: input.country,
        })
      );
      alert("Activity created!");
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: [],
      });
      history.push("/home");
    }
  };
{console.log(input)}

  return (
    <div>
      <form onSubmit={(e) => handleSumbit(e)}>
        <h1>Create Activity</h1>

        <div>
          <label>Name: </label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Difficulty: </label>
          <input
            type="number"
            value={input.difficulty}
            name="difficulty"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Duration: </label>
          <input
            type="number"
            value={input.duration}
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Season: </label>
          <select name="season" onChange={handleChange}>
              <option disabled selected>Select a season</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
          </select>
        </div>
        <div>
          <label>Country: </label>
          <select onChange={(e) => handleSelect(e)}>
            <option disabled selected>
              Select a country
            </option>
            {countries.map((e) => {
              return <option value={e.name}>{e.name}</option>;
            })}
          </select>
          <ul>
            {input.country.map((el) => {
              return (
                <div key={el}>
                  {el}
                  <button onClick={() => handleDelete(el)}>x</button>
                </div>
              );
            })}
          </ul>
        </div>
        <div>
          <button>Create 🌍</button>
        </div>
      </form>
      <div>
          <button onClick={() => history.push("/home")}>Back</button>
      </div>
    </div>
  );
};

export default ActivityCreate;

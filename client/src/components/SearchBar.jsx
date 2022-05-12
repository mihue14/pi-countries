import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../redux/actions";

const SearchBar = ({ paged }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    if (name) {
      e.preventDefault();
      dispatch(getCountryByName(name));
      paged(1);
      setName("");
    } else {
      e.preventDefault();
      alert("Enter a country please...");
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleInputChange(e)}
          className="input"
          value={name}
        />
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="button"
        >
          🔎
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

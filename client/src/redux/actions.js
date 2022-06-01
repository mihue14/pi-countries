import axios from "axios";
import {
  DELETE_COUNTRY_DETAIL,
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_ALL_ACTIVITIES,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_COUNTRY_BY_NAME,
  ORDER_BY_AZ,
  ORDER_BY_POPULATION,
} from "./actions-types";

export const getCountries = () => {
  return (dispatch) => {
    axios.get("/countries").then(e => {
      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: e.data
      })
    })
  }

  // return async (dispatch) => {
  //   let json = await axios.get("http://localhost:3001/countries");

  //   return dispatch({
  //     type: GET_ALL_COUNTRIES,
  //     payload: json.data,
  //   });
  // };
};

export const getActivities = () => {
  return async (dispatch) => {
    let json = await axios.get("/activities");

    return dispatch({
      type: GET_ALL_ACTIVITIES,
      payload: json.data,
    });
  };
};

export const postActivity = (payload) => {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "/activities/create",
        payload
      );
      return json;
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteActivity = (id, payload) => {
  return async function (dispatch) {
    try {
      let json = await axios.delete(
        `/activities/delete/${id}`, payload
      );
      return json;
    } catch (error) {
      console.log(error);
    }
  };
};

export const modifyActivity = (id, payload) => {
  return async function (dispatch) {
    try {
      let json = await axios.put(`/activities/modify/${id}`, payload);
      return json;
    }
    catch (error) {
      console.log(error)
    }
  }
}

export const getCountryByName = (name) => {
  return async (dispatch) => {
    try {
      let json = await axios.get(
        `/countries?name=${name}`
      );
      return dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: json.data,
      });
    } catch {
      alert("Country not found");
    }
  };
};

export const getCountryByID = (id) => {
  return async (dispatch) => {
    let json = await axios.get(`/countries/${id}`);
    return dispatch({
      type: GET_COUNTRY_BY_ID,
      payload: json.data,
    });
  };
};

export const deleteCountryDetail = (payload) => {
  return {
    type: DELETE_COUNTRY_DETAIL,
    payload
  }
}

export const filterByContinent = (payload) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
};

export const filterByActivity = (payload) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  };
};

export const orderByAlphabetically = (payload) => {
  return {
    type: ORDER_BY_AZ,
    payload,
  };
};

export const orderByPopulation = (payload) => {
  return {
    type: ORDER_BY_POPULATION,
    payload,
  };
};

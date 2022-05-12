import {
  DELETE_ACTIVITY,
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_ALL_ACTIVITIES,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_COUNTRY_BY_NAME,
  ORDER_BY_AZ,
  ORDER_BY_POPULATION,
  POST_ACTIVITY,
} from "./actions-types";

const initialState = {
  allCountries: [],
  countries: [],
  activities: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        countries: action.payload,
      };

    case GET_ALL_ACTIVITIES:
      return { ...state, activities: action.payload };

    case POST_ACTIVITY:
      return { ...state };

    case DELETE_ACTIVITY:
      return { ...state, countries: action.payload };

    case GET_COUNTRY_BY_NAME:
      return { ...state, countries: action.payload };

    case GET_COUNTRY_BY_ID:
      return { ...state, detail: action.payload };

    case FILTER_BY_CONTINENT:
      const allcountries = state.allCountries;
      const filterbycontinent = () => {
        switch (action.payload) {
          case "All":
            return allcountries;
          case "South America":
            return allcountries.filter((e) => e.continent === action.payload);
          case "North America":
            return allcountries.filter((e) => e.continent === action.payload);
          case "Antarctica":
            return allcountries.filter((e) => e.continent === action.payload);
          case "Africa":
            return allcountries.filter((e) => e.continent === action.payload);
          case "Asia":
            return allcountries.filter((e) => e.continent === action.payload);
          case "Europe":
            return allcountries.filter((e) => e.continent === action.payload);
          default:
            return allcountries;
        }
      };
      return {
        ...state,
        countries: filterbycontinent(),
      };

    case FILTER_BY_ACTIVITY:
      const allcountries2 = state.allCountries;
      const filterbyactivity = [];
      for (let i = 0; i < allcountries2.length; i++) {
        if (allcountries2[i].activities.length) {
          for (let j = 0; j < allcountries2[i].activities.length; j++) {
            if (allcountries2[i].activities[j].name === action.payload) {
              filterbyactivity.push(allcountries2[i]);
            }
          }
        }
      }
      return {
        ...state,
        countries: filterbyactivity,
      };

    case ORDER_BY_AZ:
      const allcountries4 = state.allCountries;
      const orderbyalphabetically = allcountries4.sort((a, b) => {
        if (action.payload === "AtoZ") {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        } else if (action.payload === "ZtoA") {
          if (a.name > b.name) {
            return -1;
          } else if (a.name < b.name) {
            return 1;
          } else {
            return 0;
          }
        }
      });
      return { ...state, countries: orderbyalphabetically };

    case ORDER_BY_POPULATION:
      const allcountries5 = state.allCountries;
      const orderbypopulation = allcountries5.sort((a, b) => {
        if (action.payload === "StoB") {
          if (a.population < b.population) {
            return -1;
          } else if (a.population > b.population) {
            return 1;
          } else {
            return 0;
          }
        } else if (action.payload === "BtoS") {
          if (a.population > b.population) {
            return -1;
          } else if (a.population < b.population) {
            return 1;
          } else {
            return 0;
          }
        }
      });

      return { ...state, countries: orderbypopulation };

    default:
      return state;
  }
}

export default rootReducer;

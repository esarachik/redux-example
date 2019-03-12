import {
  UPDATE_COUNTRY,
  UPDATE_BAND,
  UPDATE_GENRE,
  UPDATE_LABEL,
  UPDATE_NAME,
  UPDATE_YEAR,
  FETCH_BANDS,
  FETCH_GENRES,
  FETCH_COUNTRIES,
  FETCH_LABELS,
  BEGIN_ADD_DISC,
  ADD_DISC_SUCCESS,
  ADD_DISC_FAILURE
} from "../actions/types";

const initialState = {
  name: "",
  year: "",
  countries: [],
  country: {},
  bands: [],
  band: {},
  genres: [],
  genre: {},
  labels: [],
  label: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_COUNTRY:
      return {
        ...state,
        country: action.country
      };
    case UPDATE_BAND:
      return {
        ...state,
        band: action.band
      };
    case UPDATE_GENRE:
      return {
        ...state,
        genre: action.genre
      };
    case UPDATE_LABEL:
      return {
        ...state,
        label: action.label
      };
    case FETCH_BANDS:
      return {
        ...state,
        bands: action.bands
      };
    case FETCH_GENRES:
      return {
        ...state,
        genres: action.genres
      };
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.countries
      };
    case FETCH_LABELS:
      return {
        ...state,
        labels: action.labels
      };
    case UPDATE_YEAR:
      return {
        ...state,
        year: action.year
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: action.name
      };
    case BEGIN_ADD_DISC:
      return {
        ...state,
        loading: action.loading
      };
    case ADD_DISC_SUCCESS:
      return {
        ...state,
        disc: action.disc,
        loading: action.loading
      };
    case ADD_DISC_FAILURE:
      return {
        ...state,
        loading: action.loading
      };  
    default:
      return state;
  }
}

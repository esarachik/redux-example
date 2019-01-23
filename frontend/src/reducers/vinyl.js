import {
  UPDATE_COUNTRY,
  UPDATE_BAND,
  UPDATE_GENRE,
  UPDATE_LABEL,
  FETCH_BANDS,
  FETCH_GENRES,
  FETCH_COUNTRIES,
  FETCH_LABELS
} from "../actions/types";

const initialState = {
  countries: [],
  country: {},
  bands: [],
  band: {},
  genres: [],
  genre: {},
  labels: [],
  label: {},
  tracks: []
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
    default:
      return state;
  }
}

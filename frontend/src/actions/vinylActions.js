import {
  UPDATE_COUNTRY,
  UPDATE_BAND,
  UPDATE_GENRE,
  UPDATE_LABEL,
  FETCH_COUNTRIES,
  FETCH_LABELS,
  FETCH_BANDS,
  FETCH_GENRES
} from "./types";

export const updateCountry = country => dispatch => {
  dispatch({
    type: UPDATE_COUNTRY,
    country: country
  });
};

export const updateBand = band => dispatch => {
  dispatch({
    type: UPDATE_BAND,
    band
  });
};

export const updateGenre = genre => dispatch => {
  dispatch({
    type: UPDATE_GENRE,
    genre
  });
};

export const updateLabel = label => dispatch => {
  dispatch({
    type: UPDATE_LABEL,
    label
  });
};

export const fetchCountries = () => dispatch => {
  fetch("http://localhost:3000/countries")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_COUNTRIES,
        countries: data
      });
    });
};
export const fetchBands = () => dispatch => {
  fetch("http://localhost:3000/bands")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_BANDS,
        bands: data
      });
    });
};
export const fetchLabels = () => dispatch => {
  fetch("http://localhost:3000/labels")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_LABELS,
        labels: data
      });
    });
};
export const fetchGenres = () => dispatch => {
  fetch("http://localhost:3000/genres")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_GENRES,
        genres: data
      });
    });
};

import {
  UPDATE_COUNTRY,
  UPDATE_BAND,
  UPDATE_GENRE,
  UPDATE_LABEL,
  FETCH_COUNTRIES,
  FETCH_LABELS,
  FETCH_BANDS,
  FETCH_GENRES,
  UPDATE_YEAR,
  UPDATE_NAME,
  BEGIN_ADD_DISC,
  ADD_DISC_SUCCESS,
  ADD_DISC_FAILURE,
  SET_LOADING
} from "./types";
import { get } from "../helpers/fetch";

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

export const updateName = name => dispatch => {
  dispatch({
    type: UPDATE_NAME,
    name
  });
};

export const updateYear = year => dispatch => {
  dispatch({
    type: UPDATE_YEAR,
    year
  });
};

export const fetchCountries = () => dispatch => {
  get("countries").then(data => {
    dispatch({
      type: FETCH_COUNTRIES,
      countries: data
    });
  });
};
export const fetchBands = () => dispatch => {
  get("bands").then(data => {
    dispatch({
      type: FETCH_BANDS,
      bands: data
    });
  });
};
export const fetchLabels = () => dispatch => {
  get("labels").then(data => {
    dispatch({
      type: FETCH_LABELS,
      labels: data
    });
  });
};
export const fetchGenres = () => dispatch => {
  get("genres").then(data => {
    dispatch({
      type: FETCH_GENRES,
      genres: data
    });
  });
};

const addDiscSuccess = track => dispatch => {
  dispatch({
    type: ADD_DISC_SUCCESS,
    disc: track.newDisc,
    loading: false
  });
};

const addTrackFailure = () => dispatch => {
  dispatch({
    type: ADD_DISC_FAILURE,
    loading: false
  });
};

export const addDisc = ({
  name,
  band,
  year,
  genre,
  label,
  country,
  tracks
}) => dispatch => {
  dispatch({
    type: BEGIN_ADD_DISC,
    loading: true
  });

  fetch("http://localhost:3000/disc", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      band: band,
      year: year,
      genre: genre,
      label: label,
      country: country,
      tracks: tracks.map(element => element._id)
    })
  })
    .then(res => res.json())
    .then(data => {
      addDiscSuccess(data.newDisc);
    })
    .catch(error => {
      addTrackFailure();
    });
};

export const setLoading = loading => dispatch => {
  dispatch({
    type: SET_LOADING,
    loading
  });
};


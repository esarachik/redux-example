import {
  BEGIN_ADD_TRACK,
  ADD_TRACK_SUCCESS,
  ADD_TRACK_FAILURE,
  REMOVE_TRACK
} from "./types";

export const addTrackSuccess = track => dispatch => {
  dispatch({
    type: ADD_TRACK_SUCCESS,
    track: track.newTrack,
    loading: false
  });
};

export const addTrackFailure = () => dispatch => {
  dispatch({
    type: ADD_TRACK_FAILURE,
    loading: false
  });
};

export const addTrack = ({ number, name, duration }) => dispatch => {
  dispatch({
    type: BEGIN_ADD_TRACK,
    loading: true
  });
  fetch("http://localhost:3000/track", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      number,
      name,
      duration
    })
  })
    .then(res => res.json())
    .then(data => {
      dispatch(addTrackSuccess(data));
    })
    .catch(data => {
      dispatch(addTrackFailure());
    });
};

export const removeTrack = track => dispatch => {
  dispatch({
    type: REMOVE_TRACK,
    track
  });
};

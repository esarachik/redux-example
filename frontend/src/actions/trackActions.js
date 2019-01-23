import {
    ADD_TRACK,
    REMOVE_TRACK
  } from "./types";
  
  export const addTrack = track => dispatch => {
    dispatch({
      type: ADD_TRACK,
      track
    });
  };
  
  export const removeTrack = track => dispatch => {
    dispatch({
      type: REMOVE_TRACK,
      track
    });
  };
  
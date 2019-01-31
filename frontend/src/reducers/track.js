import {
  REMOVE_TRACK,
  BEGIN_ADD_TRACK,
  ADD_TRACK_SUCCESS,
  ADD_TRACK_FAILURE
} from "../actions/types";

const initialState = {
  tracks: []
};

export default function(state = initialState, action) {
  switch (action.type) {  
    case REMOVE_TRACK:
      return {
        ...state
      };
    case BEGIN_ADD_TRACK:
      return {
        ...state,
        loading: action.loading
      };
    case ADD_TRACK_SUCCESS:
      return {
        ...state,
        tracks: [...state.tracks, action.track],
        loading: action.loading

      };
    case ADD_TRACK_FAILURE:
      return {
        ...state,
        loading: action.loading
      };

    default:
      return state;
  }
}

import { ADD_IMAGE,SET_LOADING,SET_FINISHED,SET_IMAGE } from "../actions/types";

const initialState = {
  images: [],
  loading: false,
  finished: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        images: [...state.images ,action.image]
      };
      case SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }
      case SET_FINISHED:
      return {
        ...state,
        finished: action.finished
      }
      case SET_IMAGE:
      return {
        ...state,
        images:[action.images]
      }
    default:
      return state;
  }
}

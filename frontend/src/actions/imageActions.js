import { post, postMultipart } from "../helpers/fetch";
import { ADD_IMAGE, SET_IMAGE, SET_FINISHED } from "./types";

export const uploadImages = element => dispatch => {
  let data = new FormData();
  data.append("file", element);
  data.append("name", element.name);
  dispatch({
    type: ADD_IMAGE,
    image: element
  });
  post("image", element).then(data => {
    console.log("Imagen ingresada en mongo");
  });

  return postMultipart("image", data);
};

export const setImages = images => dispatch => {
  dispatch({
    type: SET_IMAGE,
    images
  });
};
export const setFinished = finished => dispatch => {    
    dispatch({
      type: SET_FINISHED,
      finished
    });    
  };
  

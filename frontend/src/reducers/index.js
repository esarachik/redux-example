import { combineReducers } from "redux"
import postReducer from './postReducer'
import vinyl from './vinyl'

export default combineReducers({
    posts: postReducer,
    vinyl
})
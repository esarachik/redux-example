import { combineReducers } from "redux"
import vinyl from './vinyl'
import track from './track'
import image from './image'

export default combineReducers({
    vinyl,
    track, 
    image
})
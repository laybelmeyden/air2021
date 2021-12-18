import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import galleryReducer from "./galleryReducer.js";
import mainPageReducer from "./mainpageReducer.js"


const reducers = combineReducers({
    mainPage: mainPageReducer,
    galleryPage: galleryReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
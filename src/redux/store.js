import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from "./reducers"
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const initialState = {}

const store = createStore(rootReducer, initialState,composeEnhancer(applyMiddleware(thunk)))

store.subscribe(()=> {
    localStorage.setItem('redux-store', JSON.stringify(store.getState()))
})

export default store;


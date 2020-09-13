// redux
import thunk from "redux-thunk"
// routing
// cargamos la función para crear un store
import {combineReducers, createStore, applyMiddleware} from 'redux';
// cargamos nuestros reducers (ya combinados)
import {cardReducer} from './reducers';
// logger
import logger from 'redux-logger'


// definimos el estado inicial
const initialState = {};
// creamos el store

const reducers = combineReducers({
    cardState: cardReducer
});

const store = createStore(reducers, initialState, applyMiddleware(thunk, logger));

export default store;

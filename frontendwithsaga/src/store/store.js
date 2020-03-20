import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from "./saga";

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(mySaga)
import {createStore, applyMiddleware, compose} from 'redux';
import { apiMiddleware } from "redux-api-middleware";
// @ts-ignore
import reducers from './reducers';
import {routerMiddleware} from "connected-react-router";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// @ts-ignore
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({name: 'Armanco'}) : (f) => f;

const logger = createLogger({
    collapsed: true,
});

export default function initStore() {
    const middlewares = [
        apiMiddleware,
        thunkMiddleware,
        // @ts-ignore
        routerMiddleware(),
        logger
    ];

    return createStore(
        reducers,
        compose(applyMiddleware(...middlewares), devTools),
    );
};

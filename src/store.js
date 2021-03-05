import {createBrowserHistory} from "history";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {connectRouter} from "connected-react-router";
import {rootReducer} from "./reducers/rootReducer.js";

export const history = createBrowserHistory();

const middleware = getDefaultMiddleware({thunk: true})

const reducer = {
    router: connectRouter(history),
    rootRed: rootReducer
}


export const store = configureStore({
    reducer,
    middleware
})
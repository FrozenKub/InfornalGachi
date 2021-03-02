import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main.jsx"
import './styles/style.css'
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer.js'
import {Provider} from "react-redux";

export const store = createStore(rootReducer, [],  composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
    , document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom";
import { Suspense } from "react";
import Main from "./Main.jsx"
import './styles/style.css'
import {Provider} from "react-redux";
import { ConnectedRouter } from 'connected-react-router'
import { history, store } from "./store";


ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<div>Loading</div>}>
            <ConnectedRouter history={history}>
                <Main/>
            </ConnectedRouter>
        </Suspense>
    </Provider>
    , document.getElementById("root"));
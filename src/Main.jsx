import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Auth from "./third.jsx"
import Register from "./second.jsx"
import SANDBOX from "./first.jsx";


class Main extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>

                        <Route exact path="/">
                            <div className="centered">
                                <a>
                                    <Link to="/first">First</Link>
                                </a>
                                <a>
                                    <Link to="/second">Second</Link>
                                </a>
                                <a>
                                    <Link to="/third">Third</Link>
                                </a>
                            </div>
                        </Route>

                        <Route exact path="/First">
                                <SANDBOX/>
                        </Route>

                        <Route exact path="/second">
                            <Register/>
                        </Route>

                        <Route exact path="/third">
                            <Auth/>
                        </Route>


                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main

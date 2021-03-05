import React, {useCallback} from "react";
const jwt = require('jsonwebtoken');
import {Position, Toaster} from "@blueprintjs/core";

import {useDispatch} from "react-redux";


export const AppToaster = Toaster.create({
    position: Position.BOTTOM
});

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Auth from "./third.jsx"
import Register from "./second.jsx"
import {Button, Card, Navbar} from "@blueprintjs/core";



function Main() {

    const dispatch = useDispatch()

    function handleSubmit () {
        if(document.getElementById("login").value=="Gachi" && document.getElementById("password").value=="Muchi") {
            jwt.sign({ foo: 'bar' }, 'hire_me_please', { expiresIn: '1h' },(err, token) => {
                if(err) { console.log(err) }
                dispatch({ type: 'APPLY_TOKEN', token: token })
                localStorage.setItem("token", token)
                showToast()
            });
        } else {
            showBadToast()
        }
    }

    function showToast() {
        AppToaster.show({ message: "SUCCESS" });
    }


    function showBadToast() {
        AppToaster.show({ message: "WRONG SOMETHING" });
    }

        return (
<div>


    <Router >
        <div>
            <Switch>

                <Route exact path="/">
            <div className="centered">


                <Card className="login-block">
                    <input className="bp3-input .modifier"  placeholder="LOGIN" dir="auto" id="login"/>
                    <input className="bp3-input .modifier" type="password" placeholder="PASSWORD" dir="auto" id="password"/>
                    <Button onClick={e => handleSubmit()} type="submit">SUBMIT</Button>
                </Card>


                <Navbar className="up">
                    <Navbar.Group>
                        <Navbar.Heading>InfornalGachi</Navbar.Heading>
                        <Navbar.Divider/>
                        <Button className="bp3-minimal" icon="home"><Link to="/">Login</Link></Button>
                        <Button className="bp3-minimal" icon="home"><Link to="/second">Infornal FuckЪ</Link></Button>
                        <Button className="bp3-minimal" icon="home"><Link to="/third">Gachi Remixes</Link></Button>
                    </Navbar.Group>
                </Navbar>


            </div>

                </Route>
                    <Route exact path="/second">
                        <Register/>
                    </Route>

                    <Route exact path="/third">
                        <Auth />
                    </Route>


            </Switch>
        </div>
    </Router>
</div>
        );
}

export default Main

import React from "react";
const jwt = require('jsonwebtoken');

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Auth from "./third.jsx"
import Register from "./second.jsx"
import {Button, Card, Navbar} from "@blueprintjs/core";

import {applyToken} from "./actions/index.js"

import {store} from "./index.jsx";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: "123", password: "123", token: ""}
    }


    handleSubmit () {
        //checking to make sure the user entered the correct username/password combo
        if(123 == this.state.username && 123 == this.state.password) {
            //if user log in success, generate a JWT token for the user with a secret key
            jwt.sign({ foo: 'bar' }, 'privatekey', { expiresIn: '1h' },(err, token) => {
                if(err) { console.log(err) }
                this.setState({token: token})
                store.dispatch(applyToken(this.state.token))
                alert(store.getState()[0].token)
            });
        } else {
            console.log('ERROR: Could not log in');
        }
    }




    render() {
        return (
<div>


    <Router >
        <div>
            <Switch>

                <Route exact path="/">
            <div className="centered">


                <Card className="login-block">
                    <input className="bp3-input .modifier" modifier type="login" placeholder="LOGIN" dir="auto"/>
                    <input className="bp3-input .modifier" modifier type="password" placeholder="PASSWORD" dir="auto"/>
                    <Button onClick={e => this.handleSubmit()} type="submit">SUBMIT</Button>
                </Card>


                <Navbar className="up">
                    <Navbar.Group>
                        <Navbar.Heading>InfornalGachi</Navbar.Heading>
                        <Navbar.Divider/>
                        <Button className="bp3-minimal" icon="home"><a href="/">Login</a></Button>
                        <Button className="bp3-minimal" icon="home"><a href="/second">Infornal FuckЪ</a></Button>
                        <Button className="bp3-minimal" icon="home"><a href="/third">Gachi Remixes</a></Button>
                    </Navbar.Group>
                </Navbar>


            </div>

                </Route>
                    <Route exact path="/second">
                        <Register/>
                    </Route>

                    <Route exact path="/third">
                        <Auth token={this.state.token}/>
                    </Route>


            </Switch>
        </div>
    </Router>
</div>
        );
    }
}

export default Main

import React, {useCallback} from "react";
const jwt = require('jsonwebtoken');
import {Position, Toaster} from "@blueprintjs/core";

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

import {applyToken} from "./actions"


    class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: "123", password: "123", token: ""}
    }


    handleSubmit () {
        console.log(123)
        this.showToast()
        if(123 == this.state.username && 123 == this.state.password) {
            jwt.sign({ foo: 'bar' }, 'hire_me_please', { expiresIn: '1h' },(err, token) => {
                if(err) { console.log(err) }
                this.setState({token: token})

                dispatch(applyToken(this.state.token))
                console.log(223)
            });
        } else {
            console.log('ERROR: Could not log in');
        }
    }

    showToast() {
        AppToaster.show({ message: "SUCCESS" });
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
                    <input className="bp3-input .modifier"  placeholder="LOGIN" dir="auto"/>
                    <input className="bp3-input .modifier" type="password" placeholder="PASSWORD" dir="auto"/>
                    <Button onClick={e => this.handleSubmit()} type="submit">SUBMIT</Button>
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

import React from "react";
import { Button, Card, InputGroup, Navbar } from "@blueprintjs/core";
const jwt = require('jsonwebtoken');

class First extends React.Component {

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
                alert(token)
            });
        } else {
            console.log('ERROR: Could not log in');
        }
    }


    render() {
        return (
            <div className="centered">


                <Card className="login-block">
                    <input class="bp3-input .modifier" modifier type="login" placeholder="LOGIN" dir="auto" />
                    <input className="bp3-input .modifier" modifier type="password" placeholder="PASSWORD" dir="auto"/>
                    <Button onClick={e=>this.handleSubmit()} type="submit">SUBMIT</Button>
                </Card>



                <Navbar className="up">
                    <Navbar.Group>
                        <Navbar.Heading>InfornalGachi</Navbar.Heading>
                        <Navbar.Divider />
                        <Button className="bp3-minimal" icon="home"><a href="/first">Login</a></Button>
                        <Button className="bp3-minimal" icon="home"><a href="/second">Infornal FuckЪ</a></Button>
                        <Button className="bp3-minimal" icon="home"><a href="/third">Gachi Remixes</a></Button>
                    </Navbar.Group>
                </Navbar>

            </div>
        );
    }
}

export default First;
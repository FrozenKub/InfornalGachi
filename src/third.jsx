import React from "react";
const jwt = require('jsonwebtoken');
import {Button, Navbar} from "@blueprintjs/core";
import {Link} from "react-router-dom";

class Third extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (localStorage.getItem("token") !== "" )
        {
            jwt.verify(localStorage.getItem("token"), 'hire_me_please', (err, authorizedData) => {
                if(err){
                    //If error send Forbidden (403)
                    console.log('ERROR: Could not connect to the protected route');
                    alert("YOU ARE NOT AUTHORIZED")
                    window.location = "/";
                } else {
                    //If token is successfully verified, we can send the autorized data
                    alert("NICE COCK")
                    console.log('SUCCESS: Connected to protected route');
                }
            })
        }
        else
        {
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            alert("YOU ARE NOT AUTHORIZED")
            window.location = "/";
        }

    }

    render() {
        return (


            <div className="centered">
                GACHI REMIXES


                <div className="footer">
                    <a href="/">LOGIN PAGE</a>
                    <a href="/second">INFORNAL FUCKЪ</a>
                    <a href="/third">GACHI REMIXES</a>
                </div>


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

        );
    }
}


export default Third;
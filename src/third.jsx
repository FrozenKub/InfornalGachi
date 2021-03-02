import React from "react";
const jwt = require('jsonwebtoken');
import {store} from "./index.jsx";

class Third extends React.Component{
    constructor(props) {
        super(props);
        this.state = {token: store.getState()[0].token}
    }

    componentDidMount() {
        jwt.verify(this.state.token, 'privatekey', (err, authorizedData) => {
            if(err){
                //If error send Forbidden (403)
                console.log('ERROR: Could not connect to the protected route');
                alert("123")
            } else {
                //If token is successfully verified, we can send the autorized data
                alert("NICE")
                console.log('SUCCESS: Connected to protected route');
            }
        })
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
            </div>

        );
    }
}


export default Third;
import React from "react";

class First extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="centered">

                <div className="login-block">
                    <button>LOGIN</button>
                    <button>PASSWORD</button>
                    <button>SUBMIT</button>

                </div>


                <div className="footer">
                    <a href="/first">LOGIN PAGE</a>
                    <a href="/second">INFORNAL FUCKЪ</a>
                    <a href="/third">GACHI REMIXES</a>
                </div>

            </div>
        );
    }
}

export default First;
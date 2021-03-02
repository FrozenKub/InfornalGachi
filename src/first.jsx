import React from "react";
import { Button, Card, InputGroup, Navbar } from "@blueprintjs/core";
class First extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="centered">

                <Card className="login-block">
                    <input class="bp3-input .modifier" modifier type="text" placeholder="LOGIN" dir="auto" />
                    <input className="bp3-input .modifier" modifier type="text" placeholder="PASSWORD" dir="auto"/>
                    <Button type="submit">SUBMIT</Button>
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
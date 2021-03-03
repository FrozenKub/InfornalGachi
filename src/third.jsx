import React from "react";
const jwt = require('jsonwebtoken');
import {Button, Navbar} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";


const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};



class Third extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: Array.from({ length: 20 }), hasMoreItems: true
        }
    }





    fetchMoreItems() {
        if (this.state.items.length >= 500) {
            this.setState({ hasMoreItems: false });
            return;
        }

        // a fake async api call
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 20 }))
            });
        }, 500);
    }



    componentDidMount() {
        if (localStorage.getItem("token") !== "" )
        {
            jwt.verify(localStorage.getItem("token"), 'hire_me_please', (err, authorizedData) => {
                if(err){
                    console.log('ERROR: Could not connect to the protected route');
                    window.location = "/";
                } else {
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
        <div>

        <div className="full-screen">
            <video src="/123.mp4" autoPlay muted loop/>
        </div>

            <div className="centered">

                <div className="third-full">


                    <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}>
                        <InfiniteScroll
                            dataLength={this.state.items.length}
                            next={this.fetchMoreData}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                            scrollableTarget="scrollableDiv"
                        >
                            {this.state.items.map((i, index) => (
                                <div style={style} key={index}>
                                    div - #{index}
                                </div>
                            ))}
                        </InfiniteScroll>
                    </div>


                    <div className="admin-block">

                    </div>

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
        </div>
        );
    }
}


export default Third;
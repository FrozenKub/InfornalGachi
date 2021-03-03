import React from "react";
const jwt = require('jsonwebtoken');
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, ButtonGroup, Card, Elevation, Navbar } from "@blueprintjs/core";




class Third extends React.Component{
    constructor(props) {
        super(props);
        this.state = {items: Array.from({ length: 3 }), hasMore: true}
        this.fetchMoreData = this.fetchMoreData.bind(this);
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

        this.setState({items: Array.from({ length: 3 }), hasMore: true})
    }


    fetchMoreData () {

        if (this.state.items.length >= 9) {
            this.setState({ hasMore: false });
        }
        else {
            setTimeout(() => {
                this.setState({
                    items: this.state.items.concat(Array.from({ length: 3 }))
                });
            }, 1500);
        }
    };

    handleVideoUnmute (index) {
        let video=document.getElementById(index);
        video.style.transform = "scale(0.7) translate(0, 0) ";
        video.style.transition = "transform 0.25s ease";
        if (video.muted)
        {
            video.muted = !video.muted;
        }
        else
        {
            video.style.transform = "scale(1) translate(0, 0) ";
            video.style.transition = "transform 0.25s ease";
            video.muted = !video.muted;
        }
        console.log("HEH")
    }

    render() {
        return (
        <div>

        <div className="full-screen">
            <video src="/1234.mp4" autoPlay muted loop/>
        </div>

            <div className="centered">

                <div className="third-full">


                    <div id="scrollableDiv" className="scrollable">
                        <InfiniteScroll
                            dataLength={this.state.items.length}
                            next={this.fetchMoreData}
                            hasMore={true}
                            loader={
                                <Card className="scroller">
                                <h5>GACHING</h5>
                                <p>MUCHING</p>
                                <video  className="loader" src={"/"+1234+".mp4"} autoPlay muted loop />
                            </Card>}
                            endMessage={
                                <Card className="scroller">
                                <h5>END OF GACHI</h5>
                                <p>YOU ARE MASTER NOW</p>
                                <video  className="loader" src={"/"+1234+".mp4"} autoPlay muted loop />
                            </Card>
                            }
                            scrollableTarget="scrollableDiv"
                        >
                            {this.state.items.map((i, index) => (
                                <Card className="card-rel">
                                    <h5>НАЗВАНИЕ ТРЕКА</h5>
                                    <p>АВТОР</p>
                                    <video onClick={e=>this.handleVideoUnmute(index)} className="album-vid" src={"/"+index+".mp4"} id={index} autoPlay muted loop/>
                                </Card>
                            ))}
                        </InfiniteScroll>
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
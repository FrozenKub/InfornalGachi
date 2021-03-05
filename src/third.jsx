import React from "react";
const jwt = require('jsonwebtoken');
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, ButtonGroup, Card, Elevation, Navbar } from "@blueprintjs/core";


let remixes =
    [
        {
            id: "LOADING",
            title: "LOADING",
            author: "",
            original: "",
            link: "/loading.mp4"
        },
        {
            id: "LOADING",
            title: "LOADING",
            author: "",
            original: "",
            link: "/loading.mp4"
        },
        {
            id: "LOADING",
            title: "LOADING",
            author: "",
            original: "",
            link: "/loading.mp4"
        },
        {
            id: "LOADING",
            title: "LOADING",
            author: "",
            original: "",
            link: "/loading.mp4"
        },
        {
            id: "LOADING",
            title: "LOADING",
            author: "",
            original: "",
            link: "/loading.mp4"
        },
        {
            id: "LOADING",
            title: "LOADING",
            author: "",
            original: "",
            link: "/loading.mp4"
        },
        {
            id: "LOADING",
            title: "LOADING",
            author: "",
            original: "",
            link: "/loading.mp4"
        },
        {
            id: "LOADING",
            title: "LOADING",
            author: "",
            original: "",
            link: "/loading.mp4"
        },
        {
            id: "LOADING",
            title: "LOADING",
            author: "",
            original: "",
            link: "/loading.mp4"
        }

];

class Third extends React.Component{
    constructor(props) {
        super(props);
        this.state = {items: Array.from({ length: 3 }), hasMore: true, uploaded: false}
        this.fetchMoreData = this.fetchMoreData.bind(this);
    }




    componentDidMount() {
        this.getDataFromJSON();

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
        if (this.state.items.length >= remixes.length) {
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
    }

    handleRadioUnmute () {
        let audio=document.getElementById("radio");
            audio.muted = !audio.muted;

    }

    getDataFromJSON()
    {
        fetch('https://api.jsonbin.io/b/6040804681087a6a8b95ed90/3')
            .then((response) => response.json())
            .then((json) => {
                remixes = json
                this.setState({uploaded: true})
            });
        console.log("DONE")
        this.setState({uploaded: true})
    }


    render() {
        return (
        <div>

        <div className="full-screen">
            <video src="/1234.mp4" autoPlay muted loop/>
            <audio id="radio" hidden autoPlay muted controls="controls"
                   src="https://node-17.zeno.fm/f174214qvzzuv?rj-ttl=5&rj-tok=AAABd_0Lp48A9qsgwwlemZta-w"/>
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
                                <h1>GACHING</h1>
                                <h2>MUCHING</h2>
                                <video  className="loader" src={"/"+1234+".mp4"} autoPlay muted loop />
                            </Card>}
                            endMessage={
                                <Card className="scroller">
                                <h1>END OF GACHI</h1>
                                <h2>YOU ARE MASTER NOW</h2>
                                <video  className="loader" src={"/"+1234+".mp4"} autoPlay muted loop />
                            </Card>
                            }
                            scrollableTarget="scrollableDiv"
                        >
                            {this.state.items.map((i, index) => (

                                <Card className="card-rel">
                                    <h1>{remixes[index].title}</h1>
                                    <h2>{remixes[index].author}</h2>
                                    <h3>{remixes[index].original}</h3>
                                    <video onClick={e=>this.handleVideoUnmute(index)} className="album-vid" src={remixes[index].link} id={index} autoPlay muted loop/>
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
                        <a onClick={e=> this.handleRadioUnmute()}><Button className="bp3-minimal" icon="music">Gachi Radio</Button></a>
                    </Navbar.Group>
                </Navbar>

            </div>
        </div>
        );
    }
}


export default Third;
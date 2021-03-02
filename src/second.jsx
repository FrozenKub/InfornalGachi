import React from "react";
import { Button, Card, Elevation, Navbar } from "@blueprintjs/core";
import {array} from "prop-types";
import {Link} from "react-router-dom";

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)+1);
}

let songs =
    [
        {
            title: "ДЛЯ РАНДОМНОГО ПОДБОРА ТРЕКА",
            album: "НАЖМИТЕ КНОПКУ WTF",
            piclink: "http://pa1.narvii.com/6052/a1830bd0460ffddf1fa4163ab259542034d43718_00.gif",
            href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            title: "Шаверма или фаст-фуд в огне",
            album: "Алкоголизм сильнее гравитации",
            piclink: "https://e.snmc.io/i/600/w/a0cd20195175db06b9a991e9684aec76/2492536",
            href: "https://www.youtube.com/watch?v=XA6KpWSGZOQ"
        },
        {
            title: "Потому что мы дебилы",
            album: "Полночь. XXI век",
            piclink: "https://i1.sndcdn.com/artworks-000300444573-tl5dgc-t500x500.jpg",
            href: "https://www.youtube.com/watch?v=4VlrrGLgqvI"
        },
        {
            title: "Конунг олаф Моржовый Хер",
            album: "Алкоголизм сильнее гравитации",
            piclink: "https://i1.sndcdn.com/artworks-000300446103-ovkgqq-t500x500.jpg",
            href: "https://www.youtube.com/watch?v=iFBU828ZzHE"
        },

        {
            title: "Сага о Сигурде Синяя Рожа",
            album: "Алкоголизм сильнее алкоголя",
            piclink: "https://e.snmc.io/i/600/w/a0cd20195175db06b9a991e9684aec76/2492536",
            href: "https://www.youtube.com/watch?v=XA6KpWSGZOQ"
        },
        {
            title: "Песнь о загубленной кукушке",
            album: "Полночь. XXI век",
            piclink: "https://i1.sndcdn.com/artworks-000300444573-tl5dgc-t500x500.jpg",
            href: "https://www.youtube.com/watch?v=4VlrrGLgqvI"
        },
        {
            title: "Готка-шлюха",
            album: "Алкоголизм сильнее гравитации",
            piclink: "https://i1.sndcdn.com/artworks-000300446103-ovkgqq-t500x500.jpg",
            href: "https://www.youtube.com/watch?v=iFBU828ZzHE"
        },
        {
            title: "Православная бабуля",
            album: "Полночь. XXI век",
            piclink: "https://i1.sndcdn.com/artworks-000300444573-tl5dgc-t500x500.jpg",
            href: "https://www.youtube.com/watch?v=4VlrrGLgqvI"
        }
    ]


class Second extends React.Component{
    constructor(props) {
        super(props);
        this.state = {l1: 0, l2: 0, l3: 0}

    }

    handleClick(e)
    {
        let max = 7
        this.setState({l1: getRandomInt(max), l2: getRandomInt(max-1), l3: getRandomInt(max-2)})
        console.log(max)
    }


    handleAlbumSort(e)
    {
        this.setState({l1: getRandomInt(max), l2: getRandomInt(max-1), l3: getRandomInt(max-2)})
        console.log(max)
    }

    render() {
        return (
<div>


        <div className="infornal-block">
            <Card className="card-rel" interactive={false} elevation={Elevation.TWO}>
                <h5>{songs[this.state.l1].title}</h5>
                <p>{songs[this.state.l1].album}</p>
                <img src={songs[this.state.l1].piclink} alt="123" className="album-pic"/>
                <br/>
                <Button><a href={songs[this.state.l1].href}>Смотреть</a></Button>
            </Card>
            <Card className="card-rel" interactive={false} elevation={Elevation.TWO}>
                <h5>{songs[this.state.l2].title}</h5>
                <p>{songs[this.state.l2].album}</p>
                <img src={songs[this.state.l2].piclink} alt="123" className="album-pic"/>
                <br/>
                <Button><a href={songs[this.state.l2].href}>Смотреть</a></Button>
            </Card>
            <Card className="card-rel" interactive={false} elevation={Elevation.TWO}>
                <h5>{songs[this.state.l3].title}</h5>
                <p>{songs[this.state.l3].album}</p>
                <img src={songs[this.state.l3].piclink} alt="123" className="album-pic"/>
                <br/>
                <Button><a href={songs[this.state.l3].href}>Смотреть</a></Button>
            </Card>


        </div>
            <div className="centered">
                <Button className="great-button" onClick={e=> this.handleClick(e) }>WTF</Button>

                <Navbar className="up">
                    <Navbar.Group>
                        <Navbar.Heading>InfornalGachi</Navbar.Heading>
                        <Navbar.Divider />
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


export default Second;
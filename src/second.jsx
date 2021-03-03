import React from "react";
import { Button, ButtonGroup, Card, Elevation, Navbar } from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {array} from "prop-types";

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)+1);
}

const max =7;

let songs =
    [
        {
            id: 0,
            title: "TES",
            album: "TES",
            piclink: "https://e.snmc.io/i/600/w/a0cd20195175db06b9a991e9684aec76/2492536",
            href: "https://www.youtube.com/watch?v=XA6KpWSGZOQ"
        },
        {
            id: 1,
            title: "Шаверма или фаст-фуд в огне",
            album: "Алкоголизм сильнее гравитации",
            piclink: "https://e.snmc.io/i/600/w/a0cd20195175db06b9a991e9684aec76/2492536",
            href: "https://www.youtube.com/watch?v=XA6KpWSGZOQ"
        },
        {
            id: 2,
            title: "Потому что мы дебилы",
            album: "Полночь. XXI век",
            piclink: "https://i1.sndcdn.com/artworks-000300444573-tl5dgc-t500x500.jpg",
            href: "https://www.youtube.com/watch?v=4VlrrGLgqvI"
        },
        {
            id: 3,
            title: "Конунг олаф Моржовый Хер",
            album: "Алкоголизм сильнее гравитации",
            piclink: "https://i1.sndcdn.com/artworks-000300446103-ovkgqq-t500x500.jpg",
            href: "https://www.youtube.com/watch?v=iFBU828ZzHE"
        },
        {
            id: 4,
            title: "Сага о Сигурде Синяя Рожа",
            album: "Алкоголизм сильнее гравитации",
            piclink: "https://e.snmc.io/i/600/w/a0cd20195175db06b9a991e9684aec76/2492536",
            href: "https://www.youtube.com/watch?v=XA6KpWSGZOQ"
        },
        {
            id: 5,
            title: "Песнь о загубленной кукушке",
            album: "Полночь. XXI век",
            piclink: "https://i1.sndcdn.com/artworks-000300444573-tl5dgc-t500x500.jpg",
            href: "https://www.youtube.com/watch?v=4VlrrGLgqvI"
        },
        {
            id: 6,
            title: "Готка-шлюха",
            album: "Алкоголизм сильнее гравитации",
            piclink: "https://i1.sndcdn.com/artworks-000300446103-ovkgqq-t500x500.jpg",
            href: "https://www.youtube.com/watch?v=iFBU828ZzHE"
        },
        {
            id: 7,
            title: "Православная бабуля",
            album: "Полночь. XXI век",
            piclink: "https://i1.sndcdn.com/artworks-000300444573-tl5dgc-t500x500.jpg",
            href: "https://www.youtube.com/watch?v=4VlrrGLgqvI"
        }
    ]


class Second extends React.Component{
    constructor(props) {
        super(props);
        this.state = {l1: 0, l2: 0, l3: 0, album: "Без фильтра по альбому", alphabetic: "Без сортировки по алфавиту"}

    }

    handleMenuAlphabet(e) {
        this.setState({album: "Без фильтра по альбому"})
        switch (this.state.alphabetic)
        {
            case "Без сортировки по алфавиту":
                this.setState({alphabetic: "По алфавиту вверх"})
                break;
            case "По алфавиту вверх":
                this.setState({alphabetic: "По алфавиту вниз"})
                break;
            case "По алфавиту вниз":
                this.setState({alphabetic: "Без сортировки по алфавиту"})
                break;
        }
    }

    handleMenuAlbum(e) {
        this.setState({alphabetic: "Без сортировки по алфавиту"})
        switch (this.state.album)
        {
            case "Без фильтра по альбому":
                this.setState({album: "Алкоголизм сильнее гравитации"})
                break;
            case "Алкоголизм сильнее гравитации":
                this.setState({album: "Полночь. XXI век"})
                break;
            case "Полночь. XXI век":
                this.setState({album: "Без фильтра по альбому"})
                break;
        }
    }


    handleClick(e)
    {

        switch (this.state.album)
        {
            case "Без фильтра по альбому": {
                switch (this.state.alphabetic) {
                    case "Без сортировки по алфавиту":
                        this.setState({l1: getRandomInt(max), l2: getRandomInt(max - 1), l3: getRandomInt(max - 2)})
                        break;
                    case "По алфавиту вверх": {
                        songs.sort(function (a, b) {
                            let titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
                            if (titleA < titleB) //сортируем строки по возрастанию
                                return -1
                            if (titleA > titleB)
                                return 1
                            return 0 // Никакой сортировки
                        })
                        this.setState({l1: 1, l2: 2, l3: 3})
                    }
                        break;

                    case "По алфавиту вниз": {
                        songs.sort(function (a, b) {
                            let titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
                            if (titleA < titleB) //сортируем строки по возрастанию
                                return -1
                            if (titleA > titleB)
                                return 1
                            return 0 // Никакой сортировки
                        })
                        this.setState({l1: max, l2: max-1, l3: max-2})
                    }
                        break;
                }
            }
            break;
            case "Алкоголизм сильнее гравитации":
            {
                {
                    let inc =0;
                    let number = getRandomInt(max);
                    console.log(songs[number].album)
                    while (songs[number].album !== "Алкоголизм сильнее гравитации" || inc !==3)
                    {

                        if(songs[number].album === "Алкоголизм сильнее гравитации")
                        {
                            inc = inc+1;
                            switch (inc)
                            {
                                case(1):
                                {
                                    this.state.l1 = number;
                                }
                                    break;
                                case (2):
                                {
                                    if (number !== this.state.l1)
                                    {
                                        this.state.l2 = number;
                                    }
                                    else
                                    {
                                        inc = inc -1;
                                    }
                                }
                                    break;
                                case (3):
                                {
                                    if (number !== this.state.l1 && number !== this.state.l2)
                                    {
                                        this.setState({l3: number})
                                    }
                                    else
                                    {
                                        inc = inc - 1;
                                    }

                                }
                                    break;

                            }


                        }
                        else number = getRandomInt(max);
                        number = getRandomInt(max)
                    }

                }
            }
            break;
            case "Полночь. XXI век":
            {
                {
                    let inc =0;
                    let number = getRandomInt(max);
                    console.log(songs[number].album)
                    while (songs[number].album !== "Полночь. XXI век" || inc !==3)
                    {

                        if(songs[number].album === "Полночь. XXI век")
                        {
                            inc = inc+1;
                            switch (inc)
                            {
                                case(1):
                                {
                                    this.state.l1 = number;
                                }
                                    break;
                                case (2):
                                {
                                    if (number !== this.state.l1)
                                    {
                                        this.state.l2 = number;
                                    }
                                    else
                                    {
                                        inc = inc -1;
                                    }
                                }
                                    break;
                                case (3):
                                {
                                    if (number !== this.state.l1 && number !== this.state.l2)
                                    {
                                        this.setState({l3: number})
                                    }
                                    else
                                    {
                                        inc = inc - 1;
                                    }

                                }
                                    break;

                            }


                        }
                        else number = getRandomInt(max);
                        number = getRandomInt(max)
                    }

                }
            }
                break;
        }


    }

    componentDidMount() {
        this.setState({l1: getRandomInt(max), l2: getRandomInt(max-1), l3: getRandomInt(max-2)})
        setInterval(() => this.handleClick(), 60*1000);
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
                <ButtonGroup className="down">
                    <Button icon="database" onClick={e => this.handleMenuAlbum(e)}>{this.state.album} </Button>
                    <Button icon="function" onClick={e => this.handleMenuAlphabet(e)}>{this.state.alphabetic}</Button>
                </ButtonGroup>

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
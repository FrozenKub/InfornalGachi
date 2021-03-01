import React from "react";

class Second extends React.Component{
    constructor(props) {
        super(props);

    }


    render() {
        return (

            <div className="centered">

                <div className="infornal-block">
                    <div className="sample">
                        <div className="box1">
                            <a>Название: Пьяный бубен</a> <br/> <a>Альбом: Алкоголизм сильнее гравитации</a> <br/> <a>Тема: Алкоголь</a>
                        </div>

                        <img className="album-pic" src="https://i.imgur.com/EGZ0tMl.png" alt="Album" /> 
                    </div>
                    <div className="sample">2</div>
                    <div className="sample">3</div>
                    <div className="sample">4</div>
                    <div className="sample">5</div>
                    <div className="sample">6</div>
                    <div className="sample">7</div>
                    <div className="sample">8</div>
                    <div className="sample">9</div>
                    <div className="sample">10</div>
                    <div className="sample">11</div>
                    <div className="sample">12</div>
                    <div className="sample">13</div>
                    <div className="sample">14</div>
                    <div className="sample">15</div>
                </div>


                <div className="search">
                    <textarea>ENTER FILTER HERE</textarea>
                    <button>F</button>
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


export default Second;
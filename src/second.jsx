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
                            <h3>НАЗВАНИЕ</h3><h5>Пьяный бубен</h5> <h3>АЛЬБОМ</h3><h5>Алкоголизм сильнее гравитации</h5> <h3>ТЕМА</h3><h5>Алкоголь</h5><a href="https://www.youtube.com/watch?v=2tAL2Aw1SaA" target="_blank">ССЫЛКА</a>
                        </div>
                    </div>
                    <div className="sample">
                        <div className="box1">
                            <h3>НАЗВАНИЕ</h3><h5>Пьяный бубен</h5> <h3>АЛЬБОМ</h3><h5>Алкоголизм сильнее гравитации</h5> <h3>ТЕМА</h3><h5>Алкоголь</h5><a href="https://www.youtube.com/watch?v=2tAL2Aw1SaA" target="_blank">ССЫЛКА</a>
                        </div></div>
                    <div className="sample">
                        <div className="box1">
                            <h3>НАЗВАНИЕ</h3><h5>Пьяный бубен</h5> <h3>АЛЬБОМ</h3><h5>Алкоголизм сильнее гравитации</h5> <h3>ТЕМА</h3><h5>Алкоголь</h5><a href="https://www.youtube.com/watch?v=2tAL2Aw1SaA" target="_blank">ССЫЛКА</a>
                        </div></div>

                    <button className="great-button-thing">WTF</button>

                    <div>
                        <a>Filter1</a>
                        <a>Filter1</a>
                        <a>Filter1</a>
                    </div>
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
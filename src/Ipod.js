import React from "react";
import Screen from "./Screen";
import "./ipod.css";
class Ipod extends React.Component {
    constructor() {
        super();
        this.state = {
            activeItem: "Now Playing",
            activePage: "Home",
            enter: 0,
            play: true,
        };
    }
    render() {
        return (
            <div className="ipod-container">
                {/* <audio className="audio-element">
                    <source src={sound}></source>
                </audio> */}

                <Screen
                    activeItem={this.state.activeItem}
                    activePage={this.state.activePage}
                    audio={this.state.audio}
                />

                <div
                    id="inner-container"
                    className="wheel"
                    onMouseOver={this.rotateWheel}
                >
                    <div className="button-container">
                        <div className="menu-button">
                            <i
                                onClick={this.changePageToHomeScreen}
                                className="fas fa-bars image"
                            ></i>
                        </div>
                    </div>
                    <div className="button-container">
                        <div className="middle-button">
                            <i className="fas fa-fast-backward image"></i>
                            <div
                                onClick={this.changePage}
                                style={{
                                    backgroundImage:
                                        "linear-gradient(45deg, #8c8181, transparent)",
                                    width: "5rem",
                                    height: "5rem",
                                    borderRadius: "50%",
                                }}
                            ></div>
                            <i className="fas fa-fast-forward image"></i>
                        </div>
                    </div>
                    <div className="button-container">
                        <div onClick={this.toggle} className="play-button">
                            <i
                                onClick={this.toggle}
                                className="fas fa-play image"
                            ></i>
                            &nbsp;
                            <i
                                onClick={this.toggle}
                                className="fas fa-pause image"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ipod;

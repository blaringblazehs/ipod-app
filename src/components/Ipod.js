import React from "react";
import Screen from "../pages/Screen";
import "./ipod.css";
import ZingTouch from "zingtouch";
import sound from "../assets/music/Senorita.mp3";
class Ipod extends React.Component {
    constructor() {
        super();
        this.state = {
            activeItem: "CoverFlow",
            activePage: "Home",
            enter: 0,
            play: true,
        };
    }
    rotateWheel = () => {
        var containerElement = document.getElementById("inner-container");
        var activeRegion = new ZingTouch.Region(containerElement);
        // var childElement = document.getElementById('inner-container');
        var change = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;

        if (self.state.enter < 2) {
            activeRegion.bind(containerElement, "rotate", function (event) {
                //Perform Operations

                var newAngle = event.detail.distanceFromLast;
                console.log(newAngle);

                if (newAngle < 0) {
                    console.log(change);
                    change++;
                    if (change === 15) {
                        console.log("change state");
                        change = 0;
                        if (self.state.activePage === "Home") {
                            if (self.state.activeItem === "CoverFlow") {
                                self.setState({
                                    activeItem: "Music",
                                });
                            } else if (self.state.activeItem === "Music") {
                                self.setState({
                                    activeItem: "Games",
                                });
                            } else if (self.state.activeItem === "Games") {
                                self.setState({
                                    activeItem: "Settings",
                                });
                            } else if (self.state.activeItem === "Settings") {
                                self.setState({
                                    activeItem: "CoverFlow",
                                });
                            }
                        }
                    }
                } else {
                    console.log(change);
                    change++;
                    if (change === 15) {
                        console.log("change state");
                        change = 0;
                        if (self.state.activePage === "Home") {
                            if (self.state.activeItem === "CoverFlow") {
                                self.setState({
                                    activeItem: "Settings",
                                });
                            } else if (self.state.activeItem === "Music") {
                                self.setState({
                                    activeItem: "CoverFlow",
                                });
                            } else if (self.state.activeItem === "Games") {
                                self.setState({
                                    activeItem: "Music",
                                });
                            } else if (self.state.activeItem === "Settings") {
                                self.setState({
                                    activeItem: "Games",
                                });
                            }
                        }
                    }
                }
            });
        } else {
            console.log("Not allowed to enter");
        }
    };

    changePage = () => {
        this.setState({
            activeItem: this.state.activeItem,
            activePage: this.state.activeItem,
        });
    };

    changePageToHomeScreen = () => {
        this.setState({
            activeItem: this.state.activeItem,
            activePage: "Home",
        });
    };

    toggle = () => {
        if (this.state.activePage === "Music") {
            if (this.state.play === true) {
                this.state.audio.pause();
                this.setState({
                    play: false,
                });
            } else {
                this.state.audio.play();
                this.setState({
                    play: true,
                });
            }
            console.log("toggled");
        }
    };
    componentDidMount() {
        let audio = document.getElementsByClassName("audio-element")[0];
        console.log(audio);
        this.setState({
            audio: audio,
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className="ipod-container">
                <audio className="audio-element">
                    <source src={sound}></source>
                </audio>

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
                            &nbsp; &nbsp;
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

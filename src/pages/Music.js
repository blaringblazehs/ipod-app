import React from "react";
import sound from "../assets/music/Senorita.mp3";
import styles from "./music.module.css";

class Music extends React.Component {
    constructor() {
        super();
        this.state = {
            isMounted: true,
        };
    }

    componentDidMount() {
        let self = this;
        self.props.audio.play();

        self.props.audio.addEventListener("timeupdate", function () {
            if (self.state.isMounted) {
                var pos =
                    self.props.audio.currentTime / self.props.audio.duration;
                self.updateTime();
                let fill = document.getElementById("fill");
                console.log(fill);
                if (fill !== null) {
                    fill.style.width = pos * 100 + "%";
                }
            }
        });
    }

    updateTime = () => {
        this.setState({
            audio: this.props.audio,
        });
    };

    componentWillUnmount() {
        this.state.isMounted = false;
    }

    render() {
        let audio = this.props.audio;
        return (
            <div className={styles.myMusicContainer}>
                <div className={styles.titleBar}>
                    <p style={{ fontWeight: "bold" }}>iPod</p>
                    <img
                        className={styles.battery}
                        src="https://cdn-icons.flaticon.com/png/512/664/premium/664883.png?token=exp=1649671360~hmac=ecb60bca60d4c44af4c9d7a937556764"
                    ></img>
                </div>

                <div className={styles.info}>
                    <img
                        className={styles.image}
                        src="https://images.news18.com/ibnlive/uploads/2019/07/Shawn-Mendes-Camila-Cabello.jpg"
                    ></img>
                    <div className={styles.subInfo}>
                        <h4 style={{ marginBottom: "0.5rem" }}>Senorita</h4>
                        <p style={{ marginBottom: "0" }}>Camilla Cobello</p>
                        <p>Shawn Mendes</p>
                    </div>
                </div>

                <div className={styles.statusBar}>
                    <p className={styles.currTime}>
                        {audio !== null
                            ? Math.floor(audio.currentTime)
                            : "0 / 0"}
                    </p>
                    <div className={styles.seekBar}>
                        <div className={styles.fill} id="fill"></div>
                    </div>
                    <p className={styles.dur}>
                        {audio != null ? Math.floor(audio.duration) : "0 / 0"}
                    </p>
                </div>
            </div>
            // <div>
            //     <h2>hellow music</h2>
            // </div>
        );
    }
}

export default Music;

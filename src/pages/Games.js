import React from "react";
import game from "../assets/images/game.png";
import styles from "./settings.module.css";

class Games extends React.Component {
    render() {
        return (
            <div className={styles.settings}>
                <div className={styles.titleBar}>
                    <p style={{ fontWeight: "bold" }}>iPod</p>
                    <img
                        className={styles.battery}
                        src="https://cdn-icons.flaticon.com/png/512/664/premium/664883.png?token=exp=1649671360~hmac=ecb60bca60d4c44af4c9d7a937556764"
                    ></img>
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <img
                        style={{
                            width: "100%",
                            height: "86.5%",
                        }}
                        src={game}
                    />
                </div>
            </div>
        );
    }
}

export default Games;

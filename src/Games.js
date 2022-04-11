import React from "react";
import game from "./assets/images/game.png";

class Games extends React.Component {
    render() {
        return (
            <div style={styles.settings}>
                <div style={styles.titleBar}>
                    <p style={{ fontWeight: "bold" }}>iPod</p>
                    <img
                        style={styles.battery}
                        src="https://image.flaticon.com/icons/svg/3103/3103446.svg"
                    ></img>
                </div>
                <div style={{ width: "100%", height: "90%" }}>
                    <img style={styles.image} src={game} />
                </div>
            </div>
        );
    }
}

const styles = {
    settings: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    image: {
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    titleBar: {
        height: "10%",
        width: "100%",
        borderRadius: "12px 0 0 0",
        backgroundImage:
            "linear-gradient(0deg, rgb(123, 132, 140), transparent)",
        borderBottom: "1px solid #6c757d",
        padding: "1px 5px 10px 8px",
        display: "flex",
        flexDirecton: "row",
        justifyContent: "space-between",
    },
    battery: {
        width: "20px",
        height: "20px",
    },
};

export default Games;

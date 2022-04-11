import React from "react";
import setting from "./assets/images/setting.png";

class Settings extends React.Component {
    render() {
        return (
            <div style={styles.settings}>
                <div style={styles.titleBar}>
                    <p style={{ fontWeight: "bold" }}>iPod</p>
                    <img
                        style={styles.battery}
                        src="https://cdn-icons.flaticon.com/png/512/664/premium/664883.png?token=exp=1649671360~hmac=ecb60bca60d4c44af4c9d7a937556764"
                    ></img>
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "90%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <img style={styles.image} src={setting} />
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
        width: "65%",
        height: "65%",
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

export default Settings;
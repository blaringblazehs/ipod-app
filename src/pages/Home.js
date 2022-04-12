import React from "react";
import { ListGroup } from "react-bootstrap";
import styles from "./home.module.css";

class Home extends React.Component {
    render() {
        return (
            <div className={styles.homeScreen} id="home-screen">
                <div className={styles.menuList} id="menu-list">
                    <div className={styles.titleBar}>
                        <p style={{ fontWeight: "bold" }}>iPod</p>
                        <img
                            className={styles.battery}
                            src="https://cdn-icons.flaticon.com/png/512/664/premium/664883.png?token=exp=1649671360~hmac=ecb60bca60d4c44af4c9d7a937556764"
                        ></img>
                    </div>
                    <ListGroup style={{ borderRadius: "0" }}>
                        <ListGroup.Item
                            style={{
                                border: "0",
                                padding: "0.2rem 0.6rem",
                            }}
                            className={
                                this.props.activeItem === "CoverFlow"
                                    ? styles.active
                                    : ""
                            }
                        >
                            Cover Flow{" "}
                            {this.props.activeItem === "CoverFlow" ? (
                                <span
                                    style={{
                                        float: "right",
                                        fontWeight: "bold",
                                    }}
                                >
                                    &gt;
                                </span>
                            ) : (
                                ""
                            )}
                        </ListGroup.Item>
                        <ListGroup.Item
                            style={{
                                border: "0",
                                padding: "0.2rem 0.6rem",
                            }}
                            className={
                                this.props.activeItem === "Music"
                                    ? styles.active
                                    : ""
                            }
                        >
                            Music{" "}
                            {this.props.activeItem === "Music" ? (
                                <span
                                    style={{
                                        float: "right",
                                        fontWeight: "bold",
                                    }}
                                >
                                    &gt;
                                </span>
                            ) : (
                                ""
                            )}
                        </ListGroup.Item>
                        <ListGroup.Item
                            style={{ border: "0", padding: "0.2rem 0.6rem" }}
                            className={
                                this.props.activeItem === "Games"
                                    ? styles.active
                                    : ""
                            }
                        >
                            Games{" "}
                            {this.props.activeItem === "Games" ? (
                                <span
                                    style={{
                                        float: "right",
                                        fontWeight: "bold",
                                    }}
                                >
                                    &gt;
                                </span>
                            ) : (
                                ""
                            )}
                        </ListGroup.Item>
                        <ListGroup.Item
                            style={{ border: "0", padding: "0.2rem 0.6rem" }}
                            className={
                                this.props.activeItem === "Settings"
                                    ? styles.active
                                    : ""
                            }
                        >
                            Settings{" "}
                            {this.props.activeItem === "Settings" ? (
                                <span
                                    style={{
                                        float: "right",
                                        fontWeight: "bold",
                                    }}
                                >
                                    &gt;
                                </span>
                            ) : (
                                ""
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div
                    className={styles.imageContainer}
                    id="image-container"
                ></div>
            </div>
        );
    }
}

export default Home;

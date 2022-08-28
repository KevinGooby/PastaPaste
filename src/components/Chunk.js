import "./Chunk.css";
import CopyIcon from "../assets/CopyIcon.png";
import React from "react";

const threshold = 35;

class Chunk extends React.Component {
    render() {
        let title = this.props.title;
        let text = this.props.text;
        if (this.props.clicked) {
            return (
                <div class="chunk">
                    <h1 class="title">{title}</h1>
                    <p class="text">{text}</p>
                    <img class="copy-icon" src={CopyIcon}></img>
                </div>
            )
        } else {
            return (
                <div class="chunk">
                <h1>{title}</h1>
                <p>{text.substr(1, threshold)}</p>
                </div>
            )
        }
            
    }
}

export default Chunk;
import "./ChunkList.css";
import Chunk from "./Chunk.js";
import FlushedFace from "../assets/FlushedFace.png";
import Arrow from "../assets/Arrow.png";
import PastaPasteInfo from "../assets/PastaPasteInfo.jpg";


const ChunkList = (props) => {
    let condition = props.condition;

    // react .map
    // research useState
    // json object -> click + -> open up form -> add to that json -> .map over the json to render chunks
    // research cookies/localstorage in react
    
    if (condition === "chunklist") {
        return (
            <div class="chunklist">
                <Chunk title="Testing" text="LOREM IPSUM DOLOR SIT AMET..." clicked="false"/>
                <Chunk title="Bee Movie Script" text="According to all laws of..." clicked="false" />
                <div class="buffer"></div>
            </div>
        )
    } else if (condition === "chunklist-empty") {
        return (
            <div class="chunklist-empty">
                <img class="emoji" src={FlushedFace}></img>
                <h1 class="large-message">There isn't anything here...</h1>
                <p class="small-message">Click here to add a new chunk of text!</p>
                <img class="arrow" src={ Arrow }></img>
            </div>
        )
    } else if (condition === "settings") {
        return (
            <div class="side-screen">
                <h2 class="title-header">Settings</h2>
                <div class="delete-all">
                    <p class="warning-text warning">CAREFUL</p>
                    <p class="warning-text">Here is the reset button. It wipes all your saved text. This can't be undone but 
                    you have the <strong>POWER</strong></p>
                    <button class="delete-button">OBLITERATE</button>
                </div>
                <div class="settings-buffer"></div>
            </div>
        )
    } else {
        return (
            <div class="side-screen">
                <h2 class="title-header">Information</h2>
                <p class="info-text">Hello! This is a Chrome extension I developed to help people design documents,
                slideshows, and various UI/UX projects like websites and apps. Have fun!</p>
                <h2 class="title-header">Guide</h2>
                <p class="info-text">The home screen houses all the chunks of text you have saved/created</p>
                <img class="instructions" src={ PastaPasteInfo }></img>
                <p class="info-text">Press the red button below to add some new chunks!</p>
                <div class="info-buffer"></div>
            </div>
        )
    }
}

export default ChunkList;
import "./Interface.css";
import WhiteLogo from "../assets/WhiteLogo.png";
import ChunkList from "./ChunkList.js"
import ButtonMenu from "./ButtonMenu.js"

const Interface = () => {
    return (
        <div class="interface">
            <div class="top-bar">
                <img src={ WhiteLogo } class="top-logo"/>
            </div>
            <ChunkList />
            <ButtonMenu />
        </div>
    )
}

export default Interface;
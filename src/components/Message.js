import React from "react"
import "../css/Message.css"
import Chips from "./Chips"

export default function (props) {
    const styles = {
        textAlign : props.sender ?  "right" : "left"
    }
    const messageBoxStyles = {
        alignSelf : props.sender ?  "end" : ""
    }
    return (
        <div className="messageCardContainer" style={messageBoxStyles}>
            <div className="messageCard" style={messageBoxStyles}>
                <h4 className="username" style={styles} >{props.username}</h4>
                <p className="messageText" style={styles}> {props.message}</p>
                <h6 style={styles} className="timestamp"> {props.timestamp}</h6>
            </div>
            <div className="chipContainer" style={messageBoxStyles}>
                {props.chips && <Chips chips={props.chips}/>}
            </div>
        </div>                
    )
}
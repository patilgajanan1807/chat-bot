import React from "react"
import Message from "./Message"
import "../css/ChatScreen.css"
import {getCurrentTime} from "../utils"
import {respond} from "../botLogic"
import {nanoid} from "nanoid"
import Chips from "./Chips"

export default function ChatScreen (props) {
    const msgsRef = React.useRef(null)
    const initialGreeting = { 
          username : "Bot"
        , message : `Welcome back ${props.username}, How may I assit you ?`
        , timestamp : "05:32PM"
        , sender : false
        , id : nanoid()
        }

    const [messages, setMessages] = React.useState(() => {
        return JSON.parse(localStorage.getItem("history")) || [initialGreeting]
    })
    const [newMessage, setNewMessage] = React.useState("");

    React.useEffect(() => {
        if(msgsRef && msgsRef.current) {
            msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
        }
        localStorage.setItem("history", JSON.stringify(messages))
        messages.map(msg => console.log(msg.id, msg.message))
    } , [messages])
    const chat = messages.map(msg =>
        <Message
            key={msg.id}
            id = {msg.id}
            username={msg.username}
            message={msg.message}
            timestamp={msg.timestamp}
            sender={msg.sender}
            chips={msg.chips}
        />
    )
    
    function updateMessage (msg) {
        setNewMessage(msg)
    }
    function sendMessage(){
        if(!newMessage){ return;}
        const newMsg = { username : props.username
            , message : newMessage
            , timestamp : getCurrentTime()
            , sender : true
            , id : nanoid()
            }
        setMessages(prevMsg => [...prevMsg, newMsg])
        setNewMessage("")
        respond(newMsg, setMessages) 
    }
    function onKeyUp(event){
        event.charCode === 13 && sendMessage()
    }
    return (
        <div className="chatScreen">
            <div ref={msgsRef} className="chatHistory"> {chat} 
            </div>
            <div className="send-container">
                <input 
                    className="message" 
                    onKeyPress={onKeyUp} 
                    onChange={event => updateMessage(event.target.value)} 
                    type="text" 
                    value={newMessage}
                    placeholder="Type your message here"
                    />
                <button className="send" onClick={sendMessage}> Send </button>
            </div>
        </div>
    )
}
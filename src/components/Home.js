import React from "react"
import {useNavigate} from "react-router-dom"
import '../css/Home.css'
export default function (props){
    const [username, setUsername] = React.useState(props.username)
    let navigate = useNavigate();
    console.log(props);
    function handleChange(event){
        setUsername(event.target.value)
      }
    function onClickJoin (){
        if (username){
            props.joinChat(username)
            navigate("/chat");
        }
    }

    function onKeyUp(event){
        event.charCode === 13 && onClickJoin()
    }

    return (
        <div className="join-container"> 
            <input
                onKeyPress={onKeyUp}
                className="name" 
                type="text" 
                onChange={handleChange}
            />
            <button className="join" onClick={onClickJoin}> JOIN </button>
        </div>
    )
}
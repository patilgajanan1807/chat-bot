import './App.css';
import Home from "./components/Home"
import ChatScreen from "./components/ChatScreen"
import React,{useState} from "react"
import {Route, Routes} from "react-router-dom"

function App(props) {

  const [username, setUsername] = useState(() => localStorage.getItem("username"))
 
  console.log(props);

  function joinChat (newUsername){
      console.log("Join Chat Clicked!");
      localStorage.setItem("username", newUsername);
      setUsername(newUsername);
  }

  return (
      <Routes>
        <Route exact path="/chat"
          element = {<ChatScreen username={username}/>}
        />
        <Route exact path="/"
            element = {<Home joinChat={joinChat}/>}
        />
      </Routes>  
  );
}

export default App;

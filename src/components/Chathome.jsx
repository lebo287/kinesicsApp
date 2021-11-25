
import io from "socket.io-client";
import { useState } from "react";

import { useLocation } from 'react-router-dom';
import Chat from './Chat';
import '../utility/Chathome.css';
import Layout from '../components/Layout'


const socket = io.connect("http://localhost:3001");

function Chathome() {
//GETTING CURRENT ROUTE

  const location = useLocation();
  console.log(location.pathname);
  localStorage.setItem('message',"")


  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (

    <Layout>
    

<div className="App">
      

      {!showChat ? (
        <div className="joinChatContainer">
          <h3 className="textColor">Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button className="joinButton" onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />

      )}
    </div>

    </Layout>
    
  );
}

export default Chathome;
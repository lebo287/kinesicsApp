/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import '../utility/Chathome.css';
import Detect from '../components/Detect'
import { useNavigate } from "react-router-dom";
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Test from '../components/Test'



function Chat({ socket, username, room }) {
  const navigate = useNavigate();

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {


    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

 useEffect(() => {
   if(currentMessage.length <= 0){
    setCurrentMessage(localStorage.getItem('message'));
   }
 },[currentMessage.length])


  return (

    <>
    <div className="chat-window">
      <div className="chat-header">
        <p>Lets Chart</p>
 
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
       
      
         
      <div className="chat-footer">
    

        <button >
          <Test/>
        </button>

        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />

        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
    </>
  );
}

export default Chat;

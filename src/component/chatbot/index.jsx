import React from 'react'
import './style.css'
import chatbot from "../../assets/image/chatbot.png"
import chatbot_icon from "../../assets/image/chatbox-icon.svg"
export default function index() {
    function displayChat(){
        document.getElementById("chatbox").style.display = "block";
        document.getElementById("logo").style.display = "none";
    }
  return (
    <div className="chatbot-container">
        <div id="chatbox">
            
        </div>
        <div id="logo">
            <div class="chatbox__button">
                <button onClick={displayChat}><img src={chatbot_icon} /></button>
            </div>
        </div>
    </div>
  )
}

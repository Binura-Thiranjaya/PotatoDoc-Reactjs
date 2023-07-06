import React, { useState, useEffect } from "react";
import './style.css';
import chatbox_icon from '../../assets/image/chatbox-icon.svg'
import chatbot from '../../assets/image/chatbot.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Chatbox = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const [showChatbox, setShowChatbox] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChatbox = () => {
    setShowChatbox(!showChatbox);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSendButton();
    }
  }

  async function onSendButton() {
    var textField = document.getElementById("message");
    let text1 = textField.value
    if (text1 === "") {
        return;
    }

    let msg1 = { name: "User", message: text1 }
    messages.push(msg1);
    const CHATBOT_API = process.env.REACT_APP_CHATBOT_API;
    const API = CHATBOT_API+"/predict";
    await fetch(API, {
        method: 'POST',
        body: JSON.stringify({ message: text1 }),
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(r => r.json())
      .then(r => {
        let msg2 = { name: "System", message: r.answer };
        messages.push(msg2);
        updateChatText()
        textField.value = ''
      }).catch(err => {
        console.log(err);
      }
      )
  }
  async function updateChatText() {
    const chatbox = document.getElementById("chatbox__messages");
    chatbox.innerHTML = "";
    messages.slice().reverse().forEach(function(item, index) {
      if (item.name === "System")
      {
        chatbox.innerHTML += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
      }
      else
      {
        chatbox.innerHTML += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
      }
    })
  }

  return (
    <div className="chatbox">
        {showChatbox && (
          <div className=" chatbox--active chatbox__support" data-aos="zoom-in-up">
            <div className="chatbox__header">
              <div className="chatbox__image--header">
                <img src={chatbot} alt="image" />
              </div>
              <div className="chatbox__content--header">
                <h4 className="chatbox__heading--header">Chat support</h4>
                <p className="chatbox__description--header">
                  PotatoDoc: Your Personal Potato Gardening Assistant
                </p>
              </div>
            </div>
            <div className="chatbox__messages" id="chatbox__messages">
              <div></div>
            </div>
            <div className="chatbox__footer">
              <input type="text" placeholder="Write a message..." id="message" onKeyUp={handleKeyPress} />
              <button className="chatbox__send--footer send__button" onClick={onSendButton}  >
                Send
              </button>
            </div>
          </div>
        )}

        <div className="chatbox__button" >
          <button onClick={toggleChatbox}>
            <img src={chatbox_icon} alt="Chatbox Icon" />
          </button>
        </div>
      </div>
  );
};

export default Chatbox;

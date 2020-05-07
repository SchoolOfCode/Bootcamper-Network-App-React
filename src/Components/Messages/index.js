
import React, { useEffect, useState } from "react";
import css from "./message.module.css";
import io from "socket.io-client";

const connection = io("http://localhost:5000");

const Messages = () => {

  const [input, setInput] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  // var socket = io();

  function handleInput(event) {
    setInput(event.target.value);
    console.log(`input stuff`, input);
  }

  useEffect(() => {
    connection.on("chatMessage", ({ message }) => {
      displayMsg(message.input);
      console.log(`message after sending`, message);
    });
  }, []);

  //when receiving a message
  function displayMsg(msg) {
    console.log(`this is MESSAGE`, msg);
    setAllMessages([...allMessages, msg]);
  }
  console.log(`message array`, allMessages);

  //sending message
  function sendMessage() {
    connection.emit("chatMessage", { input });
    setInput("");
  }

  //store messages in server
  //on connection, server sends messages that you've had

  return (
    <div className={css.div}>
      <ul id={css.messages}></ul>
      <form action="">
        <input
          onChange={handleInput}
          value={input}
          id={css.m}
          autocomplete="off"
        />
        <button onClick={sendMessage}>Send</button>

      </form>
    </div>
  );
};

export default Messages;

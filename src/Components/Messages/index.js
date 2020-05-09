import React, { useEffect, useState, useContext } from "react";
import css from "./message.module.css";
import { ProfileContext } from "../../config";
import io from "socket.io-client";

const connection = io("http://localhost:5000");

//"http://bootcampcommunityapp-dev.eu-west-1.elasticbeanstalk.com"

const Messages = () => {
  const [input, setInput] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const { userProfile } = useContext(ProfileContext);

  console.log(`messages userdata?`, userProfile);

  function handleInput(event) {
    setInput(event.target.value);
  }

  useEffect(() => {
    connection.on("chatMessage", (myMessage) => {
      // displayMsg(message.input);
      console.log(`Receiving message from backend`, myMessage);
    });
  }, []);

  //when receiving a message
  function displayMsg(msg) {
    console.log(`Message for display function`, msg);
    setAllMessages([...allMessages, msg]);
  }
  // console.log(`message array`, allMessages);

  //sending message
  function sendMessage() {
    const myMessage = { Message: input, Name: userProfile.first_name };
    connection.emit("chatMessage", myMessage);
    console.log("sending message: ", myMessage);
    setInput("");
  }

  //check format of received input on the backend
  //add firstname photourl & boocamper_id & time/date sent to messages being sent
  //check to see if sent message is also received back to user
  //if they are, add them to an array
  //map over the array to display the messages

  return (
    <div className={css.div}>
      <ul id={css.messages}></ul>
      <form action="" className={css.form}>
        <input
          onChange={handleInput}
          value={input}
          className={css.forminput}
          // autocomplete="off"
        />
        <button className={css.formbutton} type="button" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Messages;

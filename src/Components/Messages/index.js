import React, { useEffect, useState, useContext } from "react";
import css from "./message.module.css";
import { ProfileContext } from "../../config";
import io from "socket.io-client";
import { Link } from "react-router-dom";

const connection = io("http://localhost:5000");

//"http://bootcampcommunityapp-dev.eu-west-1.elasticbeanstalk.com"

const Messages = () => {
  const [input, setInput] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const { profileData } = useContext(ProfileContext);

  const pretendMessages = [
    {
      message: "Hello everyone how are you?",
      first_name: "Laura",
      photo_url:
        "https://lh3.googleusercontent.com/a-/AOh14GjrB5R5XShX5tTdqEEm2lFMEyUfylfnQstmhvHzfg",
      bootcamper_id: "5",
    },
    {
      message: "Good thank you how are you?",
      first_name: "Jodie",
      photo_url:
        "https://lh3.googleusercontent.com/a-/AOh14Gjh8-KlkkzeLqKT1X9ECBbMoSc-6skfixutJdhZlA",
      bootcamper_id: "15",
    },
    {
      message: "I love pot noodles",
      first_name: "Mel",
      photo_url:
        "https://lh3.googleusercontent.com/a-/AOh14GiaOsqfdKwG6JoX0EfNotkdhbW95CuoAy79Yu7rbQ",
      bootcamper_id: "26",
    },
  ];

  function handleInput(event) {
    setInput(event.target.value);
  }

  useEffect(() => {
    connection.on("chatMessage", (myMessage) => {
      displayMsg(myMessage);
      console.log(`Receiving message from backend`, myMessage);
    });
  }, []);

  //when receiving a message
  function displayMsg(msg) {
    console.log(`Message for display function`, msg);
    setAllMessages([...allMessages, msg]);
  }

  console.log(`All messages state`, allMessages);

  //sending message
  function sendMessage() {
    const myMessage = {
      message: input,
      first_name: "username here",
      photo_url: "photourl",
      bootcamper_id: "bootcamper_id",
    };
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
      <ul id={css.messages}>
        {pretendMessages.map((item) => {
          return (
            <li>
              <Link to={`/profiles/${item.bootcamper_id}`} className={css.link}>
                <img src={item.photo_url} alt="bootcamper" width="20px" />
              </Link>
              <p>{item.first_name}</p>
              <p>{item.message}</p>
            </li>
          );
        })}
      </ul>
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

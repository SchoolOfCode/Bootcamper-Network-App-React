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

  //dummy messages array
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
    {
      message:
        "Churning anomalies player-coach high performance keywords for personal development level the playing field. Guerrilla marketing. Turn the crank on this journey goalposts and not the long pole in my tent can you slack it to me?, we need more paper but zeitgeist. Gage [sic] where the industry is heading and give back to the community what we’ve learned. Organic growth let me know if you need me to crack any skulls. Land the plane imagineer granularity flesh that out churning anomalies. Shotgun approach dogpile that I have zero cycles for this, so marketing computer development html roi feedback team website, but good optics yet loop back but what's the real problem we're trying to solve here?. Sorry i didn't get your email.",
      first_name: "Helen",
      photo_url:
        "https://lh3.googleusercontent.com/a-/AOh14GjrB5R5XShX5tTdqEEm2lFMEyUfylfnQstmhvHzfg",
      bootcamper_id: "14",
    },
    {
      message:
        "Churning anomalies player-coach high performance keywords for personal development level the playing field. Guerrilla marketing. Turn the crank on this journey goalposts and not the long pole in my tent can you slack it to me?, we need more paper but zeitgeist. Gage [sic] where the industry is heading and give back to the community what we’ve learned. Organic growth let me know if you need me to crack any skulls. Land the plane imagineer granularity flesh that out churning anomalies. Shotgun approach dogpile that I have zero cycles for this, so marketing computer development html roi feedback team website, but good optics yet loop back but what's the real problem we're trying to solve here?. Sorry i didn't get your email.",
      first_name: "Helen",
      photo_url:
        "https://lh3.googleusercontent.com/a-/AOh14GjrB5R5XShX5tTdqEEm2lFMEyUfylfnQstmhvHzfg",
      bootcamper_id: "14",
    },
    {
      message:
        "Churning anomalies player-coach high performance keywords for personal development level the playing field. Guerrilla marketing. Turn the crank on this journey goalposts and not the long pole in my tent can you slack it to me?, we need more paper but zeitgeist. Gage [sic] where the industry is heading and give back to the community what we’ve learned. Organic growth let me know if you need me to crack any skulls. Land the plane imagineer granularity flesh that out churning anomalies. Shotgun approach dogpile that I have zero cycles for this, so marketing computer development html roi feedback team website, but good optics yet loop back but what's the real problem we're trying to solve here?. Sorry i didn't get your email.",
      first_name: "Helen",
      photo_url:
        "https://lh3.googleusercontent.com/a-/AOh14GjrB5R5XShX5tTdqEEm2lFMEyUfylfnQstmhvHzfg",
      bootcamper_id: "14",
    },
  ];

  function handleInput(event) {
    setInput(event.target.value);
  }

  useEffect(() => {
    connection.on("chatMessage", (myMessage) => {
      console.log(`Receiving message from backend`, myMessage);
      setAllMessages([...allMessages, myMessage]);
    });
    return function removeListener() {
      connection.removeListener("chatMessage");
    };
  }, [allMessages]);

  //sending message
  function sendMessage() {
    const myMessage = {
      message: input,
      first_name: "username here",
      photo_url: "photourl",
      bootcamper_id: "bootcamper_id",
    };
    connection.emit("chatMessage", myMessage);
    // console.log("sending message: ", myMessage);
    setInput("");
  }

  //check format of received input on the backend
  //add firstname photourl & boocamper_id & time/date sent to messages being sent
  //check to see if sent message is also received back to user
  //if they are, add them to an array
  //map over the array to display the messages
  // console.log(`All messages state`, allMessages);
  return (
    <div className={css.div}>
      <ul className={css.messages}>
        {pretendMessages.map((item) => {
          return (
            <li className={css.limessage}>
              <div className={css.imgdiv}>
                <Link
                  to={`/profiles/${item.bootcamper_id}`}
                  className={css.link}
                >
                  <img
                    src={item.photo_url}
                    className={css.profpic}
                    alt="bootcamper"
                    width="30px"
                  />
                </Link>
              </div>

              <div>
                <p className={css.text} style={{ "font-weight": "bold" }}>
                  {item.first_name}
                </p>
                <p className={css.text}>{item.message}</p>
              </div>
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

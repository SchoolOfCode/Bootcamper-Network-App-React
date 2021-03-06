import React, { useEffect, useState, useContext, useRef } from "react";
import css from "./message.module.css";
import { ProfileContext } from "../../config";
import io from "socket.io-client";
import { Link } from "react-router-dom";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";

const connection = io("https://www.schoolofcode.rocks");

const Messages = () => {
  const [input, setInput] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const { profileData } = useContext(ProfileContext);

  //FOR AUTO SCROLL
  const divRef = useRef(null);

  //TO AUTO SCROLL TO THE BOTTOM
  useEffect(() => {
    divRef.current.scrollIntoView({ behaviour: "smooth" });
  });

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

  useEffect(() => {
    async function getAllPreviousMessages() {
      try {
        const res = await fetch(
          `httpS://www.schoolofcode.rocks/bootcampers/allpreviousmessages`
        );
        const data = await res.json(); //changed from res.json
        if (data) {
          setAllMessages(data.payload);
        }
      } catch (err) {
        console.log(`fetch error`, err);
      }
    }
    getAllPreviousMessages();
  }, []);

  function handleInput(event) {
    setInput(event.target.value);
  }

  //RECEIVING MESSAGE
  useEffect(() => {
    connection.on("chatMessage", (myMessage) => {
      setAllMessages([...allMessages, myMessage]);
    });
    return function removeListener() {
      connection.removeListener("chatMessage");
    };
  }, [allMessages]);

  //SENDING MESSAGE
  function sendMessage() {
    const myMessage = {
      message: input,
      bootcamper_id: profileData.bootcamper_id,
    };
    connection.emit("chatMessage", myMessage);
    setInput("");
  }

  //when messages page loads, do a fetch to get last 30 messages and load them. ✅
  //when msg sent from front end, it goes to back end and that is put in the db. ✅
  //back end collects the last msg from the db and sends it to the front end.
  //front end receives latest msg and adds it to the message state.
  //message state should be mapped over.

  //issues
  //latestmessages aren't at the bottom
  //only brings last messages when a next one is sent

  return (
    <>
      <h2 className={css.headers}>Messaging</h2>
      <div className={css.div}>
        <ul className={css.messages}>
          {allMessages.map((item) => {
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

                <div style={{ position: "relative" }}>
                  <p className={css.text} style={{ fontWeight: "bold" }}>
                    {item.first_name}
                  </p>
                  <p className={css.textmessage}>{item.message}</p>
                  <p
                    className={css.texttime}
                    style={{
                      fontSize: "0.7em",
                    }}
                  >
                    <TimeAgo datetime={item.sent} />
                  </p>
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
          <button
            className={css.formbutton}
            type="button"
            onClick={sendMessage}
          >
            Send
          </button>
        </form>
      </div>
      <div ref={divRef} />
    </>
  );
};

export default Messages;

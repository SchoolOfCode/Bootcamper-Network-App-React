import React, { useEffect, useState, useContext, useRef } from "react";
import css from "./message.module.css";
import { ProfileContext } from "../../config";
import io from "socket.io-client";
import { Link } from "react-router-dom";
import TimeAgo from "timeago-react";
// import * as timeago from "timeago.js";

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

import React from "react";
import Divider from "../Divider";

function BootcamperSearch({ name, surname, pic, region }) {
  return (
    <div>
      <div>
        <img
          src={pic}
          style={{
            width: 40,
            height: 40,
            borderRadius: "100%",
            display: "inline-block",
            marginRight: 10,
            marginTop: 10,
          }}
          alt="profile pic"
        />
        <p
          style={{
            display: "inline",
            marginBlockStart: 0,
            marginBlockEnd: 0,
          }}
        >
          {name} {surname}
        </p>
        <p>{region}</p>
      </div>
      <Divider />
    </div>
  );
}

export default BootcamperSearch;

import React from "react";

function BootcamperSearch({ name, surname, pic }) {
  return (
    <>
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
      </div>
      <hr style={{ width: "80%" }} />
    </>
  );
}

export default BootcamperSearch;

import React, { useState, useEffect } from "react";
import css from "./googlemaps.module.css";

function GoogleMaps(postcode) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  console.log(`postcode`, postcode);

  useEffect(() => {
    async function getLonLat() {
      try {
        const res = await fetch(`https://api.postcodes.io/postcodes/N15EP`);
        const data = await res.json();
        if (data) {
          setLatitude(data.result.latitude);
          setLongitude(data.result.longitude);
        }
      } catch (err) {
        console.log(`fetch error`, err);
      }
    }
    getLonLat();
  }, []);

  console.log(`Latitude`, latitude, `longitude`, longitude);

  return (
    <div className={css.container}>
      <p>Hello</p>
    </div>
  );
}

export default GoogleMaps;

// const [newPostcode, setNewPostcode] = useState("");
// console.log(`postcode from company`, postcode);
// const postcodefake = "b721jl";

// const newPostcode = postcode.replace(/\s+/g, "");
// console.log(`new postcode`, newPostcode);

// function changePostcode(postcode) {
//   const space = /\s+/g;
//   let revisedPostcode = postcode.replace(space, "");
//   setNewPostcode(revisedPostcode);
// }
// changePostcode();

// console.log(`Did it work?`, newPostcode);

// return (
//   <div className={css.container}>
//     <iframe
//       width="100%"
//       height="100%"
//       id="mapcanvas"
//       src="https://maps.google.com/maps?q=b797ej&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
//       frameborder="0"
//       scrolling="no"
//       marginheight="0"
//       marginwidth="0"
//     ></iframe>
//   </div>
// );

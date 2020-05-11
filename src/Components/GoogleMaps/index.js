import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import css from "./googlemaps.module.css";

function GoogleMaps({ postcode, google }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    async function getLonLat() {
      try {
        const newPostcode = postcode.replace(/\s+/g, "");
        console.log(`updated postocde`, newPostcode);
        const res = await fetch(
          `https://api.postcodes.io/postcodes/${newPostcode}`
        );
        const data = await res.json();
        console.log(`DATA`, data);
        if (data) {
          setLatitude(data.result.latitude);
          setLongitude(data.result.longitude);
        }
      } catch (err) {
        console.log(`fetch error`, err);
      }
    }
    getLonLat();
  }, [postcode]);

  console.log(`Latitude`, latitude, `longitude`, longitude);

  return (
    <div className={css.container}>
      {longitude && (
        <Map
          google={google}
          style={{
            width: "85%",
            height: "25%",
            top: "150px",
            left: "28px",
            position: "relative",
          }}
          center={{
            lat: latitude,
            lng: longitude,
          }}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </Map>
      )}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC0ue6GBSdLopelg1kPuN5ygZJvbkoqgGM",
})(GoogleMaps);

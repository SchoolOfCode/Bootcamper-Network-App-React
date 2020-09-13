import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { MAPAPIKEY } from "../../config";

function GoogleMaps({ postcode, google }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    async function getLonLat() {
      try {
        const newPostcode = postcode.replace(/\s+/g, "");
        const res = await fetch(
          `https://api.postcodes.io/postcodes/${newPostcode}`
        );
        const data = await res.json();
        if (data && data.result) {
          setLatitude(data.result?.latitude);
          setLongitude(data.result?.longitude);
        }
      } catch (err) {
        console.log(`fetch error`, err);
      }
    }
    getLonLat();
  }, [postcode]);

  return (
    <>
      {postcode && longitude && latitude && (
        <Map
          google={google}
          initialCenter={{
            lat: latitude,
            lng: longitude,
          }}
          style={{
            width: "95%",
            maxWidth: "600px",
            maxHeight: "600px",
            height: "300px",
            position: "relative",
          }}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </Map>
      )}
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: MAPAPIKEY,
})(GoogleMaps);

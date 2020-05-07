import React from "react";
import css from "./googlemaps.module.css";

function GoogleMaps() {
  const postcode = "b721jl";
  return (
    <div className={css.container}>
      <iframe
        width="100%"
        height="100%"
        id="mapcanvas"
        src={`https://maps.google.com/maps?q=${postcode}&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed`}
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
}

export default GoogleMaps;

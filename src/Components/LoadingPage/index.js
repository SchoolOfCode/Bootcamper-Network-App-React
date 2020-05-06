import React from "react";
import css from "./loadingpage.module.css";
import loadingspinner from "../../images/LoadingRing.svg";

function LoadingPage() {
  return (
    <div className={css.container}>
      <img
        src={loadingspinner}
        alt="loading spinner"
        className={css.loadingspinner}
      />
    </div>
  );
}

export default LoadingPage;

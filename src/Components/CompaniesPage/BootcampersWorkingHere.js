import React, { useState, useEffect } from "react";
import { URL } from "../../config";
import { useParams } from "react-router-dom";
import css from "./bcmpr.module.css"


function BootcampersWorkingHere({ companyname }) {
  const [bootcamperWorkingHere, setBootcamperWorkingHere] = useState([]);
  /* const { companyid } = useParams(); */
  useEffect(() => {
    async function getBootcampersWorkinghere() {
      const res = await fetch(`${URL}/bootcampers?companyname=${companyname}`);
      const data = await res.json();
      console.log(data.payload);
      setBootcamperWorkingHere(data.payload);
    }


    getBootcampersWorkinghere();
  }, [companyname]);


  console.log(bootcamperWorkingHere)
  const {
    photourl,
    first_name,
    surname
  } = bootcamperWorkingHere;

  return (
    <div>
      <h3> Bootcampers Who Work Here:  </h3>
      <ul>
        {bootcamperWorkingHere.map((item) => {
          return (
            <li>
              {item.first_name} {item.surname} <img className={css.bootcamperPic} alt="" src={item.photourl} />
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default BootcampersWorkingHere;
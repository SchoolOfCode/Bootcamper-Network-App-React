import React, { useState, useEffect } from "react";
import { URL } from "../../config";
import { useParams } from "react-router-dom";
import css from "./bcmpr.module.css";
import { Link } from "react-router-dom";

function BootcampersWorkingHere({ companyname }) {
  const [bootcamperWorkingHere, setBootcamperWorkingHere] = useState([]);
  /* const { companyid } = useParams(); */
  useEffect(() => {
    async function getBootcampersWorkinghere() {
      const res = await fetch(`${URL}/bootcampers?companyname=${companyname}`);
      const data = await res.json();
      setBootcamperWorkingHere(data.payload);
    }

    getBootcampersWorkinghere();
  }, [companyname]);

  const { photo_url, first_name, surname } = bootcamperWorkingHere;

  return (
    <div>
      <h3 className={css.headers}> Bootcampers Who Work Here: </h3>

      {bootcamperWorkingHere[0] == null ? (
        <div>
          <p className={css.nobootcamper}>Currently no bootcampers work here</p>
        </div>
      ) : (
        <ul>
          {bootcamperWorkingHere.map((item) => {
            return (
              <li className={css.people}>
                <img
                  className={css.bootcamperPic}
                  alt=""
                  src={item.photo_url}
                />
                <Link
                  to={`/profiles/${item.bootcamper_id}`}
                  className={css.link}
                >
                  {item.first_name} {item.surname}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default BootcampersWorkingHere;

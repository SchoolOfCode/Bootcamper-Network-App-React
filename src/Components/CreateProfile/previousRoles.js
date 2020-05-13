import React, { Fragment, useState, useEffect } from "react";
import css from "../CreateCompanies/CreateCompanies.module.css";
import bin from "../../images/bin.png";
const PreviousRoleInputs = ({ onChange, id, onCancel }) => {
  const [jobTitle, setJobTitle] = useState(localStorage.getItem('jobTitle') || '');
  const [company, setCompany] = useState(localStorage.getItem('company') || '');

  useEffect(() => {
    localStorage.setItem("jobTitle", jobTitle);
  }, [jobTitle])

  useEffect(() => {
    localStorage.setItem("company", company);
  }, [company])

  useEffect(() => {
    onChange({ jobTitle, company, id });
  }, [jobTitle, company, id]);

  return (
    <>
      <br />
      <label>Job Title:</label>
      <br />
      <input
        className={css.inputs}
        type="text"
        placeholder="Job Title"
        name="jobTitle"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <br />
      <label>Company:</label> <br />
      <input
        className={css.inputs}
        type="text"
        placeholder="Company"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <img
        alt="bin"
        src={bin}
        type="button"
        onClick={() => onCancel(id)}
        className={css.bin}
      />
    </>
  );
};

const PreviousRoles = ({ onChange }) => {
  const [roleNumber, setRoleNumber] = useState(1);
  const [roleValues, setRoleValues] = useState([]);

  useEffect(() => {
    onChange(roleValues);
  }, [roleValues]);

  const handleChange = (inputValue) => {
    const newRoleValues = roleValues.find(({ id }) => inputValue.id === id)
      ? [
          ...roleValues.slice(0, inputValue.id),
          inputValue,
          ...roleValues.slice(inputValue.id + 1),
        ]
      : [...roleValues, inputValue];
    setRoleValues(newRoleValues);
  };

  const handleCancel = (i) => {
    const newRoleValues = roleValues.filter(({ id }) => id !== i);
    setRoleValues(newRoleValues);
    setRoleNumber(roleNumber - 1);
  };

  console.log(`role values`, roleValues);

  return (
    <>
      {Array.from(Array(roleNumber)).map((x, i) => {
        return (
          <PreviousRoleInputs
            id={i}
            onChange={handleChange}
            onCancel={handleCancel}
          />
        );
      })}

      <button
        type="button"
        onClick={() => setRoleNumber(roleNumber + 1)}
        className={css.prevRoleButton}
      >
        Add Previous Role
      </button>
    </>
  );
};

export default PreviousRoles;

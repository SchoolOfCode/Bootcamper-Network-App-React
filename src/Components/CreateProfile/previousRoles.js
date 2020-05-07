import React, { Fragment, useState, useEffect } from "react";
import css from "../CreateCompanies/CreateCompanies.module.css";

const PreviousRoleInputs = ({ onChange, id, onCancel }) => {
  const [jobTitle, setJobTitle] = useState();
  const [company, setCompany] = useState();

  useEffect(() => {
    onChange({ jobTitle, company, id });
  }, [jobTitle, company, id]);

  return (
    <>
      <label>Job Title:</label>
      <input
        className={css.inputs}
        type="text"
        placeholder="Job Title"
        name="jobTitle"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <label>Company:</label>
      <input
        className={css.inputs}
        type="text"
        placeholder="Company"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button
        type="button"
        onClick={() => onCancel(id)}
        className={css.prevRoleButton}
      >
        ❌
      </button>
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
        +
      </button>
    </>
  );
};

export default PreviousRoles;

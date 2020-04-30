import React, { Fragment, useState, useEffect } from "react";

const PreviousRoleInputs = ({ onChange }) => {
  const [jobTitle, setJobTitle] = useState();
  const [company, setCompany] = useState();

  useEffect(() => {
    onChange({ jobTitle, company });
  }, [jobTitle, company]);

  return (
    <Fragment>
      <label>
        Previous Roles
        <label>
          Job Title:
          <input
            type="text"
            placeholder="Job Title"
            name="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </label>
        <label>
          Company:
          <input
            type="text"
            placeholder="Company"
            name="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
      </label>
    </Fragment>
  );
};

const PreviousRoles = () => {
  return (
    <>
      <PreviousRoleInputs onChange={() => {}} />
      <button>+</button>
    </>
  );
};

export default PreviousRoles;

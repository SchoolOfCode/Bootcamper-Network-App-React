import React, { Fragment, useState, useEffect } from "react";

const PreviousRoleInputs = ({ onChange }) => {
  const [jobTitle, setJobTitle] = useState();
  const [company, setCompany] = useState();

  useEffect(() => {
    onChange({ jobTitle, company });
  }, [jobTitle, company]);

  return (
  
      <label>
        
        <label>
          Job Title:
          <input
            type="text"
            placeholder="Job Title"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </label>
        <label>
          Company:
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
      </label>
 
  );
};

const PreviousRoles = () => {
  const [roleNumber, setRoleNumber] = useState(1)

  return (
    <>
    
    {Array.from(Array(roleNumber)).map(() => 
    {
      console.log(`hello`)
      return <PreviousRoleInputs onChange={() => {}} />
      })}

      <button type="button" onClick={() => setRoleNumber(roleNumber + 1)}>+</button>
    </>
  );
};

export default PreviousRoles;

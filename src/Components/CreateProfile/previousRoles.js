import React, { Fragment, useState, useEffect } from "react";

const PreviousRoleInputs = ({ onChange, id, onCancel }) => {
  const [jobTitle, setJobTitle] = useState();
  const [company, setCompany] = useState();

  useEffect(() => {
    onChange({ jobTitle, company, id });
  }, [jobTitle, company, id]);

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
        <button type="button" onClick={() => onCancel(id)}>❌</button>
      </label>
 
  );
};

const PreviousRoles = ({onChange}) => {
  const [roleNumber, setRoleNumber] = useState(1)
  const [roleValues, setRoleValues] = useState([])

  useEffect(() => {
    onChange({ roleValues });
  }, [roleValues]);

  const handleChange = (inputValue) => {
   const newRoleValues = roleValues.find(({id}) => inputValue.id === id )
      ? [...roleValues.slice(0, inputValue.id), inputValue, ...roleValues.slice(inputValue.id + 1)]
      : [...roleValues, inputValue] 
      setRoleValues(newRoleValues)
  }

  const handleCancel = (i) => {
    const newRoleValues = roleValues.filter(({id}) => id !== i )
    setRoleValues(newRoleValues)
    setRoleNumber(roleNumber - 1)
  } 

console.log(roleValues)
  return (
    <>
    
    {Array.from(Array(roleNumber)).map((x,i) => 
    {
      
      return <PreviousRoleInputs id={i} onChange={handleChange} onCancel={handleCancel}/>
      })}

      <button type="button" onClick={() => setRoleNumber(roleNumber + 1)}>+</button>
    </>
  );
};

export default PreviousRoles;

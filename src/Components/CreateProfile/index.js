import React, {useState} from 'react'

const initialState = {
    first_name: "",
    surname: "",
    profile: "",
    job_title: "",
    company_id: 0,
    salary: "",
    start_date: "",
    previous_roles: "",
    cohort_num: 0,
    region: "",
    job_satisfaction: "",
    new_job: "",
    twitter: "",
    github: "",
    portfolio: "",
    linkedin: ""
}

function ProfileInputs() {
    const [formState, setFormState] = useState(initialState)

    function handleSubmit(){
    }

    function handleChange(){
        
    }

    return <div>
        <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}>
      <label>First Name:<input type="text" placeholder="First Name" name="first_name" value={formState.first_name} onChange={handleChange}/></label>


      </form>
    </div>
}


export default ProfileInputs;
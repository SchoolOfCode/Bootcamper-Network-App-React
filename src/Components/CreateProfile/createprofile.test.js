import React from "react";
import { render } from "@testing-library/react";

import ProfileInputs from "./index";

/* 

TO DO 
the form will: 
- click a button
- lots of inputs for different things
- if they click edit, it shows up all of their existing info
- if they are creating a profile, these inputs are empty 
- new members should be directed straight to the sign up form 
- initial state of all of them is held in one 
- conditional render = if this user name doesn't already exist, direct them to sign up
- if the user already exists, take them to their profile 
- initial state should be in an object 
- see one ben made earlier 
- make a form with a bunch of inputs in, to include uploading a profile pic 
- when it's filled in/changes are made onClick does the fetch (POST and PATCH)
- first time registers = POST 
- editing will be a = PATCH 
- onClick the POST or PATCH is complete and it will show the user their profile
- company = dropdown list to come from a fetch request of all conmpanies.
- in the company fetch bring back company name and company id 
- user will see the company name, but the value will be the id
- the user selects the name, but the id is used to render it on their profile
- include a button to add a company tbc. 

- TEST e.target.value from the input is the same value as is being rendered on screen 
- TEST what their typing is saved into initial this.state.
- TEST POST and PATCH ???
- TEST fetch beings back all company names 

snapshot - save what the component looks like at first and will compare other tests to this first verison

state ?? you can test effects of stuff e.g. if i click a button the text changes, if i click 5 times 5 is shown here etc. 

usereducer is good for testing 

function reducer(state, action) {
//...
switch(action.type) {
  case "INPUT_CHANGED":
    return {...state, [action.payload.name]: action.payload.value};
}
return state;
}

const actual = reducer({input: "hello"}, {type: "INPUT_CHANGED", payload: {name: "email", value: "chris@"}})

actual.input === "goodbye"
*/

it("should check if the first name label is there", () => {
  const { getByText } = render(<ProfileInputs />);
  const labelElement = getByText(/First Name:/i);
  expect(labelElement).toBeInTheDocument();
});

/* it("check input value is same as state", () => {
const expected = initialState.first_name;
const actual = input.first_name;
expect(actual).toStrictEqual(expected);
}) */

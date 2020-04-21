import React, {useState, useEffect} from "react";

export default function Meetup(){

  const [state, setState] = useState()
/*   const [state1, setState1] = useState()
  const [state2, setState2] = useState()
  const [state3, setState3] = useState()
  const [state4, setState4] = useState()
  const [state5, setState5] = useState() */

var myHeaders = new Headers();
myHeaders.append('Access-Control-Allow-Origin', 'https://api.meetup.com/find/topics?query=tech&only=id,name')
var myInit = { method: 'GET',
             headers: myHeaders,
             mode: 'cors',
             cache: 'default' };

useEffect(() => {
const loadData = async () => {
  try {
const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/events/?allMeetups=false&keywords=tech&radius=5&userFreeform=Birmingham%2C+West+Midlands%2C+England%2C+United+Kingdom&mcId=c1012719&change=yes&eventFilter=mysugg", myInit)

/* https://www.meetup.com/find/events/?allMeetups=false&keywords=tech&radius=5&userFreeform=Birmingham%2C+West+Midlands%2C+England%2C+United+Kingdom&mcId=c1012719&change=yes&eventFilter=mysugg */


/* /events/?allMeetups=false&keywords=tech&radius=5&userFreeform=Birmingham%2C+West+Midlands%2C+England%2C+United+Kingdom&mcId=c1012719&change=yes&eventFilter=mysugg */


//save in one state with object/array, see shopping list or todo list
//make the li in the map to put everything in 

const data = await response.json()
console.log(data)
setState(data[0].name)
/* setState1(data[1].name)
setState2(data[2].name)
setState3(data[3].name)
setState4(data[4].name)
setState5(data[5].name) */
   } catch (error) {
  if (error === "AbortError") {
    console.log(`error caught`);
  } else {
    throw error;
  }
}
};
loadData();
}, [])

return (
  <div>
  <ul>
    <li>{state}</li>
    </ul>
  </div>
)
}
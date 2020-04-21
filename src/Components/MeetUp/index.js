import React, {useState, useEffect} from "react";
import Events from '../Events'


export default function Meetup(){

  const [state, setState] = useState()


var myHeaders = new Headers();
myHeaders.append('Access-Control-Allow-Origin', 'https://api.meetup.com/find/topics?query=tech&only=id,name')
var myInit = { method: 'GET',
             headers: myHeaders,
             mode: 'cors',
             cache: 'default' };

useEffect(() => {
const loadData = async () => {
  try {
const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/topics?zip=&radius=1&query=tech&only=id,name", myInit)

/* https://www.meetup.com/find/events/?allMeetups=false&keywords=tech&radius=5&userFreeform=Birmingham%2C+West+Midlands%2C+England%2C+United+Kingdom&mcId=c1012719&change=yes&eventFilter=mysugg */


/* /events/?allMeetups=false&keywords=tech&radius=5&userFreeform=Birmingham%2C+West+Midlands%2C+England%2C+United+Kingdom&mcId=c1012719&change=yes&eventFilter=mysugg */


//save in one state with object/array, see shopping list or todo list
//make the li in the map to put everything in 

const data = await response.json()


console.log(data)
setState(data) 

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
{state.map(item => (
  <li key={item.id}>
    Event: {item.name}
  </li>
))}
  </div>
)
}
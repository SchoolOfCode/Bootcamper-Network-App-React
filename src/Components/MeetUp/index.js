import React, {useState, useEffect} from "react";

export default function Meetup(){

  const [state, setState] = useState([])


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


const data = await response.json()
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
  <ul>
{state.map(item => {
  return (
  <li>
   {item.name}
  </li>
)
})}
</ul>
)
}
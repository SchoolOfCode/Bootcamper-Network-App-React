import React, {useState} from "react";

async function Meetup(){
 const [meetup, setMeetup] = useState("") 

var myHeaders = new Headers();
myHeaders.append('Access-Control-Allow-Origin', 'https://api.meetup.com/find/topics?query=tech&only=id,name')
var myInit = { method: 'GET',
             headers: myHeaders,
             mode: 'cors',
             cache: 'default' };

var response = await fetch("https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/topics?query=tech&only=id,name", myInit)
var data = await response.json()
console.log(data[0].name)

 return (
    <div>
      <p>{data[0].name}</p>
      <br />
      <cite>MeetUp</cite>
    </div>
);
  
 }

  export default Meetup;
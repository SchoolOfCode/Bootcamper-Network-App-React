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
console.log(data)

 return (
    <div>
      <p>{data[0].name}</p>
      <br />
      <cite>MeetUp</cite>
    </div>
);
  
 }


 /* TO DO:
 Rather making the react component asynchronous, try writing a separate asynchronous function within the component so that the fetch is isolated there.

 Then do some conditional rendering with your data so that it doesn't try and render it before the fetch has completed.
 
 Like {data[0].name  || "dummy data"}

 Also, might be worth handling your fetch data in state, but maybe you've not got to that bit yet!

 */

  export default Meetup;
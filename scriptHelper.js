// Write your helper functions here!
//var  x=require('isomorphic-fetch');
//var Jasmine = require('jasmine');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
  
let htmlString = `
                   <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance}</li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                
                <img src="${imageUrl}">`;
                return htmlString;
 }
function validateInput(testInput) {
     if (testInput === ""){
        return "Empty"
    }
    else if(isNaN(testInput)){
        return "Not a Number";
    }
    else{

        return "Is a Number";
    }
 }
function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    //window.alert("hello");
    if(validateInput(pilot)  === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        //event.preventDefault();
         window.alert("All fields are required");
         return;
      }

    if(validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" )  
    {}
    else{
        window.alert("Make sure to enter valid information for each field");
        return;
    }
    if(validateInput(fuelLevel) === "Is a Number" && validateInput(cargoLevel) === "Is a Number" )
    {}
    else{
        window.alert("Make sure to enter valid information for each field");
        return;
    }
    let element=document.getElementById("faultyItems");
    //element.style.visibility='visible';
    
    document.getElementById("pilotStatus").innerHTML=`${pilot} is ready for the launch`;
    document.getElementById("copilotStatus").innerHTML=`${copilot} is ready for the launch`;   

    if((fuelLevel>10000) && (cargoLevel<10000)){
        document.getElementById("launchStatus").innerHTML="Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color="green";
        document.getElementById("fuelStatus").style.visibility='Fuel level high enough for launch';
        document.getElementById("cargoStatus").style.visibility='Cargo mass low enough to launch';
        element.style.visibility='hidden';
    }
    
    if (fuelLevel<10000){
       
        element.style.visibility='visible';
        document.getElementById("fuelStatus").innerHTML="Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML="Shuttle is not ready for launch";
        document.getElementById("cargoStatus").style.display="Cargo mass low enough to launch";
        document.getElementById("launchStatus").style.color="red";
   }
   else
{
    element.style.visibility='visible';
    document.getElementById("fuelStatus").innerHTML="Fuel level high enough for launch";
}
    if(cargoLevel>10000){
        element.style.visibility='visible';
        document.getElementById("fuelStatus").innerHTML="Fuel level high enough for launch";
         document.getElementById("cargoStatus").innerHTML="Too much mass for the shuttle to take off";
         document.getElementById("launchStatus").innerHTML="Shuttle is not ready for launch";
         document.getElementById("launchStatus").style.color="red";
}
else
{
    element.style.visibility='visible';
    document.getElementById("cargoStatus").innerHTML="Cargo mass low enough to launch";
}
  return;
  
}
 async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        //console.log(response);
        //console.log("My fetch");
        return response.json();
        });
    //console.log(planetsReturned);
    return planetsReturned;
}

function pickPlanet(planets) {
    //let planetnumber=Math.round(Math.random()*10);
    //console.log(Math.random() * (planets.length - 1) + 1);
    let planetnumber=Math.floor(Math.random() * (planets.length - 1) + 1);
    //console.log(planetnumber);
    return planets[planetnumber];
}

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;


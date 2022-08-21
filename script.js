// Write your JavaScript code here!
/* require("./scriptHelper");
const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");
const { formSubmission } = require("./scriptHelper");
 */


window.addEventListener("load", function() {

  let list=document.getElementById("faultyItems");
  list.style.visibility='hidden';
  document.getElementById("pilotStatus").innerHTML=`Pilot Ready`;
  document.getElementById("copilotStatus").innerHTML=`Co-pilot Ready`;
  document.getElementById("cargoStatus").innerHTML='Cargo mass low enough for launch';
  document.getElementById("fuelStatus").innerHTML='Fuel level high enough for launch';

   document.getElementById("formSubmit").addEventListener("click",function(event){
   event.preventDefault();


    let pilotName=document.querySelector("input[name=pilotName]");
    let copilotName=document.querySelector("input[name=copilotName]");
    let fuelLevel=document.querySelector("input[name=fuelLevel]");
    let cargoMass=document.querySelector("input[name=cargoMass]");

    formSubmission(document,list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
    //event.stopPropagation();
   });
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse=myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       //console.log(listedPlanets);
   }).then(function () {
       //console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet=pickPlanet(listedPlanets);
      
       //console.log(pickedPlanet);
       //console.log(pickedPlanet.image);
       let planetsDisplay= addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image)
       //console.log(planetsDisplay);
     
   });
   
   
});
// Write your JavaScript code here!
//require("./scriptHelper");
//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");
//const { formSubmission } = require("./scriptHelper");
window.addEventListener("load", function() {
   document.getElementById("formSubmit").addEventListener("click",function(event){
    event.preventDefault();

    let pilotName=document.querySelector("input[name=pilotName]");
    let copilotName=document.querySelector("input[name=copilotName]");
    let fuelLevel=document.querySelector("input[name=fuelLevel]");
    let cargoMass=document.querySelector("input[name=cargoMass]");
    formSubmission(document, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
    event.stopPropagation();
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
       let planetsContainer=document.getElementById("missionTarget");
       //console.log(pickedPlanet);
       //console.log(pickedPlanet.image);
       let planetsDisplay= addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image)
       //console.log(planetsDisplay);
     planetsContainer.innerHTML=planetsDisplay;
   });
   
   
});
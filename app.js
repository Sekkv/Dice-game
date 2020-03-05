// toglogchiin eeljiig hadgalah huwisagch , negduger toglogchiig 0,hoyrdugar toglogchiig 1 gj temdegley
var activePlayer = 1;

// toglogchiin tsugluulsan onoog hadgaldag huwisagch
var scores = [0, 0];

// toglogchiin eeljin deer tsugluulj bga onoog hadgaldag huwisagch
var roundScore = 0;

// shoonii ali talaara buusniig hadgalah huwisagch heregtei , 1-6 gesen utgiig ene huwisagchid sanamsarguigeer uusgej ugnu.

var dice = Math.floor(Math.random() * 6) + 1;

// id = "score-0"
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

// id = "score-1"
//document.querySelector("#score-1").innerHTML = "<em>Yes!</em>";

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

window.document.querySelector(".dice").style.display = "none";

console.log("shoo : " + dice);

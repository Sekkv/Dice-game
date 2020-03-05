// toglogchiin eeljiig hadgalah huwisagch , negduger toglogchiig 0,hoyrdugar toglogchiig 1 gj temdegley
var activePlayer = 1;

// toglogchiin tsugluulsan onoog hadgaldag huwisagch
var scores = [0, 0];

// toglogchiin eeljin deer tsugluulj bga onoog hadgaldag huwisagch
var roundScore = 0;

// shoonii ali talaara buusniig hadgalah huwisagch heregtei , 1-6 gesen utgiig ene huwisagchid sanamsarguigeer uusgej ugnu.

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
//document.querySelector("#score-1").innerHTML = "<em>Yes!</em>";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});

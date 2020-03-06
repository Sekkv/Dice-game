// toglogchiin eeljiig hadgalah huwisagch , negduger toglogchiig 0,hoyrdugar toglogchiig 1 gj temdegley
var activePlayer = 0;

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

// shoonii zurgiig web deer gargaj irehgui
diceDom.style.display = "none";

// Shoog shideh event listner
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1 - 6 dotorh sanamsargui neg too gargaj awna
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // shoonii zurgiig web deer gargaj irne.
  diceDom.style.display = "block";

  // buusan sanamsargui toond hargalzah shaani zurgiig web deer gargaj irne.
  diceDom.src = "dice-" + diceNumber + ".png";

  // buusan too n 1 ees ylgaatai bol idehtei toglogchiin eeljiiin onoog nemegduulne.
  if (diceNumber !== 1) {
    // 1-ees ylgaatai too buulaa . buusan toog toglogchid nemj ogno
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogchiin eeljiig ene hesegt solij ogno.

    // ene toglogchiin eeljin deer tsugluulsanonoog 0 bolgono
    document.getElementById("current-" + activePlayer).textContent = 0;
    roundScore = 0;

    // ulaan tsegiig shiljuuleh
    //document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

    // toglogchiin eeljiig solino
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // ulaan tsegiig shiljuuleh
    //document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");

    // ene bas ulaan tsegig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Shoog tur alga bolgono
    diceDom.style.display = "none";
  }
});

// button hold click
document.querySelector(".btn-hold").addEventListener("click", function() {
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // hojson esehioig shalgah
  if (scores[activePlayer] >= 100) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER";
  }
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // ene toglogchiin eeljin deer tsugluulsanonoog 0 bolgono
  document.getElementById("current-" + activePlayer).textContent = 0;
  roundScore = 0;

  // toglogchiin eeljiig solino
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // ene bas ulaan tsegig shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Shoog tur alga bolgono
  diceDom.style.display = "none";
});

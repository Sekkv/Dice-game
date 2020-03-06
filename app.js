// toglogchiin eeljiig hadgalah huwisagch , negduger toglogchiig 0,hoyrdugar toglogchiig 1 gj temdegley
var activePlayer;
// toglogchiin tsugluulsan onoog hadgaldag huwisagch
var scores;
// toglogchiin eeljin deer tsugluulj bga onoog hadgaldag huwisagch
var roundScore;
var diceDom = document.querySelector(".dice");
initGame();

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
    toglogchiinEeljiigSolih();
  }
});

// button hold click
document.querySelector(".btn-hold").addEventListener("click", function() {
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // hojson esehioig shalgah
  if (scores[activePlayer] >= 20) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER";
    document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
    document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
    document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
    diceDom.style.display = "none";
  }else{
    document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
    toglogchiinEeljiigSolih();
  }
});

document.querySelector(".btn-new").addEventListener("click",function(){
  initGame();
  document.getElementById("name-0").textContent = "player 1";
  document.getElementById("name-1").textContent = "player 2";
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-"+activePlayer+"-panel").classList.add("active");
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
})

function toglogchiinEeljiigSolih(){
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

function initGame() {
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  //document.querySelector("#score-1").innerHTML = "<em>Yes!</em>";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // shoonii zurgiig web deer gargaj irehgui
  diceDom.style.display = "none";
}

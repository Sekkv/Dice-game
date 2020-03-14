var computerSelect;
var plr;
var level;
var levelCount = 0;
var diceNumber;
// togloom duussn esehig shalgah huwisagch
var isNewGame;
// toglogchiin eeljiig hadgalah huwisagch , negduger toglogchiig 0,hoyrdugar toglogchiig 1 gj temdegley
var activePlayer;
// toglogchiin tsugluulsan onoog hadgaldag huwisagch
var scores;
// toglogchiin eeljin deer tsugluulj bga onoog hadgaldag huwisagch
var roundScore;
var diceDom = document.querySelector(".dice");
initGame();
function initGame() {
  // togloom ehelle gedeg tuluwt oruulna
  isNewGame = true;
  computerSelect = false;
  plr = true;
  console.log("======= > " + computerSelect);
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

// Shoog shideh event listner
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isNewGame && plr) {
    randomDice();
    // buusan too n 1 ees ylgaatai bol idehtei toglogchiin eeljiiin onoog nemegduulne.
    if (diceNumber !== 1) {
      // 1-ees ylgaatai too buulaa . buusan toog toglogchid nemj ogno
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // 1 buusan tul toglogchiin eeljiig ene hesegt solij ogno.
      if (computerSelect) {
        toglogchiinEeljiigSolih();
        computer();
      } else toglogchiinEeljiigSolih();
    }
  } else if (!plr) console.log("computer togloj bn!!!!!!");
  else alert("Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү!!");
});

// button hold click
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isNewGame && plr) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    // hojson esehioig shalgah
    if (scores[activePlayer] >= 50) {
      isNewGame = false;
      winner();
    } else {
      document.getElementById("score-" + activePlayer).textContent =
        scores[activePlayer];
      if (computerSelect) {
        toglogchiinEeljiigSolih();
        computer();
      } else toglogchiinEeljiigSolih();
    }
  } else if (!plr) console.log("computer togloj bn!!!!!!");
  else alert("Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү!!");
});

document.getElementById("easy").addEventListener("click", function() {
  if (scores[0] === 0 && scores[1] === 0) {
    computerSelect = true;
    level = 2;
    console.log("===> lvl = " + level);
    document.getElementById("name-1").textContent = "easy";
    console.log("======= > " + computerSelect);
  } else console.log("umnuh togloog duusaagui bn!!!");
});
document.getElementById("medium").addEventListener("click", function() {
  if (scores[0] === 0 && scores[1] === 0) {
    computerSelect = true;
    level = 4;
    console.log("===> lvl = " + level);
    document.getElementById("name-1").textContent = "medium";
    console.log("======= > " + computerSelect);
  } else console.log("umnuh togloog duusaagui bn!!!");
});
document.getElementById("hard").addEventListener("click", function() {
  if (scores[0] === 0 && scores[1] === 0) {
    computerSelect = true;
    level = 15;
    console.log("===> lvl = " + level);
    document.getElementById("name-1").textContent = "hard";
    console.log("======= > " + computerSelect);
  } else console.log("umnuh togloog duusaagui bn!!!");
});

function computer() {
  plr = false;
  console.log("computer");
  randomDice();
  // buusan too n 1 ees ylgaatai bol idehtei toglogchiin eeljiiin onoog nemegduulne.
  if (diceNumber !== 1 && levelCount < level) {
    // 1-ees ylgaatai too buulaa . buusan toog toglogchid nemj ogno
    levelCount++;
    console.log("===> lvl Count = " + levelCount);
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    if (scores[activePlayer] + roundScore > 50) {
      scores[activePlayer] = scores[activePlayer] + roundScore;
      document.getElementById("score-" + activePlayer).textContent =
        scores[activePlayer];
      isNewGame = false;
      computerSelect = false;
      plr = true;
      winner();
    }
    setTimeout(() => {
      if (computerSelect) computer();
    }, 3000);
  } else {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    plr = true;
    levelCount = 0;
    toglogchiinEeljiigSolih();
  }
}

function winner() {
  document.getElementById("name-" + activePlayer).textContent = "WINNER";
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("winner");
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("active");
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  diceDom.style.display = "none";
}

function randomDice() {
  // 1 - 6 dotorh sanamsargui neg too gargaj awna
  diceNumber = Math.floor(Math.random() * 6) + 1;
  // shoonii zurgiig web deer gargaj irne.
  diceDom.style.display = "block";
  // buusan sanamsargui toond hargalzah shooni zurgiig web deer gargaj irne.
  diceDom.src = "Dice-" + diceNumber + ".png";
}

document.querySelector(".btn-new").addEventListener("click", function() {
  initGame();
  document.getElementById("name-0").textContent = "player 1";
  document.getElementById("name-1").textContent = "player 2";
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
});

document.querySelector(".btn-info").addEventListener("click", function() {
  alert(
    "Түрүүлж 100 оноо цуглуулсан нь ялна.\n Start game товчийг дарснаар тоглоом эхлэнэ.\n Role dice товчийг дарснаар шоо хаягдах бөгөөд туссан оноо нь CURRENT хэсэгт нэмэгдэх болно.Хэрэв та шоог 1 оноотой талбараар нь буулгавал CURRENT - ийн оноо 0 болно. Хэрэв та 1 буух магадлалтай болчихлоо гэж блдоод оноогоо авъя гэж бодвол HOLD товчийг дарсанаар таны оноо хадгалагдаж үлдэх болно!!! \n\n\n\t\t\t\t ****  Амжилт   **** "
  );
});

function toglogchiinEeljiigSolih() {
  // ene toglogchiin eeljin deer tsugluulsan onoog 0 bolgono
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

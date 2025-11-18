"use strict";
(function() {
var score = 50;
function announce() { console.log("Game started"); }
const status = "ready";
console.log(score);
announce();
function startGame() { console.log(status); }
startGame();
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status);
announceArrow();
startGameArrow();
})();
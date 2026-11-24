// variables & data types
const playerName = "Ilham";
const playerAge = 22;
let score = 100;
let bonus = 50;
let penalty = 20;
let isPlaying = true;

// function declaration
function showPlayerInfo() {
  console.log("Nama pemain:", playerName);
  console.log("Umur pemain:", playerAge);
  console.log("Status pemain:", isPlaying);
}
showPlayerInfo();

// function parameter
function calculateScore(score, bonus) {
  console.log("Total score:", score + bonus);
}
calculateScore(100, 50);

// function expression
let calculatePenalty = function (score, penalty) {
  console.log("Skor sementara:", score - penalty);
};
calculatePenalty(100, 20);

// function return

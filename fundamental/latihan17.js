function calculateFinalScore(score, bonus, penalty) {
  return score + bonus - penalty;
}
let finalScore = calculateFinalScore(100, 50, 20);
console.log("Final Score:", finalScore);
let finalScore2 = calculateFinalScore(200, 70, 20);
console.log("Final Score:", finalScore2);
let finalScore3 = calculateFinalScore(200, 50, 30);
console.log("Final Score:", finalScore3);

function calculateScore(score, bonus) {
  return score + bonus;
}

let totalScore = calculateScore(100, 50);
let finalScore = totalScore * 2;

console.log("Total Score:", totalScore);
console.log("Final Score:", finalScore);

// variabel dan tipe data
const playerName = "Ilham";
const playerAge = 22;
let initialScore = 100;
let bonusScore = 50;
let energy = 5;
let isPlaying = true;

console.log("Nama:", playerName);
console.log("Umur:", playerAge);
console.log("Score:", initialScore);
console.log("Bonus:", bonusScore);
console.log("Energy:", energy);
console.log("Status:", isPlaying);

// operator
let penalti = 20;
let kemenangan = 3;
let kekalahan = 1;
let totalScore = initialScore + bonusScore * kemenangan - penalti * kekalahan;
console.log("Total Score:", totalScore);

console.log("Nama:", typeof playerName);
console.log("Umur:", typeof playerAge);
console.log("Score:", typeof totalScore);
console.log("Status:", typeof isPlaying);

// conditional statement
if (totalScore >= 200) {
  console.log("Legendary");
} else if (totalScore >= 150) {
  console.log("Master");
} else if (totalScore >= 100) {
  console.log("Gold");
} else {
  console.log("Silver");
}

if (playerAge >= 18 && isPlaying === true) {
  console.log("Pemain memenuhi syarat bermain");
} else {
  console.log("Pemain tidak memenuhi syarat bermain");
}

// for loop, break, and continue
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  } else if (i === 8) {
    break;
  }
  console.log("Pertandingan ke-" + i);
}

// while loop
while (energy > 0) {
  console.log("Sisa energi:", energy);
  energy--;
}

// do while loop
let countdown = 3;
do {
  console.log(countdown);
  countdown--;
} while (countdown >= 1);
console.log("Pertandingan dimulai!");

console.log("Operator AND");
let levelPemain = 20;
let levelMinimum = 15;
let goldPemain = 500;
let hargaPedang = 300;

console.log(levelPemain >= levelMinimum && goldPemain >= hargaPedang);

console.log("Operator OR");
let menangPertandingan = false;
let menyelesaikanMisi = true;

console.log(menangPertandingan || menyelesaikanMisi);

console.log("Operator NOT");
let isOnline = false;

console.log(!isOnline);

console.log("Latihan");
let level = 25;
let levelMin = 20;
let gold = 150;
let hargaTiket = 100;
let premium = false;
let misi = true;

console.log(
  "Apakah pemain memenuhi syarat: " +
    (level >= levelMinimum && gold >= hargaTiket),
);
console.log(
  "Apakah pemain mendapat bonus: " + (premium === true || misi === true),
);
console.log("Apakah pemain belum menjadi anggota premium: " + !premium);

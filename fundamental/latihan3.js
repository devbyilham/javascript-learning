const nama = "ilham";
let umur = 22;
let level = 25;
let gold = 500;
let hargaPedang = 200;
let levelMin = 20;
let premium = false;
let misi = true;

console.log("Nama: " + nama);
console.log("Umur: " + umur);
console.log("Level: " + level);

console.log("Tipe data nama: " + typeof nama);
console.log("Tipe data umur: " + typeof umur);
console.log("Tipe data level: " + typeof level);
console.log("Tipe data status premium: " + typeof premium);

let sisaGold = gold - hargaPedang;
let totalGold = sisaGold + 150;
let kaliGold = gold * 3;
let bagiGold = gold % 7;
console.log("Sisa gold setelah membeli pedang: " + sisaGold);
console.log("Total gold setelah dapat bonus: " + totalGold);
console.log("Hasil perkalian gold: " + kaliGold);
console.log("Sisa pembagian gold: " + bagiGold);

console.log(
  "Apakah level lebih besar dari level minimum: " + (level >= levelMin),
);
console.log("Apakah gold cukup membeli pedang: " + (gold >= hargaPedang));
console.log("Apakah level sama dengan 25: " + (level === 25));
console.log("Apakah status premium berbeda dari true: " + (premium !== true));

console.log(
  "Apakah karakter bisa memasuki dungeon: ",
  level >= levelMin && gold >= hargaPedang,
);
console.log(
  "Apakah karakter mendapat bonus: ",
  premium === true || misi === true,
);
console.log("Apakah karakter belum premium: ", !premium);

const nama = "Ilham";
let level = 27;
let gold = 450;
let senjata = 300;
let levelMin = 20;
let premium = false;
let misi = true;

console.log("Nama Karakter: " + nama);
console.log("Tipe data level: " + typeof level);

let sisaGold = gold - senjata;
console.log("Sisa gold: " + sisaGold);

let totalGold = sisaGold + 150;
console.log("Total gold: " + totalGold);

console.log("Apakah level memenuhi: " + (level >= levelMin));
console.log("Apakah gold cukup membeli senjata: " + (gold >= senjata));

console.log(
  "Apakah bisa memasuki arena: " + (level >= levelMin && gold >= senjata),
);

console.log("Apa berhak menerima bonus: " + (premium || misi));

console.log("Apakah karakter belum premium: " + !premium);

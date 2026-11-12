const nama = "Ilham";
let game = "Valorant";
let umur = 22;
let kill = 35;
let death = 12;
let kemenangan = 8;
let premium = true;

console.log("Tipe data nama:", typeof nama);
console.log("Tipe data umur:", typeof umur);
console.log("Tipe data kill:", typeof kill);
console.log("Tipe data premium:", typeof premium);

const skor = kill * 2 + kemenangan * 10 - death * 3;
console.log("Skor pemain:", skor);

if (premium === true) {
  console.log("Anggota Premium");
} else {
  console.log("Anggota Reguler");
}

if (umur >= 17 && kemenangan >= 5) {
  console.log("Lolos Seleksi");
} else {
  console.log("Tidak Lolos Seleksi");
}

if (skor >= 120) {
  console.log("Excellent");
} else if (skor >= 100) {
  console.log("Good");
} else if (skor >= 70) {
  console.log("Average");
} else {
  console.log("Poor");
}

if (premium === true || skor >= 120) {
  console.log("Status VIP");
} else {
  console.log("Status Reguler");
}

//for .. of
// const mhs = ["daffeyd", "bambang", "budi"];
// //for each cuman bisa di pake untuk array
// mhs.forEach((m, i) => console.log(`${m} adalah makasiswa ke-${i + 1}`));
// //for engga punya index jadi engga bisa tauu sekarang iterasi keberapa
// for (const m of mhs) {
//   console.log(m);
// }
// //namun ada caranya jadi tinggal masukin obj.entries
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah makasiswa ke-${i + 1}`);
// }
// const nama = "daffeyd";

// for (const a of nama) {
//   console.log(a);
// }

// //nodelist
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }
// function jumlahkanAngka() {
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5)); 

//for ..in  digunakan untuk memgulang suatu object
const mhs = {
  nama : 'daffeyd',
  umur : 33,
  email : 'daffeydwilbert@gmail.com'
}

for (m in mhs){
  console.log(m);
  //untuk print isinya
  console.log(mhs[m]);
}
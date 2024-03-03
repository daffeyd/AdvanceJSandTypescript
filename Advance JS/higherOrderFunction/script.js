//Penggunaan higher order function dapat membuat program yang kompleks terlihat simple
// contoh higher order function
// Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.reduce()

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//mencari angka yang lebih besar dari 3
//// menggunakan for loop
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// //menggunakan filter

// const newAngka = angka.filter( a => a >= 3);
// console.log(newAngka);

// //map
// //mengkalikan semua angka dengan 2

// const newAngka = angka. map(a => a*2)
// console.log(newAngka);

// //reduce
// //melakukan sesuatu terhadap seluruh elemen array
// //ex: menjumlahkan seluruh elemen pada array
// //parameternya ada 2 accumulator(hasil dar prosesnya), dan juga
// // dan juga value sekarang

// let newAngka = angka. reduce((accumulator, currentValue) =>
// accumulator + currentValue, 5)
// console.log(newAngka);

// //method chaining
// //cari angka yang lebih besar dari 5, lalu hasilnya dikali 5, dan di jumlahkan

// const hasil = angka.filter(a => a>=5)
// .map(a=>a*3)
// .reduce((acc,cur) => acc + cur )
// console.log(hasil)

//latihan
//ambil semua elemen dalam video
const videos = Array.from(document.querySelectorAll("[data-duration]"));
console.log(videos);
//pilih yang hanya ada 'javascript lanjutan'
let jslanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  //ambil durasi masing masing video
  .map((item) => item.dataset.duration)

  //ubah durasi menjadi int, ubah menit menjadi detik
  .map((waktu) => {
    //10: 30 -> [10,30] split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);


// ubah formatnya menjadi jam ment detik
const jam = Math.floor(jslanjut / 3600);
jslanjut = jslanjut - jam * 3600;
let menit = Math.floor(jslanjut / 60);
let detik = jslanjut - menit * 60;

//simpan di dom
const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik}, Detik.`
const jmlVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video`

console.log(jam);

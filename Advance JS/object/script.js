// Caro untuk membuat Object pada javascript
// 1. Object Literal
// Permasalahan tidak efektif untuk penggunaan objek yang banyak secara berulang

// let mahasiswal = {
//     nama : 'Daffeyd Wilbert',
//     energi : 10,
//     makan : function (porsi){
//         this.energi = this.energi + porsi
//         console.log('Halo, ${this.nama}, selamat makan')
//     }
// }

// let mahasiswa2 = {
//     nama : 'Daffeyd doddy',
//     energi : 10,
//     makan : function (porsi){
//         this.energi = this.energi + porsi
//         console.log('Halo, ${this.nama}, selamat makan')
//     }
// }

//Function Declaration
// 2. Function Declaration
// penulisan function di bawah kurang effisien untuk memory karena method method tetap ditulis dalam masing masing objek walaupun tidak terpakai
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log("Halo, ${this.nama}, selamat makan");
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log("Halo, ${this.nama}, selamat bermain");
//   };

//   return mahasiswa;
// }
// let daffeyd = Mahasiswa("daffeyd", 10);
// let bambang = Mahasiswa("bambang", 10);

// pada funtion dibawah dapat lebih efektif dengan cara membuat method 
// terpisah yang nantinya akan dipanggil kedalam objek

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo, ${this.nama}, selamat makan`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo, ${this.nama}, selamat bermain`);
//   },
//   tidur: function (jam) {
//     this.energi += jam*2;
//     console.log(`Halo, ${this.nama}, selamat tidur`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   //penulisan method dibawah tidak effisien karena secara tidak langusng
//   //sebagai coder harus mengontrol 2 code sekaligus
//   // untuk membuat lebih effisien kita harus menggunakan 
//   //Object.create() untuk menginclude method dalam suatu objek
//   //jika kita menggunakan Object.create() tidak perlu ditulis lagi code 2 di bawah ini
//   // mahasiswa.makan = methodMahasiswa.makan;
//   // mahasiswa.main = methodMahasiswa.main;
//   return mahasiswa
// }

// let daffeyd = Mahasiswa("daffeyd", 10);
// let bambang = Mahasiswa("bambang", 10);

// //3. Constructor function
// //dibawah ini dapat membuat objek semakin efisien
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }
// //untuk memasukan method pada construction dapat hanya 
// //memasukan command berikut

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo, ${this.nama}, selamat makan`);
//   };
// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo, ${this.nama}, selamat bermain`);
//   };
// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam*2;
//     console.log(`Halo, ${this.nama}, selamat tidur`);
//   };

// let daffeyd = new Mahasiswa('daffeyd', 10);

//ada juga yang versi class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    console.log("Halo, ${this.nama}, selamat makan");
  }
  main(jam) {
    this.energi -= jam;
    console.log(`Halo, ${this.nama}, selamat bermain`);
  }
  tidur(jam) {
    this.energi += jam * 2;
    console.log(`Halo, ${this.nama}, selamat tidur`);
  }
}

let daffeyd = new Mahasiswa("daffeyd", 10);
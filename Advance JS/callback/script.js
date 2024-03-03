// // callback
// // synchronous callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilakanPesan(callback) {
//   const nama = prompt("masukan Nama : ");
//   callback(nama);
// }

// // tampilakanPesan(halo);
// // bisa juga engga usah bikin functionbaru

// // tampilakanPesan(nama => alert(`halo, ${nama}`))

// const mhs = [
//   {
//     nama: "bambang",
//     nrp: 12554,
//     email: "email bambang",
//     jurusan: "serpong",
//   },
//   {
//     nama: "budi",
//     nrp: 12554,
//     email: "email budi",
//     jurusan: "serpong",
//   },
//   {
//     nama: "super",
//     nrp: 12554,
//     email: "email super",
//     jurusan: "serpong",
//   },
// ];
// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 1000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });

// console.log("selesai");

//Asynchronous callback
// //menggunakan vanilla js
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   }
//   xhr.open('get', url);
//   xhr.send();
// }

// getDataMahasiswa('data/mahasiswa.json', res => {
//     const mhs = JSON.parse(res);
//     mhs.forEach((m) => console.log(m.nama));
// }, () =>{

// });
// console.log('selesai');

//jQuery
console.log("mulai");
$.ajax({
  url: "data/mahasiswa.json",
  success: mhs => {
     mhs.forEach(m => console.log(m.nama));
  },
  error: e => {
    console.log(e.responseText);
  },
});
console.log('selesai');
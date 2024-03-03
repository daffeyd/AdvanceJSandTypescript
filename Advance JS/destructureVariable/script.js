// const perkenalan = ["Halo", "nama", "saya", "daffeyd"];
// const [salam, satu, dua] = perkenalan;
// //bisa juga di skip
// const [salam, , dua] = perkenalanSkip;

// console.log(dua);
// //swap items
// let a = 1;
// let b = 2;

// console.log(a)
// console.log(b)
// [a,b] =[b,a]
// console.log(a)
// console.log(b)

// // return value pada function
// function coba(){
//   return[1,2]
// }

// const [a,b]= coba()
// console.log(a)
// console.log(b)

// //rest parameter
// const [a, ...values] = [1,2,3]

// //object
// const mhs = {
//   id: 5151161,
//   nama: "daffeyd",
//   umur: 33,
//   email: "daffeyd@gmail.com",
// };

// // const { nama, umur } = mhs;
// // kita juga bisa mengassign ke variable baru
// const { nama: n, umur: u } = mhs;
// // kita juga dapat memberikan nilai default
// const { nama, umur, email: e = "email@default.com" } = mhs;
// //kalau menggunakan rest parameter maka value akan berbertuk object
// const { nama, ...value } = mhs;
// console.log(e);

// //bisa juga tanpa declatarion object
// ({ nama, umur } = {
//   nama: "daffeyd",
//   umur: 33,
// });
// console.log(nama);

// //mengambil field untuk obj , setelah dikirim sebagai parameter untuk function
// //jadi ini membongkar object lalu dipilih idnya baru dimasukan ke function
// function getIdMhs({ id }) {
//   return id;
// }

// console.log(get.id.Mhs(mhs));

// Destructure Function

function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b];
}
// bisa juga di bikin return object supaya pas dipanggil bisa sesuai namanya

function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b
  }
}
//kalo object inget harus kurung kurawal
const {tambah, kurang, kali, bagi} = kalkulasi(2, 3);


const mhs = {
  id: 5151161,
  nama: "daffeyd",
  umur: 33,
  email: "daffeyd@gmail.com",
  nilai : {
    tugas: 81,
    uts: 82,
    uas: 83,
  }
};
function cetakMhs({nama,umur, nilai : {tugas,uts,uas}}){
  return `Halo, nama saya ${nama}, saya ${umur} tahun. nilai saya, tugas : ${tugas}, uts : ${uts}, uas : ${uas}`;
}
console.log(cetakMhs(mhs));
// //function expression
// let tampilPesan = function (nama) {
//   alert("halo" + nama);
// };
// tampilPesan("Sandhika");

//arrow function
// satu variable
// let tampilPesan = nama => {
// alert('halo' + nama);}

// tampilPesan('Sandhika');

// dua variable
let tampilPesan = (nama, kelas) => alert(`hlo ${nama}, kelas ${kelas}`);
tampilPesan("Sandhika", 1);

//cara mereturn array
// let mahasiswa = ["daffeyd", "caroline", "bambang"];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf)
// let mahasiswa = ["daffeyd", "caroline", "bambang"];
// let jumlahHuruf = mahasiswa.map(nama =>  nama.length);
// console.log(jumlahHuruf)

// jika ingin mereturn object
// let mahasiswa = ["daffeyd", "caroline", "bambang"];
// let jumlahHuruf = mahasiswa.map((name) => ({
//   name,
//   jumlahhuruf: name.length,
// }));
// console.log(jumlahHuruf)
// //bisa juga di munculkan dalam bentuk tabel
// console.table(jumlahHuruf);

// //constructor fucntion
// const Mahasiswa = function(){
//     this.nama = 'Sandhika';
//     this.umur = 33
//     this.sayHello = function (){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
//     }

// // arrow function tidak mengenak konsep this sehingga
// // function akan lencari ke lecsical scope atau lokal dulu baru ke luar
// // jika menggunakan function declaration mka akan error karena ada konsep this
// //sehingga this akan menuju ke window
//     setInterval(() => {
//         console.log(this.umur++)
//     },500)
// }

// const daffeyd = new Mahasiswa( )

//membuat animasi box

//mengambil elemen class box
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  console.log(this);
  let size = "size";
  let caption = "caption";
  if (this.classList.contains(size)) {
    [size,caption] = [caption,size];
  }
  this.classList.toggle(size);
  // //pada program dibawah menggunakan function declaration tidak akan jalan
  // // karena adanya hoisting yang menyebabkan this pada function dibawah akan mengacu ke window
  // setTimeout(function(){
  //     this.classList.toggle('caption');
  // }, 600 )

  //sehingga digunakanlah arrow function agar dapat mencari dulu ke lecsical scope
  setTimeout(() => {
    this.classList.toggle(caption);
  }, 600);
});

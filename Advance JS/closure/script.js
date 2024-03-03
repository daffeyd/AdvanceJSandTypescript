// function init() {
//   return function(nama){
//     console.log(nama);
//   }
// }
// let panggilNama =  init()
// panggilNama("daffeyd")


//Function factory
function ucapkanSalam(waktu) {
  return function(nama){
    console.log(`halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
  }
}

let selamatPagi = ucapkanSalam("pagi");
let selamatsiang = ucapkanSalam("siang");
let selamatmalam = ucapkanSalam("malam");

selamatPagi("daffeyd");
console.dir(selamatPagi("daffeyd"));


// //membuat sebuah variabel yang private

// let add = function(){
//   let counter = 0;
//   return function(){
//     return ++counter;
//   }
// }

// let a = add()
// console.log(a())
// console.log(a())
// console.log(a())

// supaya engga perlu untuk di masukin ke dalam variable
// bisa untuk dilakukan sebagai berikut 
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();
//jadi kita membungkus function yang dibikin untuk membuat 
//membuatnya ketika dipanggil langsung menjalan kan fucntion yang ada di dalammnya

console.log(add());
console.log(add());
console.log(add());
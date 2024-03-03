//promise
//kita akan menggunakan function fetch namun menggunaakan library fetch akan mengembalikan dalam bentuk promise

const movies = fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
.then (res => res.json())
.then(res => console.log(res))

//promise
//object yang mereprenstasikan keberhasilan atau kegagalan dari sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fullfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch / )


// //contoh

// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
// if (ditepati){
//   resolve('janji ditepati')
// }else {
//   reject('ingkar')
// }
// });

// console.log(janji1);

// janji1
// .then((res) => console.log("OK!" + res))
// .catch((res) => console.log("Not OK!" + res));

//contoh 2


let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
if (ditepati){
  setTimeout(() => {
    resolve('janji ditepati setelah beberapa waktu')
    
  }, 2000);
}else {
  setTimeout(() => {
    reject('ingkar setelah beberapa waktu')
    
  }, 2000);
}
});
console.log("mulai");
// console.log(janji2.then(()=> console.log(janji2)));
janji2
.finally(() => console.log('selesai menunggu'))
.then((res) => console.log("OK!" + res))
.catch((res) => console.log("Not OK!" + res));
console.log("selesaii");

//promise.all()

const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      "judul": "apenjer",
      "durasi": "10 menit"
    }])
  }, 1000);
});
const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      "kota": "bandung",
      "temp": "26"
    }])
  }, 500);
});
// film.then((res) => console.log("OK!" + res))
// film.then((res) => console.log("OK!" + res))
  
Promise.all([film,cuaca])
// .then((res) => console.log("OK!" + res))
.then(res => {
  const [film,cuaca] =res
  console.log(film);
  console.log(cuaca);
})
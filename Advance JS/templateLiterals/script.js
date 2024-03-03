// // HTML fragments
// const mhs = {
//   nama: "daffeyd",
//   umur: 20,
//   nrp: "2540131052",
//   email: "daffeydwilbert@gmail.com",
// };

// const el = `<div className="mhs">
// <h2>${mhs.nama}</h2>
// <span className="nrp">${mhs.nrp}</span>
// </div>`;
// document.body.innerHTML = el;

// //looping
// const mhs = [
//   {
//     nama: "daffeyd",
//     email: "daffeydwilbert@gmail.com",
//   },
//   {
//     nama: "bambang",
//     email: "bambang@gmail.com",
//     credit: 10,
//   },
//   {
//     nama: "budi",
//     email: "budi@gmail.com",
//   },
// ];

// let el = `<div className="mhs">
// ${mhs
//   .map(
//     (m) => `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// ${m.credit ? `<li>${m.credit}</li>` : '' }
// </ul>`
//   )
//   .join("")}
// </div>`;

// document.body.innerHTML = el;

//bisa juga ada conditionals yang seperti program diatas pada saat memunculkan credit

// //nested
// const mhs = {
//   nama : "daffeyd",
//   semester : 5,
//   mataKuliah : [
//     'Rekayasa Web',
//     'Analysis dan Perancangan Sistem Informasi',
//     'Pemrograman Sistem Interaktif',
//     'Pemrograman Sistem Berorientasi Object',
//   ]
// };

// function cetakMatakuliah(mataKuliah){
//   return `
//   <ol>
//   ${mataKuliah.map(mk => `<li> ${mk}</li>`).join('')}
//   <ol>
//   `;
// }

// let el = `<div className="mhs">
// <h2>${mhs.nama}</h2>
// <span className="semester">Semester : ${mhs.semester}</span>
// <h4>Mata Kuliah : </h4>
// ${cetakMatakuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = el;

//tagged template
const nama = 'Daffeyd Wilbert';
const umur = 21;

function coba(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result} ${str} <span class="hl">${values[i] || ""}</span> `,
    ""
  );
}

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
console.log(str);
document.body.innerHTML = str

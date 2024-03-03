// // spread operator
// // memecah iterables menjadi single element
// const mhs = ['daffeyd', 'bambamng', 'budi'];
// console.log(...mhs[0]);

//menggabungkan 2 array
const mhs = ["daffeyd", "bambamng", "budi"];
const dosen = ["dave", "bams", "buds"];

// const orang = [...mhs,...dosen]
// bisa juga menggunakan function array yaitu concat
const orangConcat = mhs.concat(dosen);
// namun jika menggunakan spread operator maka akan lebih fleksibel jika mau memasukan variabel di tengah tengah
// misalnya
const orang = [...mhs, "aji", ...dosen];

console.log(orang);

//mengcopy array

const mhs1 = mhs;
//misalkan kita mengganti variabel pada mhs1
mhs1[0] = "Fajar";
// maka variabel pada mhs akan berganti juga menyesuaikan
//mhs1 padahal kkita cuman mau ganti copyannya
// jadi sistem ini hanya membuat referensi bukan mengcopy
console.log(mhs);

// harusnnya menggunakan spread
const mhs2 = [...mhs];
mhs2[1] = "Fajar";
console.log(mhs);
console.log(mhs2);

//mengubah nodelist menjadi array
const liMhs = document.querySelectorAll("li");
const mhs3 = [...liMhs].map((m) => m.textContent);
console.log(mhs3);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);
nama.innerHTML = huruf;

const salesData = [
    {
        product: { name: "T-shirt", category: "Apparel" },
        quantity: 100,
        revenue: 2500
    },
    {
        product: { name: "Sneakers", category: "Footwear" },
        quantity: 50,
        revenue: 3500
    },
    {
        product: { name: "Jeans", category: "Apparel" },
        quantity: 80,
        revenue: 4000
    },
    {
        product: { name: "Watch", category: "Accessories" },
        quantity: 30,
        revenue: 5000
    },
    {
        product: { name: "Backpack", category: "Accessories" },
        quantity: 20,
        revenue: 1500
    }
];


const salesByCategory = salesData.reduce((acc, sale) => {
    acc[sale.product.category] = (acc[sale.product.category] || 0) + sale.revenue;
    return acc;
}, {});

console.log("Sales by Category:", salesByCategory);


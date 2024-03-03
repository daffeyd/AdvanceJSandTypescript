// Rest Parameter
function myFunc(a,b,...myArgs) {
    return `a = ${a}, b = ${b}, myArgs = ${myArgs}`
    
}

console.log(myFunc(1,2,3,4,5));

function jumlahkan(...angka) {
    // let total = 0
    // for(const a of angka){
    //     total += a
    // }
    // return total

    // // atau
    angka.reduce((acc,number) => acc + number) 
}
console.log(jumlahkan(1,2,3,4,5));

//array destructuring
const kelompok1 = ['daffeyd', 'bambang', 'budi', 'super', 'super2']

const [ketua,wakil,...anggota] = kelompok1

console.log(anggota);

const team = {
    pm : 'daffeyd',
    frontEnd: 'bambang',
    frontEnd2: 'bambang2',
    backEnd: 'ngambang', 
}

const { pm, ...myTeam} = team
console.log(myTeam);

//filtering
function filterBy(type, ...values) {
 return values.filter(v=> typeof v === type)   
}
console.log(filterBy('boolean', 1,2,'daffeyd', false, 10, true,'bambanng'));
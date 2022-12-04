// Rest Parameter

// function myFunc(a, b, ...myArgs) {
//     return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// };
// console.log(myFunc(1,2,3,4,5));

// function myFunc(...myArgs) {
//     return myArgs;
// }
// console.log(myFunc(1,2,3,4,5));

// function myFunc() {
//     // return arguments;       //Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//     return Array.from(arguments);      // (5) [1, 2, 3, 4, 5]
//     // return [...arguments];      // (5) [1, 2, 3, 4, 5]
// }
// console.log(myFunc(1,2,3,4,5));


// Contoh penjumlahan
// function jumlahkan(...angka) {
//     // let total = 0;
//     // for( const a of angka) {
//     //     total += a;
//     // }
//     // return total;

//     return angka.reduce((acc, curr) => acc + curr);
// }
// console.log(jumlahkan(1,2,3,4,5));


// array destructuring
// const kelompok1 = ['Alfian', 'Doddy', 'Erik', 'Fajar'];
// const [ketua, wakil, ...angota] = kelompok1;
// console.log(ketua);     // 'Alfian'
// console.log(angota);        // ['Erik', 'Fajar'];


// object destructuring
// const team = {
//     pm: 'Alfian',
//     frontEnd1: 'Doddy',
//     frontEnd2: 'Erik',
//     backEnd: 'Fajar',
//     ux: 'Hendra',
//     devOps: 'Budi'
// }
// const {pm, ...myTeam} = team;
// console.log(pm);        // 'Alfian'
// console.log(myTeam);        // { frontEnd1: 'Doddy', frontEnd2: 'Erik', backEnd: 'Fajar', ux: 'Hendra', devOps: 'Budi'}


// filtering
function filterBy(type, ...values){
    return values.filter(n=>typeof(n) === type);
}
console.log(filterBy('string', 1, 2, 'Alfian', false, 10, true, 'Doddy'));
console.log(filterBy('number', 1, 2, 'Alfian', false, 10, true, 'Doddy'));
console.log(filterBy('boolean', 1, 2, 'Alfian', false, 10, true, 'Doddy'));


// Function Expression
// const tampilNama = function(nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Alfian Yulianto'));


// Arrow Function
// ---Jika 1 parameter
// const tampilNama = (nama) => { return `Halo, ${nama}` }
// console.log(tampilNama('Alfian Yulianto'));

// ---Jika paremeter hanya 1 tidak pake kurung dan jika isi dari functionya hanya return maka tidak perlu menuliskey kata kunci return---
// ---implisit return---
// const tampilNama = nama => `Halo, ${nama}`
// console.log(tampilNama('Alfian Yulianto'));

// ---Jika 2 parameter
// const tampilNamaWaktu = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNamaWaktu('Erik', 'Siang'))


// ---Jika tidak ada parameter---
// wajib menuliskan kurung
// const tampilNama = () => `Hallo, world!`
// console.log(tampilNama());


// ---Contoh menggunakan Arrow Function pada "map"---
let mahasiswa = ['Alfian Yulianto', 'Doddy Febriansyah', 'Erik'];
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);

// ---------------
// let jumlahHuruf = mahasiswa.map( nama => nama.length );
// console.log(jumlahHuruf);

// --------------- Membuatnya masuk ke dalam object
// let jumlahHuruf = mahasiswa.map( nama => ({nama:nama, jumlahHuruf:nama.length}) );
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map( nama => ({nama, jumlahHuruf:nama.length}) ); // di JS jika kita ingin mengembalikan object dengan property yang bernama sama dengan valuenya kita cukup menuliskan propertynya saja
console.table(jumlahHuruf); // akan menampilkan berupa table




























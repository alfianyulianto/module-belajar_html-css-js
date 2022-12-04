// Destructuring Assigment / Variable

// Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Alfian Yulianto'];

// const [salam, satu, dua, nama] = perkenalan;
// console.log(salam);

// skipping items pada Destructuring Array
// const [salam, , , nama] = perkenalan;   // membuat skipping yang isinya 'halo' dan 'alfian yulianto'
// console.log(nama);        // 'Alfian Yulainto'
// console.log(satu);       // error karena tidak ada variable satu

// swapp /  menukar isi dari array
// let a = 1;
// let b = 2;
// console.log(a);     // 1;
// console.log(b);     // 2;
// [a, b] = [b, a];
// console.log(a);     // 2;
// console.log(b);     // 1;

// return value pada function
// function coba () {
//     return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);     // 1;
// console.log(b);     // 2;

// Rest Parameter
// const [a, ...values] = [1,2,3,4,5]      // 1 akan masuk ke variable 'a' dan sisanya akan masuk ke array 'values'
// console.log(a);      // 1
// console.log(values);     // [2, 3, 4, 5]



//  Destructuring Object
// const mhs = {
//     nama: 'Alfian Yulianto',
//     umur: 21
// }
// const {nama, umur} = mhs;        // dalam membuat variabel harus sesuai dengan nama properti yang ada di object
// console.log(nama);      // 'Alfian Yulianto'
// console.log(umur);      // 21

// Assigment tanpa deklarasi object
// ({nama, umur} = { nama: 'Alfian Yulianto', umur: 21 });
// console.log(nama);      // 'Alfian Yulianto'
// console.log(umur);      // 21

// Asignment ke nama variable baru
// const mhs = {
//     nama: 'Alfian Yulianto',
//     umur: 21
// }
// const {nama: n, umur: u} = mhs;     // merubah nama variabel dan di asign ke nama variable baru
// console.log(n);      // 'Alfian Yulianto'
// console.log(u);      // 21

// const mhs1 = {
//     nama: 'Alfian Yulianto',
//     umur: 21,
//     nilai: {
//         tugas: 90,
//         uts: 80,
//         uas:85
//     }
// }
// const {nama: n, umur: u, nilai: {tugas, uts, uas}} = mhs1;     // merubah nama variabel dan di asign ke nama variable baru
// console.log(n);      // 'Alfian Yulianto'
// console.log(u);      // 21
// console.log(uts);       // 80;

// Memberikan Default Value
// const mhs = {
//         nama: 'Alfian Yulianto',
//         umur: 21
//     }
// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);      // 'email@default.com

const mhs1 = {
    nama: 'Alfian Yulianto',
    umur: 21,
    nilai: {
        tugas: 90,
        uas:85
    }
}
const {nama: n, umur: u, nilai: {tugas, uts = 100, uas}} = mhs1;     // merubah nama variabel dan di asign ke nama variable baru
console.log(n);      // 'Alfian Yulianto'
console.log(u);      // 21
console.log(uts);       // 100;

// Memberi Default value + assignemtn ke variabel baru
// const mhs = {
//         nama: 'Alfian Yulianto',
//         umur: 21,
//         email: 'alfianyulianto36@gmail.com'
//     }
// const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
// console.log(e);      // 'alfianyulianto36@gmail.com

// Rest Parameter
// const mhs = {
//     nama: 'Alfian Yulianto',
//     umur: 21,
//     email: 'alfianyulianto36@gmail.com'
// }
// const {nama, ...values} = mhs;
// console.log(nama);      // 'Alfian Yulianto
// console.log(values);        // {umur: 21, email: 'alfianyulianto36@gmail.com}

// Mengembalikan property pada object, setelah dikirim sebagai arguments untuk function 
const mhs = {
    id: 1,
    nama: 'Alfian Yulianto',
    umur: 21,
    email: 'alfianyulianto36@gmail.com'
}

function getIdMhs({ id, nama}) {       // destructuring object untuk mengambil id atau nama
    // return  id;     // 1
    return  nama;     // 'Alfian Yulianto'
}

console.log(getIdMhs(mhs));     // panggil getIdMhs dengan parameter yang berisi object dari mhs







// Destructuring Function Return Value

// Contoh 1
function penjumlahanPerkalian(a, b) {
    return [a+b, a*b];
};

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// console.log(jumlah);     // 5;
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);     // 6;

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);     // 5
// console.log(kali);     // 6


// Contoh 2
// function kalkulasi(a, b) {
//     return [a+b, a-b, a*b];
// };

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(kurang);      // -1
// console.log(bagi);      // 'tidak ada'


// Contoh 3
// function kalkulasi(a, b) {
//     return {
//         tambah: a+b,
//         kurang:a-b,
//         kali:a*b,
//         bagi:a/b
//     };
// };

// const {bagi, tambah, kurang, kali} = kalkulasi(2, 3);
// console.log(bagi);    // 0.666666


// Destructuring function argument
// const mhs1 = {
//     nama: 'Alfian Yulianto',
//     umur: 21,
//     email: 'alfianyulianto36@gmail.com'
// };

// // function cetakMhs(nama, umur) {
// //     return `Halo, saya ${nama}, dan saya ${umur} tahun.`;
// // };
// // console.log(cetakMhs(mhs1.nama, mhs1.umur));


// function cetakMhs({ nama, umur }) {
//     return `Halo, saya ${nama}, dan saya ${umur} tahun.`;
// };
// console.log(cetakMhs(mhs1));


// Destructuring argument yang bersarang
const mhs1 = {
    nama: 'Alfian Yulianto',
    umur: 21,
    email: 'alfianyulianto36@gmail.com',
    nilai: {
        tugas: 90,
        uts: 80,
        uas: 85
    }
};

function cetakMhs({nama, umur, nilai: {tugas, uas, uts}}) {
    return `Halo, saya ${nama}, dan saya ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));
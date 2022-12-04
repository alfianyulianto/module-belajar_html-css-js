const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter -> mengembalikan array
// mencari angka >= 3
// const newAngka = [];
// for( let i = 0; i < angka.length; i++ ) {
//     if(angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// const newAngka = angka.filter( a => a >= 3);
// console.log(newAngka);       //  [8, 9, 4, 3, 9]


// map -> memetakan tiap-tiap element pada array menjadi fungsi yang baru (kali 2, bagi 2, dan lain-lain)
// kalikan semua angka dengan 2
// const newAngka = angka.map( a=> a * 2);
// console.log(newAngka);       // [-2, 16, 9, 1, 4, -10, -8, 6, 4, 18]

// coba map 
// const lists = document.querySelectorAll('li');
// const arrayLists = [...lists];
// const resultList = arrayLists.map(list => list.textContent);
// console.log(resultList);

// coba map
// const newArray = angka.map(a => {
//     if(a == 2) {
//         return a = 'ini dua';
//     } else{
//         return a
//     }
// });


// reduce -> untuk melakukan sesuatu terhadap seluruh element pada array
// jumlahkan seluruh element pada array
// .reduce((acummulator, currentValue) => acummulator +/*- currentValue, nilaiAwal); secara devault nilai awal itu 0s
// reduce mempunyai 2 parameter
// parameter pertama disebut  "accumulator" atau hasil dari prosesnya 
// misal penjumlahan, yang awalnya 0 ditambha dengan -1
// paramter kedua disebut "currentValue" atau element array yang sedang diluping
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((acummulator,  currentValue) => acummulator + currentValue);
// console.log(newAngka);


// Method Chaining (berantai) : artinya kita bisa menggabungkan method-method pada Higher Order Function kedalam satu eksekusi
// cari angka > 5
// kemudian kalikan 3
// setelah itu jumlahkan

// const result = angka.filter( a => a > 5 ).map( a => a * 3 ).reduce((acummulator, curentValue) => acummulator + curentValue);
// console.log(result);



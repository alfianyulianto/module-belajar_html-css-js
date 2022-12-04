// Manipulasi Array

// 1. Menambah Array
// var arr = ['teks', 1, false];
// console.log(arr);

// var mhs = [];
// mhs[0] = 'Alfian';
// mhs[1] = 'Yulianto';
// mhs[2] = 'Nova';
// console.log(mhs); // ['Alfian', 'Yulianto', 'Nova']

// jika kelewatan menulis element pada array maka akan menghasilkan undefined pada index yang kelewat
// var mhs = [];
// mhs[0] = 'Alfian';
// mhs[1] = 'Yulianto';
// mhs[2] = 'Nova';
// mhs[5] = 'Dedi';
// console.log(mhs); // ['Alfian', 'Yulianto', 'Nova', undefined, undefined, 'Dedi' ]

// 2. Menghapus isi / element array
// var mhs = ['alfian', 'yulianto', 'nova'];
// mhs[1] = undefined;
// console.log(mhs);

// 3. Menampilkan isi / element array
// var mhs = ['alfian', 'yulianto', 'nova', 'dedi'];
// for( var i = 0; i < mhs.length; i++ ) {
// 	console.log('Nama Mahasiswa ke-' + (i+1) + ': ' + mhs[i]);
// }


// METHOD PADA ARRAY
var mhs = ['alfian', 'yulianto', 'nova'];
// 1. join
console.log(mhs.join('-'));

// 2. push & pop
// mhs.push('dodi');
// mhs.push('dodi', 'fitri');
// mhs.pop();
// mhs.pop();
// console.log(mhs.join(' - '));

// 3. unshift & shift
// mhs.unshift('dodi', 'fitri');
// mhs.shift( );
// console.log(mhs.join(' - '));

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elementBaru, elementBaru2, ...)
var mhs = ['alfian', 'yulianto', 'nova'];
mhs.splice(2, 0, 'dodi', 'fitri'); // 'alfian' - 'yulianto' - 'dodi' - 'fitri' - 'nova'
// mhs.splice(1, 2, 'dodi', 'fitri'); // 'alfian' - 'dodi' - 'nova'
// mhs.splice(1, 2, 'dedi', 'fitri', 'ahmad') // 'alfian' - 'dedi' - 'fitri' - 'ahmad'
// mhs.splice(0, 0, 'budi', 'santosa'); // 'budi' - 'santosa' - 'alfian' - 'yulianto' - 'nova'
// console.log(mhs.join(' - '));

// 5. slice
// slice(indexAwal, indexAkhir);
// indexAwal akan terbawa ke array baru sedangkan indexAkhir tidak. 
// slice menghasilkan array baru maka haru ditampung
// var mhs = ['alfian', 'yulianto', 'nova', 'dodi', 'fitri'];
// var mhs2 = mhs.slice(1, 3); // 'yulianto' - 'nova'
// var mhs3 = mhs.slice(0, 3); // 'alfian' - 'yulianto' - 'nova'
// console.log(mhs2.join(' - '));
// console.log(mhs3.join(' - '));

// 6. foreach
// mengembalikan element di dalam array
// var angka = [1,2,3,4,5,6,7,8];
// angka.forEach( function(e) {
	// console.log(e); 
//	// 1 
//	// 2 
//	// 3 
//	// 4 
//	// 5 
//	// 6 
//	// 7 
//	// 8
// });

// var mhs = ['alfian', 'yulianto', 'nova', 'dodi', 'fitri'];
// mhs.forEach(function(e, i) {
// 	console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// 		// Mahasiswa ke-1 adalah : alfian
// 		// Mahasiswa ke-2 adalah : yulianto
// 		// Mahasiswa ke-3 adalah : nova
// 		// Mahasiswa ke-4 adalah : dodi
// 		// Mahasiswa ke-5 adalah : fitri
// });

// 7. map
// mengembalikan array
// var angka = [1,2,3,6,5,4,8,9, 7];
// var angka2 = angka.map(function(e) {
// 	return e*2;
// });
// console.log(angka2.join(' - ')); // 2 - 4 - 6 - 12 - 10 - 8 - 16 - 18 - 14
// var mhs = ['alfian', 'yulianto', 'nova', 'dodi']
// var mhs2 = mhs.map(function(e) {
// 	console.log(e); // alfian yulianto nova dodi
// 	return e;
// });
// console.log(mhs2); // ['alfian', 'yulianto', 'nova', 'dodi']

// 8. sort
// var angka = [1,2,3,6,5,4,8,9, 7];
// console.log(angka.join(' - '));
// angka.sort();
// console.log(angka.join(' - ')); // 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9

// var angka = [1,2,10,20,3,6,5,4,8,9, 7];
// angka.sort();
// console.log(angka.join(' - ')); // 1 - 10 - 2 - 20 - 3 - 4 - 5 - 6 - 7 - 8 - 9

// console.log(angka.join(' - '));
// var angka1 = angka.sort(function(a,b) {
// 	return a-b ; // mengurutkan secar ascending(mengurut naik)
// });
// console.log(angka1.join(' - ')); // 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 20

// var angka2 = angka.sort(function(a,b) {
// 	return b-a ; // mengurutkan secar descending(mengurut turun)
// });
// console.log(angka2.join(' - ')); // 20 - 10 - 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1


// var angka = [1,2,10,20,3,6,5,4,8,9, 7];
// console.log(angka.join(' - '));
// angka.sort((a,b) => a-b); // asscending
// console.log(hasil.join(' - '));

// var mhs = ['alfian', 'yulianto', 'nova', 'fitri'];
// mhs.sort();
// console.log(mhs.join(' - '));

// var mhs = ['alfian', 'yulianto', 'nova', 'fitri'];
// mhs.sort(function(a, b) {
// 	return b.localeCompare(a); // descending
// });
// console.log(mhs.join(' - '));

// 9. filter 
var angka = [1,2,10,20,3,6,5,4,8,9, 7];
var angka2 = angka.filter(function(x) {
	return x > 5;
});
console.log(angka2.join(' - '));
var angka3 = angka2.sort(function(a,b) {
	return a-b;
});
console.log(angka3.join(' - '));

// 10. find
// var angka = [1,2,10,20,3,6,5,4,8,9, 7];
// var angka2 = angka.find(function(x) {
// 	return x > 5 && x < 10;
// });
// console.log(angka2); // 6 karena nilai 6 berada di index terdepan dan juga lebih dari 5 dan kurang dari 10

// 11. includes
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var something = angka.includes(2);
// var any = angka.includes(10);
// console.log(something); // true
// console.log(any); // false

// 12. some
// var angka = [1, 2, 3, 4, 5]; // yg memmenuhi kondisi di bawah adalah element dengan nilai 2 dan 4
// var some = angka.some(item => item % 2 == 0); // mengecek apakah di dalam array angka terdapat elemen yang habis di bagi 2
// console.log(some); // true

// var thing = angka.some(item => item < 0); // mengecek apakah di dalam array angka terdapat elemen yang kurang dari 0
// console.log(thing); // false

// 13. every
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var greaterFive = angka.every(item => item > 4); // mengecek apakah setiap elemen dalam array lebih dari 4
// console.log(greaterFive); // false

// var lessTen = angka.every(item => item < 10); // mengecek apakah setiap elemen dalam array kurang dari 10
// console.log(lessTen); // true

// 14. reduce 
// var angka = [1, 2, 3, 4, 5];
// //  kita dapat mengubah angka 0 menjadi angka lain untuk mendapatkan nilai yang berbeda
// var sum = angka.reduce((total, value) => total + value, 0);
// console.log(sum); // 15
// var otherSum = angka.reduce((total, value) => total + value, 7);
// console.log(otherSum); // 22

// 15. concat
// var fruits = ['Apel', 'Banan', 'Mango', 'Panapel'];
// var number = [1, 2, 3, 4];
// var newArray = fruits.concat(number);
// console.log(newArray); // ['Apel', 'Banan', 'Mango', 'Panapel', 1, 2, 3, 4];

// 16. Array.of
// var angka = Array.of(1, 2, 3, 4, 5, 6);
// console.log(angka); // [1, 2, 3, 4, 5, 6]

// var fruits = Array.of('Apel', 'Banan', 'Mango', 'Starfruit');
// console.log(fruits); // ['Apel', 'Banan', 'Mango', 'Starfruit']

// 17. Delete
let numberArr = [1, 2, 3, 4, 5];
console.log(numberArr); // [1, 2, 3, 4, 5]
delete numberArr[1];
console.log(numberArr);	// [ 1, <1 empty item>, 3, 4, 5 ]
// console.log(i); //undefiend; ini terjadi karena HOISTING sehingga sebelum console itu di delarasikan dulu var i; dengan isi "undefiend" kemudian baru di console.log(i) selanjutnya var i = 10;  baru i yang awalnya undefined di assignt oleh angka 10.
// var i= 10;
// console.log(i);


// ----contoh menggunakan let agar menjadi error, karena menggunakan var hasilnya undefined-----
// console.log(j);
// let j = "alfian";
// console.log(j);


// for(var i = 0; i < 10; i++) {
//     console.log(i); // 0 1 2 3 4 5 6 7 8 9
// }
// console.log(i); // 10 -> ini karena JS menganut Function Scope


// ----IIFE / SIAF----
// (function(){})       // karena ini function ekspresi maka masukan ke dalam kurung 
// (function(){}())     // kurung setelah kurung kurawal pada function unutk menjalankan functionnya

(function(){
   for( var i = 0; i < 10; i++) {
       console.log(i);
   };
}())
console.log(i); // error karena ini Function Scope


// -------Untuk menggantikan IIFE / SIAF gunakan ES6 yaitu let-------
// let ini akan membuat variable yang di deklarasikan akan menganut Block Scope
// for( let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i); // error



// ----Const----
// const i = 10;
// i = 15; // error


// ----------Constanta tidak sepenuhnya tidak bisa dirubah isinya. Contohnya dalam membuat "object" dan "array"---------
// const mhs = {
//     nama: "alfian",
//     umur: 21
// }
// mhs.umur = 22; // isi object mhs dengan property umur masih bisa di ubah
// mhs = {
//     jurusan: "Teknik Informatika"
// } // akan error karena kita coba mengubah objectnya
// console.log(mhs);


// const arr = [1, 2, 3];
// arr.push(4); // ini menambahkan emenet di akhir array dengan angka 4. Ini tidak akan error karena kita mengganti isi elementnya bukan arraynya
// arr = [1,2,3,4]; // akan error karena kita mengubah arraynya 
// console.log(arr)

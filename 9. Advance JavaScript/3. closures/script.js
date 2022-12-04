// function init() {
//     var nama = 'alfian';            // local variabel dari function init
//     function tampilNama() {         // inner function (closure)
//         console.log(nama);          // akses ke parent variabel
//     }
//     tampilNama();                    // menjalankan closure
// }
// init();

// function init() {
//     var nama = 'alfian'; 
//     let umur = 21;           // local variabel dari function init
//     function tampilNama() {         // inner function (closure)
//         console.log(nama);          // akses ke parent variabel
//         console.log(umur);          // akses ke parent variabel
//     }
//     console.dir(tampilNama);    // artinya kita akan menampilkan tampilNama ini menjadi sebuah object, di dalamnya ada method scopes di dalamny terdapat nama dan umur yang dikirim menjadi closure
// }
// init();


// function init() {
//     var nama = 'alfian';            // local variabel dari function init
//     function tampilNama() {         // inner function (closure)
//         console.log(nama);          // akses ke parent variabel
//     }
//     return tampilNama;               // memanggil function tampilNama tapi belum dijalankan
// }
// let panggilNama =  init();           // function init akan masuk ke var panggilNama
// panggilNama();                       // menjalankan tampilNama ini untuk menjalankan isi dari tampilNama


// ----Contoh Function Factory----
// function init() {
//     return function (nama) {         
//         console.log(nama);          
//     }
// }
// let panggilNama =  init();
// console.dir(panggilNama);    // untuk mengecek function apakah closure atau bukan
// panggilNama('alfian');       // sehingga dengan ini parameter nama akan masuk ke function init()

// ----Contoh Function Factory----
// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoag harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');
// console.dir(selamatPagi);       // untuk mengecek function apakah closure atau bukan
// console.dir(selamatMalam);       // untuk mengecek function apakah closure atau bukan
// selamatPagi('Alfian');
// selamatSiang('Yulianto');


// let counter = 0;
// let add = function() {
//     return ++counter; // ditambahkan dulu nilai dari counter
// }

// counter  = 10;       // membuat counter nya berubah menjadi awalnya 10, karena function add dijalankane setelah variabek counter di assigment jadi 10
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// UNTUK MENGATASI PERMASALAHAN DI ATAS GUNAKAN CLOSURE
let add = function(){
    let counter = 0;
    console.log(`Outer function ${counter}`);
    return function() {
        console.log(`Inner function ${counter}`);
        return ++counter;
    }
}

counter = 10;       // tidak bisa merubah counter 
const a = add();
// console.dir(a);
console.log(a());
console.log(a());
console.log(a());



//  ----Immediately Invoked Function Expression / Private Method
// let add = (function() {
//     let counter = 0;
//     return function() {
//         return ++counter; // ditambahkan dulu nilai dari counter
//     }
// }());        // masukan author function ke dalam kurung kemudain langsung jalankan inner function(closure) dengan menambah kurung setelah function 
// counter = 10;
// console.log(add());
// console.log(add());
// console.log(add());











// 2.1 Execution Context, Hoistig, Scope

// EXECUTION CONTEXT (creation phase, excution phase)
// console.log(nama); // undefind
// var nama = "Alfian";
// console.log(nama); // "Alfian"

// 1. Creation phase pada Global Context
// Pada fase ini JS akan mencari dulu var atau function
// jika ada akan membuat "nama var" dan "fn()"
// nama var = undefinde;
// nama function = fn() // di isi dengan isi dari function / kode dari function
// ini semau dinamakan : hositing (anologinya seperti mengerek bendera /benderanya dinaikan)

// Selain var dan function ada juga yang didefinisikan
// window sebagai Global object -> yang isinya kode dari window
// this sebagai window -> yang isinya kode dari window
// sehingga kita bisa menuliskan "this" dan "window" diconsole log
// 2. Execution phase (eksekusi program)

// ----------------Contoh lain--------------

// console.log(sayHello()); // Halo, nama saya undefined, Saya umur undefined tahun.
// // ini terjadi karena JS menerapkan Hoisting jadi diisi oleh undefined
// var nama = "Alfian";
// var umur = 21;

// console.log(sayHello()); // Halo, nama saya Alfian, Saya umur 21 tahun. 
// // kenapa kita bisa memanggil console.log(sayHello()) di atas functionnya karena pada creation phase akan menghoisting string yg ada di dalam function sayHello()
// function sayHello() {
// 	// return `Halo, nama saya ${nama}, saya umur ${umur} tahun.`;
// 	return `Halo, nama saya ${this.nama}, saya umur ${this.umur} tahun.`;
// }

// Jika ketemu function execution maka akan memuat Execution baru yaitu "Local Execution"
// Function membuat Local Execution Context
// yang di dalamnya terdapat Creation dan Execution phase
// Dengan Local Context kita punya akses ke :
// - window 
// - arguments
// - hoisting

// ----------Contoh-----------
// var nama = "Alfian Yulianto"
// var username = "@alfianyulainto"
// function cetakURL(username) {
// 	var instagramURL = "http://instagram.com/";
// 	return instagramURL + username;
// }
// console.log(cetakURL(username));		// mengambil var username unutk dijadikan argument

// Setiap fn dipanggilkan akan ada Execution baru sehingga akan ditambahkan Execution Stack / Tumpukan Eksekusi
// dan setelah fungsinya selesai dijalanin maka Tumpukan Eksesusi akan dihilangkan


// ---------Contoh Lagi-------------
// function a() {
// 	console.log('Ini a');
// 	function b() {
// 		console.log('Ini b');

// 		function c() {
// 			console.log('Ini c')
// 		}

// 		// Jalankan function
// 		c();
// 	}
// 	// Jalankan function 
// 	b();

// }
// // Jalankan function
// a();
// Hasil : Ini a; Ini b; Ini c;



// SCOPE : mencari definisi variabel terdekat, jika tidak ada maka akan mencari ke global
var nama = "Alfian Yulianto";
var username = "@alfianyulainto";
// function cetakURL(username) {
// 	var instagramURL = "http://instagram.com/";
// 	return instagramURL + username;
// }
// console.log(cetakURL('dodi@gmail.com')); // http://instagram.com/dodi@gmail.com -> ini terjadi ketika kita menuliskan sebuah argument yang dikirimkan ke dalam parameter, maka username yg ada di dalam function mengambil argumentnya


function cetakURL() {
	console.log(arguments);
	var instagramURL = "http://instagram.com/";
	return instagramURL + username;		// username akan mencari difinisi ke variabel local terdekat, jika di local tidak ada maka akan mengecek ke gobal.
}
console.log(cetakURL('dodi@gmail.com', 'muhammad@gmail.com'));


// ------Contoh Terakhir-------
function satu() {
	var nama = 'alfian';
	console.log(nama); //alfian
}
function dua(){
	console.log(nama); // Erik -> karena dia akan mencari variabel nama di global
}

console.log(nama); // undefined -> konsep HOISTING
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama); // Erik;







// global scope / window scope
var a = 1;

// function tes() {
// 	var b = 2; // variable lokal
// 	console.log(b);
// 	var a = 2; // name conflict
// 	console.log(a); // 2
// 	// console.log(window.a); // 1 - artinya ini akan memanggil variable a di window
// 	console.log(this.a); // 1
// }
// tes(); // untuk menjalankan function
// console.log(b); //error -> analoginya seperti kaca films di mobil. Kita bisa melihat keluar tetapi yang diluar tidak bisa melihat ke dalam
// console.log(a); // 1

// function tes0() {
// 	console.log(a); //1 -> mengacu pada variabel global
// }
// tes0();

function tes1() {
	b = 2; 
	console.log(b); // 2
}
tes1();
console.log(b); // 2 - karena function akan mengecek apakah ada var b atau deklarasi untuk variable b. Jika tidak ada deklarasi untuk variable b di dalam function maka function akan melihat ke variable globalnya jika ada maka var b di deklarasikan di variable global bukan variable lokal

// var c = 1;
// function tes2(c) {
// 	console.log(c); // 3 - karena jika kita mengirimkan argument maka itu akan dideklrasikan sebagai variable lokal
// }
// function tes2() {
//     console.log(c); // 1 - karena jika kita tidak mengirimkan argument dan tidak di tangkap oleh function maka console.log(c) akan mengambil var c yg ada di scope global
// }
// tes2(3); 

// var d = 2;
// function tes3(d) {
// 	e = d*2
// 	console.log(e); // 4
// }
// tes3(d); // argument 
// console.log(d); // 2 - variable global
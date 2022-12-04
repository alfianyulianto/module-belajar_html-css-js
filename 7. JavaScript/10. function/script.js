// var nama = 'Alfian Yulianto';
// console.log(nama.charAt(5)); // untuk mengetahu karakter pada sebuah var nama di posisi ke 5

// var bil = Math.random()
// console.log(bil);

// function volumeDuaKubus(a, b) {
// 	var volumeA = a*a*a;
// 	var volumeB = b*b*b;

// 	var total = volumeA + volumeB;

// 	return total;
// }
// console.log(volumeDuaKubus(8, 3));


// // paramter dan argument
// function tambah(a, b) {
// 	return a + b;
// }
// var a = parseInt(prompt('masukan angka pertama:'));
// var b = parseInt(prompt('masukan angka kedua:'));
// var hasil = tambah(a*2, b*2);
// console.log(hasil);

// function tambah(a, b) {
// 	return a + b;
// }
function kali(a, b) {
	return a * b;
}
// var hasil1 = kali(tambah(1, 2), tambah(3, 4));
// console.log(hasil1); // 21


// // jika parameter tidak sesuai dengan argument
// function tambah(a, b, c) {
// 	return a + b;
// }s
// var hasil = kali(5, 10);
// console.log(hasil);

// function kali(a, b) {
// 	return a * b;
// }
// var hasil = kali(5, 10, 20);
// console.log(hasil);


// // arguments
// function tambah() {
// 	return arguments;
// }
// var hasil = tambah(5, 10, 20, "hi", false);
// console.log(hasil); // bentuknya seperti object array


// jika kita ingin menjumlahkan semua argument tanpa memperdulikan parameternya 
// function tambah() {
// 	var hasil = 0;
// 	for( var i = 0; i < arguments.length; i++ ) {
// 		hasil += arguments[i];
// 	}
// 	return hasil;
// }
// var coba = tambah(1,2,3,100);
// console.log(coba);


// rafactoring
// function volumeDuaKubus(a, b) {
// 	return a*a*a +  b*b*b;
// }
// alert(volumeDuaKubus(8, 3));
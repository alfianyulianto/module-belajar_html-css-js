// this
// sebuah keyword spesial yang didefiniskan pada setiap function
// jadi setiap kita mebuat function dengan cara apapun maka ada keyword "this" yang di definisikan


// "this" itu sama dengan "window" atau object global
// jika kita membuat variable di scope global artinya variable tersebut merupakan properti / method dari window
// JIKA KITA BIKIT DI SCOPE GLOBAL THIS ADALAH WINDOW
// var a = 10
// console.log(this ===  window); // true
// console.log(window.a); // 10
// console.log(this.a); // 10



// membuat object

// cara 1 - function declaration
// JIKA KITA MEMBUAT THIS DI FUNCTION DECLARATION MAKA HASILNYA SAMA KETIKA MEMBUAT THIS DI SCOPE GLOBAL
// function hello() {
// 	console.log(this); // window
// 	console.log("Hello"); // Hello
// }
// hello();
// window.hello();
// this.hello(); 
// this mengembalikan object global



// cara 2 - object literal
// var obj = {a : 10, nama : "Alfian Yulianto"};
// obj.hello = function(){
// 	console.log(this); 
// 	console.log("Hello");
// }
// obj.hello();
// this mengembalikan isi object yang bersangkutan

// var obj = {
// 	nama: "Alfian Yulianto",
// 	umur: 21,
// 	hello: function() {
// 		console.log(this);
// 	}
// }
// this mengembalikan isi dari object yang bersangkutan



// cara 3 - constructor
// function Hello() {
// 	this.nama = "Alfian Yulianto";
// 	this.umur = 21;
// 	console.log(this);
// 	// console.log("Hello");
// }
// var obj1 = new Hello();
// var obj2 = new Hello();
// this mengembalikan object yang baru dibuat dari new

function Mahasiswa(nama, umur){
	console.log(this);
	this.nama = nama,
	this.umur = umur
	console.log(this);
}
const mhs1= new Mahasiswa('Alfian', 21);


var nama = 'Budi';
function cetakNama(nama){
    // return `Halo nama saya ${this.nama}`;        // budi
    return `Halo nama saya ${nama}`;        // alfian
}
console.log(cetakNama('Alfian'));
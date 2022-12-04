// cara membuat object pada JavaScript
// 1. Object Literal
// problemnya tidak efektif untuk objet yang banyak
// let mahasiswa1 = {
// 	nama : "Alfian Yulianto",
// 	energi : 10,
// 	makan : function(porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Hallo ${this.nama}, selamat makan!`);
// 	}
// };
// let mahasiswa2 = {
// 	nama : "Dodi",
// 	energi : 20,
// 	makan : function(porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Hallo ${this.nama}, selamat makan!`);
// 	}
// };


// 2. Function Declaration
function Mahasiswa(nama, energi) {
	let mahasiswa = {};
	// 	poperti        = parameter
		mahasiswa.nama = nama;				// mahasiswa.nama -> membuat properti nama di dalam object
		mahasiswa.energi = energi;			// mahasiswa.energi -> membuat properti energi di dalam object
		mahasiswa.makan = function(porsi) {	// mahasiswa.makan -> membuat method makan di dalam object yg isinya function
			this.energi += porsi;
			console.log(`Halo ${this.nama}, selamat makan!`);
		}
		mahasiswa.main = function(jam) {	// mahaiswa.main -> membuat method main di dalam object yg isinya function
			this.energi -= jam;
			console.log(`Halo ${this.nama}, selamat main!`);
		}
		return mahasiswa;
}
let alfian = Mahasiswa("Alfian", 10);
let dodi = Mahasiswa("Dodi", 20);


// 3. Constuctor Function
// keyword new
// function Mahasiswa(nama, energi) {
// 	// 	poperti        = parameter
// 		this.nama = nama;
// 		this.energi = energi;
// 		this.makan = function(porsi) {
// 			this.energi += porsi;
// 			console.log(`Hallo ${this.nama}, selamat makan!`);
// 		}
// 		this.main = function(jam) {
// 			this.energi -= jam;
// 			console.log(`Hallo ${this.nama}, selamat bermian!`);
// 		}
// }
// let alfian = new Mahasiswa("alfian", 20);




// 4. Object.create


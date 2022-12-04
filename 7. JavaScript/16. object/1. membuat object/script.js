// membuat object pada JS
// Object Literal
// Function Declaration
// Consturctor Function (keyword new)
// Object.creat() -> method

// Object Literal
// tidak evektif untuk object yang banyak
var mhs1 = {
	nama : "Alfian Yulianto",
	nim : "L200180121",
	email : "alfianyulianto36@gmail.com",
	jurusan : "Teknik Informatika"
}

var mhs2 = {
	nama : "Dodi Nugroho",
	nim : "L200180191",
	email : "dodi.nugorho@gmail.com",
	jurusan : "Teknik Informatika"
}


// Function Deklaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
	var mhs = {}; // membuat objekbaru
	mhs.nama = nama;
	mhs.nim = nim;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
};

var mhs3 = buatObjectMahasiswa("Novariza", "L200180200", "novariza@gmail.com", "Teknik Informatika");

// Constructor
// Menngunkana Costurctor sama dengan menggunakan Function Decalration
// Akan tetapi kita tidak perlu mendeklarasikan "object" dan tidak perlu mendeklarasikan "return"
// Constructor ini khusus untuk membuat objek
// Saat kita membuat function Costructor ini kebiasaanya identifiernya diawali dengan huru besar
function Mahasiswa(nama, nim, email, jurusan) {
	// var this = {};
	this.nama = nama;
	this.nim = nim;
	this.email = email;
	this.jurusan = jurusan;
	// return this;
}

var mhs4 = new Mahasiswa("Erik", "B200180166", "erik@gmail.com", "Akuntansi");

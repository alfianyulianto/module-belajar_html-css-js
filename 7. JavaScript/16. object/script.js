// membuat object
var objek = {}; // membuat object kosong;
var mhs = {
	nama : "Alfian Yulianto",
	umur : 21,
	IPSemester : [3.18, 3.53, 3.63, 3.95, 4, 3.95, 4],
	IPKumulatif : function() {
		var total = 0;
		var ips = this.IPSemester;
		for( var i = 0; i < ips.length; i++ ) {
			total += ips[i];
		}
		return total/ips.length;
	},
	alamat : {
		jalan : "Dr. Radjiman 98",
		kota : "Solo",
		provinsi : "Jawa Tengah"

	}
};
// cara menambah properti pada object
objek.nama = 'Alfian';
objek.nim = 'L200180121';
objek.umur = 21;
var keahlian = ['PHP', 'Javascript', 'CSS', 'HTML', 'Python'];
objek.keahlian = keahlian;



// cara pemanggilan objek
// bisa dengan titik atau dengan kurung siku

// mhs.nama // "Alfian Yulainto"
// mhs["nama"] // "Alfian Yulianto"
var umur =  mhs["umur"] // 21
console.log(umur);
// mhs["umur"]; // 21
var alamat_Kota = mhs['alamat']['kota'] // "Solo"
console.log(alamat_Kota);
// mhs.alamat.kota; // "Solo"
// mhs.alamat["provinsi"] // "Jawa Tengah"
// mhs.IPKumulatif() // 3.748571428571428
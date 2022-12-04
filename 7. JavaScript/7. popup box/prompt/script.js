// prompt : digunakan untuk mengembalikan sebuah nilai yang di inputkan oleh user
var nama = prompt("masukan nama:");
// alert(nama);		// jika OK akan menampilkan apapun yang diinputkan oleh user, jik CANCLE akan menampikan null
while (nama || nama == null) {
	if (nama) {
		alert("Hallo " + nama);
		nama = false;
	} else if( nama == null ) {
		alert("Masukan nama anda!");
		nama = prompt("masukan nama:")
		if( nama ){
			alert("Hallo" + " " + nama);
			nama = false;
		}
	}
}

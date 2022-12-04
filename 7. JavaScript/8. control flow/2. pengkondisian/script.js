var angka = prompt("masukan angka:");
if( angka / 0 == Infinity ) {
	if( angka % 2 == 0 ) {
		alert(angka + " adalah angka GENAP");
	}else {
		alert(angka + " adalah angka GANJIL");
	}
}else {
	alert("yang anda masukan bukan angka!");
	angka = prompt("masukan angka:")
	if( angka % 2 == 0 ) {
		alert(angka + " adalah angka GENAP");
	}else {
		alert(angka + " adalah angka GANJIL");
	}
}
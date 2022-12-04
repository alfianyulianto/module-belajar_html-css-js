// var angka = (prompt("masukan angka:");

// switch( angka ) {
// 	case '1' :
// 		alert("anda memasukan angka 1");
// 		break;
// 	case '2' :
// 		alert("anda memasukan angka 2");
// 		break;
// 	case '3' :
// 		alert("anda memasukan angka 3");
// 		break;
// 	default :
// 		alert("angka yang anda masukan salah")
// 		break;
// }

var item = prompt("masukan nama makanan atau minuman: \n (cth: nasi, daging, susu, humberger, softdrink)");

switch( item ) {
	case 'nasi' :
	case 'daging' :
	case 'susu' :
		alert("makanan / minuman SEHAT!");
		break;
	case 'humberger' :
	case 'softdrink' : 
		alert("makanan / minuman TIDAK SEHAT!");
		break;
	default :
		alert("anda memasukan nama makanan / minuman yang salah!");
		break;
}
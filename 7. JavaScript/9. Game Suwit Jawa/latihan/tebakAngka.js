var tanya = true;
	while ( tanya ) {
	// manangkap pilihan player
	alert('tebak angka dari 1 - 10 \nKamu punya 3 kesempatan')

	// menangkap pilihan komputer
	// membangkitkan bilangan random
	// Math.random() * 10 + 1 -> artinya bilangan antara 1 sampai 10
	var comp = parseInt(Math.random() * 10 + 1);
	console.log(comp);

	var p = parseInt(prompt('masukan angka tebakan'));
	// menentukan rule
	var hasil = ' ';
	var kesempatan = 3
	while ( kesempatan > 0) {
		if ( p === comp ) {
			hasil = 'anda benar! \nangka yang dicari adalah : ' + comp;
			var kesempatan = false;
		} else if ( p < comp && p !== 0) {
			hasil = 'terlalu RENDAH'
		} else if (p > comp && p <= 10) {
			hasil = 'terlalu TINGGI!';
		} else if ( p < 1 || p > 10 ) {
			hasil = 'anda memasukan angka yang salah!';
		} 
	kesempatan--;

		// cek kesempatan
		// tampilkan hasilnya
		if ( p !== comp ) {
			alert(hasil + '\nmasih ada ' + kesempatan + ' kesempatan');
			p = parseInt(prompt('masukan angka tebakan'));
		} 
	}
	alert(hasil);
	tanya = confirm('lagi?');
}
// Bangkitkan bilangan random
function getPilihanComputer() {
	const comp = Math.random(); // membangkitkan bialangan random dari 0 sampai 1

	if( comp < 0.34 ) return 'gajah';
	if ( comp >= 0.34 && comp < 0.67 ) return 'orang';
	return 'semut';
}


// rules
function getHasil(comp, player) {
	if ( player == comp ) return 'SERI!';
	if ( player == 'gajah' ) return ( comp == 'orang' )	? 'MENANG!' : 'KALAH!';
 	if ( player == 'orang' ) return ( comp == 'gajah' )	? 'KALAH!' : 'MENANG!';
 	if ( player == 'semut' ) return ( comp == 'orang' )	? 'KALAH!' : 'MENANG!';
}



function putar() {
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'semut', 'orang'];
	let i = 0;

	// ambil waktu awal
	const waktuMulai = new Date().getTime();
	// setInterval :fungsi unutk melakukan sesuatu secara berulang-ulang selama interval waktu tertentu
	// setInterval(paramater1, parameter2)
	// parameter2 : disi dengan waktu. Misal 100 artinya 0.1 detik
	setInterval(function() {
		// setelah satu detik berhentikan
		if( new Date().getTime() - waktuMulai > 1000 ) {
			clearInterval;
			return;
		}
		// gambar[i++] : artinya ini akan mengabil isi dari array gambar
		// i++ ini akan bertambah tersu sehingga jika sudah mencapai akhir kembalikan i ke 0
		imgComputer.setAttribute('src', 'img/'+ gambar[i++] + '.png' );

		// karena kita cuma punya 3 gambar maka kemabalikan i ke 0
		if( i == gambar.length ) i = 0;
	}, 100);
}


// event
// mengabil semua img
const pilihan = document.querySelectorAll('li img');
// loop imgnya
pilihan.forEach(function(pil) {
	// tambahkan event
	// disini jika eventnya di klik maka hanya menampilkan imgnya aja
	pil.addEventListener('click', function() {
			const pilihanComputer = getPilihanComputer();
			const pilihanPlayer = pil.className;
			const hasil = getHasil(pilihanComputer, pilihanPlayer);

			putar();

			// tunggu dulu dari fungsi putar
			// karena fungsi putar berjalan selama 1 detik maka tunggu dulu
			setTimeout(function() {
				const imgComputer = document.querySelector('.img-komputer');
				imgComputer.setAttribute('src', 'img/'+ pilihanComputer +'.png');

				const info = document.querySelector('.info');
				info.innerHTML = hasil;

				let sComputer = parseInt(document.querySelector('.komputer span').innerHTML);
				let sPlayer = parseInt(document.querySelector('.player span').innerHTML);
				if( info.innerHTML == 'MENANG!' ) {
					document.querySelector('.player span').innerHTML = sPlayer + 1;
					document.querySelector('.komputer span').innerHTML = sComputer - 1;
				} else if(info.innerHTML == 'KALAH!') {
					document.querySelector('.komputer span').innerHTML = sComputer + 1;
					document.querySelector('.player span').innerHTML = sPlayer - 1;
				}
			}, 1000);

	});
});


// const pilihan = document.querySelectorAll('li img')
// pilihan.forEach(function(pil){
// 	pil.addEventListener('click', function(){
// 		const pilihanComputer = getPilihanComputer();
// 		const pilihanPlayer = pil.classList;
// 		const hasil = getHasil(pilihanComputer, pilihanPlayer);
		

// 		const imgComputer = document.querySelector('.img-komputer');
// 		imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 		const info = document.querySelector('.info');
// 		info.innerHTML = hasil;
// 	});
// });


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pGajah.className;
// 	// console.log('comp :' + pilihanComputer);
// 	// console.log('player :' + pilihanPlayer);
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	// console.log('hasil adalah ' + hasil)


// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/'+ pilihanComputer +'.png');


// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });


// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pOrang.className;
// 	// console.log('comp :' + pilihanComputer);
// 	// console.log('player :' + pilihanPlayer);
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	// console.log('hasil adalah ' + hasil)


// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/'+ pilihanComputer +'.png');


// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });


// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pSemut.className;
// 	// console.log('comp :' + pilihanComputer);
// 	// console.log('player :' + pilihanPlayer);
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	// console.log('hasil adalah ' + hasil)


// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/'+ pilihanComputer +'.png');


// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });












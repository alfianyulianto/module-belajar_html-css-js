// Kasus pertama
// tangkap tombolnya
const tUbahWarna = document.getElementById('tUbahWarna');

// dengarkan event
tUbahWarna.onclick = function() {
	// document.body.style.backgroundColor = 'orange';
	// document.body.setAttribute('class', 'biru-muda');
	document.body.classList.toggle('biru-muda');
}



// Kasus kedua
// bikin tombol
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');

// simpan tombol baru setelah button
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
	// Math.round();
	// Math.floor(); -> pembulatan ke bawah
	// Math.ceil(); -> pembulatan ke atas

	// Math.random(); -> membangkitkan angk antara 0 sampai 1
	// Math.random() * 255 + 1; -> memangkitkkan angka antara 1 sampai 255
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);

	// console.log(r);
	// console.log(g);
	// console.log(b);
	document.body.style.backgroundColor =`rgb(${r}, ${g}, ${b})`;
});



// Kasus ketiga
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
});
sHijau.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
});
sBiru.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
});


// Kasus keempat
// document.body.addEventListener('click', function(event){
// 	// posisi mouse -> clientX & clientY
// 	// console.log(event.clientY);
// 	// ukuran browser -> innerWidth & innerHeight
// 	// innerWidth digunakan untuk menegcek lebar dari document
// 	// innerHeight digunakan untuk menegcek tinggi dari document

// 	// console.log(event);
// 	// console.log(window.innerWidth);
// 	// const xPos = Math.round((event.clientX / window.innerWidth) * 255);
// 	// const yPos = Math.round((event.clientY / window.innerHeight) * 255);
// 	// document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos+', 100)';
// });
// kasus pertama
// buat tombol ubah warna
const tUbahWarna = document.createElement('button');
const teksUbahWarna = document.createTextNode('Ubah Warna');
tUbahWarna.appendChild(teksUbahWarna);
tUbahWarna.setAttribute('type', 'button');
tUbahWarna.setAttribute('name', 'tUbahWarna')

const h1 = document.getElementsByTagName('h1')[0];

h1.after(tUbahWarna);

tUbahWarna.addEventListener('click', function(){
	document.body.classList.toggle('bg-color');
});



// // kasus kedua
// // buat tombol acak warna
// const tAcakWarna = document.createElement('button');
// const teksAcakWarna = document.createTextNode('Acak Warna');
// tAcakWarna.appendChild(teksAcakWarna);
// tUbahWarna.after(tAcakWarna)

// tAcakWarna.addEventListener('click', function()	{
// 	const r = Math.round(Math.random() * 255 + 0);
// 	const g = Math.round(Math.random() * 255 + 0);
// 	const b = Math.round(Math.random() * 255 + 0);
// 	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });





// // kasus ketiga
// // buat slider
// const sliderMerah = document.createElement('input');
// sliderMerah.setAttribute('type', 'range');
// sliderMerah.setAttribute('min', 0);
// sliderMerah.setAttribute('max', 255);
// const divMerah = document.getElementsByClassName('merah')[0];
// divMerah.after(sliderMerah);

// const sliderHijau = document.createElement('input');
// sliderHijau.setAttribute('type', 'range');
// sliderHijau.setAttribute('min', 0);
// sliderHijau.setAttribute('max', 255);
// const divHijau = document.getElementsByClassName('hijau')[0];
// divHijau.after(sliderHijau);

// const sliderBiru = document.createElement('input');
// sliderBiru.setAttribute('type', 'range');
// sliderBiru.setAttribute('min', 0);
// sliderBiru.setAttribute('max', 255);
// const divBiru = document.getElementsByClassName('biru')[0];
// divBiru.after(sliderBiru);

// sliderMerah.addEventListener('input', function() {
// 	const r = sliderMerah.value;
// 	const g = sliderHijau.value;
// 	const b = sliderBiru.value;
// 	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });
// sliderHijau.addEventListener('input', function() {
// 	const r = sliderMerah.value;
// 	const g = sliderHijau.value;
// 	const b = sliderBiru.value;
// 	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });
// sliderBiru.addEventListener('input', function() {
// 	const r = sliderMerah.value;
// 	const g = sliderHijau.value;
// 	const b = sliderBiru.value;
// 	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });



// Kasus keempat


































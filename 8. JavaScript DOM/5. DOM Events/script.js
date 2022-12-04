// // Event Hadler

// const p3 = document.querySelector('.p3');

// 	// Innline HTML
// 	function ubahWarna() {
// 		p3.style.backgroundColor = 'lightblue';	
// 	}


// 	// Element methode
	function ubahTeks() {
		p2.innerHTML = 'Ini dirubah dari javascript';
	}
	const p2 = document.querySelector('.p2');
	p2.onclick = ubahTeks;


// // addEventListener()
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
// 	const ul = document.querySelector('section#b ul');
// 	const liBaru = document.createElement('li');
// 	const teksLiBaru = document.createTextNode('item baru');
// 	liBaru.appendChild(teksLiBaru);
// 	ul.appendChild(liBaru);
// });




// // // // // // // // // // // // // // // // // 
// Event Handler
const p3 = document.querySelector('.p3');
// p3.onclick = function() {
// 	p3.style.backgroundColor = 'lightgreen';
// }
// p3.onclick = function() {
// 	p3.style.color = 'red';
// }


// addEventListener
p3.addEventListener('mouseenter', function() {
	p3.style.backgroundColor = 'lightgreen';
});
p3.addEventListener('mouseleave', function() {
	p3.style.backgroundColor = 'lightblue'
});










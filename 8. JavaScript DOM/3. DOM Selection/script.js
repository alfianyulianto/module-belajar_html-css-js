// DOM Selection
// // document.getElementById() -> element
// const judul = document.getElementById('judul');
// // Dengan meggunakan JS ketika kita memberi style kesebuah element otomatis akan mebambahkan inline pada CSS
// judul.style.color = 'red';

// // Jika menggunakan JS untuk menulis property CSS yang lebih dari 2 kata dengan teknik Camelchase
// judul.style.backgroundColor = '#ccc';

// // Mengubah kalimatnya menggunakan innerHTML
// judul.innerHTML = 'Alfian Yulianto';


// // document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p');
// // p[0].style.backgroundColor = 'lightblue';
// // p[1].style.backgroundColor = 'lightblue';
// // p[2].style.backgroundColor = 'lightblue';
// // p[3].style.backgroundColor = 'lightblue';

// // Menggunakan looping
// for(  let i =0; i < p.length; i++) {
// 	p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';
// h1.style.backgroundColor = 'pink';


// // document.getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini diubah dari javascript';




// //document.querySelector() -> element
// // query -> menanyakan mengenai selector (Selector CSS)
// const p4 = document.querySelector('#b p');
// p4.style.color = 'red';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p'); // P yang pertama akan berubah. Sedangkan P yang lainnya tidak akan berubah. Karena dengan menggunakan querySelector() dia akan mengembalikan satu element sehingga hanya terdapat satu element yang ditarget
// p.innerHTML = 'Ini diubah dengan javascript'; 


// // document.querySelectorAll() -> nodeList
// const p = document.querySelectorAll('p');
// for( let i = 0; i < p.length; i++ ) {
// 	p[i].style.backgroundColor = 'lightblue';
// }



// // MERUBAH NODE ROOT
// // digunakan untuk mempersempit lingkup 
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';

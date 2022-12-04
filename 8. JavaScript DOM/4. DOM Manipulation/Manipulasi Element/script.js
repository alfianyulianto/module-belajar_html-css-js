// // 1. element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Alfian Yulianto</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World!';


// // 2. element.style.<prpertiCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';


// element.getAttribute()
// 3. element.setAttribute()
// element.removeAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'alfian');
// const a = document.querySelector('section#a a');

// const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'lable'); // yang awalnya kelasnya berisi 'p2' akan di timpa dengan class yang berisi 'lable'


// element.classList
// element.classList.add() -> menambah
// element.classList.remove() -> meghilangkan class
// element.classList.toggle() -> jika sebuah element tidak ememiliki class tertentu maka akan ditambahkan, tetapi jika element tersebut sudah memiliki class tersbut 'toggle' akan menghilangkan
// element.classList.item() -> untuk mengetahi class tertentu. Misalnya sebuah element memiliki 3 class, dan kita ingin mengetahui class ketiganya apa
// element.classList.contains() -> mengecek apakah sebuah element memiliki sebuah class tertentu
// element.classList.replace() -> menganti class yang ada menjadi class yang baru

// const p2 = document.querySelector('.p2'); // p2
// p2.classList.add('satu', 'dua', 'tiga', 'empat'); // p2 satu dua tiga empat
// p2.classList.remove('empat'); // p2 satu dua tiga
// p2.classList.toggle('label') // p2 satu dua tiga label
// p2.classList.toggle('label') // p2 satu dua tiga

// document.body; // isinya element body
// document.body.style.backgroundColor ='lightblue'; // background akan berwarna biru muda
// document.body.classList.toggle('biru-muda') // mencari class biru muda yang ada di index.html

// p2.classList.item(2) // 'dua'
// p2.classList.item(0) // 'p2'
// p2.classList.contains('p2') // true
// p2.classList.contains('empat') // false
// p2.classList.replace('p2', 'nol') // nol satu dua tiga


















































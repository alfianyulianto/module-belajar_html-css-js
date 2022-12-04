// menghilangkan semua element
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');


// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });


// DOM Traversal
// const close = document.querySelectorAll('.close');
// close.forEach(function(element){
//     element.addEventListener('click', function(e) {
//         // panggil parentnya untuk dihilangkan
//         // DOM Traversal - parentElement
//         // close.parentElement.style.display = 'none';

//         // e : sebuah object yang berisi method-method atau informasi dari event yang terjadi
//         // console.log(e);
//         // console.log(e.target);
//         // target : element apa yang di klik
//         // e.target.parentElement.style.display = 'none';

//         // preventDefault() : artinya cegah aksi defaultnya
//         // digunakan saat menggunkan tag a, tag input tipe combo box, mencet sebuah tombol, melakukan checklist, megirim data lewat form
//         e.preventDefault(); // dalam hal ini kita menggunakan tag <a> yang mana jika itu di klik akan mengarah ke halaman yang dituliske atribut href. Jika kita tidak mengisikan hrefnya maka secara otomatis dia akan mengarah ke halamannya sendiri. Sehingga akan merefresh halamannya, ini berakibat event yang dijalankan seperti tidak jalan karena sudah direfresh oleh halaman akibat dari tag <a>
//     });
// });


// const close = document.querySelector('.close');
// close.addEventListener('click', function(e){
//     this.parentElement.style.display = 'none';
//     e.preventDefault();
// })


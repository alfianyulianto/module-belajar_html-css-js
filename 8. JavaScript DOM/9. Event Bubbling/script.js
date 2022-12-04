// menghilangkan semua element
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');


// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });


// // DOM Traversal
// const close = document.querySelectorAll('.close');
// close.forEach(function(element){
//     element.addEventListener('click', function(e) {
//         // panggil parentnya untuk dihilangkan
//         // DOM Traversal - parentElement
//         // close.parentElement.style.display = 'none';

//         // e : sebuah object yang berisi method-method atau informasi dari event yang terjadi
//         // console.log(e);
//         // target : element apa yang di klik
//         e.target.parentElement.style.display = 'none';

//         // preventDefault() : artinya cegah aksi defaultnya
//         // digunakan saat menggunkan tag a, tag input tipe combo box, mencet sebuah tombol, melakukan checklist, megirim data dlewat form
//         // e.preventDefault(); // dalam hal ini kita menggunakan tag <a> yang mana jika itu di klik akan mengarah ke halaman yang dituliske atribut href. Jika kita tidak mengisikan hrefnya maka secara otomatis dia akan mengarah ke halamannya sendiri. Sehingga akan merefresh halamannya, ini berakibat event yang dijalankan seperti tidak jalan karena sudah direfresh oleh halaman akibat dari tag <a>

//         e.stopPropagation();
//     });
// });
// // ambil semua card
// const cards = document.querySelectorAll('.card')
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok!');
//     });
// });


// Menempelkan event di container 
// event bunding : kita memberika event ke element yang belum ada, jika elementnya sudah ada maka eventnya tetap akan dijalankan
const container = document.querySelector('.container');
container.addEventListener('click', function(e){
    // console.log(e.target);
    if(e.target.classList.contains('close')) {
        e.target.parentElement.style.display = 'none';
        e.target.prevetDefault();       // untuk jaga-jaga yg di klik adalah link
    }
});

// menghilangkan semua element
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');


// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });


// DOM Traversal
const close = document.querySelectorAll('.close');
close.forEach(function(element){
    element.addEventListener('click', function(e) {
        // panggil parentnya untuk dihilangkan
        // DOM Traversal - parentElement
        // close.parentElement.style.display = 'none';

        // e : sebuah object yang berisi method-method atau informasi dari event yang terjadi
        // console.log(e);    
        // target : element apa yang di klik
        // console.log(e.target);
        // e.target.parentElement.style.display = 'none';
    });
});


// ambil salah satu element pertama
const nama = document.querySelector('.nama');
// memanggil parent
console.log(nama.parentElement);
// memanggil kakek
console.log(nama.parentElement.parentElement);
// memanggil saudara kandung yang bener element
console.log(nama.nextElementSibling);
// memanggil saudara kandung yang bener element
console.log(nama.previousElementSibling);
console.log(nama.previousElementSibling.previousElementSibling); // null : karena setelah img tidak ada saudara lagi sebelumnya
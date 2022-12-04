// Konsep this pada Arrow Function

// Cunstructor Function
// const Mahasiswa = function() {
//     this.nama = "Alfian Yulianto";
//     this.umur = 21;

//     this.sayHelo = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur}`);
//     }
//     // console.log(this);  // akan mengembalikan object yang bersangkutan (Mahasiswa)
// }
// const alfian = new Mahasiswa();


// Arrow Function(pada Custructor Function) - kita tidak bisa membuat Cunstructor Function dengan Arrow Function
// Tapi kita bisa membuat method dengan Arrow Function
// const Mahasiswa = function() {
//     this.nama = "Alfian Yulianto";
//     this.umur = 21;

//     this.sayHai = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur}`);
//         // Halo, nama saya Alfian Yulianto, dan umur saya 21
//         // Arrow function tidak memiliki konsep this, tapi dari hasil diatas bahwa ada properti yang dikembalikan karena this.nama dan this.umur mencari ke lexical scope.
//         console.log(this);      // akan mengembalikan parent object
//     };
//     this.sayHelo = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur}`);
//         // Halo, nama saya Alfian Yulianto, dan umur saya 21
//         // Arrow function tidak memiliki konsep this, tapi dari hasil diatas bahwa ada properti yang dikembalikan karena this.nama dan this.umur mencari ke lexical scope.
//         console.log(this);      // akan mengembalikan parent object
//     }
//     // console.log(this);  // akan mengembalikan object
// }
// const alfian = new Mahasiswa();


// Arrow Function(pada Object Literal)

const mhs = {
    nama: 'Alfian Yulianto' ,
    umur: 21,

    // menggnakan function ekpresion
    sayHai: function() {
        console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur}`);     
            // Halo, nama saya Alfian Yulianto, dan umur saya 21
        console.log(this); 
            // akan mengambalikan object yang bersangkutan
    },

    // menggunakan arrow function
    sayHalo: () => {
        console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur}`); 
        // ini akan menghasilkan undefined karena Arrow Function tidak memiliki konsep this
        // karena di lexical scope tidak ada this maka akan mencari ke global, sedangkan di global tidak ada deklarasi this maka akan diisi undefined
        console.log(this); 
            // harusnya mengembalikan object yang bersangkutan karena kita menggunakan Arrow Function maka this akan mengembalikan object window
    }
}


// -----Contoh lain Constructor Function------
const Mahasiswa = function() {
    this.nama = "Alfian Yulianto";
    this.umur = 21;

    this.sayHelo = () => {
        console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur}`);
    }

    // memakai function pada setInterva;
    // setInterval akan otomatis dijalankan pada interval tertentu
    setInterval(function(){
        console.log(this.umur++)      // NaN (Not a Number)
        // ini terjadi karena HOISTING 
        console.log(this)       // window
    }, 500);

    // memakai arrow function pada seInterval
    // setInterval akan otomatis dijalankan pada interval tertentu
    // setInterval(() => {
    //     console.log(this.umur++);        // akan mengacu pada lexical scope
    // },500);
}
// const alfian = new Mahasiswa();





// --------CONTOH IMPLEMENTASI ARROW FUNCTION---------
// const box = document.querySelector('.box');
// box.addEventListener('click', function() {
//     let satu = 'size';
//     let dua = 'caption';

//     // if( this.classList.contains(satu) ){
//     //     [satu, dua] = [dua, satu];
//     // }
//     if(this.className == 'satu'){
//             [satu, dua] = [dua, satu];
//     }

//     this.classList.toggle(satu);
//     setTimeout(() => {
//         this.classList.toggle(dua);
// }, 600)
// });
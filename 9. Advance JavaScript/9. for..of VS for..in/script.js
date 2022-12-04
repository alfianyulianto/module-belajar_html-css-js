// for..of


// Iterables Array
const mhs = ['Alfian', 'Erik', "Doddy"];
for( const m of mhs ) {         // tiap-tiap element di representasikan sebagai 'm' dari array 'mhs'
    console.log(m);     // Alfian   Erik    Doddy
}

// mhs.forEach((m, i) => {console.log(`${m} adalah mahasiswa ke-${i + 1}`)});

// for( const [i,m] of mhs.entries() ) {       // method entries() akan membuat 'm' berbentuk array sehingga akan berisi index dan nama [0, Alfian] [1, Erik] [2, Doddy]
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// };


// Iterbales String
// const nama = 'Alfian';
// for( const n of nama) {
//     console.log(n);
// }


// NodeList
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => {console.log(n.textContent)});

// for( const n of liNama) {
//     console.log(n.innerHTML);
// }


// Arguments
// function jumlahkanAngka() {
//     // return arguments.reduce((acc, curV) => acc + curV);      // error karena arguments bukan array sedangkan reduce membutuhkan array 
//     let jumlah = 0;
//     // return arguments.forEach(a => jumlah += a);      // error karena arguments bukan array sedangkan forEach membutuhkan array

//     let jumlah = 0;
//     for( const a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;

// }
// console.log(jumlahkanAngka(1,2,3,4,5));


// -------------------------------------------------------------------------------- 
// for..in
// const mhs1 = {
//     nama: 'Alfian',
//     umur: 21,
//     email: 'alfianyulianto36@gmail.com'
// }
// for( const m in mhs1) {
//     console.log(m);     // mengambil index pada object dalam hal ini "property"
//     console.log(mhs1[m]);        // mengambil value pada object
// }




















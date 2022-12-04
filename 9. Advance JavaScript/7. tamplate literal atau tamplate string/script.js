// Tamplate Literal / Tamplate String
// Embedded Expression
// const nama = 'Alfian';
// const umur = 21;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);


// Expression Interpolasi
// console.log(`${1 + 1}`);
// console.log(`${alert('Halo!')}`);

// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);


// HTML Fragments
const mhs = {
    nama: 'alfian',
    umur: 21,
    nim: 'L200180121',
    email: 'alfianyulainto36@gmail.com'
}
let el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nim}</span>
</div>`;
console.log(el);

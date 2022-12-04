// Tagged Tamplates -> parameter pada functionnya akan berupa array
const nama = 'Alfian Yulianto';
const umur = 21;

// function coba(strings, nama, umur, email) {
//         // return `coba`; // merubah paramter dari tamplate literal menjadi coba
//         // return strings  // jika ada sebuah parameter maka string paramter itu akan mengembalikan "tamplate literal", tapi dalam bentuk array dan pemisahnya ialah "expression" ['Halo, nama saya ', ', saya ', ' tahun.]
//         // return nama;     // Alfian Yulianto -> nama ini akan masuk ke dalam parameter berikutnya dengan isi dari expression
//     return email;       // undefined
// }
// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;     //membuat sebuah function coba dengan paramter dari string literal
// console.log(str);

// pada javascript mempunyai argument yang bernama "rest parameter" : digunakan untuk menampung seluruh expression yang ada di tamplate literal
function coba(strings, ...values) {
    // menggunakan foreach
    // let result = '';
    // strings.forEach((str, index) => {
    //     result += `${str}${values[index] ? `${values[index]}` : ''}`
    // });
    // return result
    // let result = '';
    // strings.forEach((el, i) => result += `${el}${values[i] || ''}`);
    // return result;

    // menggunakan map
    // return strings.map((str, i) => `${str}${values[i] ? `${values[i]}` : ''}`).join('');

    // menggunakan reduce
    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '...');
    // return strings.reduce((result, str, i) => `${result}${str}${values[i] ? `${values[i]}` : ''}`, '');

    // menggunakan for..of
    // let result = '';
    // for( const [i, m] of strings.entries()){
    //     result += `${m}${values[i] || ''}`;
    // }
    // return result;
};
const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;     // membuat sebuah function coba dengan paramter dari string literal
console.log(str);


// highlight
// const nama = 'Alfian Yulianto';
// const umur = 21;

// function highlight(strings, ...values) {

//     // let result = '';
//     // strings.forEach((e, i) => result += `${e}<span class="hl">${values[i] || ''}</span>`);
//     // return result
//     // return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] ? `${values[i]}` : ''}</span>`, '');
// };


// const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun.`;     //membuat sebuah function coba dengan paramter dari string literal
// document.body.innerHTML = str;


// const nama = 'Alfian Yulianto';
// const umur = 21;

// function coba( strings, ...values ) {
//     // let result  = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] ? `${values[i]}` : ''}`;
//     // });
//     // return result ;

//     return strings.reduce((acc, curV, i) => `${acc}${curV}<span class="hl">${values[i] || ''}</span>`, '');
// };

// const str  = coba `Hallo, saya ${nama}, dan saya ${umur}`;
// document.body.innerHTML = str;
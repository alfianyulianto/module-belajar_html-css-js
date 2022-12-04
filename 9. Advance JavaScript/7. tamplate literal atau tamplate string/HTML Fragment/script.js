// 1. HTML Fragments
// const mhs = {
//     nama: 'alfian',
//     umur: 21,
//     nim: 'L200180121',
//     email: 'alfianyulainto36@gmail.com'
// };
// let el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nim}</span>
// </div>`;

// // tampilkan ke halaman html
// document.body.innerHTML = el;


// 2. Loop
const mhs = [
    {
        nama: 'alfian',
        email: 'alfianyulainto36@gmail.com'
    },
    {
        nama: 'budi',
        email: 'budi@gmail.com'
    },
    {
        nama: 'erik',
        email: 'erik@gmail.com'
    },
];

// const el = `<div class="mhs">
//     ${mhs.map( m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;

// function list(mhs) {
//     let result = '';
//     mhs.forEach(m=>result +=` <ol><li>${m.nama}</li><li>${m.email}</li></ol>`); 
//     return result
// }
// const el = `<div class="mhs">
//     ${list(mhs)}
// </div>`;

// document.body.innerHTML = el;

// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Saraswati',
//     feat: 'erik'
// };
// const el = `<div class="lagu">
//     <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;

// document.body.innerHTML = el;


// 4. nested / HTML Fragment bersarang
// const mhs = {
//     nama: 'Alfian Yulianto',
//     semester: 5,
//     mataKuliah: [
//         'Pemograman Web Dinamis',
//         'Perancangan Sistem Informasi',
//         'Perancangan Sistem Enterpres'
//     ]
// };

// function cetakMatakuliah(mataKuliah) {
//     return `<ol>
//         ${mataKuliah.map( mk => `<li>${mk}</li>`).join('')}
//     </ol>`;
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="smst">Semester : ${mhs.semester}</span>
//     <h4>Mata Kuliah :</h4>
//     ${cetakMatakuliah(mhs.mataKuliah)}
// </div>`;

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="smst">Semester : ${mhs.nama}</span>
//     <h5>Matakuliah : </h5>
//     <ol>
//     ${mhs.mataKuliah.map(m =>`
//         <li>${m}</li>
//     `).join('')}
//     </ol>
// </div>`;

// document.body.innerHTML = el;
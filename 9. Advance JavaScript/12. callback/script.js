// callback : sebah function yg parameternya function juga

// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }
// function tampilkanNama(callback) {
//     const nama = prompt('Masukan nama : ');
//     callback(nama);      // callback merupakan function halo yang menerima parameter nama dan jalankan function
// }
// tampilkanNama(halo);     // function tampilNama menirimkan prameter berupa function halo


// function tampilkanNama(callback) {
//     const nama = prompt('Masukan nama : ');
//     callback(nama);
// }
// tampilkanNama(nama => alert(`Halo, ${nama}`));      // memgirimkan function sebagai parameter pada tampilkanNama


// const mhs = [
//     {
//         'nama': 'Alfian Yulianto',
//         'nim': 'L200180121',
//         'email': 'l200180121@student.ums.ac.id',
//         'jurusan': 'Teknik Informatika',
//         'idDosenWali': 1
//     },
//     {
//         'nama': 'Doddy Ferdiansyah',
//         'nim': 'L200180100',
//         'email': 'l200180100@student.ums.ac.id',
//         'jurusan': 'Teknik Informatika',
//         'idDosenWali': 2
//     },
//     {
//         'nama': 'Budi Doremi',
//         'nim': 'L200180200',
//         'email': 'l200180200@student.ums.ac.id',
//         'jurusan': 'Teknik Informatika',
//         'idDosenWali': 2
//     },
//     {
//         'nama': 'Diah Pertiwi',
//         'nim': 'L200180111',
//         'email': 'l200180111@student.ums.ac.id',
//         'jurusan': 'Teknik Informatika',
//         'idDosenWali': 1
//     }
// ];

// console.log('awal');
// mhs.forEach(m => {
//     for( let i = 0; i < 900000000; i++ ) {     // karena loop ini maka console.log('akhir') belum bisa dikerjakan karena harus menunggun ini di kerjakan
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('akhir');



// Asynchronous Callback
// Dengan Vanila JS
// getDataMahasiswa digunakan untk merequest data mahasiswa dari folder data/mahasiswa.json
// dimana function ini menerima 3 parameter
// parameter pertama url(bisa berupa api)
// parameter kedua success(berupa callback)
// parameter ketiga error(berupa callback)
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     // cek kesiapan object ajax
//     xhr.onreadystatechange = function() {
//         // jika statusnya redy
//         if(xhr.readyState === 4) {
//             // cek status request
//             if(xhr.status === 200) {
//                 // jalankan function success
//                 // xhr.response berisi apapun yang barasal dari sumbernya / url / api
//                 success(xhr.response);
//             } else if(xhr.status === 404){      // status 404 not found
//                 error();
//             }
//         }
//     }
//     // jalanin ajax
//     // open() ada 2 parameter 
//     // paramter pertama method mau apa?
//     // parameter kedua urlnya kemana?
//     xhr.open('get', url);
//     xhr.send();
// }
// console.log('awal');
// getDataMahasiswa('data/mahasiswa.json', result => {
//     // console.log(result);     // isi dari data/mahasiswa.json, tapi dalam bentuk string

//     const mhs = JSON.parse(result);		// kita mau nampilin mahsiswa.json dalam bentuk JSON
//     console.log(mhs);       // hasil ajax dalam bentuk json
//     mhs.forEach(m => console.log(m.nama));      // mengambil properti nama 
// }, 
// (err) => {
//     // console.log(err.responseText);
//     const pError = `<h1 class="error">Page Not Found</h1>`;
//     document.body.innerHTML = pError;
//     // $.ajax({
//     //     url: 'data/index.html',
//     //     success: error => {
//     //         document.body.innerHTML = error;
//     //     }
//     // })
// });
// console.log('akhir');

// Dengan JQUERY
// dengan JQUERY yang dikembalikan sudah berbentu JSON
console.log('awal');
$.ajax({
    url: "dat/mahasiswa.json",
    success: (mhs) => {
        mhs.forEach( m => console.log(m.nama) );
    },
    error: (err) => {
        console.log(err);
        console.log(err.responseText);
        console.log(err.statusText);
    }
});
console.log('akhir');






















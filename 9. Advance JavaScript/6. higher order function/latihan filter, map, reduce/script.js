// // ambil semua element video
// const videos = Array.from(document.querySelectorAll('[data-duration]'));

// // pilih hanya yang 'JAVASCRIPT LANJUTAN'
// // untuk mengambil isi dari element bisa pakek innerHTML, innerText, textContent
// // include() : terdapat apa
// const jsLanjut = videos.filter( video => video.textContent.includes('JAVASCRIPT LANJUTAN') )

// // ambil durasi masing-masing video
// // dataset : digunakan untuk mengambil atribut di html
//     .map( item => item.dataset.duration )

// // ubah durasi menjadi float, ubah menit menjadi detik
//     .map(waktu => {
//         // 10:30 -> [10, 30] split
//         // rubah ke "float" map
//         const parts = waktu.split(':').map(part => parseFloat(part))
//         return (parts[0] * 60) + parts[1];
//     })
// // jumlahkan semua detik
//     .reduce((total, detik) => total + detik);

// // ubah format jadi jam menit detik
// const jam = Math.floor(jsLanjut / 3600);
// const sisaDariJam = jsLanjut % 3600;
// const menit = Math.floor(sisaDariJam / 60);
// const detik = sisaDariJam % 60;

// // simpan di DOM
// const durasi = document.querySelector('.total-durasi');
// durasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

// const jmlVideo = videos.filter( video => video.textContent.includes('JAVASCRIPT LANJUTAN') ).length;
// document.querySelector('.jumlah-video').textContent = `${jmlVideo} Video`;




// Alfian Mencoba
// ambil semua element video
let videos = document.querySelectorAll('[data-duration]');
videos = [...videos];
// filter yang hanya JS Advance
const JSLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
// ambil masing-masing data duration
    .map(item => item.dataset.duration)
// ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        const part = waktu.split(':').map(w => parseFloat(w));
        return (part[0] * 60) + part[1];
    })
// jumlahkan semua detik
    .reduce((acc, curr) => acc + curr);
// ubah format detik menjadi jam menit detik
const jam = Math.floor(JSLanjut / 3600);
const menit = Math.floor((JSLanjut % 3600) / 60);
const detik = ((JSLanjut % 3600) % 60);
console.log(detik);

let jmlVideo = document.querySelectorAll('[data-duration]');
jmlVideo = [...jmlVideo];

const result = jmlVideo.filter(m=>m.textContent.includes('JAVASCRIPT LANJUTAN ')).length;
document.querySelector('.jumlah-video').textContent = result;
document.querySelector('.total-durasi').textContent = jam + ' Jam ' + menit + ' Menit ' + detik + ' Detik ';
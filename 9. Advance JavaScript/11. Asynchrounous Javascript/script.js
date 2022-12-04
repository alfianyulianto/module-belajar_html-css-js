// Asynchronous Callback

console.log('satu');
setTimeout(() => {
  console.log('dua');
}, 5000)
console.log('tiga');

// output : 'satu' 'tiga' 'dua'
// ini terjadi karena setTimeout merupakan "asychronouse callback" yang mana asyn callback ini akan masuk ke web API, kemudian di dalam WEB API setTimeout akan memunggu selama 5 detik baru setTimeout akan masukan ke dalam "callback queue"

// WEB API : untuk menangani callback yg bukan asychronouse yg bukan bagian dari V8
// contohnya : DOM, ajax(XMLHttpRequest), setTimeout, setInterval, dll

// Callback queue : untuk menyipan antrian dari callback yang berasal dai WEB API

// Evene Loop : untuk mengecek apakah di callback queue ada antrian, jika ada antrian ambil callbacknya dan masukan ke dalam "stack di V8"
// tapi syaratnya kapan sebuah callback masuka ke dalam sebuah "stack" yaitu ketika didalam "stack" sudah tidak ada perintah untuk diekseksi

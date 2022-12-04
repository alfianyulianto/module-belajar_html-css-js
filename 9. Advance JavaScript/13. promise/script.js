// JQUERY
// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=5325cbf7&s=avengers",
//     success: movies => console.log(movies),
// });


// Vanila JS
// const xhr  = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.status === 200) {
//         if(xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     }
//     else
//     {
//     console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=5325cbf7&s=avengers');
// xhr.send();


// Fetch : bentuk data yang dikembalikan berupa "promise"
// fetch('http://www.omdbapi.com/?apikey=5325cbf7&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));


// Promise
// Object yang meoresentasikan keberhasilan / kegaagaln sebuah event yang asynchronous di masa yang akan datang
// Promise digunakan ketika kita melakukan request ke API
// janji (terpenuhi / ingkar)
// "di js janji ini disebut states / keadaan"
// states (fulfilled / rejected / pending)
// "untuk menjalankan keadaan ini maka dibutuhkan sebuah function callback"
// callback (resolve / reject / finally)
// "didalam promise ini ada aksi ketika jajjinya terpenuhi atau tidak terpenuhi"
// aksi (then / catch)


// Contoh 1
const ditepati1 = false;
const janji1 = new Promise((resolve, reject) => {
    if(ditepati1) {
        resolve("Janji telah ditepati!");
    } else {
        reject("Ingkar janji..");
    }
});
// console.log(janji1);
// cara untuk memanggil method resolve dan reject
console.log('Awal');
janji1
    // response sebuah parameter namanya boleh bebas
    // response mengambil apapun hasil dari resolve atau pun catch
    .then(response => console.log('OK : ' + response)) 
    .catch(response => console.log('NOT OK : ' + response));
console.log('Akhir');

// Contoh 2
let ditepati2 = false;
const janji2 = new Promise((resolve, reject) => {
    if(ditepati2) {
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktui!')
        },2000)
    } else {
        setTimeout(() => {
            reject('Tidak ditepati setelah beberapa waktu!')
        }, 2000)
    }
});
console.log('awal')
console.log(janji2);        // melihat pending 
janji2
    // method finally : dijalankan ketika salah satu method then atau method catch siap untuk dijalankan
    // artinya disini setelah promise tidak pending maka "finally" dulu yang dijalankan baru method then atau method catch
    // method finally bisanya digunakan untuk menambah "animasi loading". Semisal saat "promise" berjalan animasi "loading"  dijalankan juga. Kemudian setelah finally matikan animasi loading
    .finally(() => console.log('Selesai mengunggu!'))
    // response seuah parameter namnya boleh bebas
    // response mengambil apapun hasil dari resolve atau pun catch
    .then(response => console.log('Ok : ' + response))
    .catch(response => console.log('NOT OK : ' + response));
console.log('akhir')


// Promise.all()
// const film = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             judul: 'Avengers',
//             sutradara: 'Alfian yulianto',
//             actor: 'Doddy, Erik'
//         }]);
//     }, 1000);
// });

// const cuaca = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             kota: 'Solo',
//             temperatur: 26,
//             kondisi: 'Cerah Berawan'
//         }]);
//     }, 500);
// });

// untuk menjalankan satu persatu
// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// menggunakan Promise.all()
Promise.all([film, cuaca])
    // response seuah parameter namnya boleh bebas
    // response mengambil apapun hasil dari resolve
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })



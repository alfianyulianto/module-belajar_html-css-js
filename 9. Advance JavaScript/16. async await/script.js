// const coba = new Promise(resolve => {
//     setTimeout(()=>{
//         resolve('Selesai!');
//     }, 2000);
// });
// // console.log(coba)        // promise akan pending
// coba.then(coba => console.log(coba));

// function cobaPromise() {
//     return new Promise(resolve => {
//       setTimeout(function () {
//           resolve('Berhasil!')
//         }, 2000)
//     });
// }
// const coba = cobaPromise();
// console.log(coba);    // promise akan pending, karena promise akan masuk ke dalam WebAPI terlebih dahulu sedangakan console.log lansung di eksekusi di dalam stack sehingga saat promise menunggu 2 detik dan masuk ke event loop, console.log() keburu di jalankan
// coba
//     .then(response => console.log('OK : ' + response));


// Async Await
// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('Selesai!');
//         }, 2000);
//     });
// }
// async function cobaAsync() {         // JS siap-siap bakal ada async yang dijalankan
//     const coba = await cobaPromise();        // JS tunggu dulu function cobaPromise "resolve" baru asignt ke var
//     console.log(coba);     // promise akan resolve
// }
// cobaAsync();


// Menagani error Handling pada Aysnc Await
// karena dengan menggunakan asyn dan await itu hanya bisa menangkap callback resolve tidak bisa menangkap callback reect maka kita gunakan block try dan catch
// try{} : untuk menjalankan resolve
// cathc{} : untuk menjalankan reject
function cobaPromise() {
    return new Promise((resolve, reject)=>{
        const waktu = 3000;
        if(waktu < 5000) {
            setTimeout(()=> {
                resolve('Selesai!');
            }, waktu);
        } else {
            reject('Kelamanan!');
        }
    });
}

async function cobaAsync() {
    // try untuk yg resolve
    // catch untuk yg reject
    try{
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err) {      // menerima parameter dari reject
        console.error(err);     // 
    }
}

cobaAsync();
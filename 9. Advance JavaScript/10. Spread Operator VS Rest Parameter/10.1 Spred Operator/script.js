// Spreed Operator - memecah iterables menjadi single element

const mhs = ['Alfian', 'Doddy', 'Erik'];
console.log(spreed);
// console.log(...mhs);        // Alfian Doddy Erik
// console.log(...mhs[0]);     // A l f i a n


// Kegunaan Spreed Operator?
// 1. Menggabungkan 2 atau lebih array
// const mhs = ['Alfian', 'Doddy', 'Erik'];
// const dosen = ['Sandhika', 'Galih', 'Yogiek'];
// const orang1 = [...mhs, ...dosen];
// const orang2 = [...mhs, 'aji', 'iqbal',...dosen];
// console.log(orang1);     // ['Alfian', 'Doddy', 'Erik', 'Sandhika', 'Galih', 'Yogiek']
// console.log(orang2);        // ['Alfian', 'Doddy', 'Erik', 'aji', 'iqbal', 'Sandhika', 'Galih', 'Yogiek']

// 2. Mengcopy value dari array
// const mhs = ['Alfian', 'Doddy', 'Erik'];
// tanpa sepred operator
// const mhs1 = mhs;       // ini akan dianggap membuat referensi dan menunjuk variable utama
// mhs1[0] = 'Fajar';
// console.log(mhs1);      // ['Fajar', 'Doddy', 'Erik']
// console.log(mhs)        //  ['Fajar', 'Doddy', 'Erik']

// dengan spreed operator
// const mhs = ['Alfian', 'Doddy', 'Erik'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs1);      // ['Fajar', 'Doddy', 'Erik']
// console.log(mhs)        // ['Alfian', 'Doddy', 'Erik']




// ----------------------------------------------------
// contoh 1
// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);       // ['Alfian', 'Doddy', 'Erik']


// // Contoh 2
// const nama = document.querySelector('.nama');
// // rubah ke dalam array dan tambahkan tag span
// const huruf  = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// nama.innerHTML = huruf;
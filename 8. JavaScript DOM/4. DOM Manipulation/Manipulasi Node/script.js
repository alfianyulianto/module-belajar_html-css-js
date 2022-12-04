// // DOM Manipulatio
// // Cara menambah element baru pada index.html dengan DOM Manipulation
// // Bikin dulu elementnya, Bikin tulisan yang ada di dalam element, Gabungkan element dengan tulisannnya, Simpan element beserta tulisannya kedalam baris HTML



// // appendChild()
// // // buat element baru
// const pBaru = document.createElement('p');
// const teksPBaru = document.createTextNode('Paragraf Baru');

// // // simpan tulisan ke dalam paragraf
// pBaru.appendChild(teksPBaru);

// // // simpan pBaru di akhir section A
// const sectionA = document.querySelector('section#a');
// sectionA.appendChild(pBaru);



// // insertBefore()
// // Untuk menyisipkan element baru dengan menggunakan insertBefore() kita harus mengetahui dulu 'element parentnya' dan 'element setelahnya'
// // Dengan menngunakan methode insertBefore() membutuhkan 2 parameter. Parameter pertama yaitu 'element baru', elemet keduanya yaitu 'element setelahnya'
// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item Baru');
// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2);



// // removeChild()
// // Cara menggunakan removeChild(): Ketahui parentnya kemudian element yang ingin di tangkap
// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);



// // replaceChild()
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru');

// h2Baru.appendChild(teksH2Baru);

// sectionB.replaceChild(h2Baru, p4);



// // Menandai yang baru
// pBaru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';



// // LATIHAN

// const sectionA = document.querySelector('section#a');
// const sectionB = document.getElementById('b');

// const ulNew = document.createElement('ul');
// const liNew = document.createElement('li');
// const aNew = document.createElement('a');
// const teksANew = document.createTextNode('Link 1');

// aNew.append(teksANew);
// liNew.append(aNew);
// ulNew.append(liNew);

// sectionB.append(ulNew);
// aNew.setAttribute('href', 'http://instagram.com');

// // -------------------------

// const pNew = document.createElement('p');
// const textPNew = document.createTextNode('Ini Paragraf yang di Buat dengan Prepend');

// pNew.append(textPNew);
// sectionB.prepend(pNew);


// // ------------------------
// const p4 = sectionB.querySelector('p:nth-child(2)');
// p4.remove();


// // ------------------------
// const p3SectionA = sectionA.querySelector('.p3');
// p3SectionA.before(pNew);

// // ------------------------
// const h1New = document.createElement('h1');
// const h1TextNew = document.createTextNode('Helo')
// h1New.append(h1TextNew);
// const aSectionA = sectionA.querySelector('[href]')
// aSectionA.after(h1New);





















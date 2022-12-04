// 1. /abc/
// const text = "Hai, apakah Anda tahu abc Anda?";
// console.log(text.match(/abc/)); // ['abc', index: 22, input: 'Hai, apakah Anda tahu abc Anda?',groups: undefined]
// const resultRegexText  = text.match(/abc/);
// console.log(resultRegexText.index); // 22

// 2. /ab*c/
// const text1 = "cbbabbbbcdebc";
// console.log(text1.match(/ab*c/)); [ 'abbbbc', index: 3, input: 'cbbabbbbcdebc', groups: undefined ]

// 3. /ab

// 4. [A-Z] or [a-z] or [0-9] or [di] or [L];
// const text3 = "Alfian Lahir di Surakarta tanggal 1-Juni-2000";
// console.log(text3.match(/[A-Z]/)); // [ 'A', index: 0, input: 'Alfian Lahir di Surakarta tanggal 1-Juni-2000', groups: undefined ]
// console.log(text3.match(/[a-z]/)); // ['l', index: 1, input: 'Alfian Lahir di Surakarta tanggal 1-Juni-2000', groups: undefined]
// console.log(text3.match(/[0-9]/)); // ['1', index: 34, input: 'Alfian Lahir di Surakarta tanggal 1-Juni-2000', groups: undefined]
// console.log(text3.match(/[di]/)); // ['i', index: 3, input: 'Alfian Lahir di Surakarta tanggal 1-Juni-2000', groups: undefined]
// console.log(text3.match(/[L]/)); //// ['L', index: 7, input: 'Alfian Lahir di Surakarta tanggal 1-Juni-2000', groups: undefined]

// 5. [^xyz]
// const text4 = "Alfian Yulianto";
// console.log(text4.match(/[^xyz]/)); // [ 'A', index: 0, input: 'Alfian Yulianto', groups: undefined ]
// const text5 = "11-07-2000"
// console.log(text5.match(/[^1-7]/)); // [ '-', index: 2, input: '11-07-2000', groups: undefined ]

// 6. /.f/ or /. n/ or /. A/
// const text6 = "Alfian";
// console.log(text6.match(/.f/)); // [ 'lf', index: 1, input: 'Alfian', groups: undefined ]
// console.log(text6.match(/.n/)); // [ 'an', index: 4, input: 'Alfian', groups: undefined ]
// console.log(text6.match(/.A/)); // null, karena karakter awal di string nya tidak ada
// console.log(text6.match(/.fa/)); // null

// 7. \d
// const text7 = "B2 adalah nomor suite ke 9";
// console.log(text7.match(/\d/)); //[ '2', index: 1, input: 'B2 adalah nomor suite ke 9', groups: undefined ]
// console.log(text7.match(/[0-9]/)); //[ '2', index: 1, input: 'B2 adalah nomor suite ke 9', groups: undefined ]

// 8. \D
// const text8 = "B2 adalah nomor suite ke 9";
// console.log(text8.match(/\D/)); //['B',index: 0,input: 'B2 adalah nomor suite ke 9',groups: undefined]
// console.log(text8.match(/[^0-9]/)); //['B',index: 0,input: 'B2 adalah nomor suite ke 9',groups: undefined]

// 9. \w
// const text9 = "Apel";
// console.log(text9.match(/\w/)); // [ 'A', index: 0, input: 'Apel ini berharga $1.45', groups: undefined ]
// const text10 = "$1.5"
// console.log(text10.match(/\w/)); // [ '1', index: 1, input: '$1.5', groups: undefined ]

// 10. \W
// const text11 = "50%";
// console.log(text11.match(/\W/)); // [ '%', index: 2, input: '50%', groups: undefined ]
// const text12 = "$3.8";
// console.log(text12.match(/\W/)); // [ '$', index: 0, input: '$3.8', groups: undefined ]
// const text13 = "Émanuel";
// console.log(text13.match(/\W/)); // [ 'É', index: 0, input: 'Émanuel', groups: undefined ]

// 11. \s
// const text14 = "foo bar";
// console.log(text14.match(/\s/)); // [ ' ', index: 3, input: 'foo bar', groups: undefined ]
// console.log(text14.match(/\s\w*/)); // [ ' bar', index: 3, input: 'foo bar', groups: undefined ]
// const text15 = "Book $5.5";
// console.log(text15.match(/\s*\W/)); // [ ' $', index: 4, input: 'Book $&5.5', groups: undefined ]

// 12. \S
// const text16 = "foo bar";
// console.log(text16.match(/\S/)); // [ 'f', index: 0, input: 'foo bar', groups: undefined ]
// console.log(text16.match(/\S*/)); // [ 'foo', index: 0, input: 'foo bar', groups: undefined ]
// console.log(text16.match(/\S\w*/)); // [ 'foo', index: 0, input: 'foo bar', groups: undefined ]

// 13. \t
// const text17 = "	ini sudah aku tab ke 1 kali"
// console.log(text17.match(/\t/)); // [ '\t', index: 0, input: '\tini sudah aku tab', groups: undefined ]
// console.log(text17.match(/\t\w/)); // [ '\ti', index: 0, input: '\tini sudah aku tab', groups: undefined ]

// 14. \b
// const text18 = "moon";
// console.log(text18.match(/\bm/));  // [ 'm', index: 0, input: 'moon', groups: undefined ]
// console.log(text18.match(/oo\b/)); // null, karena "oo" dalam kata "moon" diikuti dengan karakter "n"
// console.log(text18.match(/oon\b/)); // [ 'oon', index: 1, input: 'moon', groups: undefined ]

// 15. \0
const text19 = 1;
console.log(text19.match(/\0/));







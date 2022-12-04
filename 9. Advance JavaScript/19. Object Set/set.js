// const numberSet = new Set([1, 5, 2, 4, 9, 1, 5, 5, 2, 2]); // angka duplikasi 1 5 dan 2
// console.log(numberSet); // { 1, 5, 2, 4, 9 }

// Add
// numberSet.add(8);
// console.log(numberSet); // { 1, 5, 2, 4, 9, 8 }

// Delete
// numberSet.delete(9);
// console.log(numberSet); // { 1, 5, 2, 4, 8 }


// Has
// console.log(numberSet.has(9)); // true
// console.log(numberSet.has(7)); // flase


// Clear
// const set1 = new Set();
// set1.add(1);
// set1.add('foo');
// console.log(set1.size); // expected output: 2
// set1.clear();
// console.log(set1.size); // expected output: 0

// Entries
// const set1 = new Set();
// set1.add(42);
// set1.add('forty two');
// const iterator1 = set1.entries();
// for (const entry of iterator1) {
//   console.log(entry);
//   // expected output: [42, 42]
//   // expected output: ["forty two", "forty two"]
// }

// forEach
// new Set(['foo', 'bar', undefined]).forEach((value1, value2)=>{
// 	console.log(`m[${value1}] = ${value2}`);
// 	// m[foo] = foo
// 	// m[bar] = bar
// 	// m[undefined] = undefined
// });

// Values
const set1 = new Set();
set1.add(42);
set1.add('forty two');
const iterator1 = set1.values();
console.log(iterator1.next().value); // expected output: 42
console.log(iterator1.next().value); // expected output: "forty two"
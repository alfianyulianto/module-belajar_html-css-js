// const myMap = new Map([
// 	['1', 'a string key'],
// 	[1, 'a number key'],
// 	[true, true]
// ]);

// Get dan Set
// console.log(myMap); // { '1' => 'a string key', 1 => 'a number key', true => true }
// console.log(myMap.size); // 3
// console.log(myMap.get(1)); // 'a number key'
// console.log(myMap.set('jakarta', 'Indonesia'));
// console.log(myMap); //  {'1' => 'a string key',1 => 'a number key',true => true,'jakarta' => 'Indonesia'}

// Has dan Delete
// console.log(myMap.has(1)); // true
// console.log(myMap.delete('1')); // true
// console.log(myMap); //  { 1 => 'a number key', true => true, 'jakarta' => 'Indonesia' }

// Entries
// const map1 = new Map();
// map1.set('0', 'foo');
// map1.set(1, 'bar');
// const iterator1 = map1.entries();
// console.log(iterator1.next().value); // expected output: ["0", "foo"]
// console.log(iterator1.next().value); // expected output: [1, "bar"]
// console.log(iterator1.next().value); // undefend

// forEach
// new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
//   .forEach((value, key)=>{
//   	console.log(`m[${key}] = ${value}`);
//   }); 
// // m[foo] = 3
// // m[bar] = [object Object]
// // m[baz] = undefined

// Keys
// const map1 = new Map();
// map1.set('0', 'foo');
// map1.set(1, 'bar');
// const iterator1 = map1.keys();
// console.log(iterator1.next().value); // expected output: "0"
// console.log(iterator1.next().value); // expected output: 1


// Values
const map1 = new Map();
map1.set('0', 'foo');
map1.set(1, 'bar');
const iterator1 = map1.values();
console.log(iterator1.next().value); // expected output: "foo"
console.log(iterator1.next().value); // expected output: "bar"
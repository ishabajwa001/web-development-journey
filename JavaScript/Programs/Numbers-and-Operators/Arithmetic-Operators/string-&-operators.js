// JavaScript program to demonstrate the behavior of arithmetic operators with strings and other data types

// Addition operator with string and number
let result1 = 10 + '20';
console.log(`10 + '20' = ${result1} : type : ${typeof(result1)}\n`);

let result2 = '20' + 10;
console.log(`'20' + 10 = ${result2} : type : ${typeof(result2)}\n`);

// Subtraction operator with string and number
let result3 = 10-'20';
console.log(`10 - '20' = ${result3} : type : ${typeof(result3)}\n`);

// Multiplication operator with string and number
let result4 = '20' * 10;
console.log(`'20' * 10 = ${result4} : type : ${typeof(result4)}\n`);

// Division operator with string and number
let result5 = '20' / 10;
console.log(`'20' / 10 = ${result5} : type : ${typeof(result5)}\n`);

// Modulus operator with string and number
let result6 = '20' % 10;
console.log(`'20' % 10 = ${result6} : type : ${typeof(result6)}\n`);

// Demonstrating behavior of arithmetic operators with strings and other data types
let result7 = 'abc' + 10;
console.log(`'abc' + 10 = ${result7} : type : ${typeof(result7)}\n`);

let result8 = 'abc' - 10;
console.log(`'abc' - 10 = ${result8} : type : ${typeof(result8)}\n`);

let result9 = 'abc' * 10;
console.log(`'abc' * 10 = ${result9} : type : ${typeof(result9)}\n`);

let result10 = 'abc' / 10;
console.log(`'abc' / 10 = ${result10} : type : ${typeof(result10)}\n`);

// Demonstrating behavior of arithmetic operators with boolean values
let result11 =  true+1;
console.log(`true + 1 = ${result11} : type : ${typeof(result11)}\n`);

let result12 =  false+1;
console.log(`false + 1 = ${result12} : type : ${typeof(result12)}\n`);

let result13 = 'abc' + true;
console.log(`'abc' + true = ${result13} : type : ${typeof(result13)}\n`);

let result14 = 'abc' + false;
console.log(`'abc' + false = ${result14} : type : ${typeof(result14)}\n`);

// Demonstrating behavior of arithmetic operators with null and undefined
let result15 = null + 1;
console.log(`null + 1 = ${result15} : type : ${typeof(result15)}\n`);

let result16 = undefined + 1;
console.log(`undefined + 1 = ${result16} : type : ${typeof(result16)}\n`);



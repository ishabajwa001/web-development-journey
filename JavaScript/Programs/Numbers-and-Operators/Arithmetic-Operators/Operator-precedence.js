//Operators with left to right associativity
const result1 = 10 + 20 * 2;
console.log(`10 + 20 * 2 = ${result1}`);

const result2 = (10 + 20) * 2;
console.log(`(10 + 20) * 2 = ${result2}`);

const result3 = 10 + 20 / 2;
console.log(`10 + 20 / 2 : ${result3}`);

const result4 = (10 + 20) / 2;
console.log(`(10 + 20) / 2 : ${result4}`);

//Operators with right to left associativity
let a = b = 10;
console.log(`a = b = 10 : a = ${a} , b = ${b}`);

const result5 = 20 * 2 ** 2;
console.log(`20 * 2 ** 2 = ${result5}`);

const result6 = 20 * (2 ** 2);
console.log(`20 * (2 ** 2) = ${result6}`);

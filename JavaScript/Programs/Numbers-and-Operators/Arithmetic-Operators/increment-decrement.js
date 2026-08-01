// Increment and Decrement Operators

// Increment operator (++)
let a = 10;
console.log(`a = ${a}`);
console.log(`a++ = ${a++}`); // Post-increment: returns the value before incrementing
console.log(`After a++ , a = ${a}`); // Now a is incremented

let b = 5;
console.log(`b = ${b}`);
console.log(`++b = ${++b}`); // Pre-increment: increments the value first and then returns it
console.log(`After ++b , b = ${b}`); // Now b is incremented

// Decrement operator (--)
let c = 20;
console.log(`c = ${c}`);
console.log(`c-- = ${c--}`); // Post-decrement: returns the value before decrementing
console.log(`After c-- , c = ${c}`); // Now c is decremented

let d = 15;
console.log(`d = ${d}`);
console.log(`--d = ${--d}`); // Pre-decrement: decrements the value first and then returns it
console.log(`After --d , d = ${d}`); // Now d is decremented

// Demonstrating the difference between pre-increment and post-increment
let e = 30;
let f = e++;
console.log(`e = ${e}`);
console.log(`f = ${f}`);

let g = 25;
let h = ++g;
console.log(`g = ${g}`);
console.log(`h = ${h}`);
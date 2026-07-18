//variable declaration
let num = 0;
let num2 = 45;
let num3 = 190;
let num4 = 5000;
let num5 = 10000;

let displaycard = `
${num} : ${String.fromCharCode(num)}
${num2} : ${String.fromCharCode(num2)}
${num3} : ${String.fromCharCode(num3)}
${num4} : ${String.fromCharCode(num4)}
${num5} : ${String.fromCharCode(num5)}`;

console.log("\t\tUTF-16 code units and their characters");
console.log(displaycard);

let num6 = 32;
let num7 = 65;
let num8 = 86;
let num9 = 112;
let num10 = 76;
let str = String.fromCharCode(num6, num7, num8, num9, num10);
console.log(`string [${num6}, ${num7}, ${num8}, ${num9}, ${num10}] : ${str}`);

let num11 = 10000000000
console.log(`${num11} : ${String.fromCharCode(num11)}`);

//Number too large 
let num12 = 10000000000000000;
console.log(`${num12} : ${String.fromCharCode(num12)}`);

// Calling fromCharCode() without any arguments returns an empty string
console.log(String.fromCharCode());
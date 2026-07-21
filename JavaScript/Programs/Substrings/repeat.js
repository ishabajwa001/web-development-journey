let symbol = "=";
let count = 100;
console.log(symbol.repeat(count));

console.log("\t".repeat(5)+"Player Profile");

console.log(symbol.repeat(count));


let playerName = "Shadow Hunter";
let level = 5;
let health = 3;
let ranking = "Elite";
let status = "Online";

let displaycard = `
Player Username : ${playerName}
Level : ${"⭐".repeat(level)}
Health : ${"💙".repeat(health)}
Ranking : ${ranking}
Status : ${status}
`;
console.log(displaycard);

console.log(symbol.repeat(count)+"\n");

// --------------------------------------------------------------------------------------

// repeat() is a string method. It repeats the string the specified number of times.
// console.log(level.repeat(5));


// If the count is a numeric string, repeat() converts it to a number.
// But "10" + 1 becomes "101" due to string concatenation.
let symbol1 = "*";
let count1 = "10";
console.log(symbol1.repeat(count1));
console.log(symbol1.repeat(count1+1)); //take it as 101

console.log(symbol1.repeat()); //print empty line take it as repeat(0)

let symbol3 = "#";
console.log(symbol3.repeat(null)); //print empty line
console.log(symbol3.repeat(true));
console.log(symbol3.repeat(false)); //empty line

// Decimals are truncated to an integer, so this repeats 5 times.
console.log(symbol3.repeat(5.9));

// NaN is treated as 0, so an empty string is returned.
console.log(symbol3.repeat(NaN));

//RangeError: Invalid count value: Infinity
//console.log(symbol3.repeat(Infinity));

// RangeError: Invalid count value: -5
// console.log(symbol3.repeat(-5));


//Error
//console.log(repeat(100));


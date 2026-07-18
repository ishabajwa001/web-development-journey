//Variable to hold characters
let capLetter = "A";
let smallLetter = "a";
let symbol = "@";
let number = "1";
let space = " ";
let newLine = "\n";

console.log("\t\tCharacters and their UTF-16 code units");

// Display characters and their UTF-16 code units
let displaycard = `
${capLetter} : ${capLetter.charCodeAt(0)}
${smallLetter} : ${smallLetter.charCodeAt(0)}
${symbol} : ${symbol.charCodeAt(0)}
${number} : ${number.charCodeAt(0)}
${space} space : ${space.charCodeAt(0)}
${newLine} newline : ${newLine.charCodeAt(0)}`;

console.log(displaycard);

//This way is also possible to display the UTF-16 code units of characters
console.log("B : "+ "B".charCodeAt(0)+"\n");

// charCodeAt() also works with strings
//here argument in `charCodeAt()` is the index of the character in the string
let str = "Hello";
console.log(`string : ${str}`);
console.log(`${str[0]} : ${str.charCodeAt(0)}`);
console.log(`${str[1]} : ${str.charCodeAt(1)}`);
console.log(`${str[2]} : ${str.charCodeAt(2)}`);
console.log(`${str[3]} : ${str.charCodeAt(3)}`);
console.log(`${str[4]} : ${str.charCodeAt(4)}\n`);

//try to give an index that is out of range
let str2 = "Hello World";
console.log(`string : ${str2.charCodeAt(20)}`);

//try not to give any argument to charCodeAt() method
console.log(`C : ${"C".charCodeAt()}`);

//This will throw an error because charCodeAt() is not defined in the global scope
//console.log(charCodeAt());

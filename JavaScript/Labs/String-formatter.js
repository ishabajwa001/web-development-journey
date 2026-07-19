//from freecodecamp Workshop 04
const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

const lowercaseWord = "camelcase";

// The line below changes step by step as the workshop progresses. 
// const camelCasedVersion ="";  //step 13
//const camelCasedVersion = lowercaseWord.slice(0, 5)  //step 14
//const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase()  //step 15
const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase()+lowercaseWord.slice(-3); //step 16
console.log("Camel cased version:");
console.log(camelCasedVersion);
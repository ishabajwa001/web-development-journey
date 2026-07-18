console.log();
// store the result in variable
let sentence = "JavaScript is a powerful language.";
let containsJavaScript = sentence.includes("JavaScript");
console.log(`Sentence : ${sentence}`);
console.log(`Contains JavaScript : ${containsJavaScript}`);

let sentence1 = "The Ocean is full of amazing marine life";
let oceanResult = `
Sentence : ${sentence1}
Contains Ocean : ${sentence1.includes("Ocean")}
Contains ocean : ${sentence1.includes("ocean")}`;
console.log(oceanResult);

// includes() can also take a starting index as the second argument
let sentence2 = "Cybersecurity protects digital systems from attacks.";
let cyberResult =`
Sentence : ${sentence2}
Contains digital at index 23 : ${sentence2.includes("digital",23)}
Contains digital at index 24 : ${sentence2.includes("digital",24)}`;
console.log(cyberResult);

//No argument
console.log(sentence2.includes());

// Calling includes() without a string object causes a ReferenceError
//console.log(includes("hello"));
//console.log(includes());


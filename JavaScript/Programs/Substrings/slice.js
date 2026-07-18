let str1 = "Hello World!";
let str2 = "My friend is a good person";
let str3 = "How are you?";
let str4 = "Hopefully, fine and fresh";
let str5 = "They say : Learning is fun!"


console.log(str1.slice(0,5));
console.log(str2.slice(0,9));
console.log(str3.slice(0));
console.log(str4.slice());

// Negative indexes count from the end of the string.
// -1 represents the last character.
console.log(str5.slice(-16));

// slice() starts at index -16 and stops before index 16.
// The ending index is not included.
console.log(str5.slice(-16,16));

// If the starting index is greater than the ending index,
// slice() returns an empty string.
console.log(str5.slice(-16,4));

// Calling slice() as a standalone function causes a ReferenceError.
//console.log(slice(3,8));


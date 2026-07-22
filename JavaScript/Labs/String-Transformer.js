//From freeCodeCamp workshop 5
const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);


//below line was in step 6 as 
// const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs"); 

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");  //step 7
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

//below line in step 9 
// const repeatedLove = "love ".repeat(3);

const repeatedLove = "love ".repeat(3).trim(); //step 11
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);
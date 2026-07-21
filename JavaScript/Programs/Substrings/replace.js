//Change name
let message = "Hello, Mathew";
console.log( `
Original Message : ${message}
Updated Message : ${message.replace("Mathew","John")
}`);

//typo correct
let sentence = 'I love Javsript';
console.log(`
Original Sentence : ${sentence}
Updated Sentence : ${sentence.replace("Javsript","JavaScript")}`);

//url formatting
let url = "https://example.com/users/john123";
console.log(`
Original URL : ${url}
Updated URL : ${url.replace("john123","jonny010")}`);

//First occurence change
let date = "21-07-2026";
console.log(`
Original Date : ${date}
Updated Date : ${date.replace("-","/")}`);

//Case Sensitivity
let language = "JavaScript is fun";
console.log(`
Original Language : ${language}
Updated Language : ${language.replace("Javascript","Python")}`); 

//Multiple Occurences 
let animals = "cat cat cat";
console.log(`
Original Animals : ${animals}
Updated Animals : ${animals.replace("cat","dog")}`);

//Character change
let username = "bill gates";
console.log(`
Original Username : ${username}
Updated Username : ${username.replace(" ","_")}`);

//Password Encryption
let password = "xyz123";
console.log(`
Original Password : ${password}
Updated Password : ${password.replace(password,("******"))}`);

//Shopping list
let shoppingList = "Milk , Juice , Bread";
console.log(`
Original List : ${shoppingList}
Updated List : ${shoppingList.replace("Juice","Eggs")}`);

//Create a full profile and update it 
let profile = "Name : Mathew  | Age : 20 | City : London";
let updatedProfile1 = profile.replace("Mathew","Mathew Perry");
let updatedProfile2 = updatedProfile1.replace("20","24");
let updatedProfile3 = updatedProfile2.replace("London","Tokyo");
console.log(`
Original Profile : ${profile}
Updated Profile 1 : ${updatedProfile1}
Updated Profile 2 : ${updatedProfile2}
Updated Profile 3 : ${updatedProfile3}
`);

//Without Variable
console.log("hello".replace("","@"));

//Error and unexpected
let phrase = "I love Coding"
console.log(`
Original Phrase : ${phrase}  
Updated Phrase : ${phrase.replace("Coding")}
Updated Phrase : ${phrase.replace()}
`);

//console.log(replace("love","hate"));



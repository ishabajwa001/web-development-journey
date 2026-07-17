let fullname = "Elon Musk";
console.log("Fullname : "+fullname);
//To find the position of a substring in a string
let position = fullname.indexOf("Musk");
console.log("Position of 'Musk' in fullname is : "+position);

position = fullname.indexOf("Elon");
console.log("Position of 'Elon' in fullname is : "+position);

//indexOf() is case sensitive, so it will return -1 if the string is not found
//-1 means the substirng is not found in the string
position = fullname.indexOf("musk");
console.log("Position of 'musk' in fullname is : "+position);

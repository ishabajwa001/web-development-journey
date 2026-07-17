//Variable Declaration
let title ="MOVIE CARD";
let name = "Inception";
let director = "Christopher Nolan";
let releaseYear = 2010;
let rating = 8.5;
let highestRating = 10;

//Movie Card using template literals
let movieCard = `
Name : ${name}
Director : ${director}
Release Year : ${releaseYear}
Rating : ${rating}/${highestRating}`;

//String Interpolation using template literals
//Display title and movie card using template literals
//Also use the expression to calculate the rating percentage
console.log(`
    \t\t\t\t"${title}"
    ${movieCard}
Rating Percentage : ${(rating / highestRating) * 100} %`);
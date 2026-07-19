// Use on simle spaces 
let username = "   zyn090   ";
let trimmedUsername = username.trim();
let startTrimmedUsername = username.trimStart();
let endTrimmedUsername = username.trimEnd();

console.log(`
Original Username = ${username}
Trimmed Username = ${trimmedUsername}
Trim Start Username = ${startTrimmedUsername}
Trim End Username = ${endTrimmedUsername}
`);

// Use on whitespace created by escape sequencess 
let title = "\t\t\t JavaScript \n";
let trimmedTitle = title.trim();
let trimmedStartTitle = title.trimStart();
let trimmedEndTitle = title.trimEnd();

console.log(`
Original title = ${title}
Trimmed Title = ${trimmedTitle}
Trim Start Title = ${trimmedStartTitle}
Trim End Title = ${trimmedEndTitle}`);

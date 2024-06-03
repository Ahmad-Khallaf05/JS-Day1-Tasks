let originalString = "Welcome to Orange";
// --------------------------------------------------
let uppercasedString = originalString.toUpperCase();
console.log(uppercasedString);  
// --------------------------------------------------
let wordTo = originalString.substring(8, 10).toUpperCase();
console.log(wordTo);  
// --------------------------------------------------
let replacedString = originalString.replace("Welcome to", "Hello from");
console.log(replacedString);  
// --------------------------------------------------
let lowercasedString = originalString.toLowerCase();
console.log(lowercasedString);  
// --------------------------------------------------
let lengthOfString = originalString.length;
console.log(lengthOfString);  
// --------------------------------------------------
let quotedString = 'Welcome to “' + originalString.split(' ')[2] + '”';
console.log(quotedString);  
// --------------------------------------------------
let appendedString = originalString + " Jordan";
console.log(appendedString);  

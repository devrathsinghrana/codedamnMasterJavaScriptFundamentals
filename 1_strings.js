let firstName = "Devrath";
let lastName = "Rana";
let sentence = "My name is lan.";

console.log(firstName.startsWith("R")); //false
console.log(firstName.startsWith("D")); //true
console.log(firstName.startsWith("d")); //false
console.log(firstName.startsWith("dev")); //false
console.log(firstName.startsWith("Dev")); //true

console.log(lastName.endsWith("a")); //true
console.log(lastName.endsWith("A")); //false
console.log(lastName.endsWith("na")); //true

console.log(sentence.includes("name")); //true
console.log(sentence.includes("nam")); //true
console.log(sentence.includes("n")); //true
console.log(sentence.includes("y n")); //true
console.log(sentence.includes("y N")); //false

console.log(firstName.toUpperCase()); //DEVRATH
console.log(firstName.toLowerCase()); //devrath

console.log(firstName.indexOf("h")); //6
console.log(lastName.lastIndexOf("a")); //3

console.log(lastName.replace("a", "-")); //R-na
console.log(lastName.replaceAll("a", "-")); //R-n-

console.log(sentence.substring(1, 4)); //y n
console.log(sentence.slice(1, 4)); //y n

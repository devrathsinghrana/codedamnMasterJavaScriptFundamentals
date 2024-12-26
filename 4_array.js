let products = ["bread", "butter", "jam"];
let update = ["pizza", "water"];

console.log(products.join(", ")); //bread, butter, jam
console.log(products); //['bread', 'butter', 'jam']

console.log(products.indexOf("jam")); //2
console.log(products); //['bread', 'butter', 'jam']

console.log(products.concat(update)); //['bread', 'butter', 'jam', 'pizza', 'water']
console.log(products); //['bread', 'butter', 'jam']

console.log(products.push("update")); //4
console.log(products); //['bread', 'butter', 'jam', 'update']

console.log(products.pop("jam")); //update //this will pop update(last member of array) no matter what is passed as parameter
console.log(products); //['bread', 'butter', 'jam']

console.log(products.pop()); //jam
console.log(products); //['bread', 'butter']

// array limitations and object literals
const users = ["subham", "ram"];

console.log(users[1]);

//object properties can have any type of value but arrays consist of same type of data. object properties order doesn't matter but in array order matters. Object dot and key notation.

const user = {
  name: "subham",
  age: 23,
};
console.log(user.age);

const key = "name";
console.log(user[key]);//to access dynamic properties

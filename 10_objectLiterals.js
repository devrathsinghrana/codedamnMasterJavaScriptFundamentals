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
console.log(user[key]); //to access dynamic properties

// this keyword and methods inside object and array of object blogs inside object

const newUser = {
  myName: "Devrath",
  age: 23,
  isLoggedIn: false,
  logInUser: function () {
    this.isLoggedIn = true;
  },
  logOutUser: function () {
    this.isLoggedIn = false;
  },
};

console.log("newUser.isLoggedIn>>>", newUser.isLoggedIn);
newUser.logInUser();
console.log("newUser.isLoggedIn>>>", newUser.isLoggedIn);
newUser.logOutUser();
console.log("newUser.isLoggedIn>>>", newUser.isLoggedIn);

// Math object

const num = 15.3;

console.log("Math>>>", Math);

console.log("Math.E>>>", Math.E);
console.log("Math.PI>>>", Math.PI);

console.log("Math.sign(num)>>>", Math.sign(num));
console.log("Math.round(num)>>>", Math.round(num));
console.log("Math.floor(num)>>>", Math.floor(num));
console.log("Math.ceil(num)>>>", Math.ceil(num));
console.log("Math.pow(num,2)>>>", Math.pow(num, 2));
console.log("Math.sqrt(num)>>>", Math.sqrt(num));

// Primitive type vs reference type

let myNum1 = 23;
let myNum2 = myNum1;
myNum2 = 2;

console.log("myNum1>>>", myNum1);
console.log("myNum2>>>", myNum2);

const myObj = {
  age: 23,
};

const neMyObj = myObj;

neMyObj.age = 13;

console.log("neMyObj>>>", neMyObj);
console.log("myObj>>>", myObj);

const newMyObj = { age: 34 };
const newMyObj3 = { ...newMyObj };

newMyObj3.age = 90;

console.log("newMyObj>>>", newMyObj);
console.log("newMyObj3>>>", newMyObj3);

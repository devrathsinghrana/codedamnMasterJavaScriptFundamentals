//defining or declaring function and invoking it

// function definition
function basicFunction() {
  console.log("basicFunction");
}

// invoking function
basicFunction();

//variable function

const varFun = function () {
  console.log("varFun>>>");
};
varFun();

//arguments(value being passed) and parameters(value being captured)
const addition = (param1, param2) => param1 + param2;

const arg1 = 23;
const arg2 = 25;

const sumResult = addition(arg1, arg2);

console.log("sumResult>>>", sumResult);

//default values of parameters

const defaultParamsFn = (para1 = 0, para2 = 0) => para1 + para2;

const addResult = defaultParamsFn(arg1);

console.log("addResult>>>", addResult);

//default value of return key is undefined

const returnDefaultValueFn = () => {};

console.log(returnDefaultValueFn());

//arrow functions

const capitaliseWord = (word) =>
  `${word.charAt(0).toUpperCase()}${word.substring(1)}`;

console.log(capitaliseWord("hello")); // Output: 'Hello'
console.log(capitaliseWord("mom")); // Output: 'Mom'
console.log(capitaliseWord("dAD")); // Output: 'DAD'

// Function vs methods
// any function attached to an instance or object is method and rest is function

const arrayForMethod = [1, 2, 3];
console.log("arrayForMethod.push(4)", arrayForMethod.push(4)); //Appends new elements to the end of an array, and returns the new length of the array. push is a method

// callback function is passing function as an argument or returning it or invoking it inside another function is callback function.
// make addition multiplication callbacks

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const callbackFn = function (num1, num2, addition, multiplication) {
  console.log(
    `Add: ${addition(num1, num2)} and Multiplication: ${multiplication(
      num1,
      num2
    )}`
  );
};

callbackFn(1, 3, add, multiply);

//forEach
const students = ["sus1", "sus2", "sus3"];
students.forEach((student) => console.log(student));

//reverse sentence

const reverseSentence = (sentence) => {
  // Write your code here
  const wordArray = sentence.split(" ");
  wordArray.reverse();
  return wordArray.join(" ");
};

console.log("reverseSentence", reverseSentence("My name is Ram!"));

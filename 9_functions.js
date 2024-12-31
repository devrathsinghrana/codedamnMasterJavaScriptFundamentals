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

// have mathematical operations with null gives expected result but with undefined we get NaN

const a = null;
let b;
const c = 3;

console.log(a + c);//3
console.log(a - c);//-3
console.log(a / c);//0
console.log(c / a);//Infinity
console.log(a * c);//0
console.log(c % a);//NaN
console.log(b + c);//NaN

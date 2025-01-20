const now = new Date(); //We need Date constructor as we can pass some value as parameter to get different dates instead of only current one

console.log(now);
console.log(typeof now);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

const old = new Date("22 Feb, 2024 01:10:23");

const oldTimeStampInMillisecond = old.getTime(); //Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

const newTimeStampInMillisecond = now.getTime();

const millisecondDifference =
  newTimeStampInMillisecond - oldTimeStampInMillisecond;

const monthsDifference = Math.round(
  millisecondDifference / 1000 / 60 / 60 / 24 / 30
);

console.log(`Blog is ${monthsDifference} months old!`);

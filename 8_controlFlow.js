const arr = [1, 2, 3];
arr[6] = 23;

for (let val of arr) {
  console.log("val>>>", val);
}

for (let key in arr) {
  console.log("key>>>", key);
}

for (let i = 0; i < 3; i++) {
  console.log("i>>>", i);
}

let count = 0;
while (count < 3) {
  console.log("count>>>", count);
  count++;
}

let counting = 5;
do {
  console.log("counting>>>", counting);
  counting++;
} while (counting < 5);

const color = "red";
if (color == "red") {
  console.log("first red");
}

if (color == "red") {
  console.log("second red");
}

const myName = "Bhalla";

if (myName == "Bhalla") {
  console.log("first Bhalla");
} else if (myName == "Bhalla") {
  console.log("second Bhalla");
}

if (myName == "Kalla") {
  console.log("first red");
} else {
  console.log("Else consoled");
}

// Logical operators for strong password check logic
const password = "abc@gmail.pass";

if (password.length < 8 && password.includes("@")) {
  console.log("MODERATE PASSWORD");
} else if (password.length > 12) {
  console.log("STRONG PASSWORD");
} else {
  console.log("WEAK PASSWORD");
}

// break continue to make rating logic
const ratings = [1, 2, 3, 4, 5, 6];
for (let key in ratings) {
  const rating = ratings[key];
  if (rating === 1) {
    console.log("SKIP");
    continue;
  }

  if (rating === 6) {
    console.log("BREAK");
    break;
  }
  console.log(`Watched movie rated - ${rating}`);
}
console.log(`out of rating system`)
// switch to make rating logic

// global local scope using nested if

// ternary operator

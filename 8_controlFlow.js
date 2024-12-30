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
console.log(`out of rating system`);

// switch to make rating logic

const switchRating = 0;
switch (switchRating) {
  case 0:
    console.log("Raddi film.");
    break;
  case 1:
    console.log("Bss film.");
    break;

  case 2:
    console.log("Ek thi film.");
    break;
  case 3:
    console.log("Theek film.");
    break;
  case 4:
    console.log("Theek thaak film.");
    break;
  case 5:
    console.log("Wah kya mast film hai.");
    break;
  default:
    console.log("Ye kya dekhliya.");
}

// global local scope
const meriMaan = "tu chla ja";
if (meriMaan.length > 2) {
  let metri = 2;
  let tetri = 3;
  {
    let metri = 1;
    console.log("metri>>>", metri);
  }
  {
    tetri += tetri;
    console.log("tetri>>>", tetri);
  }
  console.log("metri>>>", metri);
  console.log("tetri>>>", tetri);
}

try {
  console.log("metri>>>", metri);
} catch (e) {
  console.log("e>>", e);
}

// ternary operator

const jaliKya = true;

jaliKya ? console.log("BHAG JAA YHA SE") : console.log("BHAI HAI TU MERA");

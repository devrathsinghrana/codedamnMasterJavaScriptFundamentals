//filter, map, reduce stores in new array and original array is not mutated
//in array of movies object with name and rating filter movies with rating>6

const movies = [
  {
    name: "Interstellar",
    rating: "9",
  },
  {
    name: "Madgaon Express",
    rating: "10",
  },
  {
    name: "Kantara",
    rating: "10",
  },
  {
    name: "loki",
    rating: "3",
  },
  {
    name: "Muli",
    rating: "1",
  },
];

const highestRatedMovies = movies.filter((movie) => movie.rating > 6);

console.log("movies>>>", movies);
console.log("highestRatedMovies>>>", highestRatedMovies);

//map array of products with price, tax and name and return object with price having tax added to it
const products = [
  {
    name: "jalebi",
    price: 23,
    tax: 5,
  },
  {
    name: "barfi",
    price: 40,
    tax: 6,
  },
  {
    name: "kachauri",
    price: 30,
    tax: 7,
  },
  {
    name: "laccha paratha",
    price: 35,
    tax: 4,
  },
  {
    name: "aloo paratha",
    price: 10,
    tax: 3,
  },
];

const taxedProducts = products.map((product) => {
  return {
    ...product,
    price: product.price + (product.tax / 100) * product.price,
  };
});

console.log("products>>>", products);
console.log("taxedProducts>>>", taxedProducts);

//reduce an array of list of products and find total of products in basket

const initialValue = 0;
const reducerFn = (a, b) => a + b;
const totalTaxedProductsPrice = taxedProducts.reduce(reducerFn, initialValue);

console.log("totalTaxedProductsPrice>>>", totalTaxedProductsPrice);

const sumOfEvens = (arr) => {
  // Write your code here
  if (!arr.length) return 0;

  let initialValue = 0;
  const evenNumbersSumReducer = (a, b) => (b % 2 === 0 ? a + b : a);

  return arr.reduce(evenNumbersSumReducer, initialValue);
};

console.log("sumOfEvens>>>", sumOfEvens([-5, 0, 5, -4, 1, 6, -3, 2, 7]));

//find return the first element that satisfies our condition
// find num>50 in array of numbers

//sort mutates original array - it is destructive array
//if number of characters is same for each member of array then it will work fine else there is a problem as it sorts only on the basis of first character
//we can sort an array by using custom comparision logic

/**
 * For ascending we have a-b-> a is first number and b is second number
 *
 *  result - order of numbers based on result is as follows
 * +ve - a,b
 * -ve - b,a
 * 0 - no change
 *
 * Similarly for descending we have b-a
 *
 * So now we will sort movies in ascending order of their rating
 */

// made two objects and sort them separately as sort mutates original array
const moviesKiLadiya = [
  {
    name: "inception",
    rating: 8,
  },
  {
    name: "madgaun express",
    rating: 9,
  },
  {
    name: "interstella",
    rating: 8,
  },
  {
    name: "kantara",
    rating: 10,
  },
  {
    name: "koi mil gya",
    rating: 7,
  },
  {
    name: "krissh 3",
    rating: 3,
  },
];

const moviesKiLadiyaTwo = [
  {
    name: "inception",
    rating: 8,
  },
  {
    name: "madgaun express",
    rating: 9,
  },
  {
    name: "interstella",
    rating: 8,
  },
  {
    name: "kantara",
    rating: 10,
  },
  {
    name: "koi mil gya",
    rating: 7,
  },
  {
    name: "krissh 3",
    rating: 3,
  },
];

const moviesKiLadiyaRatingAscending = moviesKiLadiya.sort((a, b) => {
  return a.rating - b.rating;
});

const moviesKiLadiyaRatingDescending = moviesKiLadiyaTwo.sort((a, b) => {
  return b.rating - a.rating;
});

function compareNumbersAsc(a, b) {
  return a - b;
}

const ratingArray = [3, 6, 4, 8, 2, 1, 5, 10, 100000, 1000, 100000000, 15];
const ratingArray2 = [3, 6, 4, 8, 2, 1, 5, 10, 100000, 1000, 100000000, 15];
const ratingArrayAsc = ratingArray.sort(compareNumbersAsc);
const ratingArrayDesc = ratingArray2.sort((a, b) => b - a);

console.log("ratingArrayAsc>>>", ratingArrayAsc);
console.log("ratingArrayDesc>>>", ratingArrayDesc);
console.log("moviesKiLadiyaRatingAscending>>>", moviesKiLadiyaRatingAscending);

console.log(
  "moviesKiLadiyaRatingDescending>>>",
  moviesKiLadiyaRatingDescending
);

//reverse()
const ratingArrayForRev = [
  3, 6, 4, 8, 2, 1, 5, 10, 100000, 1000, 100000000, 15,
];
ratingArrayForRev.reverse();
console.log("ratingArrayReversed>>>", ratingArrayForRev);

// chaining methods
console.log(
  "chained>>",
  ratingArrayForRev.filter((item) => item < 5).map((item) => item + 1000)
);

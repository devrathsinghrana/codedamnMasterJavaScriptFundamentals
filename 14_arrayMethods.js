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

//sort mutates original array

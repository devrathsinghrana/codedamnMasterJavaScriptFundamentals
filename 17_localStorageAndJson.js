localStorage.setItem("username", "Devrath");
localStorage.setItem("age", 23);

localStorage.age = 24;

console.log(
  localStorage.getItem("age"),
  localStorage.getItem("username"),
  typeof localStorage.getItem("age"),
  typeof localStorage.getItem("username")
);

localStorage.setItem("product", {
  name: "Chocos",
  price: "infinity",
});

console.log(localStorage.getItem("product")); //[object Object]//for such case we need json data

localStorage.setItem(
  "product2",
  JSON.stringify({
    name: "Chocos",
    price: "infinity",
  })
);

console.log(JSON.parse(localStorage.getItem("product2"))); //

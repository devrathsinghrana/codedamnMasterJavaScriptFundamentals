// NodeList is similar to array with some limitations

// DOM tree using document object
console.log("document", document);

// querySelector , querySelectorAll, forEach in Nodelist

const listItem = document.querySelector(".list-item");
console.log("listItem>>>", listItem);
const listItems = document.querySelectorAll(".list-item");
console.log("listItems>>>", listItems);
listItems.forEach((item) => console.log("item>>>", item));

// selectors like getElementById getElementsByClassname getElemntBytagname
// HTML COLLECTION can't apply forEach but can use index. getElementsByClassname gives us HTML COLLECTION whereas querySelectorAll gives us Nodelist

const pTagElem = document.getElementsByTagName("p");
const listItemsByClass = document.getElementsByClassName("list-item");
const heading = document.getElementById("h1-heading");
console.log("pTagElem>>>", pTagElem);
console.log("listItemsByClass>>>", listItemsByClass);
console.log("heading>>>", heading);

//Modifying DOM innerText innerHTML. adding html li in whatever position inside ul using innerhtml

// Attributes(Get/Set) - anything inside html tag. setAttribute getAttribute

//.style for adding styles instead of overriding done by setAttribute. js cant have hyphenated property names so use camelcase property names as hypen will be considered as minus by js for a property name

// classes add/remove. classlist-> add, remove. work with active inactive buttons class. we can access elements stored using particular class selector even after removing that class from that element down the code but if we write another queryselector down the code we can;t select it but access it from previous variable where it is stored. so we store selected elemetns in a variable to access them down the code

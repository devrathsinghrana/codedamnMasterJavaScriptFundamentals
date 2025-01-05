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

//.style for adding styles instead of overriding done by setAttribute. js cant have hyphenated property names so use camelcase property names as hypen will be considered as minus by js for a property name
//Modifying DOM innerText innerHTML. adding html li in whatever position inside ul using innerhtml

const listContainer = document.querySelector(".list");
const addLiInExistingList = (position, listItemToAdd) => {
  const listItems = document.querySelectorAll(".list-item");
  const existingListItemsCount = listItems.length;
  if (position > existingListItemsCount || position < 1)
    return "Enter Valid position";
  listContainer.insertBefore(listItemToAdd, listItems[position - 1]);
};
const reqLi = document.createElement("li");
reqLi.style.listStyle = "none";
reqLi.style.color = "#fff";
reqLi.style.background = "#f00";
reqLi.innerHTML = `Take me to the <strong>sky!</strong> & <i>${heading.innerText}</i>`;
addLiInExistingList(3, reqLi);

// Attributes(Get/Set) - anything inside html tag. setAttribute getAttribute

pTagElem[0].setAttribute("style", "color:red;");
const myNameIs = listContainer.getAttribute("data-myNameIs");

console.log("myNameIs>>>", myNameIs);

// classes add/remove. classlist-> add, remove. work with active inactive buttons class. we can access elements stored using particular class selector even after removing that class from that element down the code but if we write another queryselector down the code we can;t select it but access it from previous variable where it is stored. so we store selected elemetns in a variable to access them down the code

const activeListItem = document.querySelector(".active");
console.log("activeListItem>>>", activeListItem);

activeListItem.classList.remove("active");
console.log("activeListItem>>>", activeListItem);

const activeListItem2 = document.querySelector(".active");
console.log("activeListItem2>>>", activeListItem2);

activeListItem.classList.add("active");
console.log("activeListItem>>>", activeListItem);

const activeListItem3 = document.querySelector(".active");
console.log("activeListItem3>>>", activeListItem3);

// Relationships - (Parent, Child, Siblings)
// .children and forEach

const listChildren = listContainer.children; //gives html colllection so need to convert to arrayfor iterating
const listChildrenArray = Array.from(listChildren);
listChildrenArray.forEach((liItem) => console.log("liItem>>>", liItem));

//.parentElement and chaining it
//chaining parent and child
const listParent = listContainer.parentElement;
console.log("listParent>>>", listParent);
const listChildrenByChaining = listParent.children;
console.log("listChildrenByChaining>>>", listChildrenByChaining);
console.log("listChildrenByChaining len>>>", listChildrenByChaining.length);
const listChildrenByChainingArray = Array.from(listChildrenByChaining);
listChildrenByChainingArray.forEach(
  (val) => val.children.length && console.log("val.children>>>", val.children)
);

// .nextElementSibling
console.log(
  "listContainer.nextElementSibling",
  listContainer.nextElementSibling
);
// .previousElementSibling
console.log(
  "listContainer.previousElementSibling",
  listContainer.previousElementSibling
);

//Events - btn click add products from and removed products from clicked li. append , prepend
//event bubbling and delegation is instead of adding individual li we can create separate click event to add it to parent ul. stopPropagation. event object helps us to keep track of everything.

const addLiBtn = document.querySelector(".add-li-btn");

const addLiElemClBk = (ev) => {
  ev.stopPropagation();
  const li = document.createElement("li");
  li.textContent = "LI added";
  li.style.listStyle = "none";
  /*
  Why li is only prepended
  The issue likely arises because the same li element is being appended and prepended to listContainer. When you use append or prepend with the same DOM element, it moves the element to the new position rather than duplicating it.

Explanation
In the DOM, an element can only exist in one place at a time. When you create an li element and append it to listContainer, it becomes part of the DOM tree. If you then prepend the same li, it is moved to the beginning of listContainer. It doesn't duplicate or leave a copy in the previous location.
  */
  listContainer.append(li);
  listContainer.prepend(li);
};

const removeLiElemClBk = (event) => {
  event.stopPropagation();
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
};

addLiBtn.addEventListener("click", addLiElemClBk);
listContainer.addEventListener("click", removeLiElemClBk);

//make an alert when copy li content using copy event
const copyLiClBk = (event) => {
  console.log("event", event);
  if (event.target.tagName === "LI") {
    alert(event.target.textContent);
  }
};
listContainer.addEventListener("copy", copyLiClBk);

//mouse event, mousemove, wheel - clientX,clientY position of my mouse along respective axis. screenX and screenY is position from actual screen as we may scroll down.

document.body.addEventListener("mousemove", (ev) =>
  console.log("mousemove", ev)
);

document.body.addEventListener("wheel", (ev) => console.log("wheel", ev));

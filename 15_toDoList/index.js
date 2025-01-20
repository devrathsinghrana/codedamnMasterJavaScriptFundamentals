const addForm = document.querySelector(".add");
const tasksList = document.querySelector(".tasks");
const taskCountMessageSpan = document.querySelector(".message");
const searchInputForm = document.querySelector(".search");
const searchInput = document.querySelector(".search input");
const searchInputClear = document.querySelector(".search .reset");

//target add form and attach submit event. Submit value and reset form.
const addFormSubmitHandler = (ev) => {
  ev.preventDefault();
  const taskAdded = ev.target.querySelector(`input[name="task"]`).value;
  if (taskAdded) {
    //target tasks list and add input value as li in it
    const newLi = document.createElement("li");
    newLi.innerHTML = `<span>${taskAdded}</span><i class="bi bi-trash-fill delete"></i>`;
    tasksList.append(newLi);
    addForm.reset();
    updateMessage();
  }
};

addForm.addEventListener("submit", addFormSubmitHandler);

//add click on ul instead of delete button and remove that li. Why? because if we target delete using class we will not be able to remove the whole li with delete button
tasksList.addEventListener("click", (ev) => {
  ev.target.parentNode.remove();
  updateMessage();
});

//make clear all feature

//update task count message
const updateMessage = () => {
  const tasksCount = tasksList.children.length;
  const message = `You have ${tasksCount} pending task${
    tasksCount > 1 ? "s" : ""
  }.`;
  taskCountMessageSpan.innerText = message;
};
updateMessage();

const showHideTasks = (inputValue = "") => {
  const tasksArray = Array.from(tasksList.children);
  tasksArray.forEach((task) => {
    if (!task.innerText.toLowerCase().includes(inputValue)) {
      task.classList.add("hide");
    } else {
      task.classList.remove("hide");
    }
  });
};
//target searchbox and apply keyup to filter list
searchInput.addEventListener("keyup", (ev) => {
  const inputValue = ev.target.value;
  showHideTasks(inputValue);
});

//clear filter form
searchInputClear.addEventListener("click", () => {
  searchInputForm.reset();
  showHideTasks();
});

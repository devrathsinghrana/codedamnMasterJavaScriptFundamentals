//target add form and attach submit event and add value of transactions in localStorage
const addForm = document.querySelector(".add");
const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const handleAddFormSubmit = (ev) => {
  const source = addForm.source.value;
  const amount = addForm.amount.value;

  const transactionObject = {
    source,
    amount,
  };

  transactions.push(transactionObject);
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

addForm.addEventListener("submit", handleAddFormSubmit);

//target add form and attach submit event and add value of transactions in localStorage
const addForm = document.querySelector(".add");
const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
const incomeList = document.querySelector(".income-list");
const expenseList = document.querySelector(".expense-list");

const generateTemplate = (source, amount, id, time) => {
  return `
<li data-id="${id}">
  <p>
    <span>${source}</span>
    <span id="time">${time}</span>
  </p>
  $<span>${Math.abs(amount)}</span>
  <i class="bi bi-trash delete"></i>
</li>
`;
};

const addTransactionDom = (source, amount, id, time) => {
  if (amount > 0) {
    incomeList.innerHTML += generateTemplate(source, amount, id, time);
  } else {
    expenseList.innerHTML += generateTemplate(source, amount, id, time);
  }
};
const addTransaction = (source, amount) => {
  const time = new Date();
  const transactionObject = {
    id: Math.floor(Math.random() * 100000),
    source,
    amount,
    time: `${time.toLocaleTimeString()} ${time.toLocaleDateString()}`,
  };
  addTransactionDom(
    source,
    amount,
    transactionObject.id,
    transactionObject.time
  );
  transactions.push(transactionObject);
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

const handleAddFormSubmit = (ev) => {
  ev.preventDefault();
  const source = addForm.source.value;
  const amount = addForm.amount.value;
  addTransaction(source, amount);
  addForm.reset();
};

const getTransactions = () => {
  if (transactions.length > 0) {
    transactions.forEach((transaction) => {
      addTransactionDom(
        transaction.source,
        transaction.amount,
        transaction.id,
        transaction.time
      );
    });
  }
};

getTransactions();

addForm.addEventListener("submit", handleAddFormSubmit);

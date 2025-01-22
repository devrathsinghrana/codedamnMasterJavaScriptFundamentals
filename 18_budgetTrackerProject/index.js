//target add form and attach submit event and add value of transactions in localStorage
const addForm = document.querySelector(".add");
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
const incomeList = document.querySelector(".income-list");
const expenseList = document.querySelector(".expense-list");
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");

const updateTransactions = () => {
  const updatedExpenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce(
      (totalExpenses, expenseObj) =>
        (totalExpenses += Math.abs(Number(expenseObj.amount))),
      0
    );

  const updatedIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce(
      (totalIncome, incomeObj) => (totalIncome += Number(incomeObj.amount)),
      0
    );
  const netBalance = updatedIncome - updatedExpenses;

  income.innerText = updatedIncome;
  expense.innerText = updatedExpenses;
  balance.innerText = netBalance;
};

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
  const source = addForm.source.value.trim();
  const amount = addForm.amount.value.trim();
  if (!source.length > 0 || !amount.length > 0) {
    return alert("enter valid input");
  }
  addTransaction(source, amount);
  updateTransactions();
  addForm.reset();
};

const deleteTransaction = (deletedNode, transactionId) => {
  deletedNode.remove();
  transactions = transactions.filter(
    (transaction) => Number(transaction.id) !== transactionId
  );
  localStorage.setItem("transactions", JSON.stringify(transactions));
  updateTransactions();
};

const transactionsListClickHandler = (ev) => {
  if (Array.from(ev.target.classList).includes("delete")) {
    const deletedNode = ev.target.parentNode;
    const transactionId = Number(deletedNode.getAttribute(["data-id"])) || 0;
    deleteTransaction(deletedNode, transactionId);
  }
};

expenseList.addEventListener("click", transactionsListClickHandler);
incomeList.addEventListener("click", transactionsListClickHandler);

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
  updateTransactions();
};

getTransactions();

addForm.addEventListener("submit", handleAddFormSubmit);

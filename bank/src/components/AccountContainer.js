//importing react and other components
import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./FormTransactions";
//defining the account container
const AccountContainer = () => {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchTransactions(query);
  }, [query]);

  const fetchTransactions = (searchQuery) => {
    fetch(`http://localhost:8000/transactions?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching transactions:", error));
  };
//event handler
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
//event handler to add new transaction
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
//event handler to delete a transaction
  const handleDeleteTransaction = (transactionId) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== transactionId);
    setTransactions(updatedTransactions);
  };
//jsx code to renders components
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={transactions} onDeleteTransaction={handleDeleteTransaction} />
    </div>
  );
};

export default AccountContainer;

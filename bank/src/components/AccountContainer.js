import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./FormTransactions";

const AccountContainer = () => {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchTransactions(query);
  }, [query]);

  const fetchTransactions = (searchQuery) => {
    // Replace the URL with the actual endpoint that fetches transactions from the server
    fetch(`  http://localhost:8000/transactions?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching transactions:", error));
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (transactionId) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== transactionId);
    setTransactions(updatedTransactions);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={transactions} onDeleteTransaction={handleDeleteTransaction} />
    </div>
  );
};

export default AccountContainer;

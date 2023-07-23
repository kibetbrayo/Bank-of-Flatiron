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
    fetch("http://localhost:8000/transactions?q=" + searchQuery)
      .then((resp) => resp.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching transactions:", error));
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleAddTransaction = (newTransaction) => {
    // Simulate adding data to the local state, replace this with your server-side implementation
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={transactions} />
    </div>
  );
};

export default AccountContainer;

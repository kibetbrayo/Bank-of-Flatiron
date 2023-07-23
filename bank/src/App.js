import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import SearchBar from "./SearchBar";
import App from './App';
import App from './components/App';



const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch transactions from the local server (port 8000)
    fetch("http://localhost:8000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data.transactions))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    // Add the new transaction to the transactions array in the state
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Bank Transactions</h1>
      <SearchBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
      <TransactionTable transactions={filteredTransactions} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
};

export default App;

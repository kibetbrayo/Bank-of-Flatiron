import React from "react";
import Transaction from "./Transaction";
//defining transaction list
function TransactionsList({ transactions, onDeleteTransaction }) {
 //jsx for rendering table 
  return (
    <table>
      <thead>
        <tr>
          <th>
            <h3>Date</h3>
          </th>
          <th>
            <h3>Description</h3>
          </th>
          <th>
            <h3>Category</h3>
          </th>
          <th>
            <h3>Amount</h3>
          </th>
          <th>
            <h3>Actions</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((item) => (
          <Transaction
            key={item.id}
            id={item.id}
            date={item.date}
            description={item.description}
            category={item.category}
            amount={item.amount}
            onDeleteTransaction={onDeleteTransaction}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;

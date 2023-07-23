import React from "react";
import "./Transaction.css";

function Transaction({date, description, category, amount}) {
  return (
    <tr className="transaction-item">
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
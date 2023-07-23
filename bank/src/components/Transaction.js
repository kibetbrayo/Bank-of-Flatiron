import React from "react";

function Transaction({ id, date, description, category, amount, onDeleteTransaction }) {
  const handleDelete = () => {
    onDeleteTransaction(id);
  };

  return (
    <tr className="transaction-item">
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button className="ui button red" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Transaction;

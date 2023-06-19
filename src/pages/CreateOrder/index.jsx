import React, { useState } from "react";
import axios from "axios";

const CreateOrder = () => {
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState("");
  const [valorTotal, setValorTotal] = useState("");
  const [clienteId, setClienteId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newOrder = {
      VALOR_TOTAL: valorTotal,
      CLIENTE_ID: clienteId,
    };

    axios
      .post("http://localhost:3001/order", newOrder)
      .then((response) => {
        console.log(response.data);
        // Handle success or show a success message
      })
      .catch((error) => {
        console.error(error);
        // Handle error or show an error message
      });
  };

  return (
    <div>
      <h1>Create New Order</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div>
          <label>Valor Total:</label>
          <input
            type="text"
            value={valorTotal}
            onChange={(event) => setValorTotal(event.target.value)}
          />
        </div>
        <div>
          <label>Cliente ID:</label>
          <input
            type="text"
            value={clienteId}
            onChange={(event) => setClienteId(event.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateOrder;

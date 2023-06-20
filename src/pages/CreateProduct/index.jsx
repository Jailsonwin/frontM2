import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [descricao, setDescricao] = useState("");
  // Add more state variables for other fields if needed

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      NOME: name,
      DESCRICAO: descricao, // Add description field if needed
      PRECO: price,
      // Add more fields as per the API requirements
    };

    axios
      .post("http://localhost:3001/products", newProduct)
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
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        {/* Add more input fields for other fields if needed */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;

import React, { useState } from "react";
import axios from "axios";

const CreateOrderProduct = () => {
  const [orderId, setOrderId] = useState("");
  const [productId, setProductId] = useState("");
  // Add more state variables for other fields if needed

  const handleSubmit = (event) => {
    event.preventDefault();

    const newOrderProduct = {
      orderId: orderId,
      productId: productId,
      // Add more fields as per the API requirements
    };

    axios
      .post("/order-products", newOrderProduct)
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
      <h1>Create New Order Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Order ID:</label>
          <input
            type="text"
            value={orderId}
            onChange={(event) => setOrderId(event.target.value)}
          />
        </div>
        <div>
          <label>Product ID:</label>
          <input
            type="text"
            value={productId}
            onChange={(event) => setProductId(event.target.value)}
          />
        </div>
        {/* Add more input fields for other fields if needed */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateOrderProduct;

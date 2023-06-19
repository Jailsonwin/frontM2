import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderProductList = () => {
  const [orderProducts, setOrderProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/order-products")
      .then((response) => {
        setOrderProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>List of Order Products</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Order ID</th>
            <th>Product ID</th>
            {/* Add more columns if needed */}
          </tr>
        </thead>
        <tbody>
          {orderProducts.map((orderProduct) => (
            <tr key={orderProduct.id}>
              <td>{orderProduct.id}</td>
              <td>{orderProduct.orderId}</td>
              <td>{orderProduct.productId}</td>
              {/* Add more columns if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderProductList;

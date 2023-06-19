import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderProductList = () => {
  const [orderProducts, setOrderProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/orderproduct")
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
            <th>Quantity</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {orderProducts.map((orderProduct) => (
            <tr key={orderProduct.id}>
              <td>{orderProduct.id}</td>
              <td>{orderProduct.PEDIDO_ID}</td>
              <td>{orderProduct.PRODUTO_ID}</td>
              <td>{orderProduct.QUANTIDADE}</td>
              <td>{orderProduct.VALOR_UNITARIO}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderProductList;

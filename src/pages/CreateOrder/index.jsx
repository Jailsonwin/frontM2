import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateOrder = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const [clienteId, setClienteId] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedProductQuantity, setSelectedProductQuantity] = useState(0);
  const [orderItems, setOrderItems] = useState([]);
  const [orderID, setOrderID] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  const addProductToOrder = () => {
    event.preventDefault();
    const selectedProductData = products.find((product) => product.NOME === selectedProduct);

    if (selectedProductData) {
      const item = {
        product: selectedProductData,
        quantity: selectedProductQuantity,
        valor: Number(selectedProductData.PRECO) * Number(selectedProductQuantity),
      };

      setOrderItems([...orderItems, item]);
      setValorTotal(valorTotal + (Number(selectedProductData.PRECO) * Number(selectedProductQuantity))); // Corrigir o cálculo do valor total
      setSelectedProduct("");
      setSelectedProductQuantity(0);
      console.log(orderItems);
    }
  };

  const handleFinalizeOrder = () => {
    const newOrder = {
      ID: userId,
      VALOR_TOTAL: valorTotal, // Converter o valorTotal para um número
      CLIENTE_ID: 1,
      // ITEMS: orderItems.map((item) => ({
      //   PRODUCT_ID: item.product.ID,
      //   QUANTITY: item.quantity,
      //   VALOR: item.valor,
      // })),
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

      //RECUPERA O ID
      getIdOrder();

      //INSERE OS ITENS

      orderItems.map((item) => {
        const newOrderItem = {
          ID: orderID,
          PRODUCT_ID: item.product.ID,
          QUANTITY: item.quantity,
          VALOR: item.valor,
        };
    
        axios
          .post("http://localhost:3001/orderproduct", newOrderItem)
          .then((response) => {
            console.log(response.data);
            // Handle success or show a success message
          })
          .catch((error) => {
            console.error(error);
            // Handle error or show an error message
          });
      });
  };

  function getIdOrder(){ 
    axios
    .get("http://localhost:3001/order")
    .then((response) => {
      setOrderID(response.lenght);
    })
    .catch((error) => {
      console.error(error);
      // Handle error or show an error message
    });
  }

  return (
    <div>
      <h1>Create New Order</h1>
      <form>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </div>
        <div>
          <label>Products:</label>
          <select
            value={selectedProduct}
            onChange={(event) => setSelectedProduct(event.target.value)}
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.ID} value={product.NOME}>
                {product.NOME}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={selectedProductQuantity}
            onChange={(event) => setSelectedProductQuantity(event.target.value)}
          />
          <button onClick={addProductToOrder}>Add to Order</button>
        </div>
        <div>
          <label>Valor Total:</label>
          <input
            type="number" // Usar o tipo "number" em vez de "text"
            value={valorTotal}
            onChange={(event) => setValorTotal(Number(event.target.value))} // Converter o valor para um número antes de atualizar o estado
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
        <button type="button" onClick={handleFinalizeOrder}>
          Finalizar Compra
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item, index) => (
            <tr key={index}>
              <td>{item.product.NOME}</td>
              <td>{item.quantity}</td>
              <td>{item.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateOrder;

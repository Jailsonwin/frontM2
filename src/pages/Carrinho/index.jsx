import { useState } from 'react';
import axios from 'axios';

const AddToCart = () => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('/orderproduct', {
     
        PRODUTO_ID: 1,
        QUANTIDADE: 10,
        VALOR_UNITARIO: 100, // Preencha com o valor unitário do produto
      });
      console.log(response.data); // Exiba a resposta do servidor (opcional)
      // Limpe os campos após o sucesso
      setProductId('');
      setQuantity('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Adicionar ao Carrinho</h1>
      <div>
        <label htmlFor="productId">ID do Produto:</label>
        <input
          id="productId"
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantidade:</label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default AddToCart;

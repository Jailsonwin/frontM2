import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const OrderProductAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    const apiUrl = 'http://localhost:30306/orderproduct'; // Atualize com a URL correta da sua API

    if (method === 'POST') {
      const { data } = await axios.post(apiUrl, req.body);
      res.status(200).json(data);
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default OrderProductAPI;

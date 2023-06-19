import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/clients")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>List of Clients</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            {/* Add more columns if needed */}
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.NOME}</td>
              <td>{client.EMAIL}</td>
              {/* Add more columns if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;

import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // Add more state variables for other fields if needed

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
      // Add more fields as per the API requirements
    };

    axios
      .post("/users", newUser)
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
      <h1>Create New User</h1>
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
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        {/* Add more input fields for other fields if needed */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;

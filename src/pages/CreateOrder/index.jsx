import React, { useState } from "react";
import axios from "axios";

const CreateOrder = () => {
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState("");
  // Add more state variables for other fields if needed

  const handleSubmit = (event) => {
    event.preventDefault();

    const newOrder = {
      userId: userId,
      date: date,
      // Add more fields as per the API requirements
    };

    axios
      .post("/orders", newOrder)
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
        {/* Add more input fields for other fields if needed */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateOrder;

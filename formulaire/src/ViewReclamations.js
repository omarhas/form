// src/components/ViewReclamations.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewReclamations = () => {
  const [reclamations, setReclamations] = useState([]);

  useEffect(() => {
    // Fetch reclamations from the server
    // You would typically send a GET request to your server here
    // axios.get("/api/reclamations", { headers: { Authorization: `Bearer ${YOUR_JWT_TOKEN}` } })
    //   .then((response) => setReclamations(response.data));
    // This is a placeholder, you need to replace it with actual data
    setReclamations([
      "Reclamation 1",
      "Reclamation 2",
      "Reclamation 3",
    ]);
  }, []);

  return (
    <div>
      <h2>View Reclamations</h2>
      <ul>
        {reclamations.map((reclamation, index) => (
          <li key={index}>{reclamation}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewReclamations;

// src/components/CreateReclamation.js
import React, { useState } from "react";
import axios from "axios";
import "./Reclamations.css"
const CreateReclamation = () => {
  const [reclamation, setReclamation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // axios.post("/api/reclamations", { text: reclamation, token: YOUR_JWT_TOKEN });
      console.log("Reclamation submitted:", reclamation);
      setReclamation("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Reclamation</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          value={reclamation}
          onChange={(e) => setReclamation(e.target.value)}
          placeholder="Enter your reclamation here"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateReclamation;

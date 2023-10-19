// src/components/RegistrationForm.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./RegistrationForm.css";


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    poste: "",
    grade: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", formData);
      const { token } = response.data;
      // Store the JWT token in localStorage or cookies
      localStorage.setItem("token", token);
      // Redirect to a protected route or dashboard
      // history.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="registration-form">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Adresse Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="poste"
          placeholder="Poste de Travail"
          value={formData.poste}
          onChange={handleChange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmation Mot de passe"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">S'inscrire</button>
      </form>
      <Link to="/login">Déjà inscrit ? Se connecter</Link>
    </div>
  );
};

export default RegistrationForm;

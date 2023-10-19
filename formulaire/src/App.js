import { Routes,Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import CreateReclamation from './CreateReclamation';
import ViewReclamations from './ViewReclamations';
import React, { useState } from "react";
import axios from "axios";



function App() {
  return (
      <Routes>

        <Route path="/" element={<RegistrationForm />}>
        <Route path="/reclamation" element={<CreateReclamation />} />

          <Route path="/viewreclamation" element={<ViewReclamations />} />
        </Route>
      </Routes>
    );
}

export default App;

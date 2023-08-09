import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomDashboard from "./components/CustomDashboard";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import SecurityDetails from "./components/SecurityDetails"
const App = () => {
  const [email, setEmail] = useState("");
  return (
    <BrowserRouter>
    <Routes>
   <Route path='/' element={<Login />} /> 
  <Route path='/dashboard' element={<Dashboard/>} /> 
  <Route path="/securityDetail/:id" element={<SecurityDetails /> } />
  </Routes>
  </BrowserRouter>
  );
};

export default App;

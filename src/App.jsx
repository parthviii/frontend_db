import React, { useState,useEffect } from "react";
import Login from "./components/Login";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
   <Route path='/' element={<Login />} /> 
  <Route path='/dashboard' element={<Dashboard/>} /> 
  </Routes>
  </BrowserRouter>
  );
};

export default App;

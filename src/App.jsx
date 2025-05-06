// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/home";
import Login from "./components/login";
import Rutina from "./components/rutina";
import Home_Coach from "./components/home_coach";
import Clientes from "./components/clientes";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rutina" element={<Rutina />} />
        <Route path="/homecoach" element={<Home_Coach />} />
        <Route path="/clientes" element={<Clientes />} />
        {/* Redirigir por defecto al login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

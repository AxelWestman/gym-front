// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home_Coach from "./components/home_coach";
import Clientes from "./components/clientes";
import RutinasYEjercicios from './components/rutinas_y_ejercicios';
import Home from "./components/Home";
import Login from "./components/Login";
import Rutina from "./components/Rutina";

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
        <Route path="/rutinasyejercicios" element={<RutinasYEjercicios />} />
        {/* Redirigir por defecto al login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

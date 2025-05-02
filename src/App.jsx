import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/home";
import Login from "./components/login";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* Redirigir por defecto al login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

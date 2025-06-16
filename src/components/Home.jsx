import styles from "../styles/Home.module.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import  Navbar_component  from './Navbar';


const Home_component = () => {
  

  const usuario = localStorage.getItem("usuario");

  return (
    <>
      <section className={styles.pagina}>
        <Navbar_component />
        <div className={styles.containerHome}>
            <h1>Bienvenido {usuario}! 💪</h1>
        </div>  
      </section>
    </>
  );
};

export default Home_component;

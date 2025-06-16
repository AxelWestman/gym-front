import styles from "../styles/Rutina.module.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar_component from "./Navbar";

const Rutina_component = () => {

    return (

      <>
        <section className={styles.pagina}>
          <Navbar_component />
          <div className={styles.containerRutina}>
            <h1>Rutina 🏋️‍♀️</h1>
          </div>  
        </section>
      </>

    )

}


export default Rutina_component;
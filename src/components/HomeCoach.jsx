import styles from  "../styles/HomeCoach.module.css";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import NavbarCoach_component from "../components/NavbarCoach";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home_Coach_component = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deslogueo = () => {
        localStorage.removeItem("usuario");
        window.location.href = "/"; // Redirigir a la página de inicio de sesión
      }

    return(
        <>
          <section className={styles.pagina}>
          <NavbarCoach_component />
        <div className={styles.containerHome}>
            <h1>Bienvenido Coach! 🏋️</h1>
        </div>
        </section>
        </>
    )


}

export default Home_Coach_component;
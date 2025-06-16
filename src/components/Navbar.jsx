import styles from "../styles/Navbar.module.css"
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";

const Navbar_component = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deslogueo = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/"; // Redirigir a la página de inicio de sesión
  }

    return(
        <>
            <Container>
                      <Navbar fixed="top" className={styles.bgBodyTertiary}>
                        <Container>
                          <FiAlignJustify
                            className={styles.logoHamburguesa}
                            onClick={handleShow}
                          />
                          <IoIosLogOut className={styles.logoLogout} onClick={deslogueo} />
                        </Container>
                      </Navbar>
                    </Container>
            
                    <Offcanvas show={show} onHide={handleClose}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Gimnasio Prueba</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                       <ul>
                       <Link to="/home" className={styles.links}><li >Inicio</li></Link>
                       <Link to="/rutina" className={styles.links}><li >Rutina</li></Link>
                            <li>Ejercicios</li>
                            <li>Alimentación</li>
                            <li>Progreso</li>
                            <li>Configuración</li>
                       </ul>
                      </Offcanvas.Body>
                    </Offcanvas>
        </>
    )

}

export default Navbar_component;
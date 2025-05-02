import "../styles/home.css";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";

const Home_component = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const usuario = localStorage.getItem("usuario");

  const deslogueo = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/"; // Redirigir a la página de inicio de sesión
  }

  return (
    <>
      <section className="pagina">
        <Container>
          <Navbar fixed="top" className="bg-body-tertiary">
            <Container>
              <FiAlignJustify
                className="logo-hamburguesa"
                onClick={handleShow}
              />
              <IoIosLogOut className="logo_logout" onClick={deslogueo} />
            </Container>
          </Navbar>
        </Container>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Gimnasio Prueba</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
        <div className="container-home">
            <h1>Bienvenido {usuario}! 💪</h1>
        </div>  
      </section>
    </>
  );
};

export default Home_component;

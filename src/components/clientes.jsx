import "../styles/clientes.css";
import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";

const Clientes_component = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dataClientes, setDataClientes] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getUsuarios")
      .then((response) => {
        console.log("Datos recibidos:", response.data.data); // 👈 importante
        setDataClientes(response.data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const deslogueo = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/"; // Redirigir a la página de inicio de sesión
  };

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
            <ul>
              <Link to="/homecoach" className="links">
                <li>Inicio</li>
              </Link>
              <Link to="/clientes" className="links">
                <li>Clientes</li>
              </Link>
              <li>Ejercicios</li>
              <li>Alimentación</li>
              <li>Progreso</li>
              <li>Configuración</li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
        <div className="container-home">
          <div style={{ width: "100%", overflowX: "auto" }}>
            <div style={{ minWidth: "700px", margin: "0 auto" }}>
              <Table striped bordered hover className="w-100">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre Completo</th>
                    <th>DNI</th>
                    <th>Género</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                  </tr>
                </thead>
                <tbody>
                  {dataClientes ? (
                    dataClientes.map((cliente, index) => (
                      <tr key={index}>
                        <td>{cliente.idclientes}</td>
                        <td>{cliente.nombre_completo}</td>
                        <td>{cliente.dni}</td>
                        <td>{cliente.genero}</td>
                        <td>{cliente.mail}</td>
                        <td>{cliente.telefono}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">Cargando datos...</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clientes_component;

import styles from  "../styles/Clientes.module.css";
import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavbarCoach_component from "../components/NavbarCoach";
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
        <NavbarCoach_component />
        <div className="container-home">
          <h1>Clientes</h1>
          <div style={{ width: "100%", overflowX: "auto" }}>
            <div style={{ minWidth: "700px", margin: "0 auto", textAlign: "center" }}>
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

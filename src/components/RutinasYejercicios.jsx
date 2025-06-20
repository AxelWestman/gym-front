import "../styles/RutinasYejercicios.module.css";
import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import NavbarCoach_component from "../components/NavbarCoach";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RutinasYEjercicios = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [obtenerEjercicios, setObtenerEjercicios] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getEjercicios")
      .then((response) => {
        console.log("Datos recibidos:", response.data.data); // 👈 importante
        setObtenerEjercicios(response.data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [obtenerRutinas, setObtenerRutinas] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getRutinas")
      .then((response) => {
        console.log("Datos recibidos:", response.data.data); // 👈 importante
        setObtenerRutinas(response.data.data);
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
          <h1>Rutinas y ejercicios</h1>
          <div class="container-rutinas-ejercicios" style={{ overflowX: "auto" }}>
            <div className="contenedor-tablas">
              <h2>Ejercicios</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre del ejercicio</th>
                    <th>Descripción</th>
                    <th>Grupo muscular</th>
                    <th>Equipamiento</th>
                  </tr>
                </thead>
                <tbody>
                  {obtenerEjercicios ? (
                    obtenerEjercicios.map((ejercicio, index) => (
                      <tr key={index}>
                        <td>{ejercicio.idejercicio}</td>
                        <td>{ejercicio.nombre_ejercicio}</td>
                        <td>{ejercicio.descripcion}</td>
                        <td>{ejercicio.grupo_muscular}</td>
                        <td>{ejercicio.quipamiento_necesario}</td>
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
            <div className="contenedor-tablas">
              <h2>Rutinas</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre de la rutina</th>
                    <th>Descripción</th>
                    <th>Duración semanal</th>
                    <th>Dificultad</th>
                  </tr>
                </thead>
                <tbody>
                  {obtenerRutinas ? (
                    obtenerRutinas.map((rutina, index) => (
                      <tr key={index}>
                        <td>{rutina.idrutina}</td>
                        <td>{rutina.nombre_rutina}</td>
                        <td>{rutina.descripcion}</td>
                        <td>{rutina.duracion_semanas}</td>
                        <td>{rutina.nivel_dificultad}</td>
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
          <div className="container-formularios">
            <div className="estructura-formulario">
              <h2>Añadir ejercicios</h2>
              <div className="añadir-ejercicios-container">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nombre del ejercicio</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Grupo muscular</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Equipamiento</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Descripción del ejercicio</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              </div>
            </div>
            <div className="">
              <h2>Añadir rutinas</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RutinasYEjercicios;

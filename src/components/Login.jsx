import styles from "../styles/Login.module.css"; // ✅ Correcto (importación directa para CSS normal)import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; // Asegúrate de importar useEffect
import Home from "./Home";

const Login_component = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    const token = localStorage.getItem('usuario');
    if (token) {
      navigate('/home', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      mail: emailRef.current.value,
      password: passwordRef.current.value
    };

    try {
      // 4. Enviar datos al backend
      const response = await fetch('http://192.168.0.243:3000/api/postLogueo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }

      const responseData = await response.json();  // Usa un nombre diferente
      console.log('Login exitoso:', responseData.data[0]);
      const nombre = responseData.data[0].nombre_completo;
      localStorage.setItem("usuario", nombre)
      navigate('/home', { replace: true }); 
      // Aquí podrías redirigir al usuario o guardar el token de autenticación
      
    } catch (error) {
      console.error('Error:', error);
      alert('Credenciales incorrectas');
    } 
  };

    // Resto del código de envío igual que antes
  


  return (
    <>
      <section className={styles.paginaEntera}>
        <h1 className={styles.textoH1}>Gimnasio proyecto</h1>
        <Card className={styles.carta}>
        <Form className={styles.formulario} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className={styles.textoForm}>Email</Form.Label>
            <Form.Control type={styles.email} ref={emailRef} placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className={styles.textoForm}>Contraseña</Form.Label>
            <Form.Control type={styles.password} ref={passwordRef} placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Card>
      </section>
    </>
  );
};

export default Login_component;

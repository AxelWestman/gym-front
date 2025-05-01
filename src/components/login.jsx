import "../styles/login.css"; // ✅ Correcto (importación directa para CSS normal)import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

const Login_component = () => {
  return (
    <>
      <section className="pagina-entera">
        <h1 className="texto-h1">Gimnasio proyecto</h1>
        <Card className="carta">
        <Form className="formulario">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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

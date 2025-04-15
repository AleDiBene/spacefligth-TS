import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Spacefligth</h5>
            <p>© {new Date().getFullYear()} Tutti i diritti riservati.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#" className="text-light me-3">Privacy</a>
            <a href="#" className="text-light">Contatti</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

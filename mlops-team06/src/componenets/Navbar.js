import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { handleLogout } from '../pages/HomePage';

function Navigatebar() {
  const userEmail = sessionStorage.getItem('userEmail');

  return (
    <>
      <Navbar expand="lg" className="bg-bg-body-tertiary">
        <Container>
          <Row className='col-md-12'>
            <Col>
              <Link to="/" className="navbar-brand">내일 주식</Link>
            </Col>
            <Col className='col-md-2'>
              <Link to="/predict" className="navbar-brand">Predict</Link>
            </Col>
            <Col className='col-md-2'>
              <Link to="/history" className="navbar-brand">History</Link>
            </Col>
            <Col className='col-md-2'>
              {userEmail ? (
                <Link className="navbar-brand" onClick={handleLogout}>Logout</Link>
              ):(
                <Link to="/login" className="navbar-brand">Login</Link>
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigatebar;
import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';


const Layout = () => (
  <Container fluid className="p-3">
    <h1 className="header">Shoes Market</h1>
    <Row>
      <Col md={3}>
      <ListGroup>
      <ListGroup.Item> <Link to="/">Effectuez une commande</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/login">login</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/market">Passez au pannier</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/transactions">Liste des transactions</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/profile">Modification des informations</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/create-shoes">Créez une chaussure</Link></ListGroup.Item>
    </ListGroup>
      </Col>
      <Col md={9}>
        <Row>
            <Outlet />
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Layout;

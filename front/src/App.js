import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import image from './image.jpg'
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import articles from './articles.json'
import ListGroup from 'react-bootstrap/ListGroup';

import './App.css';

function DisplayData() {
  const displayArticle = articles.map((article) =>
    <Col md={3} className='article'>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{article.name}</Card.Title>
          <Card.Text>
            {article.description}
          </Card.Text>
          <Card.Text className='bold'>{article.price} fcfa</Card.Text>
          <Button variant="primary">Commandez</Button>
        </Card.Body>
      </Card>
    </Col>
  );

  return displayArticle
}

const App = () => (
  <Container fluid className="p-3">
    <h1 className="header">Shoes Market</h1>
    <Row>
      <Col md={3}>
      <ListGroup>
      <ListGroup.Item>Effectuez une commande</ListGroup.Item>
      <ListGroup.Item>Passez au pannier</ListGroup.Item>
      <ListGroup.Item>Liste des transactions</ListGroup.Item>
      <ListGroup.Item>Modification des informations</ListGroup.Item>
      <ListGroup.Item>Créez une chaussure</ListGroup.Item>
    </ListGroup>
      </Col>
      <Col md={9}>
        <Row>
          <DisplayData />
        </Row>
      </Col>
    </Row>
  </Container>
);

export default App;

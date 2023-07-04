import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import articles from './../articles.json'

import './../App.css';

function DisplayData() {
  const displayArticle = articles.map((article) =>
    <Col md={3} className='article'>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={article.image} />
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

const App = () => <DisplayData />;

export default App;

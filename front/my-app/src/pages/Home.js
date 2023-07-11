import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import articles from './../articles.json'
import Alert from 'react-bootstrap/Alert';
import { decrement, selectCount, increment, addProduct, addProducts, addProductsOrder } from '../components/counterSlice';
import './../App.css';
import { useDispatch } from 'react-redux';

function DisplayData() {

  const [articles, setArticles] = useState([])
  const [isLoadArticles, setIsLoadArticles] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [hiddenAlert, setHiddenAlert] = useState(true)
  const [messageAlert, setMessageAlert] = useState('')
  const [variantAlert, setVariantAlert] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    const loadArticles = () => {
      fetch("http://localhost:8086/products")
        .then((response) => response.json())
        .then((data) => {
          if (data.status == 200) {
            setArticles(data.data)
            dispatch(addProducts({products: data.data}))
          }else{
            setHiddenAlert(false);
            setMessageAlert("Oups ! Une erreur s'est produite lors de la récupération !");
            setVariantAlert("danger");
            console.log("Une erreur s'est produite")
          }
        })
        .catch((err) => {
          console.log(err.message);
        })
    };
    loadArticles();
  }, [])

  const displayArticle = articles.map((article) =>
    <div>
      <Alert variant={variantAlert} onClose={() => setShowAlert(true)} dismissible hidden={hiddenAlert}>
        <Alert.Heading>{messageAlert}</Alert.Heading>
      </Alert>


      <Col md={3} className='article'>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={article.image} />
          <Card.Body>
            <Card.Title>{article.label}</Card.Title>
            <Card.Text style={{ height: '72px' }}>
              {article.description}
            </Card.Text>
            <Card.Text className='bold'>{article.price} fcfa</Card.Text>
            <Button variant="primary" onClick={() => dispatch(addProductsOrder({'product_id': article.id}))}>Commandez</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>

  );

  return displayArticle
}

const App = () => <DisplayData />;

export default App;

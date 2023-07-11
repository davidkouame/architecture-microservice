import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { selectCount, selectProductsOrder } from '../components/counterSlice';
import { useSelector } from 'react-redux';
import { selectTransactionsNbre, pushData, selectData } from '../components/counterSlice';
import { useDispatch } from 'react-redux';
import { NBRE_TRANSACTION } from '../components/counterSlice';

const Layout = () => {

  const count = useSelector(selectCount)
  const countSelectProductsOrder = useSelector(selectProductsOrder).length
  const dispatch = useDispatch()
  const [nbreOrders, setNbreOrders] = useState(0)

  useEffect(() => {
    const getOrders = () => {
      fetch("http://localhost:8087/payments")
        .then(response => response.json())
        .then(data => {
          // dispatch(pushData({NBRE_TRANSACTION: data.data.length}));
          setNbreOrders(data.data.length);
          console.log(data.data);
        }).catch(err => console.error(err.message))
    };
    getOrders();
  }, [])
  
  return (<Container fluid className="p-3">
    <h1 className="header">Shoes Market</h1>
    <Row>
      <Col md={3}>
      <ListGroup>
      <ListGroup.Item> <Link to="/">Effectuez une commande</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/login">login</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/market">Passez au pannier <Badge bg="secondary">{countSelectProductsOrder}</Badge></Link></ListGroup.Item>
      <ListGroup.Item><Link to="/transactions">Liste des transactions<Badge bg="secondary">{nbreOrders}</Badge></Link></ListGroup.Item>
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
  </Container>)
};

export default Layout;

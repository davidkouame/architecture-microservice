import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { selectCount, selectProductsOrder } from '../components/counterSlice';
import { useSelector } from 'react-redux';
import { selectTransactionsNbre, addNbreTransactions } from '../components/counterSlice';
import { useDispatch } from 'react-redux';
import { } from '../components/counterSlice';
import env from "@beam-australia/react-env";

const Layout = () => {

  const count = useSelector(selectCount)
  const countSelectProductsOrder = useSelector(selectProductsOrder).length
  const dispatch = useDispatch()
  const nbreOrders = useSelector(selectTransactionsNbre)

  useEffect(() => {
    const getOrders = () => {
      fetch(env("BASE_URL_PAYMENTS")+"/payments")
        .then(response => response.json())
        .then(data => {
          dispatch(addNbreTransactions({ nbreTransactions: data.data.length }));
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
          <ListGroup.Item><Link to="/market">Passez au pannier <Badge bg="primary" text="light">{countSelectProductsOrder}</Badge></Link></ListGroup.Item>
          <ListGroup.Item><Link to="/transactions">Liste des transactions<Badge bg="primary" text="light">{nbreOrders}</Badge></Link></ListGroup.Item>
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

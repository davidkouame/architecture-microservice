import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';

const Transaction = () => {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = () => {
      fetch("http://localhost:8087/payments")
        .then(response => response.json())
        .then(data => {
          setOrders(data.data);
          console.log(data.data);
        }).catch(err => console.error(err.message))
    };
    getOrders();
  }, [])

  return (<Container fluid className="p-3">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date de la transaction</th>
          <th>Montant de la transaction</th>
          <th>Nombre d'articles</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.entries(orders).map(([key,order]) => (
            <tr>
              <td>{parseInt(key)+1}</td>
              <td>{order.created}</td>
              <td>{order.total}</td>
              <td>{order.paymentProduct.length}</td>
              <td><Link to={"/transactions/"+order.id}><FontAwesomeIcon icon={faEye} /></Link></td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  </Container>)
}

export default Transaction;
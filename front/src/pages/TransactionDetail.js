import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams, useParams } from "react-router-dom";
import env from "@beam-australia/react-env";

const TransactionDetail = () => {

  const [productsOrder, setProductsOrder] = useState([]);
  const [amount, setAmount] = useState(0);
  let { id } = useParams();

  useEffect(() => {

    fetch(env("BASE_URL_PAYMENTS")+"/payments/" + id)
      .then(response => response.json())
      .then(data => {
        if (data.status == 200) {
          setProductsOrder(data.data.paymentProduct);
        }
      }).catch(err => console.error(err));
  }, [])

  return (
    <Container fluid className="p-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom de l'article</th>
            <th>Prix</th>
            <th>Unité</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {
            productsOrder.map(product => 
              <tr>
                <td>{product.productName}</td>
                <td>{product.productPrice} Fcfa</td>
                <td>{product.quantity}</td>
                <td>{product.productPrice * product.quantity} Fcfa</td>
              </tr>
            )
          }
        </tbody>
      </Table>
      <Link to="/transactions"><FontAwesomeIcon icon={faArrowLeft} /> Retour</Link>
    </Container>
  )
}

export default TransactionDetail;
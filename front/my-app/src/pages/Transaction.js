import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Transaction = () => (
    <Container fluid className="p-3">
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
        <tr>
            <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><Link to="/transactions/1"><FontAwesomeIcon icon={faEye} /></Link></td>
        </tr>
      </tbody>
    </Table>
    </Container>
)

export default Transaction;
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const TransactionDetail = () => (
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
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>

      <h2>Autres informations</h2>
      <label>Prix total: 20541 fcfa</label>
    </Table>
    <Link to="/transactions"><FontAwesomeIcon icon={faArrowLeft}/> Retour</Link>
    </Container>
)

export default TransactionDetail;
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Profile = () => (
    <Container fluid className="p-3">
        <Form>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Pseudo</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Confirmez le mot de passe</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </Col>
                <Button variant="success" className='m-2'>Enregistrer</Button>{' '}
            </Row>
        </Form>
    </Container>
);

export default Profile
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const CreateShoe = () => (
    <Container fluid className="p-3">
        <Form>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Libellé</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Prix</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </Col>
                <Button variant="success" className='m-2'>Enregistrer</Button>{' '}
            </Row>
        </Form>
    </Container>
);

export default CreateShoe
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';




const CreateShoe = () => {

    const [label, setLabel] = useState('')
    const [email, setEmail] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showAlert, setShowAlert] = useState(false)
    const [hiddenAlert, setHiddenAlert] = useState(true)
    const [messageAlert, setMessageAlert] = useState('')
    const [variantAlert, setVariantAlert] = useState('')

    const clearForm = () => {
        setLabel('');
        setPrice('');
        setImage('');
        setDescription('');
    }

    const addShoe = async () => {
        console.log("Add shoe");
        console.log(price);

        await fetch('http://localhost:8086/product', {
            method: 'POST',
            body: JSON.stringify({
                label: label,
                price: price,
                description: description,
                image: image
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setShow(true);
                setMessageAlert("Votre produit a été enregistré avec succès !");
                setVariantAlert("success");
                console.log("Success !");
                clearForm();
            })
            .catch((err) => {
                console.log(err.message);
                setHiddenAlert(false);
                setMessageAlert("Oups ! Une erreur s'est produite lors de la soumission !");
                setVariantAlert("danger");
            });

    }

    useEffect(() => {
        let url1 = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
        let url2 = 'http://localhost:8086/products'
        fetch(url2)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        addShoe();
    }

    return (
        <Container fluid className="p-3">

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enregistremment effectué avec succès !</Modal.Title>
                </Modal.Header>
                <Modal.Body>Enregistremment effectué avec succès !</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>

            <Alert variant={variantAlert} onClose={() => setShowAlert(true)} dismissible hidden={hiddenAlert}>
                <Alert.Heading>{messageAlert}</Alert.Heading>
            </Alert>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Libellé</Form.Label>
                            <Form.Control type="text" placeholder="libellé" value={label} onChange={(e) => setLabel(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Prix</Form.Label>
                            <Form.Control type="text" placeholder="prix" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" onChange={(e) => setDescription(e.target.value)} rows={3} value={description} />
                        </Form.Group>
                    </Col>
                    <Button variant="success" className='m-2' type='submit'>Enregistrer</Button>{' '}
                </Row>
            </Form>
        </Container>
    )
};

export default CreateShoe
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { selectProductsOrder } from '../components/counterSlice';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { clearProductsOrder } from '../components/counterSlice';
import { useDispatch } from 'react-redux';



const Market = () => {

  const productsOrder = useSelector(selectProductsOrder)
  const [totalPrice, setTotalPrice] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [hiddenAlert, setHiddenAlert] = useState(true)
  const [messageAlert, setMessageAlert] = useState('')
  const [variantAlert, setVariantAlert] = useState('')
  const dispatch = useDispatch();


  const figureTotal = (productsOrder) => {
    let total = 0
    productsOrder.map(product => total = total + product.price * product.qte)
    return total
  }

  const addOrder = (productsOrder) => {
    let data = {
      total: figureTotal(productsOrder),
      userId: 1,
      paymentProduct: []
    };

    productsOrder.map(product => {
      let dataProduct = {
        productId: product.id,
        productPrice: product.price,
        quantity: product.qte,
        total: product.total,
        productName: product.label
      }
      data.paymentProduct.push(dataProduct)
    })
    console.log("Data before post:" + JSON.stringify(data));
    fetch("http://localhost:8087/payment", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json())
      .then(response => {
        if (response.status == 201) {
          // Clear products order
          dispatch(clearProductsOrder())

          setHiddenAlert(false);
          setMessageAlert("Votre commande a été enregistrée avec succès !");
          setVariantAlert("success");
          console.log(JSON.stringify(response))
        } else {
          setHiddenAlert(true);
          setMessageAlert("Oups ! Une erreur s'est produite lors de la soumission !");
          setVariantAlert("danger");
        }
        console.log(JSON.stringify(response))
      })
      .catch(error => {
        setHiddenAlert(true);
        setMessageAlert("Oups ! Une erreur s'est produite lors de la soumission !");
        setVariantAlert("danger");
        console.error(error)
      })
  }

  return (
    <Container fluid className="p-3">
      <Alert variant={variantAlert} onClose={() => setShowAlert(true)} dismissible hidden={hiddenAlert}>
        <Alert.Heading>{messageAlert}</Alert.Heading>
      </Alert>
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
          {
            productsOrder.map((product) => {
              let tot = product.qte * product.price
              return (
                <tr>
                  <td>{product.label}</td>
                  <td>{product.price}</td>
                  <td>{product.qte}</td>
                  <td>{tot}</td>
                </tr>
              )
            }
            )
          }
        </tbody>


        <h2>Autres informations</h2>
        <label>Prix total: {figureTotal(productsOrder)} fcfa</label>
      </Table>
      <Button as="input" type="button" onClick={() => addOrder(productsOrder)} value="Payer" />
    </Container>
  )
}

export default Market;
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';
import { selectProductsOrder, clearProductsOrder, selectTransactionsNbre, addNbreTransactions } from '../components/counterSlice';
import env from "@beam-australia/react-env";

const Market = () => {

  const productsOrder = useSelector(selectProductsOrder)
  const [showAlert, setShowAlert] = useState(false)
  const [hiddenAlert, setHiddenAlert] = useState(true)
  const [messageAlert, setMessageAlert] = useState('')
  const [variantAlert, setVariantAlert] = useState('')
  const dispatch = useDispatch();
  const hidden = productsOrder.length > 0 ? false: true;
  const nbreTrans = useSelector(selectTransactionsNbre)


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
    fetch(env("BASE_URL_PAYMENTS")+"/payment", {
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

          // Update nbre transactions
          dispatch(addNbreTransactions({nbreTransactions: nbreTrans+1}));
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

  function ShowLastLine(){
    if(hidden){
      return (<tr><td colSpan={4}>Nous n'avons aucun article .</td></tr>)
    }
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

          <ShowLastLine />
        </tbody>
 
        <h2 hidden={hidden}>Autres informations</h2>
        <label hidden={hidden}>Prix total: {figureTotal(productsOrder)} fcfa</label>
      </Table>
      <Button as="input" type="button" onClick={() => addOrder(productsOrder)} value="Payer" hidden={hidden}/>
    </Container>
  )
}

export default Market;
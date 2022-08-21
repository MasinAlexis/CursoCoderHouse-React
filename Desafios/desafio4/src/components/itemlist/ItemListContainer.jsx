import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const ItemListContainer = (props) => {
  let { producto, precio, unidades, stock } = props
  const [product] =useState(producto)
  const [price] = useState(precio)
  const [unidadesProd, setUnidadesProd] = useState(unidades)
  const [stockProd, setStockProduct] = useState(stock)

  const incrementa = () => {
    if(stockProd > 0){
      setUnidadesProd(unidadesProd + 1)
      setStockProduct(stockProd - 1)
    }
  }

  const decrementa = () => {
    if(unidadesProd > 0){
      setUnidadesProd(unidadesProd - 1)
      setStockProduct(stockProd + 1)
    }
  }

  return (
    <div className="justify-content-end flex-grow-1 my-2 my-lg-70">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{ product }</Card.Title>
            <div>Precio: ${ price } </div>
            <div>Stock Disponible: { stockProd } </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <div>
              <div>Unidades: { unidadesProd }</div>
              <Button onClick={decrementa} variant="danger">-</Button>
              <Button onClick={incrementa} variant="success">+</Button>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className='display-flex'>
              <Button variant="primary">Agregar al Carrito</Button>{' '}
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}

export default ItemListContainer

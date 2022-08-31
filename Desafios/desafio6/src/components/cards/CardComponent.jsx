import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonComponent from '../bottons/ButtonComponent';

const CardComponent = ({unidades, stock, producto, precio, imagen}) => {
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
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{ producto }</Card.Title>
            <div>Precio: ${ precio } </div>
            <div>Stock Disponible: { stockProd } </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <div>
              <div>Unidades: { unidadesProd }</div>
              <div>
                <ButtonComponent funcion={decrementa} variante={"danger"} descripcion={"-"}/>
                <ButtonComponent funcion={incrementa} variante={"success"} descripcion={"+"}/>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className='display-flex'>
                <ButtonComponent funcion={() => {}} variante={"primary"} descripcion={"Agregar al Carrito"}/>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}

export default CardComponent

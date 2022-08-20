import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemListContainer = ({props}) => {
  return (
    <div className="justify-content-end flex-grow-1 my-2 my-lg-70">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Futuro producto</Card.Title>
          <Card.Text>
            { props }
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Descripción del futuro producto</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}

export default ItemListContainer

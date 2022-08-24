import React from 'react'
import Button from 'react-bootstrap/Button';

const ButtonComponent = ({funcion, variante, descripcion}) => {
  return (
    <>
      <Button onClick={funcion} variant={`${variante}`}>{descripcion}</Button>
    </>
  )
}

export default ButtonComponent

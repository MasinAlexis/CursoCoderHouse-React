import React, { useState } from 'react'

const codigo = (props) => {
    const { number, title } = props //Manera de extraer valores de los props
    const [state, setState] = React.useState('Profe de react')
    const [state2, setState2] = useState(1)
    return (
        <div>
            <h1> { state } </h1>
            <h1> { state2 } </h1>
            <button onClick={()=> setState('Profe de angular')}> Cambiar el nombre </button>
            <button onClick={()=> setState2(state2 + 1)}> Sumar </button> 
        </div>
  )
}

export default codigo

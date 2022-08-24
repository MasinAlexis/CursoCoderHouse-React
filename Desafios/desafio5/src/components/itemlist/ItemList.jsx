import React , {useEffect, useState} from 'react'
import CardComponent from '../cards/CardComponent'
import './itemlist.css' 

const ItemList = ({productos}) => {
  const [prod , setProd] = useState(productos)

  useEffect(() => {
    const task = new Promise((resolve, rejected) => {
        setTimeout(() => {
          resolve(prod)
        }, 20000);
    })
    task.then(resultado => setProd(resultado))
    return () => {
    }
  }, [])
  return (
    <div  className="cardsFields">
        {productos.length < 1 ? <h1>Cargando Productos</h1> : productos.map((item) => (<CardComponent key={item.id} {...item}/>))}
    </div>
  )
}

export default ItemList

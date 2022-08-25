import React , {useEffect, useState} from 'react'
import CardComponent from '../cards/CardComponent'
import './itemlist.css' 
import productos from '../../products.json'

const ItemList = () => {
  const [prod , setProd] = useState([])

  useEffect(() => {
    const task = new Promise((resolve, rejected) => {
        setTimeout(() => {
          resolve(productos)
        }, 2000);
    })
    task.then(resultado => setProd(resultado))
    return () => {
    }
  }, [])
  return (
    <div  className="cardsFields">
        {prod === [] ? <h1>Cargando Productos</h1> : prod.map((item) => (<CardComponent key={item.id} {...item}/>))}
    </div>
  )
}

export default ItemList

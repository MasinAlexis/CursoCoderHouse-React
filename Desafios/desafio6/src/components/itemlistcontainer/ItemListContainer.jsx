import React, { useState, useEffect } from 'react'
import productos from '../../products.json'
import ItemList from '../itemlist/ItemList';

const ItemListContainer = () => {  
  return(
    <div className='justify-content-end flex-grow-1 my-2 my-lg-70'>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer

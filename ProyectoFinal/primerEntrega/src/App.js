import NavBar from './components/navbar/NavBar';
import './App.css'
import ItemListContainer from './components/itemlist/ItemListContainer';

function App() {
  let productos = [
    {
      producto: "Remera",
      precio: 500,
      unidades: 0,
      stock:8,
    },
    {
      producto: "Musculosa",
      precio: 400,
      unidades: 0,
      stock:5,
    },
    {
      producto: "Camiseta",
      precio: 550,
      unidades: 0,
      stock:15,
    },
    {
      producto: "Medias",
      precio: 50,
      unidades: 0,
      stock:10,
    }
  ]
  return (
      <div className='container'>
        <NavBar/>
        <div className='cardsFields'>
          {productos.map((item, index) => (
            <ItemListContainer key={index} producto={item.producto} precio={item.precio} unidades={item.unidades} stock={item.stock}/>
          ))}
        </div>
      </div>
    );
}

export default App;

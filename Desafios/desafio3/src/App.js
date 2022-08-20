import NavBar from './components/navbar/NavBar';
import './App.css'
import ItemListContainer from './components/itemlist/ItemListContainer';

function App() {
  return (
      <div className='container'>
        <NavBar/>
        <div>
          <ItemListContainer props="Datos pasados por parametros"/>
        </div>
      </div>
    );
}

export default App;

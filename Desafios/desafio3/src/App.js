import NavBar from './components/navbar/NavBar';
import './App.css'
import ItemListContainer from './components/itemlist/ItemListContainer';

function App() {
  return (
      <div className='container'>
        <NavBar/>
        <div>
          <ItemListContainer props="Pasando datos desde greeting"/>
        </div>
      </div>
    );
}

export default App;

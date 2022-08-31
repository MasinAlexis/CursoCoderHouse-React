import NavBar from './components/navbar/NavBar';
import './App.css'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

function App() {
  return (
      <div className='container'>
        <NavBar/>
        <div>
          <ItemListContainer/>
        </div>
      </div>
    );
}

export default App;

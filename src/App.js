import './App.css';
import logodbz from './img/logo-dbz.png';
import ListaDeTareas from './components/listaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='logo-imagen-contenedor'>
        <img 
        src={logodbz}
        className='logo-dbz'
        alt='logo dragon ball Z' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>  
        <ListaDeTareas />
      </div>      
    </div>
  );
}

export default App;

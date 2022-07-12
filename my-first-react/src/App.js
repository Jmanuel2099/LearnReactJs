import './App.css';
import {Testimonio} from './Componentes/Testimonio';
function App() {
  return (
    <div className="App">
      <div className='Contenedor-principal'>
        <h1>Testimonos de estudiantes</h1>
        <Testimonio 
        nombre = 'Jose'
        pais = 'Prueba'
        imagen = 'prueba'
        cargo = 'prueba'
        empresa = 'prueba'
        testimonio = 'prueba'/>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {Escena} from './componentes/escenas/Escena';
import {frases} from './datos/frases';
import {StyledEscena} from './componentes/escenas/styledEscena';

function App() {
  return (
    <div className="App">
      
      {frases.map( frase =>(<Escena texto={frase.frase}  />))}
      
    </div>
  );
}

export default App;

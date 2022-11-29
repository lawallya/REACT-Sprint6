import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Escena } from './componentes/escenas/Escena';
import { frases } from './datos/frases';
import { StyledEscena, Resaltado } from './componentes/escenas/styledEscena';
import { StyledButton } from './componentes/styledButton/styledButton';


function App() {
  const [posicion, setPosicion] = useState(1);
  /*function actualizar(x){
   if( posicion== 4 && x == 1) { setPosicion(posicion = 1)}
   else if( posicion== 1 && x == -1 ) { setPosicion(posicion = 4)}
   else setPosicion(posicion + x)
 };// no coge esta condicion  sigue aumentando el contador


 /**const resaltar = (element) => {
   if(element.id == posicion){ element.className = "resaltar";}
   };*/

  const siguiente = () =>
    setPosicion((posicion) => posicion + 1);


  // setPosicion ( (posicion)=> {if (posicion >= 4) {posicion == 1} else {++posicion}}; No coje esta condicion, sigue aumentando la posicion

  const anterior = () => setPosicion((posicion) => posicion - 1);
  //if (posicion == 1){ setPosicion( posicion = 4)} Esta tampoco la coje, con dos setPosicion




  return (
    <div className="App">
      <StyledButton onClick={anterior}>Anterior</StyledButton>
      <StyledButton onClick={siguiente}>Siguiente</StyledButton>
      <div>
        {frases.map(frase => (<Escena 
        texto={frase.frase}  
        key ={frase.id}
        resaltado = {posicion === frase.id}/**Vable booleana para indicar si el parrafo tiene 
        que estar señalado, que es cuando el id coincide con la vable posicion */
        />))}
        <h1>{posicion}</h1>
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import { StyledEscena} from './styledEscena';



/**EJERCICIO 1 */
//export const Escena = () => <p>"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"</p>;

//EJERCICIO 2 Y 4
export function Escena({texto, resaltado}) {
  const className = resaltado? "Resaltado": "";/**si la booleana resaltado es true entonces hay que 
  resaltar la frase, poniendole una clase al styledComponent */
  /*No puedo poner aqui el estado posicion ni importando App.js, tengo que enviarle un parámetro
  que defino en  App.js*/
        return (<StyledEscena className ={className} >{texto} </StyledEscena>)
}






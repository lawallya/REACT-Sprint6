import React from 'react'
import {StyledEscena} from './styledEscena';


/**EJERCICIO 1 */
//export const Escena = () => <p>"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"</p>;

//EJERCICIO 2

export function Escena({texto}) {
    return (
        <StyledEscena>{texto}</StyledEscena>
    );
}
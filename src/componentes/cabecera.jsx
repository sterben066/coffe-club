import React from 'react';
import Menu from './nav';
import '../style/cabecera.css';


function Cabecera(props) {
  return(
    <div className='cabecera'>
      <img src={require( `../multimedia/imagenes/${props.imagen}.jpg`)}
        alt={(`nombre-${props.tipo}`)}
        title={(`${props.tipo}`)} />
      <Menu/>
    </div>
  )
}

export default Cabecera;

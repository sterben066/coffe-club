import React from 'react';
import '../style/indice.css';

let Indice = (props) => {
  return(
    <div className='cTipos'>
      <div className='cTitulo'>
        <h2 className='Titulo'>
          Tipos de Café
        </h2>
      </div>
      <div className=''>
        <img className='tipos' src={require( `../multimedia/imagenes/${props.imagen}.jpg`)}
          alt={(`nombre-${props.tipo}`)}
          title={(`${props.tipo}`)} />
      </div>
    </div>
  )
}

export default Indice;
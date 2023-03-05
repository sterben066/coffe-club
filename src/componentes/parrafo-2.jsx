import React from 'react';
import '../style/parrafo-2.css';

function Derecha(props) {
  return (
    <div className='contenedor-Derecha'>
      <div>
        <div className='contenedor-texto-Derecha'>
          <h2 className='titulo-Derecha'>{props.titulo}</h2>
          <p className='texto-cafe-Derecha'>
            <b className='nombre-cafe-Derecha'>{props.nombre}</b>
            {props.testimonio}</p>
        </div>
          <div className='inicio'>
            <a href='#App-section'>ir al comienzo</a>
          </div>
      </div>
      
      <img className='imagen-Derecha'
        src={require( `../multimedia/imagenes/${props.imagen}.jpg`)}
        alt={(`nombre-${props.tipo}`)}
        title={(`${props.tipo}`)} />
        
    </div>
  )
};

export default Derecha;
import React from 'react';
import '../style/parrafo-1.css';

function Izquierda(props) {
  return (
    <div className='contenedor-Izquierda'>

      <img className='imagen-Izquierda'
      src={require( `../multimedia/imagenes/${props.imagen}.jpg`)}
      alt={(`nombre-${props.tipo}`)}
      title={(`${props.tipo}`)} />

      <div className='contenedor-tex'>
        <div className='contenedor-texto-izquierda'>
          <h2 className='titulo-izquierda'>{props.titulo}</h2>
          <p className='texto-cafe-izquierda'>
            <b className='nombre-cafe-izquierda'>{props.nombre}</b>
            {props.testimonio}
          </p>
        </div>

        <div className='inicio'>
          <a href='#App-section'>ir al comienzo</a>
        </div>
      </div>
    </div>
  )
};

export default Izquierda;
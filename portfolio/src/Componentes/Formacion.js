import React from 'react'
import fotoFormacion from '../Imagenes/formacion.png'

const Formacion = () => {
  return (
    <div className='ContenedorDosColumnas' > 
      <div>
        <img className='FotoFormacion'
            src={fotoFormacion}
            alt="Foto del Portfolio"
        />

    </div>
      <ul className='Lista'>
          <h2>Formación Académica</h2>
        <ul>
            <h5>Electro Electrónica</h5>
            <li>Ciclo Básico Tecnologio - UTU Juan Lacaze, Colonia del Sacramento</li>
            <li>Bachillerato Electro Electrónica UTU Colonia del Sacramento</li>
        </ul>    
        <ul>
            <h5>Programación</h5>
            <li>Analista Progrmador CTC-ORT Colonia del Sacramento</li>
            <li>Programamción para Dispositivos Mobiles CTC Colonia del Sacramento </li>
        </ul> 
        <ul>
            <h5>Tecnologia de la Información</h5>
            <li>Técnico en Soporte Informático CTC Colonia del Sacramento</li>
            <li>Redes Inalámbricas CTC Colonia del Sacramento</li>
        </ul> 
      </ul>  
    </div>
  )
}

export default Formacion
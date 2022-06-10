import React from 'react'
import fotoTrabajo from '../Imagenes/Trabajo.png'

const Experiencia = () => {
  return (
    <div className='ContenedorDosColumnas' id='Experiencia'>
        <div>
        <img className='FotoExperiencia'
            src={fotoTrabajo}
            alt="Foto del Portfolio"
        />

    </div>
      <ul className='Lista'>
      <h2>Experiencia Laboral</h2>
        <ul>
            <h5>Electro Electrónica</h5>
            <li>Técnico reparacion Slots - Casinos del Estado </li>
            <li>Docente de Tecnología - UTU, </li>
        </ul>    
        <ul>
            <h5>Tecnologia de la Información</h5>
            <li>Analista en Sistemas - Yazaki Uruguay S.A.</li>
            <li>Analista Jr de Sistemas - Hotel Casino y Spa Mantra y en Casino Nogaró</li>
            <li>Help Desk - Hospital Evangélico</li>
        </ul> 
      </ul>  
    </div>
  )
}

export default Experiencia
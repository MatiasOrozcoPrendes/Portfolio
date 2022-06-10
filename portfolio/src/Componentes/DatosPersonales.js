import React from 'react'
import foto from '../Imagenes/foto.jpg'
import Curriculum from '../Imagenes/Curriculum Vitae Matias Orozco.pdf'

const DatosPersonales = () => {
  return (
    <div className='ContenedorDosColumnas' >
        <div>
        <img className='FotoPortfolio'
            src={foto}
            alt="Foto del Portfolio"
        />

    </div>
    <div> 
      
      <ul className='Lista'>
        <h2>Info. Personal</h2>
        <p>Nombre: Matías Orozco Prendes</p>
        <p>Fecha de Nacimiento: 31 de Mayo de 1990</p>
        <p>Estado Civil: Casado</p>
        <p>Telefono: 097010618</p>
        <p>Correo Electrónico: matias.orozco.prendes@gmail.com</p>
        <button className='Botones' id='Formacion'>
          <a href={Curriculum} target="_blank" rel="noopener noreferrer" download="Curriculum Vitae Matías Orozco.pdf"> 
          Descargar Curriculum 
          </a>
        </button>
      </ul>  
    </div>
    </div>
  )
 
}

export default DatosPersonales
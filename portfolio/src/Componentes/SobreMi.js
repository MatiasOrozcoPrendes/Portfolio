import React from 'react'
import fotoSobreMi from '../Imagenes/SobreMi.jpg'

const SobreMi = () => {
  return (
    <div className='ContenedorDosColumnas' > 
    <div>
        <img className='FotoSobreMi'
            src={fotoSobreMi}
            alt="Foto del Portfolio"
        />

    </div>
    <div>
      <ul className='Lista'>
        <h3>Sobre Mi</h3>
        <p>Desde joven me interese en la electrónica y en todo lo referente a la informática. </p>
        <p>Terminando mis estudios, trabaje un tiempo en Tecnología de la Información y como profesor hasta que comencé en mi trabajo actual donde exploto mis conocimientos en electrónica.</p>
        <p>En este momento estoy retomando la programación, actualizándome en nuevas tecnólogas y en busca de un trabajo de medio tiempo en formato home office.</p>
        <p id='DatosPersonales'>A continuación pueden encontrar mis datos personales, información sobre mi formación académica, experiencia laboral y redes sociales.</p>
      </ul>  
    </div>
    </div>
  )
}

export default SobreMi
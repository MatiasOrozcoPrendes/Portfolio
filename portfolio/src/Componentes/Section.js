import React from 'react'
import DatosPersonales from './DatosPersonales'
import Experiencia from './Experiencia'
import Formacion from './Formacion'
import RedesSociales from './RedesSociales'
import SobreMi from './SobreMi'


const Section = () => {
  return (
    <ul>
    <SobreMi />
    <DatosPersonales/>
    <Formacion />
    <Experiencia />
    <RedesSociales />
    </ul>
  )
}

export default Section
import React from 'react'

const Header = () => {
  return (
    <div className='Header' >
        <div>
            <a className='Titulo' href='#SobreMi'><h1>Matias Orozco</h1></a>
        </div>
        <div>
    
        </div>
        <div className='UnaLinea'>
          <h4 className='Botones'><a href='#DatosPersonales'>Info Personal</a></h4>
          <h4 className='Botones'><a href='#Formacion'>Formación</a></h4>
          <h4 className='Botones'><a href='#Experiencia'>Experiencia</a></h4>
          <h4 className='Botones'><a href='#RedesSociales'>Redes Sociales</a></h4>
        </div>
        
    </div>
  )
}

export default Header
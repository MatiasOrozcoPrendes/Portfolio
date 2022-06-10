import React from 'react'
import fotoFacebook from '../Imagenes/facebook.png'
import fotoInstagram from '../Imagenes/instagram.png'
import fotoLinkedin from '../Imagenes/linkedin.png'
import fotoSpotify from '../Imagenes/spotify.png'

const RedesSociales = () => {
  return (
    <div className='Contenedor' id='RedesSociales'>
      <div className='UnaLinea'>
        <a href='https://www.facebook.com/elmaturock/' target='_blank' rel="noreferrer">
        <img className='Logo'
            src={fotoFacebook}
            alt="Logo Facebook "
        />
        </a>  
        <a href='https://www.instagram.com/matiasorozcoprendes/' target='_blank' rel="noreferrer">
        <img className='Logo'
            src={fotoInstagram}
            alt="Logo Instagram "
        />
        </a>  
        <a href='https://www.linkedin.com/in/matias-orozco-5a3354116/' target='_blank' rel="noreferrer">
        <img className='Logo'
            src={fotoLinkedin}
            alt="Logo Linkedin "
        />
        </a>  
        <a href='https://open.spotify.com/user/12146079500' target='_blank' rel="noreferrer">
        <img className='Logo'
            src={fotoSpotify}
            alt="Logo Spotify "
        />
        </a>  
      </div>
    </div>
  )
}

export default RedesSociales
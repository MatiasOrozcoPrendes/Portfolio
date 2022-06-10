import React from 'react'
import Avatar from '../Imagenes/Avatar.png'

const AvatarInferior = () => {
  return (
    <div className='AvatarInferior'>
      <a href='#Inicio'>
        <img className='Avatar'
            src={Avatar}
            alt="Avatar "
        />
        </a>    
    </div>

  )
}

export default AvatarInferior
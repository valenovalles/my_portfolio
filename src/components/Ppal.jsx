import React from 'react'
import Foto from '../images/foto_portfolio_2.png'
import Typewriter from 'typewriter-effect';

function Ppal() {
  return (
    <div className="ppal__section">
      <img src={Foto} alt="" className="ppal__section--img" />

      <div className='ppal__section--texts'>
      <div className='ppal__section--title'>
      <Typewriter 
       options={{
        loop: true,
        delay:300,
      }}
       onInit ={typewriter  => {
        typewriter 
        .typeString ('Valentina Ovalles')
        .start()
      }}
      />
      </div>
      <p className='ppal__section--aboutMe'>Front-End Developer Junior con una sólida trayectoria en marketing y una pasión por la tecnología. Mi experiencia en marketing me ofrece una visión estratégica y habilidades de comunicación que ahora aplico en el desarrollo web.</p>

      </div>
        
    </div>
  )
}

export default Ppal
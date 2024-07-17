import React from 'react'
import { Fade } from "react-awesome-reveal";

function AboutMe({me}) {
  return (

    <div className='skills'>
       <Fade cascade className='skills__title'>
            <p>Desarrollo web con visión de marketing:</p>
            <p>el perfil completo que tu empresa necesita.</p>
        </Fade>

    <div className='skills__list'>
        
            {me.map((each, index)=> (
        <div key={index} className='skills__div'>
        <article className='skills__points'>
            <img src={each.image} alt="" className='skills__icon'/>
            <h4>{each.text}</h4>
        </article>
        </div>
    ))}
    </div>
    </div>
  )
}

export default AboutMe
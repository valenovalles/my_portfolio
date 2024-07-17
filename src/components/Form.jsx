import React from 'react'

function Form() {

  const handleCopy = () => {
    
    const email = "valenovalles@gmail.com";
    
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copiado al portapapeles!');
    }).catch(err => {
      console.error('Error al copiar el email: ', err);
    });
  };
 
  return (
    <div className='contact' id='contact'>
        <h4>¿Hablamos?</h4>
        <p className='contact__text'>Si has llegado hasta aquí y quieres contactar conmigo, puedes escribirme un correo electrónico. ¡Estaré encantada de responderte!</p>

        <div className='contact__buttons'>
        <a href="mailto:valenovalles@gmail.com" target='_blank' className='contact__btn'>Escríbeme</a>

        <button onClick={handleCopy} className='contact__copyBtn'>Copiar mi email</button>

        <a href="https://www.linkedin.com/in/valentinaovallesr/" target='_blank' className='contact__btn'>Mi perfil en LinkedIn</a>
        
        </div>
    </div>
  )
}

export default Form
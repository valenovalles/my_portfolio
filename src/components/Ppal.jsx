import Foto from '../images/img_perfil_2026.png';
import Typewriter from 'typewriter-effect';
import Btn from './Btn';

function Ppal() {
  return (
    <div className="ppal__section">
      <img src={Foto} alt="" className="ppal__section--img" />

      <div>
        <div className='ppal__section--title'>
          <Typewriter 
            options={{
              loop: true,
              delay: 300,
            }}
            onInit={typewriter => {
              typewriter.typeString('Valentina Ovalles').start();
            }}
          />
        </div>

        <p className='ppal__section--aboutMe'>
          Front-End Developer Junior con una sólida trayectoria en marketing y una pasión por la tecnología. Mi experiencia en marketing me ofrece una visión estratégica y habilidades de comunicación que ahora aplico en el desarrollo web.
        </p>

        <div style={{ display: 'flex', gap: '16px', marginTop: '16px', justifyContent: 'center' }}>
          <Btn
            text="VER CV"
            bgColor="#7C7CF8"
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/17NdS3m2_biS4V9IAOEvTO9wdPLiN2DoY/view?usp=sharing',
                '_blank'
              )
            }
          />
          <Btn
            text="PERFIL LINKEDIN"
            bgColor="#5B5BE6"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/valentinaovallesr/',
                '_blank'
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Ppal;

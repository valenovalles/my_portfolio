import MenuIcon from '../images/menu.png'
import { Link, Route, Routes } from "react-router-dom";

function Menu({burgerMenu, clickMenuBurger}) {

  function handleClick(ev){
    clickMenuBurger(ev);
    console.log("click")
    return <Link to="/menu-mobile"></Link>
  }


  return (
    <div className='menu'>

    <div className='menu__icons'>
    <a href="https://www.linkedin.com/in/valentinaovallesr/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
    <a href="https://github.com/valenovalles" target='_blank'><i class="fa-brands fa-github" target='_blank'></i></a>
    <a href="https://drive.google.com/file/d/17NdS3m2_biS4V9IAOEvTO9wdPLiN2DoY/view?usp=sharing" target='_blank'><i class="fa-solid fa-file-arrow-down"></i></a>
    </div>

    
    <div className='menu__div'>
        <ul className="menu__div--list">
            <a href="#projects"><li>Proyectos</li></a>
            <a href="#tech"><li>Tecnologías</li></a>
            <a href="#contact"><li>Contáctame</li></a>
        </ul>
    </div>

    <div className='menu__icon'>
        <img src={MenuIcon} alt="" className='menu__icon--burger' onClick={handleClick}/>
    </div>
  

    </div>
  )
}

export default Menu
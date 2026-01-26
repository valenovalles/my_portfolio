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
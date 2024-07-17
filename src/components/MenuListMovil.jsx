import React from 'react'
import { Link, Route, Routes } from "react-router-dom";

function MenuListMovil(burgerMenu) {
  return (
    <div className='menu__div'>
        <ul className="menu__div--listMobile">
            <a href="#projects"><li>Proyectos</li></a>
            <a href="#tech"><li>Tecnologías</li></a>
            <a href="#contact"><li>Contáctame</li></a>
        </ul>
    </div>
  )
}

export default MenuListMovil
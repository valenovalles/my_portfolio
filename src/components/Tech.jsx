import React from 'react'
import { Carousel } from 'nuka-carousel';
import html from '../images/html.png';
import css from '../images/css.png';
import sass from '../images/sass.png';
import js from '../images/javascript.png';
import react from '../images/react.png';
import mysql from '../images/mysql.png';
import node from '../images/node.png';
import git from '../images/git.png';
import github from '../images/github.png';
import visual from '../images/visual.png';


function Tech() {

    
  return (
    <div className='technologies' id='tech'>

      <h3 className='technologies__title'>Tecnologías</h3>

    <Carousel scrollDistance="slide" autoplay={true} autoplayInterval={3000} wrapMode="wrap">
    <img src={html} className='technologies__icon'/>
    <img src={css} className='technologies__icon'/>
    <img src={sass} className='technologies__icon'/>
    <img src={js} className='technologies__icon'/>
    <img src={react} className='technologies__icon'/>
    <img src={mysql} className='technologies__icon'/>+<img src={node} className='technologies__icon'/>
    <img src={git}  className='technologies__icon'/>
    <img src={github} className='technologies__icon'/>
    <img src={visual} className='technologies__icon'/>
    
    </Carousel>
    </div>
  )
}

export default Tech
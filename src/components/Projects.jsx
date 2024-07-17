import React from 'react'

function Projects({data}) {
  return (
    <div className='projects' id='projects'>
       <h3 className='projects__title'>Mis proyectos</h3>
    <div className='projects__list'>

    {data.map((eachProject, index) => (
    
      <div key={index}>
        <article className='projects__card'>
            <img src= {eachProject.image} alt="" className='projects__image' />
            <h4 className='projectss__title-2'>{eachProject.title}</h4>
            <p className='projects__text'>{eachProject.extract}</p>
            <a href={eachProject.link} className='projects__link'>Ver proyecto</a>
        </article>
      </div>
    ))}
    </div>
    </div>
  )
}

export default Projects
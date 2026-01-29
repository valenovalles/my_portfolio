function Projects({ data }) {
  return (
    <div className='projects' id='projects'>
      <h3 className='projects__title'>Mis proyectos</h3>
      <div className='projects__list'>
        {data.map((eachProject, index) => (
          <article className='projects__card' key={index}>
            <div className='projects__info'>
              <h4 className='projects__title-2'>{eachProject.title}</h4>
              <p className='projects__text'>{eachProject.extract}</p>
              {/* Tecnologías */}
              <div className='projects__technologies'>
                {eachProject.technologies.map((tech, i) => (
                  <span className='projects__chip' key={i}>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={eachProject.link} className='projects__link'>
                Ver proyecto
              </a>
            </div>
            <div className='projects__thumb'>
              <img
                src={eachProject.image}
                alt={eachProject.title}
                className='projects__image'
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects

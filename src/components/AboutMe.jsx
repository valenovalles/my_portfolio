function AboutMe() {
  return (
    <section className="skills">
      <h3 className="skills__title">
        Del diseño al desarrollo, transformando ideas en productos reales.
      </h3>

      <div className="skills__layout">
        {/* TARJETA GRANDE */}
        <article className="skills__card skills__card--featured">
          <h4>Desarrollo Frontend</h4>
          <p>
            Desarrollo interfaces web modernas, accesibles y optimizadas,
            transformando diseños en productos funcionales que ofrecen una
            experiencia fluida y orientada a resultados de negocio.
          </p>
          <p>
            Desarrolo de componentes reutilizables optimizados para
            aplicaciones móviles y alineados con estándares de diseño.
          </p>
          <p>
            Colaboración con equipos de desarrolo y negocio, aplicando metodologías Agile para la planificación y entrega de soluciones digitales.
          </p>
        </article>

        {/* TARJETAS PEQUEÑAS */}
        <div className="skills__grid">
          <article className="skills__card skills__card--ux">
            <h4>Diseño UX/UI</h4>
            <p>
              Diseño interfaces y user journeys intuitivos y atractivos que mejoran la
              experiencia del usuario, aplicando principios Mobile First.
            </p>
          </article>

          <article className="skills__card skills__card--wireframe">
            <h4>Wireframing y Prototipado</h4>
            <p>
              Creo wireframes y prototipos interactivos para validar ideas antes
              del desarrollo, asegurando la coherencia y accesibilidad.
            </p>
          </article>

          <article className="skills__card skills__card--research">
            <h4>Conocimiento de Usuario y Negocio</h4>
            <p>
              Analizo usuarios, objetivos y métricas para diseñar soluciones
              alineadas con el negocio. (B2B y B2C)
            </p>
          </article>

          <article className="skills__card skills__card--marketing">
            <h4>Marketing Digital & Conversión</h4>
            <p>
              Aplico principios de SEO, CRO y performance para maximizar el
              impacto de cada proyecto.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

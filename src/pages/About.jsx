function About() {
  return (
    <div className="page about">
      <section className="section">
        <h2 className="section-title">Quiénes somos</h2>
        <p>
          NovaDrive nació en 2015 como una startup chilena dedicada a acercar la
          movilidad inteligente a las personas. Hoy contamos con más de 15
          expertos en electromovilidad y una red nacional de partners que nos
          permite ofrecer una experiencia de compra simple, transparente y
          sin sorpresas.
        </p>
      </section>

      <section className="section">
        {/* Reforzamos los valores que distinguen a la marca. */}
        <h3 className="section-subtitle">Nuestra promesa</h3>
        <ul className="values-list">
          <li>
            Acompañamiento personalizado durante todo el proceso, desde la
            evaluación del presupuesto hasta la documentación final.
          </li>
          <li>
            Flota seleccionada siguiendo criterios de eficiencia, seguridad y
            conectividad.
          </li>
          <li>
            Transparencia absoluta en precios, tiempos de entrega y costos de
            mantención.
          </li>
        </ul>
      </section>

      <section className="section stats">
        <div>
          <strong>2.500+</strong>
          <span>Vehículos entregados</span>
        </div>
        <div>
          <strong>96%</strong>
          <span>Clientes satisfechos</span>
        </div>
        <div>
          <strong>12</strong>
          <span>Alianzas con fabricantes</span>
        </div>
      </section>
    </div>
  )
}

export default About

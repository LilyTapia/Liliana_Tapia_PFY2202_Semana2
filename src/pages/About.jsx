function About() {
  return (
    <div className="space-y-10 pb-20">
      <section className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-brand-md sm:p-12">
        <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">
          Nuestra historia
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Quiénes somos</h2>
        <p className="mt-4 text-lg text-slate-600">
          NovaDrive nació en 2015 como una startup chilena dedicada a acercar la movilidad
          inteligente a las personas. Hoy contamos con más de 15 expertos en electromovilidad
          y una red nacional de partners que nos permite ofrecer una experiencia de compra
          simple, transparente y sin sorpresas.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-brand-md sm:p-12">
        <h3 className="text-2xl font-semibold text-slate-900">Nuestra promesa</h3>
        <p className="mt-3 text-slate-600">
          Nos comprometemos a acompañar a cada cliente con asesoría experta para que tome la
          mejor decisión con información clara y apoyo permanente.
        </p>
        <ul className="mt-6 space-y-3 text-slate-600">
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
            Acompañamiento personalizado durante todo el proceso, desde la evaluación del
            presupuesto hasta la documentación final.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
            Flota seleccionada siguiendo criterios de eficiencia, seguridad y conectividad.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
            Transparencia absoluta en precios, tiempos de entrega y costos de mantención.
          </li>
        </ul>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { figure: '2.500+', label: 'Vehículos entregados' },
          { figure: '96%', label: 'Clientes satisfechos' },
          { figure: '12', label: 'Alianzas con fabricantes' },
        ].map(({ figure, label }) => (
          <div
            key={label}
            className="rounded-3xl border border-slate-200/80 bg-white p-8 text-center shadow-brand-md"
          >
            <strong className="block text-4xl font-semibold text-brand-600">{figure}</strong>
            <span className="mt-2 block text-sm text-slate-600">{label}</span>
          </div>
        ))}
      </section>
    </div>
  )
}

export default About

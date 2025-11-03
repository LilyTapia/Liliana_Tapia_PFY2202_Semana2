function Contact() {
  return (
    <div className="space-y-10 pb-20">
      <section className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-brand-md sm:p-12">
        <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">
          Hablemos
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Contáctanos</h2>
        <p className="mt-4 text-lg text-slate-600">
          Déjanos tus datos y un especialista se comunicará contigo dentro de las próximas 2
          horas hábiles para ayudarte a elegir tu próximo vehículo.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)]">
        <article className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-brand-md sm:p-10">
          <h3 className="text-2xl font-semibold text-slate-900">Canales de atención</h3>
          <p className="mt-2 text-slate-600">
            Nuestro equipo está disponible para resolver tus dudas por el canal que más te
            acomode.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>
              <strong className="text-slate-900">Teléfono:</strong> +56 2 2789 0001
            </li>
            <li>
              <strong className="text-slate-900">WhatsApp:</strong> +56 9 8765 4432
            </li>
            <li>
              <strong className="text-slate-900">Email:</strong> contacto@novadrive.cl
            </li>
          </ul>
          <p className="mt-6 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
            Horario: lunes a viernes de 9:00 a 19:00 hrs. Sábados de 10:00 a 14:00 hrs.
          </p>
        </article>

        <form className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-brand-50 via-white to-brand-100/40 p-8 shadow-brand-md sm:p-10">
          <h3 className="text-2xl font-semibold text-slate-900">Solicitud de asesoría</h3>
          <p className="mt-2 text-slate-600">
            Completa el formulario y te contactaremos para ofrecerte una propuesta personalizada.
          </p>

          <div className="mt-6 grid gap-4">
            <label className="space-y-2 text-sm font-semibold text-slate-800" htmlFor="contact-name">
              Nombre y apellido
              <input
                id="contact-name"
                type="text"
                name="name"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                placeholder="Ej. Camila Pérez"
              />
            </label>

            <label className="space-y-2 text-sm font-semibold text-slate-800" htmlFor="contact-email">
              Correo electrónico
              <input
                id="contact-email"
                type="email"
                name="email"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                placeholder="Ej. camila@email.com"
              />
            </label>

            <label className="space-y-2 text-sm font-semibold text-slate-800" htmlFor="contact-model">
              Modelo de interés
              <input
                id="contact-model"
                type="text"
                name="model"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                placeholder="SUV, Sedán, Pickup..."
              />
            </label>

            <label className="space-y-2 text-sm font-semibold text-slate-800" htmlFor="contact-message">
              Comentarios adicionales
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                placeholder="Cuéntanos en qué etapa del proceso te encuentras"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-200"
          >
            Enviar solicitud
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact

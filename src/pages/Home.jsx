import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import bannerImage from '../assets/img/Banner.png'
import FinanceModal from '../components/FinanceModal.jsx'
import VehicleCard from '../components/VehicleCard.jsx'
import { useVehicles } from '../context/VehicleContext.jsx'

function Home() {
  const { allVehicles } = useVehicles()
  const [selectedVehicle, setSelectedVehicle] = useState(null)

  const featuredVehicles = useMemo(
    () => allVehicles.filter((vehicle) => vehicle.isFeatured).slice(0, 6),
    [allVehicles],
  )

  return (
    <div className="space-y-12 pb-24">
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-brand-lg">
        <img
          src={bannerImage}
          alt="SUV destacado en promoción NovaDrive"
          className="h-auto w-full object-contain"
        />
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-brand-lg sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold uppercase tracking-widest text-brand-700">
              NovaDrive
            </span>
            <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
              Vehículos que inspiran confianza
            </h1>
            <p className="text-lg text-slate-600">
              Experiencia rápida y transparente para elegir tu próximo vehículo, con asesoría
              experta en cada etapa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#inventory"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Explorar catálogo
              </a>
              <Link
                to="/ingresar-vehiculo"
                className="inline-flex items-center gap-2 rounded-full border border-brand-500 px-6 py-3 text-sm font-semibold text-brand-600 transition hover:bg-brand-50"
              >
                Gestionar inventario
              </Link>
            </div>
            <span className="mt-4 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
              Asesoría personalizada
            </span>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
                Mejor desempeño en carretera y ciudad gracias a tecnologías de seguridad avanzada.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
                Entrega garantizada en 48 horas en la Región Metropolitana con soporte permanente.
              </li>
            </ul>
          </div>
          <Link
            to="/inventario"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Ver inventario
          </Link>
        </div>
      </section>

      <section id="inventory" className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">
              Catálogo destacado
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Tu próximo vehículo está aquí</h2>
            <p className="max-w-2xl text-slate-600">
              Seleccionamos los modelos mejor evaluados por nuestros clientes para que vivas una experiencia de compra confiable y con respaldo.
            </p>
          </div>
        </div>

        {featuredVehicles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} onSelect={setSelectedVehicle} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-brand-md">
            <p>
              Aún no hay vehículos destacados. Agrega unidades desde{' '}
              <Link to="/ingresar-vehiculo" className="font-semibold text-brand-600 hover:underline">
                el formulario de inventario
              </Link>{' '}
              para mostrarlas aquí.
            </p>
          </div>
        )}
      </section>

      <section className="rounded-3xl bg-slate-900 p-8 text-white shadow-brand-lg sm:p-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
              Beneficios NovaDrive
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">Acompañamos todo tu viaje de compra</h2>
            <p className="text-slate-200">
              Desde la simulación de crédito hasta la entrega en tu hogar, nuestro equipo te apoya con certificaciones técnicas, convenios exclusivos y acompañamiento personalizado.
            </p>
            <ul className="space-y-3 text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-300" />
                Convenios con las principales financieras y bancos del país.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-300" />
                Taller certificado con garantía de mantenimientos programados por 5 años.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-300" />
                Seguro full cobertura con asistencia en ruta desde $18.990 mensuales.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-300" />
                Entrega de vehículos eléctricos con instalación domiciliaria de cargador incluida.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-brand-100">
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-brand-50">
              Accede a beneficios exclusivos
            </h3>
            <p className="mt-4 text-sm text-slate-200">
              Agenda una asesoría y recibe orientación personalizada para elegir el modelo y financiamiento ideal para tu estilo de vida.
            </p>
            <Link
              to="/contacto"
              className="mt-6 mx-auto inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Agenda una asesoría
            </Link>
          </div>
        </div>
      </section>

      <FinanceModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
    </div>
  )
}

export default Home

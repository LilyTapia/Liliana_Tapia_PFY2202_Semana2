import { useState } from 'react'
import { Link } from 'react-router-dom'
import auto1Image from '../assets/img/Auto1.jpg'
import auto2Image from '../assets/img/Auto2.webp'
import auto3Image from '../assets/img/Auto3.jpg'
import FinanceModal from '../components/FinanceModal.jsx'

// Catálogo base usado para poblar las tarjetas del home.
const featuredVehicles = [
  {
    name: 'Aria EV',
    category: 'SUV eléctrica',
    price: 'Desde $31.990.000',
    autonomy: '520 km de autonomía urbana',
    highlight: 'Ideal para familias que buscan eficiencia y seguridad.',
    image: auto1Image,
    imageAlt: 'SUV Aria EV en color azul marino estacionada en una calle urbana',
    finance: [
      {
        label: 'Plan SmartDrive',
        details: {
          pie: '$6.398.000 (20%)',
          cuota: '$389.000',
          plazo: '48 meses',
          tasa: '1,25% mensual referencial',
        },
      },
      {
        label: 'Plan Cero Estrés',
        details: {
          pie: '$3.199.000 (10%)',
          cuota: '$479.000',
          plazo: '60 meses',
          tasa: '1,45% mensual referencial',
        },
      },
    ],
  },
  {
    name: 'Velocity Hybrid',
    category: 'Sedán híbrido',
    price: 'Desde $25.490.000',
    autonomy: '24 km/l combinados',
    highlight: 'Transición suave entre motor eléctrico y gasolina.',
    image: auto2Image,
    imageAlt: 'Sedán Velocity Hybrid plateado frente a un edificio moderno',
    finance: [
      {
        label: 'Plan Sustentable',
        details: {
          pie: '$5.098.000 (20%)',
          cuota: '$337.000',
          plazo: '48 meses',
          tasa: '1,18% mensual referencial',
        },
      },
      {
        label: 'Plan Flex',
        details: {
          pie: '$2.549.000 (10%)',
          cuota: '$409.000',
          plazo: '60 meses',
          tasa: '1,38% mensual referencial',
        },
      },
    ],
  },
  {
    name: 'Forza Trail',
    category: 'Pickup 4x4',
    price: 'Desde $35.990.000',
    autonomy: '1.200 kg de carga útil',
    highlight: 'Desempeño robusto con asistencias inteligentes.',
    image: auto3Image,
    imageAlt: 'Pickup Forza Trail color rojo avanzando por un camino de montaña',
    finance: [
      {
        label: 'Plan Terreno',
        details: {
          pie: '$7.198.000 (20%)',
          cuota: '$469.000',
          plazo: '48 meses',
          tasa: '1,30% mensual referencial',
        },
      },
      {
        label: 'Plan Full Equip',
        details: {
          pie: '$3.599.000 (10%)',
          cuota: '$559.000',
          plazo: '60 meses',
          tasa: '1,48% mensual referencial',
        },
      },
    ],
  },
]

function Home() {
  // Controla el vehículo seleccionado para abrir el modal con los planes.
  const [selectedVehicle, setSelectedVehicle] = useState(null)

  return (
    <div className="page home">
      <section className="brand-intro">
        <span className="brand-intro__tag">NovaDrive</span>
        <h1 className="brand-intro__title">Vehículos que inspiran confianza</h1>
        <p className="brand-intro__lead">
          Encontramos el modelo ideal para tu estilo de vida, con opciones
          eléctricas, híbridas y combustión eficientes.
        </p>
        <ul className="brand-intro__highlights">
          <li>Mejor desempeño en la carretera y en la ciudad.</li>
          <li>Entrega garantizada en 48 horas en la Región Metropolitana.</li>
        </ul>
        <div className="brand-intro__cta">
          <a className="cta-button" href="#inventory">
            Explorar catálogo
          </a>
        </div>
      </section>

      <section className="hero-card">
        <h2 className="section-title">Tu próximo vehículo está aquí</h2>
        <p>
          Reserva en línea, agenda tu test drive y recibe acompañamiento
          experto en cada etapa, desde la elección hasta la entrega en tu hogar.
        </p>
        <Link className="cta-secondary" to="/contacto">
          Agenda una asesoría
        </Link>
      </section>

      <section id="inventory" className="inventory">
        <h2 className="section-title">Catálogo destacado</h2>
        <div className="inventory__grid">
          {featuredVehicles.map((vehicle) => {
            const { name, category, price, autonomy, highlight, image, imageAlt } =
              vehicle

            return (
              <article key={name} className="vehicle-card">
                <figure className="vehicle-card__media">
                  <img src={image} alt={imageAlt} className="vehicle-card__image" />
                </figure>
                <header>
                  <h3>{name}</h3>
                  <span className="vehicle-card__category">{category}</span>
                </header>
                <p className="vehicle-card__price">{price}</p>
                <p className="vehicle-card__autonomy">{autonomy}</p>
                <p className="vehicle-card__highlight">{highlight}</p>
                <button
                  type="button"
                  className="vehicle-card__button"
                  onClick={() => setSelectedVehicle(vehicle)}
                >
                  Ver opciones de financiamiento
                </button>
              </article>
            )
          })}
        </div>
      </section>

      <section className="services">
        <h2 className="section-title">Beneficios NovaDrive</h2>
        <ul className="services__list">
          <li>Convenios con las principales financieras y bancos del país.</li>
          <li>
            Taller certificado con garantía de mantenimientos programados por 5
            años.
          </li>
          <li>
            Seguro full cobertura con asistencia en ruta desde $18.990 mensuales.
          </li>
          <li>
            Entrega de vehículos eléctricos con instalación domiciliaria de
            cargador incluida.
          </li>
        </ul>
      </section>

      <FinanceModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
      />
    </div>
  )
}

export default Home

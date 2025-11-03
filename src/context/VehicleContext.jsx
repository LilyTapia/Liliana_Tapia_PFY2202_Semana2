/* eslint react-refresh/only-export-components: ["error", { allowExportNames: ["useVehicles"] }] */
import { createContext, useContext, useMemo, useState } from 'react'
import auto1Image from '../assets/img/Auto1.jpg'
import auto2Image from '../assets/img/Auto2.webp'
import auto3Image from '../assets/img/Auto3.jpg'

const VehicleContext = createContext(null)

const initialVehicles = [
  {
    id: 'aria-ev',
    brand: 'Zenith Motors',
    model: 'Aria EV',
    category: 'SUV eléctrica',
    price: 31990000,
    year: 2024,
    description: 'Ideal para familias que buscan eficiencia y seguridad.',
    autonomy: '520 km de autonomía urbana',
    highlight: 'Entrega en 48 horas con cargador domiciliario incluido.',
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
    isFeatured: true,
  },
  {
    id: 'velocity-hybrid',
    brand: 'Orion',
    model: 'Velocity Hybrid',
    category: 'Sedán híbrido',
    price: 25490000,
    year: 2024,
    description: 'Transición suave entre motor eléctrico y gasolina.',
    autonomy: '24 km/l combinados',
    highlight: 'Interior premium con asistente de voz integrado.',
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
    isFeatured: true,
  },
  {
    id: 'forza-trail',
    brand: 'TrailWorks',
    model: 'Forza Trail',
    category: 'Pickup 4x4',
    price: 35990000,
    year: 2025,
    description: 'Desempeño robusto con asistencias inteligentes.',
    autonomy: '1.200 kg de carga útil',
    highlight: 'Incluye paquete off-road y conectividad satelital.',
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
    isFeatured: true,
  },
]

const createVehicleRecord = (vehicle) => {
  const idSource = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `vehicle-${Date.now()}`

  return {
    id: vehicle.id ?? idSource,
    brand: vehicle.brand.trim(),
    model: vehicle.model.trim(),
    category: vehicle.category.trim(),
    price: Number(vehicle.price),
    year: Number(vehicle.year),
    description: vehicle.description.trim(),
    autonomy: vehicle.autonomy?.trim() || '',
    highlight: vehicle.highlight?.trim() || vehicle.description.trim(),
    image: vehicle.image ?? null,
    imageAlt: vehicle.imageAlt ?? '',
    finance: vehicle.finance ?? [],
    isFeatured: Boolean(vehicle.isFeatured),
    createdAt: vehicle.createdAt ?? new Date().toISOString(),
  }
}

export function VehicleProvider({ children }) {
  const [vehicles, setVehicles] = useState(initialVehicles.map(createVehicleRecord))

  const addVehicle = (vehicleData) => {
    setVehicles((prev) => [...prev, createVehicleRecord({ ...vehicleData, isFeatured: false })])
  }

  const value = useMemo(() => ({ vehicles, addVehicle }), [vehicles])

  return <VehicleContext.Provider value={value}>{children}</VehicleContext.Provider>
}

export function useVehicles() {
  const context = useContext(VehicleContext)

  if (!context) {
    throw new Error('useVehicles debe usarse dentro de VehicleProvider')
  }

  return context
}

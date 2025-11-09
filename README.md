# NovaDrive · Catálogo de vehículos

Sitio web realizado para la **Sumativa 1** de FRONTEND II (continuación de la AF2). Se trata de una SPA creada con **React** y **Vite** que incorpora **React Router**, un **estado global** mediante Context API y estilos con **Tailwind CSS**. El objetivo es administrar un inventario de vehículos en línea, permitiendo su registro, filtrado, detalle y marcaje como “posibles compras”.

## Tecnologías principales

- React 19 con Vite.
- React Router DOM para definir las rutas públicas.
- Context API + hooks locales para manejar el inventario de vehículos.
- Tailwind CSS con configuración personalizada (`tailwind.config.js`).

## Páginas y flujo

- **Inicio (`/`)**: destacados, beneficios y acceso rápido a las secciones clave.
- **Quiénes somos (`/quienes-somos`)**: presentación de la concesionaria.
- **Contacto (`/contacto`)**: datos y formulario básico de contacto.
- **Ingresar vehículo (`/ingresar-vehiculo`)**: formulario validado que crea nuevos registros en el estado global.
- **Inventario (`/inventario`)**: tabla reactiva con filtros dinámicos por marca, categoría, precio y año. Incluye acciones para abrir el detalle de cada vehículo.
- **Detalle de vehículo (`/vehiculo/:id`)**: muestra la información extendida del modelo y permite marcarlo o desmarcarlo como posible compra.
- **Posibles compras (`/posibles-compras`)**: listado separado con los vehículos reservados por el usuario, con opción para devolverlos al inventario general.

La navegación se resuelve con un encabezado responsive (`HeaderNav`) y un menú inferior para móviles (`FooterNav`). Ambas barras consumen las rutas declaradas en `App.jsx`.

## Flujo clave · Sumativa 1

1. **Inventario dinámico**: `Inventory.jsx` compone `InventoryFilters` + `InventoryTable`, lo que mantiene los datos originales del contexto y solo altera la proyección filtrada.
2. **Detalle y marcado**: `VehicleDetail.jsx` consulta el contexto para mostrar cada modelo y activar `markAsPossiblePurchase` o `removeFromPossiblePurchases`.
3. **Lista separada**: `PossiblePurchases.jsx` consume la `shortlist` del contexto para renderizar una tabla independiente, cumpliendo la consigna de retirar temporalmente los vehículos marcados del inventario general.

## Despliegue

- Repositorio: [Liliana_Tapia_PFY2202_Semana2](https://github.com/LilyTapia/Liliana_Tapia_PFY2202_Semana2)
- GitHub Pages: https://lilytapia.github.io/Liliana_Tapia_PFY2202_Semana2/

## Requisitos previos

- Node.js 18 o superior.
- npm 9 o superior.

## Scripts disponibles

### `npm install`

Instala las dependencias del proyecto. Si se presentan problemas con permisos en la caché global de npm, se puede utilizar:

```bash
npm_config_cache=.npm-cache npm install
```

### `npm run dev`

Inicia el servidor de desarrollo en `http://localhost:5173`.

### `npm run build`

Genera la versión de producción en la carpeta `dist`.

### `npm run preview`

Sirve localmente el build generado para verificación final.

## Estructura principal

- `src/App.jsx`: Layout general y definición de rutas.
- `src/pages/Home.jsx`: Página de inicio con vehículos destacados y beneficios.
- `src/pages/About.jsx`: Información de la empresa.
- `src/pages/Contact.jsx`: Datos de contacto y formulario.
- `src/pages/Inventory.jsx`: Tabla con filtros dinámicos.
- `src/pages/AddVehicle.jsx`: Formulario para registrar nuevos modelos.
- `src/pages/VehicleDetail.jsx`: Detalle y marcaje como posible compra.
- `src/pages/PossiblePurchases.jsx`: Listado de vehículos reservados.
- `src/context/VehicleContext.jsx`: Estado global reutilizable (inventario + shortlist + helpers).
- `src/components/*`: Header, footer, tarjetas, tabla, filtros, modal de financiamiento y utilidades.

## Personalización

- Puedes ajustar textos, vehículos iniciales y beneficios directamente en los componentes o en el contexto.
- Los estilos utilizan **Tailwind CSS**. La configuración principal está en `tailwind.config.js` y la hoja base en `src/index.css`, donde se definen utilidades personalizadas con `@apply` para mantener la consistencia visual durante la sumativa.

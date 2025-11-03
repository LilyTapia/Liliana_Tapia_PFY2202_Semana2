# NovaDrive · Catálogo de vehículos

Sitio web realizado para la Actividad Formativa semana 2 de FRONTEND II. Se trata de una SPA creada con **React** y **Vite** que incorpora **React Router**, un **estado global** mediante Context API y estilos con **Tailwind CSS**. El objetivo es administrar un inventario de vehículos en línea, permitiendo su registro y visualización desde distintas páginas.

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
- **Inventario (`/inventario`)**: tabla reactiva que muestra todos los vehículos disponibles con marca, modelo, categoría, año, precio y descripción.

La navegación se resuelve con un encabezado responsive (`HeaderNav`) y un menú inferior para móviles (`FooterNav`). Ambas barras consumen las rutas declaradas en `App.jsx`.

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
- `src/pages/Inventory.jsx`: Tabla con el inventario completo.
- `src/pages/AddVehicle.jsx`: Formulario para registrar nuevos modelos.
- `src/context/VehicleContext.jsx`: Estado global reutilizable para vehículos.
- `src/components/HeaderNav.jsx`: Navegación principal.
- `src/components/FooterNav.jsx`: Menú de navegación inferior (mobile).

## Personalización

- Puedes ajustar textos, vehículos iniciales y beneficios directamente en los componentes o en el contexto.
- Los estilos utilizan **Tailwind CSS**. La configuración principal está en `tailwind.config.js` y la hoja base en `src/index.css`. Se evita CSS personalizado salvo pequeños ajustes vía utilidades.

# NovaDrive · Catálogo de vehículos

Proyecto creado para la primera actividad formativa de FRONTEND II. El sitio está desarrollado con **React**, **Vite** y **React Router**, e incluye navegación entre tres pantallas:

- Inicio (home con catálogo destacado).
- Quiénes somos.
- Contáctanos.

La navegación principal se encuentra en un menú inferior persistente para cumplir las instrucciones de la actividad.

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
- `src/components/FooterNav.jsx`: Menú de navegación inferior.

## Personalización

- Los textos, vehículos y beneficios se pueden modificar directamente en los componentes.
- Los estilos están en `src/App.css` y `src/index.css`. Se emplea un diseño responsive pensado para dispositivos móviles y escritorio.



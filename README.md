## Dark Mode Navbar (Next.js + Tailwind CSS)

Navegación moderna con soporte de modo oscuro/claro, construida con Next.js (App Router) y Tailwind CSS. Incluye un `toggle` accesible para alternar el tema, una barra de navegación que se adapta al scroll, un contenedor de navegación flotante y una pantalla de login de ejemplo. El objetivo del proyecto es ofrecer una base lista para usar y extender en aplicaciones donde la experiencia visual y la UX sean prioridad.

### Características
- Alternancia de tema oscuro/claro con persistencia del estado.
- Componentes desacoplados: `DarkModeToggle`, `DarkNav`, `FloatingNav`, `NavWrapper` y `LoginForm`.
- Diseño responsivo con Tailwind CSS.
- App Router de Next.js y tipografía optimizada con `next/font`.

### Tecnologías
- **Framework**: Next.js 14 (App Router)
- **UI**: React 18, Tailwind CSS
- **Build/Dev**: Node.js 18+, npm

### Requisitos
- Node.js 18 o superior
- npm 9 o superior

### Instalación y ejecución
```bash
npm install
npm run dev
```
Abrir `http://localhost:3000` en el navegador.

### Scripts
- `npm run dev`: entorno de desarrollo
- `npm run build`: build de producción
- `npm run start`: servidor de producción
- `npm run lint`: revisión de lint

### Estructura principal
```text
src/
  app/
    layout.jsx
    page.js
    login/
      page.jsx
  components/
    DarkModeToggle.jsx
    DarkNav.jsx
    FloatingNav.jsx
    NavWrapper.jsx
    LoginForm.jsx
```

### Personalización del tema
La clase de tema se aplica en la raíz mediante `NavWrapper` y el `DarkModeToggle`. Ajusta colores y tokens en `tailwind.config.js` y estilos globales en `src/app/globals.css`.

### Despliegue
Compatible con Vercel. Ejecuta `npm run build` y sigue la guía de despliegue de Next.js.

### Contribuciones
Sugerencias y PRs son bienvenidos. Abre un issue para discutir cambios mayores.

### Licencia
Este proyecto no define una licencia explícita. Añade una si planeas distribuirlo.

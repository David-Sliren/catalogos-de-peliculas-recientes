# Arquitectura del Proyecto

Este documento describe la estructura de alto nivel, las decisiones de diseño y el flujo de datos de la aplicación "Catálogos de Películas Recientes".

## 🏗️ Estructura del Proyecto

La aplicación sigue una estructura estándar de Vite + React, organizada por tipo de recurso.

```text
src/
├── assets/          # Recursos estáticos (imágenes, fuentes locales)
├── components/      # Componentes de UI reutilizables
│   └── sections/    # Bloques grandes de UI que componen las páginas (Catalogo, Presentation)
├── constants/       # Valores constantes y configuración estática
├── hooks/           # Custom Hooks para lógica de negocio y datos
├── pages/           # Vistas principales (rutas) de la aplicación
└── App.jsx          # Configuración de rutas principal
```

## 🔄 Flujo de Datos

La aplicación utiliza **TanStack Query (React Query)** como gestor de estado asíncrono.

1.  **Componente UI (Page/Section):** Solicita datos a través del custom hook `useMoviesQuery`.
2.  **Custom Hook (`useMoviesQuery`):
    *   Verifica si los datos están en caché (`staleTime` configurado a 12 horas).
    *   Si no están, llama a `callApi`.
3.  **Servicio API (`useFetch`):
    *   Construye la petición HTTP con la autorización (Bearer Token).
    *   Maneja errores de red básicos.
    *   Retorna los datos crudos de TMDB.

## 🎨 Estrategia de UI/UX

*   **Styling:** Tailwind CSS v4 para estilos utilitarios y diseño responsivo.
*   **Animaciones:** Framer Motion (`motion/react`) para transiciones de entrada, interacciones (hover/tap) y efectos de scroll.
*   **Iconografía:** Lucide React.
*   **Fuentes:** Gestionadas vía `@fontsource` (Inter, Bebas Neue, Montserrat).

## 🛣️ Enrutamiento

Se utiliza `react-router` (v7) con una estrategia simple:
*   `/`: Página de inicio (Home) que muestra secciones promocionales y accesos directos.
*   `/:title`: Página dinámica de catálogo (usa el parámetro `title` para determinar qué endpoint de la API consultar, ej: 'popular', 'upcoming').

## 🔐 Seguridad y Variables de Entorno

*   Las claves de API se gestionan a través de variables de entorno (`VITE_TMDB_KEY`).
*   Estas no se suben al repositorio (protegidas por `.gitignore`).

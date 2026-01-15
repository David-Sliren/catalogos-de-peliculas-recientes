# 🎬 Movies New

Una aplicación web moderna y reactiva para explorar catálogos de películas (Populares, Tendencias, Próximos estrenos) utilizando la API de The Movie Database (TMDB).

Construida con **React**, **Vite**, **Tailwind CSS**, y **Framer Motion** para una experiencia de usuario fluida y visualmente atractiva.

## ✨ Características

*   **Exploración de Películas:** Navega entre categorías como "Recientes", "Populares" y "Más vistas".
*   **Diseño Responsivo:** Interfaz adaptada a móviles, tablets y escritorio gracias a Tailwind CSS.
*   **Animaciones Suaves:** Transiciones de página y micro-interacciones impulsadas por Framer Motion.
*   **Gestión de Estado Eficiente:** Uso de `TanStack Query` para el caché de datos, revalidación y manejo de estados de carga/error.
*   **Enrutamiento Dinámico:** Navegación SPA (Single Page Application) con React Router v7.

## 🛠️ Tecnologías

*   [React](https://react.dev/) - Librería de UI.
*   [Vite](https://vitejs.dev/) - Build tool y entorno de desarrollo.
*   [Tailwind CSS](https://tailwindcss.com/) - Framework de estilos utility-first (v4).
*   [Framer Motion](https://www.framer.com/motion/) - Librería de animación.
*   [TanStack Query](https://tanstack.com/query/latest) - Gestión de estado asíncrono y data fetching.
*   [Lucide React](https://lucide.dev/) - Iconografía.

## 🚀 Instalación y Uso

### Prerrequisitos

*   Node.js (versión 18 o superior recomendada).
*   pnpm (gestor de paquetes recomendado).

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/Catalogos-de-peliculas-recientes.git
    cd Catalogos-de-peliculas-recientes
    ```

2.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade tu clave de API de TMDB:
    ```env
    VITE_TMDB_KEY=tu_api_key_aqui
    ```
    > Puedes obtener una clave registrándote en [The Movie Database](https://www.themoviedb.org/).

4.  **Ejecutar en desarrollo:**
    ```bash
    pnpm dev
    ```
    Abre tu navegador en `http://localhost:5173`.

## 📂 Estructura del Proyecto

Para una visión detallada de la arquitectura, consulta el archivo [ARCHITECTURE.md](./ARCHITECTURE.md).

## 📄 Scripts Disponibles

*   `pnpm dev`: Inicia el servidor de desarrollo.
*   `pnpm build`: Construye la aplicación para producción.
*   `pnpm lint`: Ejecuta ESLint para analizar el código.
*   `pnpm preview`: Previsualiza la build de producción localmente.

---
Desarrollado por [David Sliren](https://github.com/David-Sliren)

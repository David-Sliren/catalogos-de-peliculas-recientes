import { useQuery } from "@tanstack/react-query";

import { callApi } from "./useFetch";

/**
 * Hook personalizado para obtener listas de películas usando TanStack Query.
 * Maneja el caché y la actualización automática de datos.
 *
 * @param {string} route - La ruta o categoría de la API (ej: "popular", "trending", "upcoming").
 * @param {number} [page=1] - El número de página para la paginación (por defecto 1).
 * @returns {object} Objeto con la propiedad `catalogo` que contiene el estado de la query.
 */
export function useMovie(route, page = 1) {
  const url = route === "trending" ? `${route}/movie/day` : `movie/${route}`;

  const catalogo = useQuery({
    queryKey: ["catalogo", { route, page }],
    queryFn: () =>
      callApi(
        `https://api.themoviedb.org/3/${url}?language=es-MX&page=${page}`
      ),
    staleTime: 12 * 60 * 60 * 1000, // 12 horas de cache
  });

  return {
    catalogo,
  };
}
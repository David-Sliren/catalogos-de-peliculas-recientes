import { useQuery } from "@tanstack/react-query";

import { callApi } from "./useFetch";

export function useMovie(route, page = 1) {
  const url = route === "trending" ? `${route}/movie/day` : `movie/${route}`;

  const catalogo = useQuery({
    queryKey: ["catalogo", { route, page }],
    queryFn: () =>
      callApi(
        `https://api.themoviedb.org/3/${url}?language=es-MX&page=${page}`
      ),
    staleTime: 1 * 60 * 1000,
  });

  return {
    catalogo,
  };
}

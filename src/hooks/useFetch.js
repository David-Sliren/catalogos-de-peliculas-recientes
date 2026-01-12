const key = import.meta.env.VITE_TMDB_KEY;

/**
 * Realiza una petición HTTP GET a la API de TMDB.
 *
 * @param {string} url - La URL completa del endpoint a consultar.
 * @returns {Promise<any>} - Promesa que resuelve con los datos JSON de la respuesta.
 * @throws {Error} - Lanza un error si la respuesta no es exitosa (incluye status code y texto).
 */
export async function callApi(url) {
  const result = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      accept: "application/json",
    },
  });

  if (!result.ok) {
    throw new Error(`Error ${result.status}: ${result.statusText}`);
  }

  return result.json();
}
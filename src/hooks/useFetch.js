const key = import.meta.env.VITE_TMDB_KEY;

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

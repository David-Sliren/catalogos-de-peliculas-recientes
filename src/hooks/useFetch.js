export async function callApi(url) {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWY2ZGNhNmYyOWEwMjZiMDRhNDUzOTIzYTg5YzMxNiIsIm5iZiI6MTc1MjcwMjQzMi45MzkwMDAxLCJzdWIiOiI2ODc4MWRlMGE5Y2JiNTFhY2JiYTgzMWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.c7ldhSFeujmY78jUwUNCll0Sl83Qw74aovevnK9Wlh8";

  const result = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      accept: "application/json",
    },
  });

  if (!result.ok) {
    throw new Error("Hubo un problema");
  }

  return result.json();
}

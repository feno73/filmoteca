const APIKEY = "22a64ea36a4ddddb3bf9b7f2229eb626";

export async function getPeli(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=es-ES`;
  let respuesta = await fetch(URL);
  let peli = respuesta.json();
  return peli;
}

export async function getCreditos(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}`;
  let respuesta = await fetch(URL);
  let creditos = respuesta.json();
  return creditos;
}

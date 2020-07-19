export async function getPeli(id) {
    const APIKEY = '22a64ea36a4ddddb3bf9b7f2229eb626'
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=es-AR`
    let respuesta = await fetch(URL)
    let peli = respuesta.json()

    return peli
}
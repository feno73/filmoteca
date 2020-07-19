import React, { useState, useEffect } from 'react';
import { getPeli } from '../../services/getPeli';
import { Route, Link } from 'wouter';
import Detalle from '../detalle/Detalle'


const APIKEY = '22a64ea36a4ddddb3bf9b7f2229eb626'
const TMDB = 'https://api.themoviedb.org'

//request de ejemplo https://api.themoviedb.org/3/movie/550?api_key=22a64ea36a4ddddb3bf9b7f2229eb626

const Tarjeta = props => {
    const [pelicula, setPelicula] = useState([])
    
    useEffect(() => {
        getPeli(props.id)
            .then(datos => {
                setPelicula(datos)
            })
    }, []);

    let anio = (typeof pelicula.release_date === "string") ? pelicula.release_date.slice(0, 4) : "xxxx"
    
    return (
        <>
            <Link href={`/detalle/${pelicula.id}`}>
                <article className="tarjeta">
                    <img src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} alt={pelicula.title} />
                    <h5>{pelicula.original_title}</h5>
                    <h6>({anio})</h6>
                </article>
            </Link>
            
        </>
    )
};



export default Tarjeta;
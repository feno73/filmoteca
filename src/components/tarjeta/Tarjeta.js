import React, { useState, useEffect } from "react";
import { getPeli } from "../../services/getPeliculas";
import { Link } from "wouter";

const Tarjeta = (props) => {
  const [pelicula, setPelicula] = useState([]);

  useEffect(() => {
    getPeli(props.id).then((peli) => {
      setPelicula(peli);
    });
  }, [props.id]);

  let anio =
    typeof pelicula.release_date === "string"
      ? pelicula.release_date.slice(0, 4)
      : "xxxx";

  return (
    <Link href={`/detalle/${pelicula.id}`}>
      <article className="tarjeta">
        <img
          src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
          alt={pelicula.title}
        />
        <h5>{pelicula.original_title}</h5>
        <h6>({anio})</h6>
      </article>
    </Link>
  );
};

export default Tarjeta;

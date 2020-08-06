import React, { useState, useEffect } from "react";
import { getPeli } from "../../services/getPeliculas";
import Menu from "../menu/Menu";

const Detalle = ({ params }) => {
  const { id } = params;
  const [pelicula, setPelicula] = useState([]);

  useEffect(() => {
    getPeli(id).then((peli) => {
      setPelicula(peli);
    });
  }, [id]);

  let anio =
    typeof pelicula.release_date === "string"
      ? pelicula.release_date.slice(0, 4)
      : "xxxx";

  return (
    <>
      <Menu />
      <main className="container">
        <section className="detalle">
          <img
            src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
            alt={pelicula.title}
          />
          <h1>
            {pelicula.original_title} <span>({anio})</span>
          </h1>
          <p>{pelicula.overview}</p>
        </section>
      </main>
    </>
  );
};

export default Detalle;

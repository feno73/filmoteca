import React from "react";
import Tarjeta from "../tarjeta/Tarjeta";
import Menu from "../menu/Menu";
import data from "../../data/data.json";

const Listado = () => {
  const ids = data.feno;
  const lista = ids.map(({ id }) => <Tarjeta id={id} />);
  return (
    <>
      <Menu />

      <main className="container">
        <section className="lista">{lista}</section>
      </main>
    </>
  );
};

export default Listado;

import React from "react";
import { Link } from "wouter";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link className="navbar-brand" href={"/"}>
        Filmoteca
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" href={"/"}>
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href={"/"}>
              Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href={"/"}>
              Servicios
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href={"/"}>
              Contacto
            </Link>
          </li>
        </ul>
        <form className="form-inline mt-2 mt-md-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Buscar"
            aria-label="Buscar"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Menu;

import React from 'react';
import Tarjeta from '../tarjeta/Tarjeta';
import data from '../../data/data.json';


const Listado = () => {
    const ids = data.feno;
    return (
        ids.map(({ id }) => <Tarjeta id={ id } />)
    )
};

export default Listado;
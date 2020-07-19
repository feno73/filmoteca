import React from 'react';
import Menu from '../menu/Menu'

const Detalle = ({params}) => {
    const { id } = params
    return(
        <>
            <Menu />
            <main className="container">
                <section className="detalle">
                    <div>ID de Peli: {id}</div>
                </section>
            </main>
            
        </>
    )
}

export default Detalle;
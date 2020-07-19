import React from 'react';

import Menu from '../menu/Menu'
import Listado from '../listado/Listado'

class Home extends React.Component {
    render() {
        return(
            <>

            <Menu />

            <main className="container">
                <section className="lista">
                    <Listado />
                </section>
            </main>
            
            </>
        )
    }
}

export default Home;
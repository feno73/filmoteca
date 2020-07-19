import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Switch } from 'wouter';
import Detalle from '../src/components/detalle/Detalle'
import * as serviceWorker from './serviceWorker';

//importo las paginas
import Home from './components/home/Home';

//importo las librerias
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
    <div>
      <Switch>
        //Si entro a la carpeta raiz me carga el componente Home
        <Route exact path='/' component={Home} />
        //si entro a la ruta /detalle/:id me carga el componente Detalle pasando el id como params
        <Route path='/detalle/:id' component={Detalle} />
      </Switch>
      
    </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

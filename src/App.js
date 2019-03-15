import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import ContenedorGeneral from './components/ContenedorGeneral.js'
import GetMedicos from './components/GetMedicos'
import GetPacientes from './components/GetPacientes'
import {BrowserRouter,Route} from 'react-router-dom';
import GetFarmacos from './components/GetFarmacos';

class App extends Component {

  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
      <BrowserRouter>
      <div>
          <main>
            <Route exact path='/' component={ContenedorGeneral}/>
            <Route exact path='/doctors/' component={GetMedicos}/>
            <Route exact path='/patients/' component={GetPacientes}/>
            <Route exact path='/medicines/' component={GetFarmacos}/>
          </main>
      </div>
      </BrowserRouter>
    );
 
 

  }
}

export default App;

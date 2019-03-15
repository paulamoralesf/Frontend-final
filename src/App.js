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
import RegisterPatients from './components/RegisterPatients'
import RegisterMedicines from './components/RegisterMedicines'
import RegisterDoctors from './components/RegisterDoctors'
import ReadPatient from './components/ReadPatient'
import {BrowserRouter,Route} from 'react-router-dom';
import GetFarmacos from './components/GetFarmacos';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
          <main>
            <Route exact path='/' component={ContenedorGeneral}/>
            <Route exact path='/doctor/' component={GetMedicos}/>
            <Route exact path='/patient/' component={GetPacientes}/>
            <Route exact path='/medicine/' component={GetFarmacos}/>
            <Route exact path='/createpatients/' component={RegisterPatients}/>
            <Route exact path='/createmedicines/' component={RegisterMedicines}/>
            <Route exact path='/createdoctors/' component={RegisterDoctors}/>
            <Route exact path='/patient/:uid' component={ReadPatient}/>

          </main>
      </div>
      </BrowserRouter>
    );
 
 

  }
}

export default App;

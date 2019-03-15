import React,{Component} from'react'
import './ContenedorGeneral.css'
import './Cards.css'
import Cards from './Cards';
import {Link} from 'react-router-dom'
import axios from 'axios';



class ContenedorGeneral extends Component{
 
    render(){           
        return(
            <div>
                <html>
                <head>
                    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"></link>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:400,700" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>
                </head>
                <body>
                    <div className="hero">
                        <div className="contenedor-hero">
                            <img src="./Logo.png"/> 
                            <p><i className="fas -map-marker-alt"></i>Medellin, Colombia</p>
                            <a href="#" className="boton">Contactar</a>
                        </div>
                    </div>
                </body>
                </html>
                
                <div className="Tarjetas-contenedor">
                    <ul>
                    <li>    
                    <div className="Tarjeta">
                        <Link to= {'./doctor/'}><img src="https://torremedicametropolitana.com.mx/wp-content/uploads/2018/03/slider-doc.jpg" className="cardMedicos" alt="..."/></Link>
                        <div className="card-body">
                            <p className="card-text">Medicos</p>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className="Tarjeta">
                        <Link to= {'./patient/'}><img src="https://i2.wp.com/www.mortaji.com/wp-content/uploads/2017/11/Relaci%C3%B3n-medico-paciente3.png?fit=560%2C315&ssl=1" className="cardPacientes" alt="..."/></Link>
                        <div className="card-body">
                            <p className="card-text">Pacientes</p>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className="Tarjeta">
                        <Link to= {'./medicine/'}><img src="https://www.yucatan.com.mx/wp-content/uploads/2018/08/f%C3%A1rmacos.jpg" className="cardFarmacos" alt="..."/></Link>  
                        <div className="card-body">
                            <p className="card-text">Farmacos</p>
                        </div>
                    </div>
                    </li>
                    </ul>
                </div>
            </div>       
        )
    }
}
export default  ContenedorGeneral
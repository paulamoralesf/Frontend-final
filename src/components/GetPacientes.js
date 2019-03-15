import React, {Component} from 'react'
import axios from 'axios'
import Cards from './Cards';
import RegisterPatients from './RegisterPatients';


class GetPacientes extends Component{
    constructor(props){
        super(props);
        this.state={
            pacientes:[],
            caso:1
        }
    }
    componentDidMount(){
        axios.get('https://thawing-stream-58754.herokuapp.com/api/v1/patients')//https://intense-gorge-64301.herokuapp.com/
        .then ((result)=>{
            this.setState({pacientes:result.data})
                 
        })
        .catch((err)=>{
            alert('Error')
        });
    }
    renderPacientes=()=>{
        return this.state.pacientes.length ===0
            ? <h1>Cargando...</h1>
            : this.state.pacientes.
            map(paciente=>
                <Cards    
                    nombre={paciente.nombre} CC={paciente.CC}
                    edad={paciente.edad} imagen={paciente.foto}
                    caso={paciente.caso} id={paciente._id}
                />
            )       
                   
            
    }
    render(){

        return(
            <div>
                {this.renderPacientes()}
            </div>
        )
    }
}
export default  GetPacientes
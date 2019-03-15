import React, {Component} from 'react'
import axios from 'axios'
import Cards from './Cards';

class GetMedicos extends Component{
    constructor(props){
        super(props);
        this.state={
            medicos:[],
            modify:true
        }
    }
    componentDidMount(){
        axios.get('https://thawing-stream-58754.herokuapp.com/api/v1/doctors')//https://intense-gorge-64301.herokuapp.com/
        .then ((result)=>{
            this.setState({medicos:result.data})     
        })
        .catch((err)=>{
            alert('Error')
        });
    }
    renderMedicos=()=>{
        return this.state.medicos.length ===0
            ? <h1>Cargando...</h1>
            : this.state.medicos.
            map(medico=>
                <Cards    
                    nombre={medico.nombre} id={medico.TP}
                     imagen={medico.foto} esp={medico.especialidad}
                />
                )   
            
    }
    render(){

        return(
            <div>
                <p>
                    {[this.renderMedicos()]}
                </p>
            </div>
        )
    }
}
export default  GetMedicos
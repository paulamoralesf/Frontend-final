import React, {Component} from 'react'
import axios from 'axios'
import Cards from './Cards';


class GetFarmacos extends Component{
    constructor(props){
        super(props);
        this.state={
            farmacos:[],
            caso:2
        }
    }
    componentDidMount(){
        axios.get('https://thawing-stream-58754.herokuapp.com/api/v1/medicines')//https://intense-gorge-64301.herokuapp.com/
        .then ((result)=>{
            this.setState({farmacos:result.data})     
        })
        .catch((err)=>{
            alert('Error')
        });
    }
    renderFarmacos=()=>{
        return this.state.farmacos.length ===0
            ? <h1>Cargando...</h1>
            : this.state.farmacos.
            map(farmaco=>
                <Cards    
                    nombre={farmaco.nombre} presentacion={farmaco.presentacion}
                     imagen={farmaco.imagen} caso={farmaco.caso}
                />)   
            
    }
    render(){

        return(
            <div>
                <p>
                    {[this.renderFarmacos()]}
                </p>
            </div>
        )
    }
}
export default  GetFarmacos
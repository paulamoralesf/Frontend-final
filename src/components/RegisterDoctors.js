import React, {Component} from 'react'
import axios from 'axios'


class RegisterDoctors extends Component{

    constructor(props){
        super(props);
        this.state={
            nombre:"",
            especialidad:"",
            TP:""
        }
    }
    onInputChange=(e)=>{
        console.log(e.target.id)
        const {id,value}=e.target
        console.log('evento onInputChange')
        this.setState({
            [id]:value
        })
    }

    onBtnSubmit=(e)=>{
        e.preventDefault()
        console.log('SUBMIIIIT')
        const URL='https://thawing-stream-58754.herokuapp.com/api/v1/create/doctor'
        axios.post(URL,this.state)
        .then((result) => {
            alert(`Médico guardado con el id: ${result.data.id}`)
            this.props.history.push('/')
        }).catch((err) => {
            alert(err)
        });
    }

    render(){
        return(
            <div className="RegisterAuthor col">
                <form className="col-2" onSubmit={this.onBtnSubmit}>
                    <label>Nombre: </label>
                    <input type="text" id="nombre"
                        onChange={this.onInputChange}
                        value={this.state.nombre}
                    />

                    <label>Especialidad: </label>
                    <input type="text" id="especialidad" 
                        onChange={this.onInputChange}
                        value={this.state.presentacion}
                    />
                    <label>Tarjeta Profesional: </label>
                    <input type="number" id="TP" 
                        onChange={this.onInputChange}
                        value={this.state.TP}
                    />
                    <button type="submit" className ='btn btn-success mt-4'>Guardar</button>

                   
                </form>
            </div>
        )
    }
}

export default RegisterDoctors
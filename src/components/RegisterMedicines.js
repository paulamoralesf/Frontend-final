import React, {Component} from 'react'
import axios from 'axios'


class RegisterMedicines extends Component{

    constructor(props){
        super(props);
        this.state={
            nombre:"",
            presentacion:""
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
        const URL='https://thawing-stream-58754.herokuapp.com/api/v1/create/medicine'
        axios.post(URL,this.state)
        .then((result) => {
            alert(`Farmaco guardado con el id: ${result.data.id}`)
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

                    <label>Presentación: </label>
                    <input type="text" id="presentacion" 
                        onChange={this.onInputChange}
                        value={this.state.presentacion}
                    />
                    <button type="submit" className ='btn btn-success mt-4'>Guardar</button>

                   
                </form>
            </div>
        )
    }
}

export default RegisterMedicines
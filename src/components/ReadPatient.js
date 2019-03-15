import React, {Component} from 'react'
import axios from 'axios'

class ReadPatient extends Component{

    constructor(props){
        super(props);
        this.state={
           body:{ nombre:"",
                edad:"",
                EPS:"",
                cedula:"",
                CC:"",
                prescripciones:"",
            },
            modify:true
        }
    }

    componentDidMount(){
        const URL= `https://thawing-stream-58754.herokuapp.com/api/v1/patient/${this.props.match.params.uid}/`
        axios.get(URL)
        .then((result) => {
            console.log({body:result.data})
            this.setState({body:result.data})
        }).catch((err) => {
            alert('User nor found')
        });
    }
    onInputChange=(e)=>{
        console.log(e.target.id)
        const {id,value}=e.target
        console.log('evento onInputChange')
        this.setState({
            [id]:value
        })
    }

    onUpdate=(e)=>{
        e.preventDefault()
        console.log('ACTIVAR ACTUALIZACION')
        /*const URL=`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`
        axios.post(URL,this.state)
        .then((result) => {
            alert(`Usuario Guardado con el id: ${result.data.id}`)
        }).catch((err) => {
            alert(err)
        });*/
        
        this.setState({modify:false})
        console.log(this.state.modify)
    }

    render(){

        return(
            <div className="RegisterAuthor col">
                <form className="col-2" onSubmit={this.onBtnSubmit}>
                    <label>Nombre: </label>
                    <input type="text" id="nombre"
                        onChange={this.onInputChange}
                        value={this.state.body.nombre}
                        readOnly={this.state.modify}
                    />

                    <label>Edad: </label>
                    <input type="number" id="edad" 
                        onChange={this.onInputChange}
                        value={this.state.body.edad}
                        readOnly={this.state.modify}
                    />

                    <label>EPS: </label>
                    <input type="text" id="eps"
                        onChange={this.onInputChange}
                        value={this.state.body.EPS}
                        readOnly={this.state.modify}
                    />

                    <label>Cedula: </label>
                    <input type="number" id="cedula"
                        onChange={this.onInputChange}
                        value={this.state.body.CC}
                        readOnly={this.state.modify}
                    />

                    <label>Prescripciones: </label>
                    <textarea id="prescripciones" cols="23" rows="5"

                        onChange={this.onInputChange}
                        value={this.state.body.prescripciones}
                        readOnly={this.state.modify}
                        />
                    <button onClick={this.onUpdate} disabled={false} type="submit" className ='btn btn-success mt-4'>Actualizar</button>

                </form>
            </div>
        )
    }
}

export default ReadPatient
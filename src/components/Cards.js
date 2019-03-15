import React,{Component} from'react'
import {Link} from 'react-router-dom'
import './Cards.css';


class Cards extends Component{

    render(){
        return(
        <div className="card col-3 m-2">
            <img src={this.props.imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p align="center" className="card-text">
                    {this.props.nombre} <br/>
                    {this.props.id}<br/>
                    {this.props.esp} <br/>
                    
                    </p>
                </div>
      </div>

        )
    }
}

export default  Cards;
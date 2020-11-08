import React from 'react'
import {Link} from 'react-router-dom'

export default function Product(props) {

    return (
          <div className="card">
            <div className="card-header">
                <Link to={`/product-item/${props.id}`}>
                    <img src={props.src} alt={props.name} />
                </Link>
            </div>
            <div className="card-body">
                <Link to={`/product-item/${props.id}`} className="link">
                    {props.name}
                </Link>
            </div>
            <div className="card-footer text-left">
                <small className="badge badge-danger"> {props.offer} </small>
                <p>
                    <b> {props.price} </b> <small>تومان</small>
                </p>
            </div>    
          </div>  
    )
}

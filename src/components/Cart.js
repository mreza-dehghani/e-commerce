import React, { Component } from 'react'
import {connect} from 'react-redux'

import p7 from './image/p7.jpg'

class Cart extends Component {
    render() {

        let addedItem = this.props.addedItems.length ?
            (  
                this.props.addedItems.map(item=>{
                    return(

                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" key={item.id}>
                            <div className="card">
                                <div className="card-header">
                                    <img src={item.image} alt={item.title_fa} />
                                </div>
                                <div className="card-body">
                                    <h5> {item.title_fa} </h5>
                                    <p></p>
                                </div>
                                {/* <div className="card-footer">
                                    <img src={p7} alt="as" />
                                </div> */}
                            </div>
                        </div>
                       
                        // <li className="collection-item avatar" key={item.id}>
                        //             <div className="item-img"> 
                        //                 <img src={item.img} alt={item.img} className=""/>
                        //             </div>
                                
                        //             <div className="item-desc">
                        //                 <span className="title">{item.title}</span>
                        //                 <p>{item.desc}</p>
                        //                 <p><b>Price: {item.price}$</b></p> 
                        //                 <p>
                        //                     <b>Quantity: {item.quantity}</b> 
                        //                 </p>
                        //                 <div className="add-remove">
                        //                     {/* <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                        //                     <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link> */}
                        //                 </div>
                        //                 <button className="waves-effect waves-light btn pink remove">Remove</button>
                        //             </div>
                                    
                        //        </li>                        
                    )
                })
            ):

             (
                <h3 className="text-center">سبد خرید شما خالی است...</h3>
             )


        return (
            <div className="cart">
                <div className="container">
                    <div className="row">
                        {addedItem}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems
    }
}

export default connect(mapStateToProps, null)(Cart)
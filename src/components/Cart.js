import React, { Component } from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../Redux/Action'

class Cart extends Component {

    convertNumber = (fromNum) => {
        return fromNum.toLocaleString('fa')
    }

    removeFromCartHandler = (item, price) => {
        this.props.removeFromCart(item, price)
        console.log(true)
    }

    render() {

        let addedItem = this.props.addedItems.length ?
            (  
                this.props.addedItems.map(item=>{
                    return(

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={item.id}>
                            <div className="card">
                                <div className="card-header">
                                    <img src={item.image} alt={item.title_fa} />
                                </div>
                                <div className="card-body">
                                    <p>
                                        {item.title_fa}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" onClick={() => this.removeFromCartHandler(item, item.price)}>حذف</button>
                                </div>
                            </div>
                        </div>                     
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
                    <div className="row mt-5" id="payment-container">
                        <div className="col-12 text-center">
                            <h5> مجموع قیمت: {this.convertNumber(this.props.total)} تومان</h5>
                            <p>مجموع کالاها: {this.convertNumber(this.props.addedItems.length)} </p>
                            <button type="button" disabled={this.props.addedItems.length === 0}>پرداخت</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (item, price) => dispatch(removeFromCart(item, price))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
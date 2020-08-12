import React, { Component } from 'react'
import {connect} from 'react-redux'
import Product from './Product'
// import { bindActionCreators } from 'redux';
import {getLaptops} from '../Redux/FetchProduct'
import Loading from './Loading'


class Tablet extends Component {

    componentDidMount() {
        this.props.getLaptops()
    }

    render() {
        const myLaptop = this.props.laptops;
        myLaptop.shift();
        const laptop = myLaptop.map(m => {
            return(
                <div className="product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={m.id}>
                    <Product src={m.image} name={m.name} price={m.price} offer={m.offer} id={m.id} />
                </div>
            )
        })

        return (
            <div className="container" id="mobile">
                <h1>لپ تاپ</h1>
                <Loading/>
                <div className="row">
                    {laptop}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        laptops: state.laptops,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getLaptops: () => dispatch(getLaptops())
    }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//     getTablets: getTablets
// }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Tablet)
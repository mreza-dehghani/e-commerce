import React, { Component } from 'react'
import {connect} from 'react-redux'
import Product from './Product'
// import { bindActionCreators } from 'redux';
import {getOfficeMechines} from '../Redux/FetchProduct'
import Loading from './Loading'


class Computer extends Component {

    componentDidMount() {
        this.props.getOfficeMechines()
    }

    render() {
        const myOfficeMachines = this.props.officeMachines;
        myOfficeMachines.shift();
        const officeMachine = myOfficeMachines.map(m => {
            return(
                <div className="product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={m.id}>
                    <Product src={m.image} name={m.name} price={m.price} offer={m.offer} id={m.id} />
                </div>
            )
        })

        return (
            <div className="container" id="mobile">
                <h1>لوازم جانبی کامپیوتر</h1>
                <Loading/>
                <div className="row">
                    {officeMachine}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        officeMachines: state.officeMachines,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getOfficeMechines: () => dispatch(getOfficeMechines())
    }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//     getTablets: getTablets
// }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Computer)
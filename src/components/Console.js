import React, { Component } from 'react'
import {connect} from 'react-redux'
import Product from './Product'
import {getGameConsoles} from '../Redux/FetchProduct'
import Loading from './Loading'


class Console extends Component {

    componentDidMount() {
        this.props.getGameConsoles()
    }

    render() {
        const myGameConsoles = this.props.gameConsoles;
        myGameConsoles.shift();
        const myGameConsole = myGameConsoles.map(m => {
            return(
                <div className="product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={m.id}>
                    <Product src={m.image} name={m.name} price={m.price} offer={m.offer} id={m.id} />
                </div>
            )
        })

        return (
            <div className="container" id="mobile">
                <h1>کنسول بازی</h1>
                <Loading/>
                <div className="row">
                    {myGameConsole}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameConsoles: state.gameConsoles,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getGameConsoles: () => dispatch(getGameConsoles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Console)
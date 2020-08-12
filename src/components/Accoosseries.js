import React, { Component } from 'react'
import {connect} from 'react-redux'
import Product from './Product'
// import { bindActionCreators } from 'redux';
import {getAccosseriesMain} from '../Redux/FetchProduct'
import Loading from './Loading'


class Accessories extends Component {

    componentDidMount() {
        this.props.getAccosseriesMain()
    }

    render() {
        const myAccosseriseMain = this.props.accessoriseMain;
        myAccosseriseMain.shift();
        const myAccosseriseMain_ = myAccosseriseMain.map(m => {
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
                    {myAccosseriseMain_}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accessoriseMain: state.accessoriseMain,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getAccosseriesMain: () => dispatch(getAccosseriesMain())
    }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//     getTablets: getTablets
// }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Accessories)
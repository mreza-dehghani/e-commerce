import React, { Component } from 'react'
import {connect} from 'react-redux'
import Product from './Product'
import {getMobiles} from '../Redux/FetchProduct'
import Loading from './Loading'


class Mobile extends Component {

    componentDidMount() {
        this.props.getMobiles()
    }

    render() {
        const myMobiles = this.props.mobiles;
        myMobiles.shift();
        const mobile = myMobiles.map(m => {
            return(
                <div className="product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={m.id}>
                    <Product src={m.image} name={m.name} price={m.price} offer={m.offer} id={m.id} />
                </div>
            )
        })

        return (
            <div className="container" id="mobile">
                <h1>موبایل</h1>
                <Loading/>
                <div className="row">
                    {mobile}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mobiles: state.mobiles,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getMobiles: () => dispatch(getMobiles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mobile)
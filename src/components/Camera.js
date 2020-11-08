import React, { Component } from 'react'
import {connect} from 'react-redux'
import Product from './Product'
import {getCameras} from '../Redux/FetchProduct'
import Loading from './Loading'


class Camera extends Component {

    componentDidMount() {
        this.props.getCameras()
    }

    render() {
        const myCamera = this.props.cameras;
        myCamera.shift();
        const camera = myCamera.map(m => {
            return(
                <div className="product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={m.id}>
                    <Product src={m.image} name={m.name} price={m.price} offer={m.offer} id={m.id} />
                </div>
            )
        })

        return (
            <div className="container" id="mobile">
                <h1>دوربین</h1>
                <Loading/>
                <div className="row">
                    {camera}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cameras: state.cameras,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getCameras: () => dispatch(getCameras())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Camera)
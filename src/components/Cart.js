import React, { Component } from 'react'
import {connect} from 'react-redux'

class Cart extends Component {
    render() {
        // const addedItem = 
        return (
            <div className="cart">
                <div className="container">
                    <h1>test</h1>
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
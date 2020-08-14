import React, { Component } from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class BrandLg extends Component {

    convertNumber = (fromNum) => {
        return fromNum.toLocaleString('fa')
    }

    render() {
        return (
            <div className="brand-lg">
                <div id="brand-name">
                    <a href="#">
                        <b><span id="one">Digi</span><span id="two">Shop</span></b>
                    </a>
                </div>
                <div className="nav-content">
                    <Navbar />
                </div>
                <div id="search-box">
                    <input type="search" className="form-control" placeholder="جستجو در دیجی شاپ..." />
                </div>
                <div id="nav-login-container">
                    <Link to="/sign-up" className="link">ورود به حساب کاربری</Link>
                </div>
                <div id="cart-container">
                    <Link to="/cart" className="link">
                        <b> {this.convertNumber(this.props.addedItems.length)} </b>
                        <i className="fa fa-cart-plus"></i>
                    </Link>
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

export default connect(mapStateToProps, null)(BrandLg)
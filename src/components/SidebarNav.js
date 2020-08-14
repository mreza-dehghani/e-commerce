import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class SidebarNav extends Component {
    constructor() {
        super() 
        this.state = {
            showProduct: false,
            showProduct_1: false,
            showProduct_2: false,
            showProduct_3: false,
            showProduct_4: false,
            showProduct_5: false,
            showProduct_6: false,
            showProduct_7: false,
            showProduct_8: false,
        }
    }

    convertNumber = (fromNum) => {
        return fromNum.toLocaleString('fa')
    }

    showProduct = () => {
        this.setState({
            showProduct: !this.state.showProduct
        })
        console.log(true)
    }
    showProduct_1 = () => {
        this.setState({
            showProduct_1: !this.state.showProduct_1
        })
    }
    showProduct_2 = () => {
        this.setState({
            showProduct_2: !this.state.showProduct_2
        })
        console.log(true)
    }
    showProduct_3 = () => {
        this.setState({
            showProduct_3: !this.state.showProduct_3
        })
        console.log(true)
    }
    showProduct_4 = () => {
        this.setState({
            showProduct_4: !this.state.showProduct_4
        })
        console.log(true)
    }
    showProduct_5 = () => {
        this.setState({
            showProduct_5: !this.state.showProduct_5
        })
        console.log(true)
    }

    showProduct_6 = () => {
        this.setState({
            showProduct_6: !this.state.showProduct_6
        })
        console.log(true)
    }

    showProduct_7 = () => {
        this.setState({
            showProduct_7: !this.state.showProduct_7
        })
        console.log(true)
    }

    showProduct_8 = () => {
        this.setState({
            showProduct_8: !this.state.showProduct_8
        })
        console.log(true)
    }

    render() {
        return (
            <div className="sidebar-nav" id={this.props.open}>
                <div id="navbar-login-container">
                    <div id="navbar-login">
                        <Link to="/sign-up">
                            <h6>ورود به حساب کاربری</h6>
                        </Link>
                    </div>
                </div>
                <div id="nav-content">
                    <nav className="navbar navbar-expand-lg">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <i className="fa fa-home"></i>
                                    خانه
                                </Link>
                            </li>
                            <li className="nav-item">
                                <span onClick={this.showProduct} className="nav-link">
                                    <i className="fa fa-list-ul"></i>
                                    دسته بندی کالاها
                                </span>
                                <ul className={this.state.showProduct ? 'showProduct' : 'notShowProduct'} id="main-product">
                                    <li className="nav-item have-product">
                                        <span onClick={this.showProduct_1}  className="nav-link">موبایل
                                            <i className={!this.state.showProduct_1 ? "fa fa-plus" : "fa fa-minus"}></i>
                                        </span>
                                        <ul className={this.state.showProduct_1 ? 'showProduct_' : 'notShowProduct_'}>
                                            <li className="nav-item">
                                                <Link to="/product/mobile" className="link">موبایل</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/mobile" className="link">موبایل</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/mobile" className="link">موبایل</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item have-product">
                                        <span onClick={this.showProduct_2} className="nav-link">تبلت و کتابخوان
                                            <i className={!this.state.showProduct_2 ? "fa fa-plus" : "fa fa-minus"}></i>
                                        </span>
                                        <ul className={this.state.showProduct_2 ? 'showProduct_' : 'notShowProduct_'}>
                                            <li className="nav-item">
                                                <Link to="/product/tablet" className="link">تبلت و کتابخوان</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/tablet" className="link">تبلت و کتابخوان</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/tablet" className="link">تبلت و کتابخوان</Link>
                                            </li>
                                        </ul>
                                    </li>                                    
                                    <li className="nav-item have-product">
                                        <span onClick={this.showProduct_3} className="nav-link">لپ تاپ
                                            <i className={!this.state.showProduct_3 ? "fa fa-plus" : "fa fa-minus"}></i>
                                        </span>
                                        <ul className={this.state.showProduct_3 ? 'showProduct_' : 'notShowProduct_'}>
                                            <li className="nav-item">
                                                <Link to="/product/laptop" className="link">لپ تاپ</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/laptop" className="link">لپ تاپ</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/laptop" className="link">لپ تاپ</Link>
                                            </li>
                                        </ul>
                                    </li>                                    
                                    <li className="nav-item have-product">
                                        <span onClick={this.showProduct_4} className="nav-link">کامپیوتر و تجهیزات جانبی
                                            <i className={!this.state.showProduct_4 ? "fa fa-plus" : "fa fa-minus"}></i>
                                        </span>
                                        <ul className={this.state.showProduct_4 ? 'showProduct_' : 'notShowProduct_'}>
                                            <li className="nav-item">
                                                <Link to="/product/computer-part" className="link">کامپیوتر و تجهیزات جانبی</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/computer-part" className="link">کامپیوتر و تجهیزات جانبی</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/computer-part" className="link">کامپیوتر و تجهیزات جانبی</Link>
                                            </li>
                                        </ul>
                                    </li>                                    
                                    <li className="nav-item have-product">
                                        <span onClick={this.showProduct_5} className="nav-link">دوربین
                                            <i className={!this.state.showProduct_5 ? "fa fa-plus" : "fa fa-minus"}></i>
                                        </span>
                                        <ul className={this.state.showProduct_5 ? 'showProduct_' : 'notShowProduct_'}>
                                            <li className="nav-item">
                                                <Link to="/product/camera" className="link">دوربین</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/camera" className="link">دوربین</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/camera" className="link">دوربین</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item have-product">
                                        <span onClick={this.showProduct_6} className="nav-link">ماشین های اداری
                                            <i className={!this.state.showProduct_6 ? "fa fa-plus" : "fa fa-minus"}></i>
                                        </span>
                                        <ul className={this.state.showProduct_6 ? 'showProduct_' : 'notShowProduct_'}>
                                            <li className="nav-item">
                                                <Link to="/product/office-machine" className="link">ماشین های اداری</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/office-machine" className="link">ماشین های اداری</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/office-machine" className="link">ماشین های اداری</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item have-product">
                                        <span onClick={this.showProduct_7} className="nav-link">لوازم جانبی کالای دیجیتال
                                            <i className={!this.state.showProduct_7 ? "fa fa-plus" : "fa fa-minus"}></i>
                                        </span>
                                        <ul className={this.state.showProduct_7 ? 'showProduct_' : 'notShowProduct_'}>
                                            <li className="nav-item">
                                                <Link to="/product/accosseries" className="link">لوازم جانبی کالای دیجیتال</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/accosseries" className="link">لوازم جانبی کالای دیجیتال</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/accosseries" className="link">لوازم جانبی کالای دیجیتال</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item have-product">
                                        <span onClick={this.showProduct_8} className="nav-link">کنسول بازی
                                            <i className={!this.state.showProduct_8 ? "fa fa-plus" : "fa fa-minus"}></i>
                                        </span>
                                        <ul className={this.state.showProduct_8 ? 'showProduct_' : 'notShowProduct_'}>
                                            <li className="nav-item">
                                                <Link to="/product/game-console" className="link">کنسول بازی</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/game-console" className="link">کنسول بازی</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product/game-console" className="link">کنسول بازی</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item hr">
                                <Link to="/cart" className="nav-link">
                                    <i className="fa fa-cart-plus"></i>
                                    سبد خرید
                                    <b id="cart-length-sm">
                                        {this.convertNumber(this.props.addedItems.length)}
                                    </b>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact-us" className="nav-link">
                                    <i className="fa fa-at"></i>
                                    تماس با ما
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    <i className="fa fa-tag"></i>
                                    درباره ما
                                </Link>
                            </li>
                        </ul>
                    </nav>
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

export default connect(mapStateToProps, null)(SidebarNav)
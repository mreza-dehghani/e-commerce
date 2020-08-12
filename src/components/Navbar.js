import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavbarDtail from './NavbarDtail'


export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            showProduct: false
        }
    }

    componentDidMount() {
        this.setState({
            showProduct: false
        })
    }

    showProduct =() => {
        this.setState({
            showProduct: !this.state.showProduct
        })
    }
    render() {
        return (
            <div className="navbar-lg">
                <nav className="navbar navbar-expand-lg">
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={this.showProduct}>
                            <span className="nav-link">
                                <i className="fa fa-list-ul"></i>دسته بندی کالاها
                            </span>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                خانه
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact-us" className="nav-link">
                                تماس با ما
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                درباره ما
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={this.state.showProduct ? 'showProduct' : 'notShowProduct'}>
                    <div className="navbar-detail-container">
                        <NavbarDtail />
                    </div>
                </div>
            </div>
        )
    }
}

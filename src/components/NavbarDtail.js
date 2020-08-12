import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavbarDtail extends Component {


    render() {
        return (
            <>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/mobile" className="link">موبایل</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/tablet" className="link">تبلت و کتابخوان</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/laptop" className="link">لپ تاپ</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/camera" className="link">دوربین</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/computer-part" className="link">کامپیوتر و تجهیزات جانبی</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/office-machine" className="link">ماشین های اداری</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/accosseries" className="link">لوازم جانبی کالای دیجیتال</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/game-console" className="link">کنسول بازی</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                    <li>
                        <Link to="/" className="link">محصول</Link>
                    </li>
                </ul>
            </>
        )
    }
}

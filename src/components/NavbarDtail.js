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
                        <Link to="/product/mobile" className="link">موبایل1</Link>
                    </li>
                    <li>
                        <Link to="/product/mobile" className="link">موبایل2</Link>
                    </li>
                    <li>
                        <Link to="/product/mobile" className="link">موبایل3</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/tablet" className="link">تبلت و کتابخوان</Link>
                    </li>
                    <li>
                        <Link to="/product/tablet" className="link">تبلت و کتابخوان1</Link>
                    </li>
                    <li>
                        <Link to="/product/tablet" className="link">تبلت و کتابخوان2</Link>
                    </li>
                    <li>
                        <Link to="/product/tablet" className="link">تبلت و کتابخوان3</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/laptop" className="link">لپ تاپ</Link>
                    </li>
                    <li>
                        <Link to="/product/laptop" className="link">لپ تاپ1</Link>
                    </li>
                    <li>
                        <Link to="/product/laptop" className="link">لپ تاپ2</Link>
                    </li>
                    <li>
                        <Link to="/product/laptop" className="link">لپ تاپ3</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/camera" className="link">دوربین</Link>
                    </li>
                    <li>
                        <Link to="/product/camera" className="link">دوربین1</Link>
                    </li>
                    <li>
                        <Link to="/product/camera" className="link">دوربین2</Link>
                    </li>
                    <li>
                        <Link to="/product/camera" className="link">دوربین3</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/computer-part" className="link">کامپیوتر و تجهیزات جانبی</Link>
                    </li>
                    <li>
                        <Link to="/product/computer-part" className="link">کامپیوتر و تجهیزات جانبی1</Link>
                    </li>
                    <li>
                        <Link to="/product/computer-part" className="link">کامپیوتر و تجهیزات جانبی2</Link>
                    </li>
                    <li>
                        <Link to="/product/computer-part" className="link">کامپیوتر و تجهیزات جانبی3</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/office-machine" className="link">ماشین های اداری</Link>
                    </li>
                    <li>
                        <Link to="/product/office-machine" className="link">ماشین های اداری</Link>
                    </li>
                    <li>
                        <Link to="/product/office-machine" className="link">ماشین های اداری</Link>
                    </li>
                    <li>
                        <Link to="/product/office-machine" className="link">ماشین های اداری</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/accosseries" className="link">لوازم جانبی کالای دیجیتال</Link>
                    </li>
                    <li>
                        <Link to="/product/accosseries" className="link">1لوازم جانبی کالای دیجیتال</Link>
                    </li>
                    <li>
                        <Link to="/product/accosseries" className="link">2لوازم جانبی کالای دیجیتال</Link>
                    </li>
                    <li>
                        <Link to="/product/accosseries" className="link">3لوازم جانبی کالای دیجیتال</Link>
                    </li>
                </ul>
                <ul className="navbar-detail">
                    <li>
                        <Link to="/product/game-console" className="link">کنسول بازی</Link>
                    </li>
                    <li>
                        <Link to="/product/game-console" className="link">کنسول بازی1</Link>
                    </li>
                    <li>
                        <Link to="/product/game-console" className="link">کنسول بازی2</Link>
                    </li>
                    <li>
                        <Link to="/product/game-console" className="link">کنسول بازی3</Link>
                    </li>
                </ul>
            </>
        )
    }
}
